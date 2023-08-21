import nodemailer from 'nodemailer'

export const contactTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_IMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
})