"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import artistasData from "@/data/artistas.json";

export default function FeaturedArtists() {
  // Display the 5 main instrumental ensemble members
  const featured = artistasData.slice(0, 5);

  return (
    <section className="py-24 bg-[#0f1c3f] text-white relative border-t border-[#ad6e4f]/20 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#172854]/40 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-gray-300 mb-2"
          >
            ARTISTAS DESTACADOS
          </motion.h2>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-10 h-[1px] bg-[#ad6e4f]/40" />
            <span className="text-[#ad6e4f] text-xs font-serif">✦</span>
            <div className="w-10 h-[1px] bg-[#ad6e4f]/40" />
          </div>
        </div>

        {/* 5 Cards Grid con animaciones dinámicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {featured.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-[#172854] border border-[#ad6e4f]/25 p-4 flex flex-col items-center text-center group hover:border-[#ad6e4f] hover:shadow-gold-glow transition-all duration-300 rounded-none relative overflow-hidden"
            >
              {/* Photo Box */}
              <div className="w-full aspect-[4/5] bg-[#0f1c3f] border border-[#ad6e4f]/15 mb-4 overflow-hidden relative flex items-center justify-center group-hover:bg-[#122246] transition-colors">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 15vw"
                    style={{ objectFit: "cover" }}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-108"
                  />
                ) : (
                  <User className="h-16 w-16 text-gray-500 stroke-[0.8]" />
                )}
                <div className="absolute inset-2 border border-[#ad6e4f]/20 pointer-events-none z-10 group-hover:border-[#ad6e4f]/60 transition-colors" />
              </div>

              {/* Artist Name & Instrument */}
              <h3 className="font-serif text-sm font-semibold text-white tracking-wide mb-1 leading-snug">
                {artist.name}
              </h3>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#ad6e4f]">
                {artist.instrument}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/artistas"
              className="inline-flex items-center px-8 py-3.5 border border-[#ad6e4f] text-xs font-semibold tracking-[0.2em] text-white uppercase hover:bg-[#ad6e4f] hover:text-[#0f1c3f] transition-all duration-300 shadow-copper-glow"
            >
              VER TODOS LOS ARTISTAS
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
