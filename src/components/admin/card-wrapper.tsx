'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Header } from './header'
import { Social } from './social'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  showSocial?: boolean
}

export function CardWrapper({
  children,
  headerLabel,
  showSocial = false,
}: CardWrapperProps) {
  return (
    <Card className='w-[400px] shadow-md'>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
    </Card>
  )
}
