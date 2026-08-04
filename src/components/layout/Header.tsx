"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/eventos", label: "Eventos" },
  { href: "/artistas", label: "Artistas" },
  { href: "/patrocinadores", label: "Patrocinadores" },
  { href: "/noticias", label: "Noticias" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-x-0 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <Music className="h-6 w-6 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
              <span className="font-serif tracking-widest text-lg md:text-xl text-glow-gold">
                CINEFONÍA <span className="text-brand-gold group-hover:text-brand-gold-light transition-colors">Nights</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium tracking-wider uppercase transition-colors duration-200",
                    isActive
                      ? "text-brand-gold border-b border-brand-gold pb-1"
                      : "text-gray-300 hover:text-brand-gold-light"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/quiero-auspiciar"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-none border border-brand-gold text-xs font-semibold tracking-widest uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-all duration-300 shadow-gold-glow"
            >
              Quiero Auspiciar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-gold hover:bg-brand-card focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-20 bg-brand-bg/95 border-b border-brand-gold/10 backdrop-blur-xl transition-all duration-300 ease-in-out origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-4 sm:px-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-base font-medium tracking-wider uppercase transition-colors",
                  isActive
                    ? "text-brand-gold bg-brand-card/50 pl-4 border-l-2 border-brand-gold"
                    : "text-gray-300 hover:text-brand-gold hover:bg-brand-card/30"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-brand-gold/10 px-3">
            <Link
              href="/quiero-auspiciar"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-5 py-3 rounded-none border border-brand-gold text-sm font-semibold tracking-widest uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-all"
            >
              Quiero Auspiciar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
