import { City } from './City'

export interface Billboard {
  id: string
  address: string
  lat: number
  lng: number
  type: string
  countScreens: number
  width: number
  height: number
  photo: string
  city: City
  cityId: string
  createdAt: Date
  updatedAt: Date
}
