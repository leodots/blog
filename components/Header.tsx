import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 border-b">
        {/* Logo + nome */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-xl font-bold"
        >
          {/* Aqui você pode colocar um ícone futuramente */}
          <span>leodots</span>
        </Link>

        {/* Navegação */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent title="Menu" side="left">
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

              <NavigationMenuItem>
                <ModeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>
    </div>
  );
}
