"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Globe, Share2, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070D1D] text-gray-400 border-t border-brand-gold/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-full border border-brand-gold/40 flex items-center justify-center bg-[#050914]">
                <span className="font-serif italic font-bold text-brand-gold text-lg">Cf</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-[0.25em] text-lg font-bold text-white uppercase leading-none">
                  CINEFONÍA
                </span>
                <span className="font-serif italic text-sm text-[#8EA4C8] font-normal tracking-wide leading-none mt-1">
                  Nights
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Música de Cine en Concierto. Una experiencia cultural única creada para perdurar en la memoria de Arequipa.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-gray-700 hover:border-brand-gold flex items-center justify-center text-gray-400 hover:text-brand-gold transition-colors" aria-label="Web">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-700 hover:border-brand-gold flex items-center justify-center text-gray-400 hover:text-brand-gold transition-colors" aria-label="Redes">
                <Share2 className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-gray-700 hover:border-brand-gold flex items-center justify-center text-gray-400 hover:text-brand-gold transition-colors" aria-label="Canal">
                <Video className="h-4 w-4" />
              </a>
              <a href="mailto:hola@cinefoniashow.com" className="w-8 h-8 rounded-full border border-gray-700 hover:border-brand-gold flex items-center justify-center text-gray-400 hover:text-brand-gold transition-colors" aria-label="Correo">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: NAVEGACIÓN */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-white mb-6 border-b border-brand-gold/10 pb-2 inline-block">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <Link href="/" className="hover:text-brand-gold transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/eventos" className="hover:text-brand-gold transition-colors">Eventos</Link>
              </li>
              <li>
                <Link href="/artistas" className="hover:text-brand-gold transition-colors">Artistas</Link>
              </li>
              <li>
                <Link href="/patrocinadores" className="hover:text-brand-gold transition-colors">Patrocinadores</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-brand-gold transition-colors">Noticias</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-gold transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: INFORMACIÓN */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-white mb-6 border-b border-brand-gold/10 pb-2 inline-block">
              INFORMACIÓN
            </h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li>
                <Link href="/eventos" className="hover:text-brand-gold transition-colors">Sobre Cinefonía</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-brand-gold transition-colors">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-brand-gold transition-colors">Términos y condiciones</Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-brand-gold transition-colors">Política de privacidad</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACTO */}
          <div>
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-white mb-6 border-b border-brand-gold/10 pb-2 inline-block">
              CONTACTO
            </h3>
            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Arequipa, Perú</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <a href="mailto:hola@cinefoniashow.com" className="hover:text-brand-gold transition-colors">
                  hola@cinefoniashow.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <span>+51 987 654 321</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
          <p>© 2026 Cinefonía Nights. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0 italic font-serif">Teatro Municipal de Arequipa • 22 de Agosto de 2026</p>
        </div>
      </div>
    </footer>
  );
}
