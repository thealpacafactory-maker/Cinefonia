"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Search } from "lucide-react";
import Link from "next/link";
import DevBadge from "@/components/ui/DevBadge";

interface BlogPlaceholder {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const BLOG_PLACEHOLDERS: BlogPlaceholder[] = [
  {
    slug: "el-violonchelo-en-el-cine-dramatico",
    title: "El Violonchelo: La voz de la melancolía en el cine de Christopher Nolan",
    category: "Análisis Musical",
    date: "2026-07-20",
    readTime: "6 min",
    excerpt: "Un análisis del rol fundamental del violonchelo en la creación de tensión psicológica y melancolía dramática en bandas sonoras icónicas.",
  },
  {
    slug: "entrevista-maria-lucia-roca",
    title: "Detrás de las partituras: Entrevista con la Directora Artística María Lucía Roca",
    category: "Entrevistas",
    date: "2026-07-15",
    readTime: "8 min",
    excerpt: "Conversamos con la fundadora del quinteto sobre los desafíos de adaptar arreglos orquestales a un formato íntimo de música de cámara.",
  },
  {
    slug: "origen-musica-de-cine",
    title: "De la pianola al sintetizador: La evolución de los recitales de cine en vivo",
    category: "Historia del Cine",
    date: "2026-07-02",
    readTime: "7 min",
    excerpt: "Una mirada histórica a la tradición de sonorizar películas en vivo y cómo las tecnologías acústicas modernas potencian la experiencia inmersiva.",
  },
];

export default function BlogPage() {
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
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Bitácora Cultural</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Blog de Cinefonia
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            Explora artículos de análisis musicológico, entrevistas a compositores y reflexiones sobre el séptimo arte.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message="Fase de Desarrollo: Los artículos de análisis del blog son textos borrador. El motor de contenido dinámico de Markdown se integrará en el Hito 4." />

        {/* Search Simulation */}
        <div className="max-w-md mx-auto mb-16 relative">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
            <Search className="h-4.5 w-4.5" />
          </span>
          <input
            type="text"
            placeholder="Buscar artículos o temáticas..."
            className="w-full bg-brand-card/45 border border-brand-gold/15 focus:border-brand-gold focus:outline-none pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 transition-all rounded-none"
            disabled
          />
          <span className="absolute right-3.5 top-3.5 text-[10px] uppercase font-mono text-gray-600 font-bold tracking-widest">
            Simulado
          </span>
        </div>

        {/* Blog Grid Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_PLACEHOLDERS.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-brand-card/25 border border-brand-gold/10 flex flex-col justify-between rounded-none group hover:border-brand-gold/30 hover:shadow-gold-glow transition-all duration-300"
            >
              <div>
                {/* Image Placeholder */}
                <div className="aspect-video w-full bg-neutral-900 border border-white/5 mb-6 flex flex-col items-center justify-center text-gray-700 relative overflow-hidden group-hover:bg-neutral-800 transition-colors">
                  <BookOpen className="h-10 w-10 stroke-[0.8]" />
                  <span className="text-[9px] uppercase tracking-[0.2em] mt-3">Placeholder Imagen</span>
                  <div className="absolute top-2 left-2 bg-brand-bg/90 border border-brand-gold/25 px-2 py-0.5 text-[8px] uppercase tracking-widest text-brand-gold">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-semibold mb-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{post.date} • {post.readTime} de lectura</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-gold/5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors"
                >
                  <span>Leer Artículo Completo</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
