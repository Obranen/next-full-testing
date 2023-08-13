import {AuthOptions, User} from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import {createUser, fetchUser} from '../async/user'

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
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null

        const currentUser = await fetchUser(credentials.email)

        if (currentUser && currentUser.password === credentials.password) {
          const {password, ...userWithoutPass} = currentUser

          return userWithoutPass as User
        }

        return null
      }
    })
  ],
  callbacks: {
    async session({session}) {
      if (session.user?.email) {
        const sessionUser = await fetchUser(session.user?.email)
        // @ts-ignore
        session.user.id = sessionUser.id
      }
      return session
    },
    async signIn({profile}) {
      try {
        if (profile?.email) {
          const userExist = await fetchUser(profile.email)
          if (!userExist) {
            await createUser({
              // @ts-ignore
              name: profile.name,
              email: profile.email,
              password: '123'
            })
          }
        }
        return true
      } catch (e) {
        console.log(e)
        return false
      }
    }
  }
}