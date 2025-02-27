'use server'

import { prisma } from '@/lib/prisma'
import { CityWithBillboards } from '@/types/City'
import { Prisma } from '@prisma/client'

export const getCities = async () => {
  const cities = await prisma.city.findMany({
    include: {
      billboards: true,
    },
  })

  return cities as CityWithBillboards[]
}

export const getCityById = async (id: string) => {
  const city = await prisma.city.findUnique({
    where: { id },
    include: {
      billboards: true,
    },
  })

  return city as CityWithBillboards
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
    include: {
      billboards: true,
    },
    data,
  })

  return city as CityWithBillboards
}

export const deleteCity = async (id: string) => {
  const city = await prisma.city.delete({
    where: { id },
  })

  return city
}
