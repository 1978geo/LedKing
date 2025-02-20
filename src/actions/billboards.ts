'use server'

export const getBillboards = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/billboards`, {
    cache: 'force-cache',
  })
  return await response.json()
}

export const getBillboardsByCity = async (city: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/api/billboards?cityId=${city}`,
    {
      cache: 'force-cache',
    },
  )
  return await response.json()
}
