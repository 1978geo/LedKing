'use server'

import { prisma } from '@/lib/prisma'

export const getBillboards = async () => {
  const billboards = await prisma.billboard.findMany({
    include: {
      city: true,
    },
  })

  return billboards
}

export const getBillboardsByCity = async (city: string) => {
  const billboards = await prisma.billboard.findMany({
    where: {
      city: {
        name: city,
      },
    },
    include: {
      city: true,
    },
  })

  return billboards
}
