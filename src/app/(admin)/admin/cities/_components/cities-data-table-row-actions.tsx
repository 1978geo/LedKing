'use client'

import { Row } from '@tanstack/react-table'
import {
  CirclePlusIcon,
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
import { Separator } from '@/components/ui/separator'
import { useConfirmModal } from '@/components/admin/confirm-modal/context'
import { CityWithBillboards } from '@/types/City'
import { deleteCity } from '@/actions/cities'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useState } from 'react'
import { CreateCityForm } from '@/components/forms/create-city.form'

interface CitiesDataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function CitiesDataTableRowActions<TData>({
  row,
}: CitiesDataTableRowActionsProps<TData>) {
  const [open, setOpen] = useState(false)
  const { confirm } = useConfirmModal()

  const handleDelete = async (id: string) => {
    const result = await confirm({
      title: 'Delete City',
      text: 'Are you sure you want to delete this city? This action is irreversible.',
    })

    if (result) {
      await deleteCity(id)
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit city</DialogTitle>
            <DialogDescription>Edit city in your list</DialogDescription>
          </DialogHeader>
          <CreateCityForm
            id={(row.original as Row<CityWithBillboards>).id}
            editData={{
              name: row.getValue('name'),
              popularChoice: row.getValue('popularChoice'),
            }}
            onSubmit={() => setOpen(false)}
          />
        </DialogContent>
      </Dialog>

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
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <PenIcon className='mr-1 size-3.5' />
            Edit
          </DropdownMenuItem>
          <Separator className='my-1' />
          <DropdownMenuItem
            onClick={() =>
              handleDelete((row.original as Row<CityWithBillboards>).id)
            }
          >
            <TrashIcon className='mr-1 size-3.5' />
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
