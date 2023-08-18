import {extname, join} from 'path'
import {mkdir, stat, writeFile} from 'fs/promises'
import * as dateFn from 'date-fns'
import {NextRequest, NextResponse} from 'next/server'

function sanitizeFilename(filename: string): string {
  return filename.replace(/[^a-zA-Z0-9_\u0600-\u06FF.]/g, '_')
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get('file') as Blob | null

  if (!file) {
    return NextResponse.json(
      {error: 'File blob is required.'},
      {status: 400}
    )
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const pathDist: string = join(process.cwd(), '/public/images')
  const relativeUploadDir = `${dateFn.format(Date.now(), 'dd-MM-Y')}`
  const uploadDir = join(pathDist, relativeUploadDir)

  try {
    await stat(uploadDir)
  } catch (e: any) {
    if (e.code === 'ENOENT') {
      await mkdir(uploadDir, {recursive: true})
    } else {
      console.error(
        'Error while trying to create directory when uploading a file\n',
        e
      );
      return NextResponse.json(
        {error: 'Something went wrong.'},
        {status: 500}
      )

    }
  }

  try {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`
    //возвращает раширение файла (.jpeg)
    const fileExtension = extname(file.name)
    const originalFilename = file.name.replace(/\.[^/.]+$/, '')
    //очищает имя файла
    const sanitizedFilename = sanitizeFilename(originalFilename)
    //Создает новое имя файла
    const filename = `${sanitizedFilename}_${uniqueSuffix}${fileExtension}`
    await writeFile(`${uploadDir}/${filename}`, buffer)
    const finalFilePath = 'http://localhost:3000/images/' + `${relativeUploadDir}/${filename}`;
    return NextResponse.json({done: 'ok', filename: filename, httpfilepath: finalFilePath}, {status: 200})

  } catch (e) {
    console.error('Error while trying to upload a file\n', e)
    return NextResponse.json(
      {error: 'Something went wrong.'},
      {status: 500}
    )
  }
}