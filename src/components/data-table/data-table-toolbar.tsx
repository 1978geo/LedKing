'use client'

import { Table } from '@tanstack/react-table'
import { PlusCircleIcon, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { DataTableViewOptions } from './data-table-view-options'

// import { priorities, statuses } from '../data/data'
import { DataTableFacetedFilter } from './data-table-faceted-filter'

export interface FacetedFilter {
  key: string
  options: FacetedOption[]
  title: string
}

export interface FacetedOption {
  value: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  facetedFilters?: FacetedFilter[]
  searchKey?: string
  onCreate?: () => void
}

export function DataTableToolbar<TData>({
  table,
  facetedFilters,
  searchKey,
  onCreate,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className='flex items-center justify-between'>
      <div className='flex flex-1 items-center space-x-2'>
        {searchKey && (
          <Input
            placeholder='Filter cities...'
            value={
              (table.getColumn(searchKey)?.getFilterValue() as string) ?? ''
            }
            onChange={event =>
              table.getColumn(searchKey)?.setFilterValue(event.target.value)
            }
            className='h-8 w-[150px] lg:w-[250px] bg-white shadow-xs'
          />
        )}
        {facetedFilters?.map(({ key, options, title }) => {
          const column = table.getColumn(key)
          return column ? (
            <DataTableFacetedFilter
              key={`${key}-${title.toLowerCase().split(' ').join('-')}`}
              column={column}
              title={title}
              options={options}
            />
          ) : null
        })}

        {isFiltered && (
          <Button
            variant='ghost'
            onClick={() => table.resetColumnFilters()}
            className='h-8 px-2 lg:px-3'
          >
            Reset
            <X />
          </Button>
        )}
      </div>

      <DataTableViewOptions table={table} />

      {onCreate && (
        <Button
          variant='adminDefault'
          size='sm'
          className='ml-3 cursor-pointer'
          onClick={onCreate}
        >
          <PlusCircleIcon className='size-5' /> New
        </Button>
      )}
    </div>
  )
}
