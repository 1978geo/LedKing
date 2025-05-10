'use client'

import { DataTable } from '@/components/data-table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { BillboardWithCity } from '@/types/Billboard'
import { useState } from 'react'
import { columns } from './columns'
import { CreateBillboardForm } from '@/components/forms/create-billboard.form'

interface BillboardsTableProps {
  data: BillboardWithCity[]
}

export function BillboardsTable({ data }: BillboardsTableProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle>Create billboard</DialogTitle>
            <DialogDescription>
              Add new billboard to your list
            </DialogDescription>
          </DialogHeader>
          <CreateBillboardForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
      <div className='p-4 bg-white rounded-xl border border-border shadow-sm'>
        <DataTable
          data={data}
          columns={columns}
          searchKey='city.name'
          onCreate={() => setOpen(true)}
        />
      </div>
    </>
  )
}
