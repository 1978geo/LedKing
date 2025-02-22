import { City, Size, Location } from './Common.type'

export interface Billboard {
  id: string
  city: City
  address: string
  location: Location
  photo: string
  typeLED: string
  countScreens: number
  size: Size
}
