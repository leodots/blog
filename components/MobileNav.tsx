'use client'

import { headerNavLinks } from '@/data/navLinks'
import { cn } from '@/lib/utils'
import { useState, useCallback, useMemo } from 'react'
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

  // Memoize filtered nav items to prevent recalculation on every render
  const visibleNavItems = useMemo(
    () => headerNavLinks.filter(item => item.href && !item.hidden),
    []
  )

  return (
    <Sheet open={open} onOpenChange={handleOpenChange} modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {/* Animated hamburger icon - using transform for GPU acceleration */}
          <div className="relative flex h-5 w-5 flex-col items-center justify-center">
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                open ? "translate-y-0 rotate-45" : "-translate-y-[6px]"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ease-out",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ease-out",
                open ? "translate-y-0 -rotate-45" : "translate-y-[6px]"
              )}
            />
          </div>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col border-r-0 pr-0" showCloseButton={false}>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

        {/* Logo section with animation */}
        <div
          className="menu-fade-in border-b border-border/40 px-6 py-6"
          style={{ animationDelay: '50ms' }}
        >
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md"
              priority
            />
            <span className="text-xl font-bold">Leo.</span>
          </div>
        </div>

        {/* Navigation with staggered animation */}
        <nav className="flex-1 overflow-y-auto py-6" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1 px-3" role="list">
            {visibleNavItems.map((item, index) => (
              <li key={item.href}>
                <MobileLink
                  href={item.href}
                  onOpenChange={handleOpenChange}
                  className="menu-item-animate flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground active:scale-[0.98]"
                  style={{ animationDelay: `${100 + index * 60}ms` }}
                >
                  <span className="text-muted-foreground" aria-hidden="true">
                    {navIcons[item.href]}
                  </span>
                  <span>{item.title}</span>
                </MobileLink>
              </li>
            ))}
          </ul>
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
  const handleClick = useCallback(() => {
    onOpenChange?.(false)
  }, [onOpenChange])

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(className)}
      style={style}
      {...props}
    >
      {children}
    </Link>
  )
}
