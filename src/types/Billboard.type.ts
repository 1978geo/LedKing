export interface City {
  id: string
  name: string
  location: Location
}

export interface Address {
  city: City
  street: string
}

export interface Location {
  latitude: number
  longitude: number
}

export interface ScreenSize {
  width: number
  height: number
}

export interface Billboard {
  id: string
  address: Address
  photo: string
  billboards: number
  screenType: string
  screenSize: ScreenSize
}
