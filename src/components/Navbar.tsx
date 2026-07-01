import { useState } from "react";
import { Leaf, Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Trending", href: "#trending" },
  { label: "Top Selling", href: "#top-selling" },
  { label: "Reviews", href: "#reviews" },
  { label: "O₂ Plants", href: "#o2-plants" },
];

const ICON_BTN =
  "inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        className="container-px flex h-16 items-center justify-between gap-4 md:h-20"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2 text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Verdant
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button className={ICON_BTN} aria-label="Search">
            <Search className="h-5 w-5" />
          </button>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label="Cart">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              2
            </span>
          </button>
          <button className={cn(ICON_BTN, "hidden sm:inline-flex")} aria-label="Account">
            <User className="h-5 w-5" />
          </button>
          <Button className="ml-1 hidden lg:inline-flex" size="sm">
            Shop now
          </Button>
          <button
            className={cn(ICON_BTN, "lg:hidden")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-foreground/40 transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80vw] flex-col gap-2 border-l border-border bg-background p-6 shadow-card transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-label="Mobile navigation"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold">Menu</span>
          <button className={ICON_BTN} aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {link.label}
          </a>
        ))}
        <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
          Shop now
        </Button>
      </aside>
    </header>
  );
}
