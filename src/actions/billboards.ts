'use server'

import { prisma } from '@/lib/prisma'
import { BillboardWithCity } from '@/types/Billboard'
import { Prisma } from '@prisma/client'
import { omit } from 'lodash'
import { getCityById } from './cities'
import { revalidatePath } from 'next/cache'

export const getBillboards = async () => {
  const billboards = await prisma.billboard.findMany({
    include: {
      city: true,
    },
  })

  return billboards as BillboardWithCity[]
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

  return billboards as BillboardWithCity[]
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

export const createBillboard = async (
  data: Omit<Prisma.BillboardCreateInput, 'city'> & { cityId: string },
) => {
  const city = await getCityById(data.cityId)

  if (!city) {
    throw new Error('City not found')
  }

  const submitData = omit(data, ['cityId'])
  const billboardData: Prisma.BillboardCreateInput = {
    ...submitData,
    city: {
      connect: {
        id: data.cityId,
      },
    },
  }

  const billboard = await prisma.billboard.create({
    data: billboardData,
  })
  revalidatePath('/admin/billboards')
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

  revalidatePath('/admin/billboards')
  return billboard
}

export const deleteBillboard = async (id: string) => {
  const billboard = await prisma.billboard.delete({
    where: {
      id,
    },
  })
  revalidatePath('/admin/billboards')
  return billboard
}
