import {AuthOptions, User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

const fetchUser = async (data: {email: string}) => {
  const response = await fetch(`http://localhost:3000/api/users/${data.email}`)
  return response.json()
}

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    }),
    Credentials({
      credentials: {
        email: {label: 'email', type: 'email', required: true},
        password: {label: 'password', type: 'password', required: true}
      },
      async authorize (credentials) {
        if (!credentials?.email || !credentials.password) return null

        const currentUser = await fetchUser({email: credentials.email})

        if (currentUser && currentUser.password === credentials.password) {
          const {password, ...userWithoutPass} = currentUser

          return userWithoutPass as User
        }

        return null
      }
    })
  ]
}