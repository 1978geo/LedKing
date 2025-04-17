'use client'

import { Row } from '@tanstack/react-table'
import {
  CirclePlusIcon,
  CopyIcon,
  MoreHorizontal,
  PenIcon,
  TrashIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '../ui/separator'

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <MoreHorizontal />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-[160px]'
      >
        <DropdownMenuItem>
          <CirclePlusIcon className='mr-1 size-3.5' />
          Add billboard
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PenIcon className='mr-1 size-3.5' />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CopyIcon className='mr-1 size-3.5' />
          Copy
        </DropdownMenuItem>
        <Separator className='my-1' />
        <DropdownMenuItem onClick={() => console.log(row.original)}>
          <TrashIcon className='mr-1 size-3.5' />
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
