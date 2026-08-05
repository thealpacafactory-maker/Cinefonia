"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import noticiasData from "@/data/noticias.json";

export default function NoticiasPage() {
  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors uppercase font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-[#8A1C36] uppercase block mb-3 font-sans">ACTUALIDAD Y COMUNICADOS</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Noticias Oficiales
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-655 font-light leading-relaxed font-sans">
            Novedades, ensayos, rueda de prensa y anuncios oficiales de la temporada 2026 de CINEFONÍA Nights.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasData.map((news, idx) => (
            <motion.div
              key={news.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-brand-gold/20 p-6 flex flex-col justify-between group hover:border-brand-gold/45 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Visual Header */}
                <div className="aspect-[16/9] w-full bg-[#FAF9F5] border border-gray-150 mb-6 relative overflow-hidden group-hover:bg-[#FAF9F5] transition-colors">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={news.imagePlaceholder}
                  />
                  <div className="absolute top-2 left-2 bg-[#8A1C36] border border-[#8A1C36] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white z-10 font-sans">
                    {news.category}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-gray-550 font-semibold mb-2 font-sans">
                  <Clock className="h-3.5 w-3.5 text-brand-gold" />
                  <span>{news.date} • {news.readTime} lectura</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-805 mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                  {news.title}
                </h3>

                <p className="text-gray-650 text-xs font-light leading-relaxed mb-6 font-sans">
                  {news.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-150">
                <Link
                  href={`/noticias/${news.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-[#8A1C36] hover:underline transition-colors font-sans"
                >
                  <span>LEER COMUNICADO</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
