'use client'

import { useState } from 'react'
import { DataTable } from '@/components/data-table'
import { columns } from './columns'
import { CityWithBillboards } from '@/types/City'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CreateCityForm } from '@/components/forms/create-city.form'

interface CitiesTableProps {
  data: CityWithBillboards[]
}

export function CitiesTable({ data }: CitiesTableProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Create city</DialogTitle>
            <DialogDescription>Add new city to your list</DialogDescription>
          </DialogHeader>
          <CreateCityForm onSubmit={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <div className='p-4 bg-white rounded-xl border border-border'>
        <DataTable
          data={data}
          columns={columns}
          searchKey='name'
          onCreate={() => setOpen(true)}
        />
      </div>
    </>
  )
}
