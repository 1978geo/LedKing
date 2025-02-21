'use server'

export const getCities = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/cities`,
    {
      cache: 'force-cache',
    },
  )
  return await response.json()
}
