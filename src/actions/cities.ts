'use server'

import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

export const getCities = async () => {
  const cities = await prisma.city.findMany({
    include: {
      billboards: true,
    },
  })

  return cities
}

export const getCityById = async (id: string) => {
  const city = await prisma.city.findUnique({
    where: { id },
    include: {
      billboards: true,
    },
  })

  return city
}

export const createCity = async (data: Prisma.CityCreateInput) => {
  const city = await prisma.city.create({
    data,
  })

  return city
}

export const updateCity = async (id: string, data: Prisma.CityUpdateInput) => {
  const city = await prisma.city.update({
    where: { id },
    data,
  })

  return city
}

export const deleteCity = async (id: string) => {
  const city = await prisma.city.delete({
    where: { id },
  })

  return city
}
