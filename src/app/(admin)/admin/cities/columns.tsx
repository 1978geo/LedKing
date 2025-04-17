'use client'

import { ColumnDef } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { CityWithBillboards } from '@/types/City'
import { DataTableColumnHeader } from '@/components/data-table/data-table-column-header'
import { DataTableRowActions } from '@/components/data-table/data-table-row-actions'
import { format } from 'date-fns'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const columns: ColumnDef<CityWithBillboards>[] = [
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
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='City ID'
      />
    ),
    cell: ({ row }) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className='w-[160px] text-ellipsis overflow-hidden'>
              {row.getValue('id')}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{row.getValue('id')}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='City Name'
      />
    ),
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'billboards',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='# of Billboards'
      />
    ),
    cell: ({ row }) => <div>{row.original.billboards?.length}</div>,
  },
  {
    accessorKey: 'popularChoice',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Popular Choice'
      />
    ),
    cell: ({ row }) => {
      return (
        <div className='flex space-x-2'>
          <Badge
            variant={row.getValue('popularChoice') ? 'default' : 'outline'}
          >
            {row.getValue('popularChoice') ? 'popular' : 'default'}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Created Date'
      />
    ),
    cell: ({ row }) => (
      <div>{format(row.getValue('createdAt'), 'dd/MM/yyyy')}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
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
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
