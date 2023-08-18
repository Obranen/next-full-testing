import {NextResponse} from 'next/server'
import {prisma} from '../../../../lib/prismaDB'

export const GET = async (req: Request) => {
  try {
    const emailValue = req.url.split('/user/')[1]
    const response = await prisma.user.findFirst({where: {email: emailValue}})
    return NextResponse.json(response)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}