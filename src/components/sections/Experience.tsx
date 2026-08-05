"use client";

import React from "react";
import { motion } from "framer-motion";
import { Music, BookOpen, Tv, Heart } from "lucide-react";

export default function Experience() {
  const pillars = [
    {
      icon: Music,
      title: "MÚSICA EN VIVO",
      description: "Ensamble de cámara de primer nivel interpretando bandas sonoras inolvidables."
    },
    {
      icon: BookOpen,
      title: "NARRACIÓN",
      description: "Relatos que conectan cada pieza con la magia del séptimo arte."
    },
    {
      icon: Tv,
      title: "PROYECCIÓN",
      description: "Imágenes en gran formato que dan vida a cada interpretación."
    },
    {
      icon: Heart,
      title: "EMOCIÓN",
      description: "Una experiencia íntima que queda en la memoria y el corazón."
    }
  ];

  return (
    <section className="py-24 bg-[#F7F5F0] text-[#111827] relative border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2"
          >
            LA EXPERIENCIA
          </motion.h2>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-10 h-[1px] bg-[#8A1C36]" />
            <span className="text-[#8A1C36] text-xs font-serif">✦</span>
            <div className="w-10 h-[1px] bg-[#8A1C36]" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="font-serif italic text-base sm:text-xl text-[#374151] leading-relaxed mt-4 font-normal"
          >
            Cinefonía Nights es más que un concierto: es un viaje sensorial donde la música de cine se convierte en emoción.
          </motion.p>
        </div>

        {/* 4 Pillars Grid con animaciones dinámicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-[#E5E7EB] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#8A1C36] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-none border border-[#8A1C36]/40 flex items-center justify-center text-[#8A1C36] mb-6 bg-[#FAF8F5] group-hover:bg-[#8A1C36] group-hover:text-white transition-all duration-300">
                  <Icon className="h-6 w-6 stroke-[1.2] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-serif text-xs font-bold tracking-[0.2em] uppercase text-[#111827] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#4B5563] leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Concept block from Rev5 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#EFECE6] border-l-4 border-[#8A1C36] p-8 sm:p-10 max-w-4xl mx-auto my-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#8A1C36] uppercase block mb-2">CONCEPTO CENTRAL</span>
          <h4 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#111827] tracking-wide mb-3">
            EL CINE ABRE LA PUERTA. LA MÚSICA HACE EL RESTO.
          </h4>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-4">
            CINEFONÍA NIGHTS utiliza la memoria emocional del cine para acercar nuevos públicos a la música de cámara mediante una experiencia de piano, flauta, cuerdas, narración, luz y proyección. No reproduce películas. No propone un recital convencional.
          </p>
          <p className="font-serif italic text-sm text-[#8A1C36]">
            &ldquo;Primero reconocemos una melodía. Después descubrimos una nueva forma de escucharla.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
