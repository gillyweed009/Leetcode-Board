import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "./main-nav"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex justify-between items-center h-14 max-w-screen-2xl">
        <MainNav />
        <nav className="flex items-center">
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}


