import { ReactNode } from 'react'

export const DrawerCSSProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div vaul-drawer-wrapper=''>
      <div className='relative flex min-h-screen flex-col bg-transparent overflow-hidden'>
        {children}
      </div>
    </div>
  )
}
