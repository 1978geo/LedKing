import { CityList, getCities } from '@/actions/cities'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

const useCities = () => {
  return useQuery<CityList[]>({
    queryKey: ['cities'],
    queryFn: getCities,
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })
}

export default useCities
