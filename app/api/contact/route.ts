import {NextResponse} from 'next/server'
import {contactTransporter} from '../../../lib/nodemailer'

//Пароль деаёться в личном кабинете gmail => безопасность => двухэтапная аунтефикация => даём имя и генерируем пароль
export const POST = async (req: Request) => {
  try {
    const {name, email, subject, message} = await req.json()
    const mail = await contactTransporter.sendMail({
      from: process.env.NODEMAILER_IMAIL,
      to: process.env.NODEMAILER_IMAIL,
      subject,
      html:
        `<p>От пользователя ${name}, Email: ${email}</p>
         <p>${subject}:</p>
         <p>${message}</p>`
    })
    return NextResponse.json(mail)
  } catch (e) {
    return NextResponse.json({message: 'Error...', e}, {status: 500})
  }
}