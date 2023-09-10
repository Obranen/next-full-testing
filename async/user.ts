import {IUserState} from '../interface/user'

export const fetchUser = async (email: string) => {
  const response = await fetch(`${process.env.FETCH_URL}/api/user/${email}`)
  return response.json()
}

export const createUser = async (data: IUserState) => {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    body: JSON.stringify({name: data.name, email: data.email, password: data.password})
  })
  return response.json()
}
