"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = ({ pathname, isOpen, setIsOpen }: { pathname: string; isOpen: boolean; setIsOpen: (open: boolean) => void }) => {
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {DATA.navbar.map((item) => {
        const isExternal = item.href.startsWith("http");
        const active = !isExternal && isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            onClick={() => setIsOpen(false)}
            className={cn(
              "flex items-center gap-2 text-sm transition-colors py-2",
              active
                ? "text-primary font-bold"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <item.icon className="size-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full backdrop-blur-md border-b border-border/40 bg-background/80">
      <div className="w-full h-16 flex items-center justify-between px-8 sm:px-16 lg:px-20">
        {/* Logo - Left */}
        <Link
          href="/"
          className="font-semibold text-lg hover:text-primary transition-colors flex-1"
        >
          {DATA.name.split(" ")[0]}.
        </Link>

        {/* Desktop Navigation Links - Center */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <NavLinks pathname={pathname} isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Mobile Menu Button & Theme - Right */}
        <div className="md:hidden flex items-center gap-4 flex-1 justify-end">
          <ModeToggle className="h-4 w-4 p-0" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Desktop Social & Theme - Right */}
        <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
          <div className="flex items-center gap-3">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.navbar)
              .map(([name, social]) => {
                const isExternal = social.url.startsWith("http");
                const IconComponent = social.icon;

                return (
                  <a
                    key={name}
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <IconComponent className="size-4" />
                  </a>
                );
              })}
          </div>

          {/* Separator */}
          <div className="w-px h-4 bg-border"></div>

          {/* Theme Toggle */}
          <ModeToggle className="h-4 w-4 p-0" />
        </div>
      </div>

      {/* Mobile Menu - Fixed Overlay */}
      {isOpen && (
        <div className="fixed md:hidden top-16 left-0 right-0 bottom-0 z-40 border-t border-border/40 bg-background border-b backdrop-blur-md overflow-y-auto">
          <div className="mx-auto w-full max-w-6xl px-6 py-4 flex flex-col gap-4">
            <NavLinks pathname={pathname} isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Mobile Social Links */}
            <div className="border-t border-border/40 pt-4 flex items-center gap-3">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => {
                  const isExternal = social.url.startsWith("http");
                  const IconComponent = social.icon;

                  return (
                    <a
                      key={name}
                      href={social.url}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <IconComponent className="size-4" />
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}