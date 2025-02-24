'use server'

import { prisma } from '@/lib/prisma'

export const getCities = async () => {
  const cities = await prisma.city.findMany({
    include: {
      billboards: true,
    },
  })

  return cities
}
