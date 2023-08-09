import {NextResponse} from 'next/server'
import {prisma} from '../../../../prisma/db'

export const GET = async (req: Request) => {
  try {
    const email = req.url.split('/users/')[1]
    const reviews = await prisma.user.findFirst({
        where: {
          email
        },
        select: {
          email: true,
          name: true,
          password: true
        }
      }
    )
    return NextResponse.json(reviews)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}