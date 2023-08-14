import {prisma} from '../../../../prisma/db'
import {NextResponse} from 'next/server'
import {IProduct} from '../../../../interface/product'

export const POST = async (req: Request) => {
  try {
    const id = req.url.split('/product/')[1]
    const {imageAlt, imageSrc, title, images, weight, desc, price, quantity, stock}: IProduct = await req.json()
    const updateAuthorAndCreateReview = await prisma.user.update({
      where: {
        id
      },
      data: {
        product: {
          create: [
            {
              imageAlt, imageSrc, title, weight, desc, price, quantity, stock,
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