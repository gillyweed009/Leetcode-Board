"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="https://cfstep.com/projects/leetcodeboard/resources/setup/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/Problem 1" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Problem 1
        </Link>
        <Link
          href="https://cfstep.com/projects/leetcodeboard/resources/tailwind-shadcn/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Problem 2
        </Link>
        <Link
          href="https://cfstep.com/projects/leetcodeboard/resources/header-footer/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Problem 3
        </Link>
        <Link
          href="https://ui.shadcn.com/examples/mail"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Examples
        </Link>
        <Link
          href="https://ui.shadcn.com/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Blocks
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
