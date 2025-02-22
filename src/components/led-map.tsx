'use client'

import { useEffect, useState } from 'react'
import { getBillboards } from '@/actions/billboards'
import { Billboard } from '@/types/Billboard.type'
import Map, { Marker } from 'react-map-gl/mapbox'
import 'mapbox-gl/dist/mapbox-gl.css'

const MarkerIcon = () => (
  <svg
    width='28'
    height='28'
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <defs>
      <filter
        id='dropshadow'
        x='-20%'
        y='-20%'
        width='140%'
        height='140%'
      >
        <feGaussianBlur
          in='SourceAlpha'
          stdDeviation='1.5'
        />
        <feOffset
          dx='1'
          dy='1'
          result='offsetblur'
        />
        <feComponentTransfer>
          <feFuncA
            type='linear'
            slope='0.3'
          />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in='SourceGraphic' />
        </feMerge>
      </filter>
      <linearGradient
        id='grad1'
        x1='0%'
        y1='0%'
        x2='0%'
        y2='100%'
      >
        <stop
          offset='0%'
          style={{ stopColor: '#0621c9', stopOpacity: 1 }}
        />
        <stop
          offset='100%'
          style={{ stopColor: '#b052b8', stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d='M14 2C9.13 2 5 6.13 5 11C5 16.25 14 26 14 26C14 26 23 16.25 23 11C23 6.13 18.87 2 14 2ZM14 14C11.79 14 10 12.21 10 10C10 7.79 11.79 6 14 6C16.21 6 18 7.79 18 10C18 12.21 16.21 14 14 14Z'
      fill='url(#grad1)'
      filter='url(#dropshadow)'
    />
  </svg>
)

export function LEDMap() {
  const [locations, setLocations] = useState<
    { longitude: number; latitude: number }[]
  >([])

  const getLocations = async () => {
    const billboards: Billboard[] = await getBillboards()
    const locations = billboards.map(billboard => ({
      longitude: Number(billboard.location.lng),
      latitude: Number(billboard.location.lat),
    }))

    setLocations(locations)
  }

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className='flex w-full h-[400px]'>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 25.393,
          latitude: 42.6194,
          zoom: 6,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            longitude={location.longitude}
            latitude={location.latitude}
            anchor='bottom'
          >
            <MarkerIcon />
          </Marker>
        ))}
      </Map>
    </div>
  )
}
