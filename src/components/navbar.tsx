"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLinks = ({
  pathname,
  setIsOpen,
}: {
  pathname: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
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
    <>
      <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md border-b border-border/40 bg-background/80">
        <div className="relative w-full h-16 flex items-center px-8 sm:px-16 lg:px-20">
          
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="font-semibold text-lg hover:text-primary transition-colors"
            >
              {DATA.name.split(" ")[0]}.
            </Link>
          </div>

          {/* Center - Nav (perfectly centered) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <NavLinks
              pathname={pathname}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>

          {/* Right - Desktop Social + Theme */}
          <div className="hidden md:flex items-center gap-4 ml-auto">
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

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-4 ml-auto">
            <ModeToggle className="h-4 w-4 p-0" />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed top-16 left-0 right-0 bottom-0 z-30 md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Content */}
          <div className="relative h-full overflow-y-auto bg-background border-t border-border/40">
            <div className="mx-auto w-full max-w-6xl px-6 py-4 flex flex-col gap-4">
              
              <NavLinks
                pathname={pathname}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />

              {/* Social Links */}
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
        </div>
      )}
    </>
  );
}