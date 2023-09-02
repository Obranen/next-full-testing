import {prisma} from '../../../../lib/prismaDB'
import {NextResponse} from 'next/server'
import {ISubCategoryState} from '../../../../interface/schema/subCategory'

export const POST = async (req: Request) => {
  try {
    const id = req.url.split('/subcategory/')[1]
    const {value, label}: ISubCategoryState = await req.json()
    const result = await prisma.category.update({
      where: {
        id
      },
      data: {
        subCategory: {
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