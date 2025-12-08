"use client";

import { headerNavLinks } from "@/data/navLinks";
import Link from "next/link";
import MobileNav from "./MobileNav";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const changeBackground = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", changeBackground, { passive: true });
    return () => document.removeEventListener("scroll", changeBackground);
  }, [changeBackground]);

  return (
    <div className="fixed top-4 left-0 right-0 z-40 px-8">
      <header
        className={cn(
          "mx-auto h-[60px] w-full max-w-[768px] rounded-3xl border border-border bg-card shadow-sm saturate-100 backdrop-blur-[4px] transition-all duration-200 header-lg:max-w-[1168px]",
          isScrolled && "border-transparent bg-background/80"
        )}
      >
        <div className="flex h-[60px] w-full items-center justify-between px-4 header-md:px-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="drop-shadow-md"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center md:space-x-3">
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {headerNavLinks.map(
                  (link) =>
                    !link.hidden && (
                      <NavigationMenuItem key={link.href}>
                        <NavigationMenuLink
                          asChild
                          active={
                            (pathname.startsWith(link.href) &&
                              link.href !== "/") ||
                            pathname === link.href
                          }
                        >
                          <Link
                            href={link.href}
                            className={cn(
                              navigationMenuTriggerStyle(),
                              (pathname.startsWith(link.href) &&
                                link.href !== "/") ||
                                pathname === link.href
                                ? "text-foreground"
                                : "text-foreground/60"
                            )}
                          >
                            {link.title}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeSwitcher />
            <MobileNav />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
