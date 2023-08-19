import {extname, join} from 'path'
import {mkdir, stat, writeFile} from 'fs/promises'
import * as dateFn from 'date-fns'
import {NextRequest, NextResponse} from 'next/server'

const sanitizeFilename = (filename: string): string => {
  return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, '_')
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const files = formData.getAll('file') as Blob[] | null

  if (!files) {
    return NextResponse.json({error: 'File blob is required.'}, {status: 400})
  }

  try {
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      //место сохранения file на localhost
      const pathDist: string = join(process.cwd(), '/public/images')
      //создаем дату
      const relativeUploadDir = `${dateFn.format(Date.now(), 'dd-MM-Y')}`
      //совмещаем путь хранения и дату в один путь (/public/images/19-08-2023)
      const uploadDir = join(pathDist, relativeUploadDir)

      try {
        await stat(uploadDir)
      } catch (e: any) {
        if (e.code === 'ENOENT') {
          await mkdir(uploadDir, {recursive: true})
        } else {
          console.error('Error while trying to create directory when uploading a file\n', e)
          return NextResponse.json({error: 'Something went wrong.'}, {status: 500})
        }
      }

      const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`
      //возвращает раширение файла (.jpeg)
      const fileExtension = extname(file.name)
      const originalFilename = file.name.replace(/\.[^/.]+$/, '')
      //очищает имя файла
      const sanitizedFilename = sanitizeFilename(originalFilename)
      //Создает новое имя файла
      const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`
      await writeFile(`${uploadDir}/${filename}`, buffer)
    }
    return NextResponse.json({done: 'ok'}, {status: 200})
  } catch (e) {
    return NextResponse.json({error: 'Something went wrong.'}, {status: 500})
  }
}