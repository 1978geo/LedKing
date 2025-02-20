import { Billboard } from './Billboard.type'
import { CityEntity } from './City.type'
import { Pages } from './Pages.type'

export interface Database {
  billboards: Billboard[]
  cities: CityEntity[]
  pages: Pages
}
