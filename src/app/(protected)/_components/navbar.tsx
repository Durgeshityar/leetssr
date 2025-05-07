'use client'

import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import { UserButton } from '@/components/auth/user-button'

export const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="bg-secondary flex justify-between items-center p-4 rounded-sm w-full shadow-sm fixed top-0 space-x-1">
      <div className="flex gap-x-1 md:gap-x-2">
        <Button
          asChild
          className="text-sm text-muted-foreground"
          variant={pathName === '/settings' ? 'default' : 'outline'}
        >
          <Link href={'/settings'}>Settings</Link>
        </Button>

        <Button
          asChild
          className="text-sm text-muted-foreground"
          variant={pathName === '/server' ? 'default' : 'outline'}
        >
          <Link href={'/server'}>Server</Link>
        </Button>

        <Button
          asChild
          className="text-sm text-muted-foreground"
          variant={pathName === '/client' ? 'default' : 'outline'}
        >
          <Link href={'/client'}>Client</Link>
        </Button>

        <Button
          className="text-sm text-muted-foreground"
          asChild
          variant={pathName === '/admin' ? 'default' : 'outline'}
        >
          <Link href={'/admin'}>Admin</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  )
}
