'use server'

export const getBillboards = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/billboards`, {
    cache: 'force-cache',
  })
  if (!res.ok) throw new Error('Failed to fetch cities')
  return await res.json()
}

export const getBillboardsByCity = async (city: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/billboards?cityId=${city}`,
    {
      cache: 'force-cache',
    },
  )
  if (!res.ok) throw new Error('Failed to fetch cities')
  return await res.json()
}
