import {join} from 'path'
import {mkdir, stat, writeFile} from 'fs/promises'
import {NextRequest, NextResponse} from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const files = formData.getAll('file') as Blob[] | null

  if (!files) {
    return NextResponse.json({error: 'File blob is required.'}, {status: 400})
  }

  try {
    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const pathDist: string = join(process.cwd(), '/public/images/product')

      try {
        await stat(pathDist)
      } catch (e: any) {
        if (e.code === 'ENOENT') {
          await mkdir(pathDist, {recursive: true})
        } else {
          console.error('Error while trying to create directory when uploading a file\n', e)
          return NextResponse.json({error: 'Something went wrong.'}, {status: 500})
        }
      }
      await writeFile(`${pathDist}/${file.name}`, buffer)
    }
    return NextResponse.json({done: 'ok'}, {status: 200})
  } catch (e) {
    return NextResponse.json({error: 'Something went wrong.'}, {status: 500})
  }
}