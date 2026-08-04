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
    <section className="py-20 bg-[#070D1D] text-white relative border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-gray-300 mb-2">
            ARTISTAS DESTACADOS
          </h2>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-8 h-[1px] bg-brand-gold/40" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-8 h-[1px] bg-brand-gold/40" />
          </div>
        </div>

        {/* 5 Cards Grid matching PDF page 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {featured.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1329] border border-brand-gold/20 p-4 flex flex-col items-center text-center group hover:border-brand-gold/50 transition-colors"
            >
              {/* Photo Box */}
              <div className="w-full aspect-[4/5] bg-[#050914] border border-brand-gold/10 mb-4 overflow-hidden relative flex items-center justify-center group-hover:bg-[#080E1E] transition-colors">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 15vw"
                    style={{ objectFit: "cover" }}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <User className="h-16 w-16 text-gray-600 stroke-[0.8]" />
                )}
                <div className="absolute inset-2 border border-brand-gold/15 pointer-events-none z-10" />
              </div>

              {/* Artist Name & Instrument */}
              <h3 className="font-serif text-sm font-semibold text-white tracking-wide mb-1 leading-snug">
                {artist.name}
              </h3>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                {artist.instrument}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="/artistas"
            className="inline-flex items-center px-8 py-3 border border-brand-gold/60 text-xs font-semibold tracking-[0.2em] text-white uppercase hover:bg-brand-gold hover:text-brand-bg transition-colors"
          >
            VER TODOS LOS ARTISTAS
          </Link>
        </div>

      </div>
    </section>
  );
}
