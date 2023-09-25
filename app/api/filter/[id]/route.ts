import {prisma} from '../../../../lib/prismaDB'
import {NextResponse} from 'next/server'
import {IFilterState} from '../../../../interface/filter'

export const POST = async (req: Request) => {
  try {
    const id = req.url.split('/filter/')[1]
    const {value, label}: IFilterState = await req.json()
    const result = await prisma.category.update({
      where: {
        id
      },
      data: {
        filter: {
          create: [{
            value,
            label
          }]
        }
      }
    })
    return NextResponse.json(result)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}