"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, Music } from "lucide-react";

interface Artist {
  name: string;
  role: string;
  instrument: string;
  bio: string;
}

const ARTISTS: Artist[] = [
  {
    name: "María Lucía Roca Gamarra",
    role: "Dirección Artística / Piano",
    instrument: "Piano",
    bio: "Pianista y directora con trayectoria en la difusión de música de cámara. Lidera la curaduría artística del ensamble CINEFONÍA.",
  },
  {
    name: "Julián Enríquez",
    role: "Dirección Musical / Flauta",
    instrument: "Flauta Traversa",
    bio: "Flautista destacado especializado en arreglos musicales para bandas sonoras. Dirige la ejecución instrumental y el ritmo dramático.",
  },
  {
    name: "Lucho Vera",
    role: "Violinista I",
    instrument: "Violín I",
    bio: "Primer violín del ensamble, responsable de los pasajes líricos y melódicos de mayor intensidad emotiva en escena.",
  },
  {
    name: "Mijael Jesús Cuarite Cáceres",
    role: "Violista",
    instrument: "Viola",
    bio: "Músico de viola con amplia versatilidad, aportando la calidez y el rango medio fundamental para la armonía del quinteto.",
  },
  {
    name: "Ederson Maquito Velarde",
    role: "Violonchelista",
    instrument: "Violonchelo",
    bio: "Violonchelista con experiencia en música sinfónica y orquestas de cámara. Provee el soporte y la profundidad de los bajos del concierto.",
  },
];

export default function FeaturedArtists() {
  return (
    <section className="py-24 bg-brand-bg relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">El Ensamble</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
            Artistas Destacados
          </h2>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light">
            Conoce a los virtuosos músicos peruanos encargados de revivir las partituras icónicas del cine de culto.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {ARTISTS.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group flex flex-col justify-between p-6 bg-brand-card/40 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-gold-glow transition-all duration-500 rounded-none relative overflow-hidden"
            >
              {/* Black and White Artistic Box Effect */}
              <div className="relative aspect-[4/5] w-full bg-neutral-900 border-b border-brand-gold/10 mb-6 overflow-hidden flex items-center justify-center group-hover:bg-neutral-800 transition-colors duration-500">
                {/* Decorative Frame */}
                <div className="absolute inset-4 border border-brand-gold/10 pointer-events-none group-hover:border-brand-gold/20 transition-all duration-500" />
                
                {/* Artistic B&W Icon Placeholder */}
                <div className="flex flex-col items-center justify-center text-gray-600 group-hover:text-brand-gold/50 transition-colors duration-500">
                  <User className="h-16 w-16 stroke-[1] mb-2" />
                  <Music className="h-6 w-6 stroke-[1]" />
                </div>

                {/* Instrument Tag */}
                <div className="absolute bottom-4 left-4 bg-brand-bg/90 border border-brand-gold/20 px-3 py-1 text-[10px] uppercase tracking-widest text-brand-gold font-medium">
                  {artist.instrument}
                </div>
              </div>

              {/* Text Info */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-copper block mb-1">
                  {artist.role}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 tracking-wide group-hover:text-brand-gold-light transition-colors duration-300">
                  {artist.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-4">
                  {artist.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
