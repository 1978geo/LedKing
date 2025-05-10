'use client'

import { Row } from '@tanstack/react-table'
import { CopyIcon, MoreHorizontal, PenIcon, TrashIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CreateBillboardForm } from '@/components/forms/create-billboard.form'
import { useState } from 'react'
import { BillboardWithCity } from '@/types/Billboard'
import { CreateBillboardSchema } from '@/schemas/create-billboard.schema'
import { z } from 'zod'
import { useConfirmModal } from '@/components/admin/confirm-modal/context'
import { deleteBillboard } from '@/actions/billboards'

interface BillboardsDataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function BillboardsDataTableRowActions<TData>({
  row,
}: BillboardsDataTableRowActionsProps<TData>) {
  const [open, setOpen] = useState(false)
  const { confirm } = useConfirmModal()

  const handleDelete = async (id: string) => {
    const result = await confirm({
      title: 'Delete Billboard',
      text: 'Are you sure you want to delete this Billboard? This action is irreversible.',
    })

    if (result) {
      await deleteBillboard(id)
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={setOpen}
      >
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className='max-w-2xl'>
          <DialogHeader>
            <DialogTitle>Edit Billboard</DialogTitle>
            <DialogDescription>Edit billboard from your list</DialogDescription>
          </DialogHeader>
          <CreateBillboardForm
            id={(row.original as Row<BillboardWithCity>).id}
            editData={row.original as z.infer<typeof CreateBillboardSchema>}
            onSuccess={() => setOpen(false)}
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
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <PenIcon className='mr-1 size-3.5' />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CopyIcon className='mr-1 size-3.5' />
            Copy
          </DropdownMenuItem>
          <Separator className='my-1' />
          <DropdownMenuItem
            onClick={() =>
              handleDelete((row.original as Row<BillboardWithCity>).id)
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
