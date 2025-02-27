import { Billboard } from './Billboard'

export interface City {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  billboards: Billboard[]
}

export type CityWithBillboards = City & { billboards: Billboard[] }
