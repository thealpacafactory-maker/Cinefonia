"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cinzel } from "next/font/google";

// Importamos la fuente Cinzel para que el texto sea idéntico al logo
const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

const NAV_LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/eventos", label: "EVENTOS" },
  { href: "/artistas", label: "ARTISTAS" },
  { href: "/patrocinadores", label: "PATROCINADORES" },
  { href: "/noticias", label: "NOTICIAS" },
  { href: "/blog", label: "BLOG" },
  { href: "/contacto", label: "CONTACTO" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1329]/95 backdrop-blur-md border-b border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo - Actualizado con imagen y fuente Cinzel */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3 group">

              {/* Aquí va el monograma Cf sin fondo (asegúrate de tener public/logo-cf.png) */}
              <div className="relative w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                <Image
                  src="/Logo Cinefonia Nights_Negro.png"
                  alt="Monograma Cinefonía"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(242,232,213,0.1)]"
                />
              </div>

              <div className="flex flex-col items-center justify-center mt-1">

                {/* Título Principal */}
                <span className={cn(
                  "tracking-[0.25em] text-lg md:text-xl text-[#F2E8D5] uppercase leading-none",
                  cinzel.className
                )}>
                  CINEFONÍA
                </span>

                {/* Separador con la estrella central */}
                <div className="flex items-center w-[95%] my-1.5 opacity-80">
                  <div className="h-[1px] flex-grow bg-[#F2E8D5]"></div>
                  {/* Estrella de 4 puntas (rombo estirado) en SVG */}
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 mx-2 fill-[#F2E8D5]">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                  <div className="h-[1px] flex-grow bg-[#F2E8D5]"></div>
                </div>

                {/* Subtítulo */}
                {/* Nota: El ml-[0.4em] al final compensa visualmente el "tracking" para que se vea perfectamente centrado */}
                <span className="text-[0.45rem] md:text-[0.55rem] tracking-[0.4em] text-[#F2E8D5] uppercase font-light ml-[0.4em]">
                  MÚSICA DE CINE EN CONCIERTO
                </span>

              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold tracking-[0.15em] transition-colors duration-200 py-1 relative",
                    isActive
                      ? "text-brand-gold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3 after:h-[2px] after:bg-brand-gold"
                      : "text-gray-300 hover:text-brand-gold-light"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Link
              href="/quiero-auspiciar"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-brand-gold/60 text-[11px] font-bold tracking-[0.2em] uppercase text-white hover:bg-brand-gold hover:text-brand-bg transition-all duration-300"
            >
              QUIERO AUSPICIAR
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-gold hover:bg-[#070D1D] focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menú</span>
              {isOpen ? <X className="block h-6 w-6 text-brand-gold" /> : <Menu className="block h-6 w-6 text-brand-gold" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "xl:hidden fixed inset-x-0 top-20 bg-[#0B1329]/98 border-b border-brand-gold/20 backdrop-blur-xl transition-all duration-300 ease-in-out origin-top",
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"
        )}
        id="mobile-menu"
      >
        <div className="px-6 pt-4 pb-8 space-y-4">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-xs font-semibold tracking-[0.2em] transition-colors",
                  isActive
                    ? "text-brand-gold border-l-2 border-brand-gold pl-4 bg-brand-gold/5"
                    : "text-gray-300 hover:text-brand-gold"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-brand-gold/10">
            <Link
              href="/quiero-auspiciar"
              onClick={() => setIsOpen(false)}
              className="w-full text-center block px-5 py-3 border border-brand-gold text-xs font-bold tracking-[0.2em] uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-bg transition-all"
            >
              QUIERO AUSPICIAR
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}