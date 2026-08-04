"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Music, ArrowLeft } from "lucide-react";
import Link from "next/link";
import DevBadge from "@/components/ui/DevBadge";

import artistasData from "@/data/artistas.json";

interface Artist {
  name: string;
  role: string;
  instrument: string;
  bio: string;
  trajectory: string;
}

const ARTISTS = artistasData as Artist[];

export default function ArtistasPage() {
  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">El Corazón Musical</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Nuestros Artistas
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            Conoce el trasfondo y la trayectoria de los virtuosos solistas que integran el quinteto oficial de CINEFONÍA.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message="Nota de Desarrollo: La biografía artística e instrumental de los integrantes está en proceso de revisión oficial para el programa de mano final." />

        {/* Artists Roster */}
        <div className="space-y-16 mt-12">
          {ARTISTS.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-8 bg-brand-card/30 border border-brand-gold/10 hover:border-brand-gold/25 transition-all duration-300 relative group"
            >
              {/* Photo Placeholder */}
              <div className="w-full lg:w-1/3 aspect-[4/5] bg-neutral-900 border border-brand-gold/15 flex items-center justify-center relative overflow-hidden group-hover:bg-neutral-800 transition-colors">
                <div className="absolute inset-4 border border-brand-gold/5 pointer-events-none group-hover:border-brand-gold/10" />
                <div className="flex flex-col items-center justify-center text-gray-700 group-hover:text-brand-gold/30 transition-colors">
                  <User className="h-20 w-20 stroke-[0.8] mb-2" />
                  <Music className="h-6 w-6 stroke-[0.8]" />
                  <span className="text-[9px] uppercase tracking-[0.25em] mt-4 text-gray-600">Placeholder Foto B&W</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-bg/95 border border-brand-gold/25 px-3 py-1 text-[9px] uppercase tracking-widest text-brand-gold font-medium">
                  {artist.instrument}
                </div>
              </div>

              {/* Trajectory and Bio Info */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-copper block mb-1">
                    {artist.role}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-6 tracking-wide group-hover:text-brand-gold-light transition-colors">
                    {artist.name}
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
                    <p>{artist.bio}</p>
                    <p className="border-l-2 border-brand-gold/20 pl-4 italic text-gray-500">
                      {artist.trajectory}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-gold/10 flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold font-medium">
                  <span>Ensamble CINEFONÍA Nights</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
