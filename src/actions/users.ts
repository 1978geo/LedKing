'use server'

import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { RegisterSchemaType } from '@/schemas/register.schema'
import { revalidatePath } from 'next/cache'

export async function getAllUsers() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      role: true,
    },
  })

  return users
}

export async function getUserByEmail(email: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  return user
}

export async function getUserById(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  })

  return user
}

export async function updateUser(
  id: string,
  data: Omit<RegisterSchemaType, 'password'>,
) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  })

  return user
}

export async function updatePassword(id: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password: hashedPassword,
    },
  })

  return user
}

export async function updateUserPhoto(id: string, image: string) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      image,
    },
  })

  revalidatePath('/admin/profile')
  return user
}

export async function deleteUser(id: string, currentUserId: string) {
  const admin = await getUserById(currentUserId)

  if (!admin) {
    throw new Error('User not found.')
  }

  if (admin.role === 'USER') {
    throw new Error(
      "You don't have the right permissions to perform this action.",
    )
  }

  const user = await prisma.user.delete({
    where: {
      id,
    },
  })

  return user
}
