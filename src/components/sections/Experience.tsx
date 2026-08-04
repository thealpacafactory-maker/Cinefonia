"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, Mic, Film, Heart } from "lucide-react";

interface Pillar {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  glowColor: string;
}

const PILLARS: Pillar[] = [
  {
    title: "Música en vivo",
    description: "Un selecto quinteto de cámara de primer nivel (Flauta, Violín, Viola, Violonchelo y Piano) interpreta los arreglos más emotivos y refinados.",
    icon: Music,
    glowColor: "group-hover:shadow-gold-glow",
  },
  {
    title: "Narración poética",
    description: "Una voz guía teje la transición entre las obras, sumergiéndote en el contexto estético y espiritual de cada largometraje.",
    icon: Mic,
    glowColor: "group-hover:shadow-copper-glow",
  },
  {
    title: "Proyección cinematográfica",
    description: "Sincronía visual en pantalla gigante. Revive los fotogramas clave y el aura visual que convirtieron a estas películas en obras de culto.",
    icon: Film,
    glowColor: "group-hover:shadow-gold-glow",
  },
  {
    title: "Emoción pura",
    description: "75 minutos ininterrumpidos diseñados para conmover. Un viaje místico sin pausas que reconecta al espectador con sus recuerdos.",
    icon: Heart,
    glowColor: "group-hover:shadow-copper-glow",
  },
];

export default function Experience() {
  return (
    <section className="py-24 bg-brand-bg/95 relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">La Propuesta</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
            La Experiencia
          </h2>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light">
            Un recital conceptual diseñado para transformar el Teatro Municipal en una sala de ensueño cinematográfico.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className={`group glass-panel p-10 flex flex-col items-start transition-all duration-500 hover:-translate-y-1 ${pillar.glowColor}`}
              >
                {/* Icon Container with Copper/Gold Gradient Border */}
                <div className="mb-6 p-4 rounded-none border border-brand-gold/25 bg-brand-card/80 text-brand-gold group-hover:text-brand-gold-light group-hover:border-brand-gold transition-colors duration-300">
                  <Icon className="h-7 w-7 stroke-[1.5]" />
                </div>

                {/* Pillar Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-4 tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                  {pillar.title}
                </h3>

                {/* Pillar Description */}
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
