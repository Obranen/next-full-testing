import {IContact} from '../interface/contact'

export const SendContactForm = async (data: IContact) => {
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    body: JSON.stringify({name: data.name, email: data.email, subject: data.subject, message: data.message})
  })
  return response.json()
}