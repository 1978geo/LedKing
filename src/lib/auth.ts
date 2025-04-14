import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const { auth, handlers, signIn } = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async credentials => {
        const email = 'test@mail.com'
        const password = 'testPass123'

        if (credentials.email === email && credentials.password === password) {
          return { email, password }
        } else {
          throw new Error('Invalid credentials')
        }
      },
    }),
  ],
})
