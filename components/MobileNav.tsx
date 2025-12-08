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

  // Filter visible nav items
  const visibleNavItems = headerNavLinks.filter(item => item.href && !item.hidden)

  return (
    <Sheet open={open} onOpenChange={handleOpenChange} modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {/* Animated hamburger icon */}
          <div className="relative h-5 w-5">
            <span
              className={cn(
                "absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-out",
                open ? "top-[9px] rotate-45" : "top-1"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-[9px] h-[2px] bg-current rounded-full transition-all duration-300 ease-out",
                open ? "w-0 opacity-0" : "w-3/4 opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-[2px] w-full bg-current rounded-full transition-all duration-300 ease-out",
                open ? "top-[9px] -rotate-45" : "top-[17px]"
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 flex flex-col border-r-0" showCloseButton={false}>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo section with animation */}
        <div
          className="menu-fade-in px-6 py-6 border-b border-border/40"
          style={{ animationDelay: '50ms' }}
        >
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

        {/* Navigation with staggered animation */}
        <nav className="flex-1 overflow-y-auto py-6">
          <div className="flex flex-col gap-1 px-3">
            {visibleNavItems.map((item, index) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onOpenChange={handleOpenChange}
                className="menu-item-animate flex items-center gap-4 px-4 py-3 rounded-lg text-base font-medium hover:bg-accent hover:text-accent-foreground active:scale-[0.98] transition-colors"
                style={{ animationDelay: `${100 + index * 60}ms` }}
              >
                <span className="text-muted-foreground">
                  {navIcons[item.href]}
                </span>
                <span>{item.title}</span>
              </MobileLink>
            ))}
          </div>
        </nav>

        {/* Footer with animation */}
        <div
          className="menu-fade-up border-t border-border/40 px-6 py-4"
          style={{ animationDelay: `${150 + visibleNavItems.length * 60}ms` }}
        >
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
  style?: React.CSSProperties
}

function MobileLink({ href, onOpenChange, className, children, style, ...props }: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange?.(false)}
      className={cn(className)}
      style={style}
      {...props}
    >
      {children}
    </Link>
  )
}
