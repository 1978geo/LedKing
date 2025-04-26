'use client'

import { ColumnDef } from '@tanstack/react-table'

import { format } from 'date-fns'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { BillboardWithCity } from '@/types/Billboard'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { BillboardsDataTableRowActions } from './billboards-data-table-row-actions'

export const columns: ColumnDef<BillboardWithCity>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'city.name',
    accessorFn: row => row.city.name,
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='City'
      />
    ),
    cell: ({ row }) => <div>{row.getValue('city.name')}</div>,
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Address'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='break-all'>
          {row.getValue<string>('address').replace(/\\/g, '')}
        </div>
      )
    },
  },
  {
    accessorKey: 'countScreens',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='# of Screens'
      />
    ),
    cell: ({ row }) => {
      return <div className='text-center'>{row.getValue('countScreens')}</div>
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Type Scrren'
      />
    ),
    cell: ({ row }) => {
      return <div>{row.getValue('type')}</div>
    },
  },
  {
    accessorKey: 'width',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Scrren size'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='text-nowrap'>
          {row.original.width}cm x {row.original.height}cm
        </div>
      )
    },
  },
  {
    accessorKey: 'lat',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Location'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='text-nowrap'>
          {row.original.lat}, {row.original.lng}
        </div>
      )
    },
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Updated Date'
      />
    ),
    cell: ({ row }) => (
      <div>{format(row.getValue('updatedAt'), 'dd/MM/yyyy')}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'photo',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Photo'
      />
    ),
    cell: ({ row }) => {
      return (
        <Dialog>
          <DialogTrigger>
            <ImageIcon className='size-5 cursor-pointer' />
          </DialogTrigger>
          <DialogContent className='w-auto h-auto max-w-[800px]'>
            <DialogHeader>
              <DialogTitle>{row.original.city.name}</DialogTitle>
              <DialogDescription>{row.original.address}</DialogDescription>
            </DialogHeader>
            <div className='flex items-center justify-center'>
              <Image
                src={row.original.photo}
                alt={row.original.city.name}
                width={900}
                height={900}
                className='h-full rounded-md object-contain'
              />
            </div>
          </DialogContent>
        </Dialog>
      )
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <BillboardsDataTableRowActions row={row} />,
  },
]
