'use client'

import { PlusIcon } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { CreateCityForm } from '../forms/create-city.form'

export function CreateCityDrawer() {
  const [open, setOpen] = useState(false)

  return (
    <Drawer
      direction='bottom'
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>
        <Button size='icon'>
          <PlusIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className='h-[42vh]'>
        <DrawerHeader>
          <DrawerTitle>Add New City</DrawerTitle>
          <DrawerDescription>
            New city will be added to your list
          </DrawerDescription>
        </DrawerHeader>
        <div className='h-full p-6'>
          <CreateCityForm onSubmit={() => setOpen(false)} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
