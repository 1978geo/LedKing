import {
  CalendarDaysIcon,
  InboxIcon,
  LayoutGridIcon,
  MapPinnedIcon,
  MonitorPlayIcon,
} from 'lucide-react'

export const navlinks = [
  {
    id: 'home',
    href: '/',
    label: 'Начало',
  },
  {
    id: 'campaign',
    href: '/campaign',
    label: 'LED Кампания',
  },
  {
    id: 'purchase',
    href: '/purchase',
    label: 'Покупка на LED',
  },
  {
    id: 'rent',
    href: '/rent',
    label: 'Наем на LED',
  },
  {
    id: 'maintenance',
    href: '/maintenance',
    label: 'Поддръжка на LED',
  },
]

export const admingMenuItems = [
  {
    title: 'Dashboard',
    href: '/admin',
    icon: LayoutGridIcon,
  },
  {
    title: 'Cities',
    href: '/admin/cities',
    icon: MapPinnedIcon,
  },
  {
    title: 'Billboards',
    href: '/admin/billboards',
    icon: MonitorPlayIcon,
  },
  {
    title: 'Inbox',
    href: '/admin/inbox',
    icon: InboxIcon,
  },
  {
    title: 'Calendar',
    href: '/admin/calendar',
    icon: CalendarDaysIcon,
  },
]

export const settingsMenuItems = [
  {
    title: 'My profile',
    href: '/admin/settings',
  },
  {
    title: 'Users',
    href: '/admin/settings/users',
  },
]
