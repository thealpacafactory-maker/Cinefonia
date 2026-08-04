"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, HeartHandshake, HelpCircle } from "lucide-react";

interface Sponsor {
  name: string;
  level: "principal" | "estrategico" | "cultural" | "aliado";
  tag: string;
}

const SPONSORS: Sponsor[] = [
  // Socio Principal
  { name: "Fundación Cultural Arequipa", level: "principal", tag: "Socio Principal" },
  // Socio Estratégico
  { name: "Andina Medios & Difusión", level: "estrategico", tag: "Socio Estratégico" },
  { name: "CineSur Distribución", level: "estrategico", tag: "Socio Estratégico" },
  // Socio Cultural
  { name: "Banco del Sur", level: "cultural", tag: "Socio Cultural" },
  { name: "Hoteles del Misti", level: "cultural", tag: "Socio Cultural" },
  { name: "Cámara de Comercio Arequipa", level: "cultural", tag: "Socio Cultural" },
  // Aliado Cultural
  { name: "Imprenta El Heraldo", level: "aliado", tag: "Aliado Cultural" },
  { name: "Café de la Ópera", level: "aliado", tag: "Aliado Cultural" },
  { name: "Radio Melodía Arequipa", level: "aliado", tag: "Aliado Cultural" },
  { name: "Asociación Bellas Artes", level: "aliado", tag: "Aliado Cultural" },
];

export default function Sponsors() {
  const principal = SPONSORS.filter(s => s.level === "principal");
  const estrategico = SPONSORS.filter(s => s.level === "estrategico");
  const cultural = SPONSORS.filter(s => s.level === "cultural");
  const aliado = SPONSORS.filter(s => s.level === "aliado");

  return (
    <section className="py-24 bg-brand-bg relative border-t border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Respaldo Institucional</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
            Patrocinadores
          </h2>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light">
            Las organizaciones y marcas que hacen posible la realización del recital y la difusión del arte cinematográfico.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Level 1: Socio Principal */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Award className="h-5 w-5 text-brand-gold" />
            <h3 className="font-serif text-sm tracking-[0.3em] font-semibold uppercase text-brand-gold">
              Socio Principal
            </h3>
          </div>
          <div className="flex justify-center">
            {principal.map((sponsor) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg p-10 bg-brand-card/60 border border-brand-gold/30 hover:border-brand-gold shadow-gold-glow flex items-center justify-center text-center transition-all duration-300 min-h-[120px]"
              >
                <span className="font-serif text-lg sm:text-2xl text-white font-bold tracking-widest uppercase">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Level 2: Socio Estratégico */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Briefcase className="h-4.5 w-4.5 text-brand-copper" />
            <h3 className="font-serif text-xs tracking-[0.25em] font-semibold uppercase text-brand-copper">
              Socios Estratégicos
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {estrategico.map((sponsor, idx) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-brand-card/45 border border-brand-copper/20 hover:border-brand-copper/40 flex items-center justify-center text-center transition-all duration-300 min-h-[100px]"
              >
                <span className="font-serif text-base sm:text-lg text-gray-200 font-semibold tracking-wider uppercase">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Level 3: Socio Cultural */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <HeartHandshake className="h-4 w-4 text-gray-400" />
            <h3 className="font-serif text-xs tracking-[0.25em] font-semibold uppercase text-gray-400">
              Socios Culturales
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {cultural.map((sponsor, idx) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-brand-card/30 border border-white/5 hover:border-brand-gold/20 flex items-center justify-center text-center transition-all duration-300 min-h-[85px]"
              >
                <span className="font-serif text-xs sm:text-sm text-gray-300 tracking-wider">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Level 4: Aliados Culturales */}
        <div>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <HelpCircle className="h-3.5 w-3.5 text-gray-500" />
            <h3 className="font-serif text-[10px] tracking-[0.25em] font-semibold uppercase text-gray-500">
              Aliados & Colaboraciones
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {aliado.map((sponsor, idx) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-4 bg-brand-card/15 border border-white/5 flex items-center justify-center text-center min-h-[70px]"
              >
                <span className="text-[11px] text-gray-400 text-center leading-tight">
                  {sponsor.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
