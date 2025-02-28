import { getBillboards } from '@/actions/billboards'
import { AppHeader } from '@/components/admin/app-header'
import { AppSidebar } from '@/components/admin/app-sidebar'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'

export default async function BillbaordsPage() {
  const billboards = await getBillboards()

  console.log(billboards)

  return (
    <div>
      <AppSidebar />
      <AppHeader className='flex items-center justify-between p-0 px-6 py-4 bg-white/60 backdrop-blur-md'>
        <Button size='icon'>
          <PlusIcon />
        </Button>
      </AppHeader>
    </div>
  )
}
