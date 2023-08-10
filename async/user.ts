import {IUser} from '../interface/user'

export const createUser = async (data: IUser) => {
  const response = await fetch(`http://localhost:3000/api/registration`, {
    method: 'POST',
    body: JSON.stringify({name: data.name, email: data.email, password: data.password})
  })
  return response.json()
}

export const checkEmailUser = async (email: string) => {
  const response = await fetch(`http://localhost:3000/api/registration/${email}`, {
    method: 'GET'
  })
  return response.json()
}