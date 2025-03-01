'use client'

import Image from 'next/image'
import React from 'react'
import Map, { Marker } from 'react-map-gl/mapbox'
import mapPinImg from '@/assets/map-pin.png'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Billboard } from '@prisma/client'
import 'mapbox-gl/dist/mapbox-gl.css'

function LEDMap({ billboards }: { billboards: Billboard[] }) {
  return (
    <div className='flex w-full h-[400px] lg:h-[600px]'>
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        initialViewState={{
          longitude: 25.393,
          latitude: 42.6194,
          zoom: 7,
        }}
        style={{
          width: '100%',
          height: '100%',
        }}
        mapStyle='mapbox://styles/mapbox/streets-v11'
      >
        {billboards.map(billboard => (
          <Marker
            key={`marker-${billboard.id}`}
            longitude={billboard.lng}
            latitude={billboard.lat}
            anchor='bottom'
            className='curosr-pointer'
          >
            <Popover>
              <PopoverTrigger>
                <Image
                  src={mapPinImg}
                  alt='LED Marker'
                  width={32}
                  height={32}
                  className='object-contain'
                />
              </PopoverTrigger>
              <PopoverContent className='rounded-[8px] p-0.5 bg-white shadow-md w-auto h-auto'>
                <Image
                  loading='lazy'
                  src={billboard.photo ?? ''}
                  alt='LED location'
                  width={320}
                  height={320}
                  objectFit='contain'
                  className='rounded-[4px]'
                />
              </PopoverContent>
            </Popover>
          </Marker>
        ))}
      </Map>
    </div>
  )
}

export default React.memo(LEDMap)
