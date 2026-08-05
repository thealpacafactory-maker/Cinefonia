"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe, Share2, Video } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "700"] });

export default function Footer() {
  return (
    <footer className="bg-[#F5F2EB] text-gray-600 border-t border-[#8A1C36]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center space-x-4 group">

              {/* Monograma de la imagen */}
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src="/Logo Cinefonia Nights_Negro.png"
                  alt="Monograma Cinefonía"
                  fill
                  className="object-contain drop-shadow-[0_0_8px_rgba(242,232,213,0.15)]"
                />
              </div>

              {/* Contenedor del Texto */}
              <div className="flex flex-col justify-center">

                {/* Título Principal */}
                <span className={cn(
                  "tracking-[0.25em] text-lg md:text-xl text-[#8A1C36] uppercase leading-none text-center",
                  cinzel.className
                )}>
                  CINEFONÍA
                </span>

                {/* Separador con la estrella central */}
                <div className="flex items-center w-full my-1.5 opacity-80">
                  <div className="h-[1px] flex-grow bg-[#8A1C36]"></div>
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 mx-2 fill-[#8A1C36] flex-shrink-0">
                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                  </svg>
                  <div className="h-[1px] flex-grow bg-[#8A1C36]"></div>
                </div>

                {/* Subtítulo */}
                <span className="text-[0.45rem] md:text-[0.55rem] tracking-[0.4em] text-[#8A1C36] uppercase font-light ml-[0.4em] text-center w-full">
                  MÚSICA DE CINE EN CONCIERTO
                </span>

              </div>
            </Link>

            <p className="text-xs text-gray-600 leading-relaxed font-light">
              Música de Cine en Concierto. Una experiencia cultural única creada para perdurar en la memoria de Arequipa.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border-gray-300 hover:border-[#8A1C36] flex items-center justify-center text-gray-500 hover:text-[#8A1C36] transition-colors" aria-label="Web">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border-gray-300 hover:border-[#8A1C36] flex items-center justify-center text-gray-500 hover:text-[#8A1C36] transition-colors" aria-label="Redes">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border-gray-300 hover:border-[#8A1C36] flex items-center justify-center text-gray-500 hover:text-[#8A1C36] transition-colors" aria-label="Canal">
                <Video className="h-4 w-4" />
              </a>
              <a href="mailto:hola@cinefoniashow.com" className="w-8 h-8 rounded-full border-gray-300 hover:border-[#8A1C36] flex items-center justify-center text-gray-500 hover:text-[#8A1C36] transition-colors" aria-label="Correo">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: NAVEGACIÓN */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-[#8A1C36] mb-6 border-b border-[#8A1C36]/15 pb-2 inline-block">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <Link href="/" className="hover:text-[#8A1C36] transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-[#8A1C36] transition-colors">Eventos</Link>
              </li>
              <li>
                <Link href="/artistas" className="hover:text-[#8A1C36] transition-colors">Artistas</Link>
              </li>
              <li>
                <Link href="/patrocinadores" className="hover:text-[#8A1C36] transition-colors">Patrocinadores</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-[#8A1C36] transition-colors">Noticias</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#8A1C36] transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#8A1C36] transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: INFORMACIÓN */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-[#8A1C36] mb-6 border-b border-[#8A1C36]/15 pb-2 inline-block">
              INFORMACIÓN
            </h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <Link href="/eventos" className="hover:text-[#8A1C36] transition-colors">Sobre Cinefonía</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#8A1C36] transition-colors">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-[#8A1C36] transition-colors">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-[#8A1C36] transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACTO */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-[#8A1C36] mb-6 border-b border-[#8A1C36]/15 pb-2 inline-block">
              CONTACTO
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-[#8A1C36] flex-shrink-0 mt-0.5" />
                <span>Arequipa, Perú</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#8A1C36] flex-shrink-0" />
                <a href="mailto:hola@cinefoniashow.com" className="hover:text-[#8A1C36] transition-colors">
                  hola@cinefoniashow.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#8A1C36] flex-shrink-0" />
                <span>+51 987 654 321</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© 2026 Cinefonía Nights. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0 italic font-serif">Teatro Municipal de Arequipa • 22 de Agosto de 2026</p>
        </div>
      </div>
    </footer>
  );
}