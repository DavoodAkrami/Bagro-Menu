import type { ReactNode } from 'react'

type IconName = 'arrow' | 'down' | 'plus' | 'search' | 'close' | 'pin' | 'phone' | 'leaf' | 'menu'
const icons: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 19 19 5M5 5h14v14" /></>,
  down: <><path d="M12 3v18M5 14l7 7 7-7" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></>,
  close: <><path d="m6 6 12 12M6 18 18 6" /></>,
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  phone: <><path d="m8 3-4 2c-1 8 7 16 15 15l2-4-5-3-2 3c-3-1-5-3-6-6l3-2-3-5Z" /></>,
  leaf: <><path d="M20 3C9 3 2 8 5 16c8 5 15-2 15-13ZM4 21l12-12" /></>,
  menu: <><path d="M4 8h16M4 16h16" /></>,
}
const Icon = ({ name, className = '' }: { name: IconName; className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[name]}</svg>

export default Icon
