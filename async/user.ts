import {IUserState} from '../interface/schema/user'

export const fetchUser = async (email: string) => {
  const response = await fetch(`http://localhost:3000/api/user/${email}`)
  return response.json()
}

export const createUser = async (data: IUserState) => {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    body: JSON.stringify({name: data.name, email: data.email, password: data.password})
  })
  return response.json()
}
