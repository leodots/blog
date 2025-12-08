'use client'

import { headerNavLinks } from '@/data/navLinks'
import { cn } from '@/lib/utils'
import { useState, useCallback } from 'react'
import Link, { LinkProps } from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Image from 'next/image'
import { Home, Briefcase, User, FileText } from 'lucide-react'

const navIcons: Record<string, React.ReactNode> = {
  '/': <Home className="h-5 w-5" />,
  '/projects': <Briefcase className="h-5 w-5" />,
  '/about': <User className="h-5 w-5" />,
  '/resume': <FileText className="h-5 w-5" />,
}

const MobileNav = () => {
  const [open, setOpen] = useState(false)
  const handleOpenChange = useCallback((isOpen: boolean) => {
    setOpen(isOpen)
  }, [])

  return (
    <Sheet open={open} onOpenChange={handleOpenChange} modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 flex flex-col">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="px-6 py-6 border-b border-border/40">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="font-bold text-xl">Leo.</span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="flex flex-col gap-1 px-3">
            {headerNavLinks.map(
              (item) =>
                item.href &&
                !item.hidden && (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onOpenChange={handleOpenChange}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
                  >
                    <span className="text-muted-foreground transition-colors group-hover:text-accent-foreground">
                      {navIcons[item.href]}
                    </span>
                    <span>{item.title}</span>
                  </MobileLink>
                )
            )}
          </div>
        </nav>
        <div className="border-t border-border/40 px-6 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Leonardo Torres
          </p>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({ href, onOpenChange, className, children, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  )
}
