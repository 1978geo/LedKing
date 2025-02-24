'use server'

import { prisma } from '@/lib/prisma'
import { Prisma } from '@prisma/client'

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

export const getBillboardById = async (id: string) => {
  const billboard = await prisma.billboard.findUnique({
    where: {
      id,
    },
    include: {
      city: true,
    },
  })

  return billboard
}

export const createBillboard = async (data: Prisma.BillboardCreateInput) => {
  const billboard = await prisma.billboard.create({
    data,
  })

  return billboard
}

export const updateBillboard = async (
  id: string,
  data: Prisma.BillboardUpdateInput,
) => {
  const billboard = await prisma.billboard.update({
    where: {
      id,
    },
    data,
  })

  return billboard
}

export const deleteBillboard = async (id: string) => {
  const billboard = await prisma.billboard.delete({
    where: {
      id,
    },
  })

  return billboard
}
