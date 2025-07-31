import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div>
      <header className="border-b px-4 py-3">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-bold"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="drop-shadow-md"
              priority
            />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/blog"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Blog
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/projects"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Projects
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/resume"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        Resume
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground"
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <ModeToggle />
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent title="Menu" side="left">
                  <SheetTitle className="sr-only">Menu</SheetTitle>
                  <nav className="flex flex-col gap-4 mt-6">
                    <Link href="/home">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/resume">Resume</Link>
                    <Link href="/about">About</Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
