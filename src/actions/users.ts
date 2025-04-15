import { prisma } from '@/lib/prisma'

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  } catch (error) {
    console.error('Error fetching user by email:', error)
    return null
  }
}

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  } catch (error) {
    console.error('Error fetching user by ID:', error)
    return null
  }
}
