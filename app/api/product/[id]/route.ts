import {prisma} from '../../../../lib/prismaDB'
import {NextResponse} from 'next/server'
import {IProductState} from '../../../../interface/product'

export const POST = async (req: Request) => {
  try {
    const id = req.url.split('/product/')[1]
    const {imageAlt, imageSrc, titleEn, titleRu, titleUa, images, weight, descEn, descRu, descUa, currencyEn, currencyRu, currencyUa, price, quantity, stock, category, filter}: IProductState = await req.json()
    const updateAuthorAndCreateReview = await prisma.user.update({
      where: {
        id
      },
      data: {
        product: {
          create: [
            {
              imageAlt, imageSrc, titleEn, titleRu, titleUa, weight, descEn, descRu, descUa, currencyEn, currencyRu, currencyUa, price, quantity, stock, category, filter,
              images: {
                create: images
              }
            }
          ]
        }
      }
    })
    return NextResponse.json(updateAuthorAndCreateReview)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}