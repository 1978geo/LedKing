'use server'

export const getCities = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/cities`, {
    cache: 'force-cache',
  })
  return await response.json()
}
