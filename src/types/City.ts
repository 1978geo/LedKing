import { Billboard } from './Billboard'

export interface City {
  id: string
  name: string
  popularChoice: boolean
  createdAt: Date
  updatedAt: Date
  billboards?: Billboard[]
}

export type CityWithBillboards = City & { billboards: Billboard[] }
