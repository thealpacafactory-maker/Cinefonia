"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "noticia" | "blog";
  categoryLabel: string;
}

const ARTICLES: Article[] = [
  {
    slug: "estreno-arequipa-2026",
    title: "CINEFONÍA Nights prepara su gran estreno en el Teatro Municipal de Arequipa",
    excerpt: "Conoce los detalles logísticos y artísticos detrás del recital de cámara que busca revivir la época dorada del cine de culto este 22 de agosto.",
    date: "2026-08-01",
    readTime: "4 min",
    category: "noticia",
    categoryLabel: "Noticias",
  },
  {
    slug: "el-violonchelo-en-el-cine-dramatico",
    title: "El Violonchelo: La voz de la melancolía en el cine de Christopher Nolan",
    excerpt: "Un análisis del rol fundamental del violonchelo en la creación de tensión psicológica y melancolía dramática en bandas sonoras icónicas.",
    date: "2026-07-20",
    readTime: "6 min",
    category: "blog",
    categoryLabel: "Análisis / Blog",
  },
  {
    slug: "entrevista-maria-lucia-roca",
    title: "Detrás de las partituras: Entrevista con la Directora Artística María Lucía Roca",
    excerpt: "Conversamos con la fundadora del quinteto sobre los desafíos de adaptar arreglos orquestales a un formato íntimo de música de cámara.",
    date: "2026-07-15",
    readTime: "8 min",
    category: "blog",
    categoryLabel: "Entrevistas",
  },
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-brand-bg relative border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left">
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Actualidad Cultural</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
              Noticias y Blog
            </h2>
            <div className="mt-4 w-16 h-[1.5px] bg-brand-gold" />
          </div>
          
          <Link
            href="/blog"
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light mt-6 md:mt-0 group transition-colors"
          >
            <span>Ver Todo el Contenido</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col justify-between p-6 bg-brand-card/25 border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-gold-glow transition-all duration-500 rounded-none group"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center space-x-1.5 text-[10px] font-semibold uppercase tracking-widest text-brand-copper">
                    <BookOpen className="h-3 w-3" />
                    <span>{article.categoryLabel}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-[10px] text-gray-500 font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 tracking-wide leading-snug group-hover:text-brand-gold transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-4 border-t border-brand-gold/5">
                <Link
                  href={`/${article.category}/${article.slug}`}
                  className="inline-flex items-center space-x-1 text-xs uppercase font-bold tracking-widest text-gray-300 hover:text-brand-gold-light group-hover:pl-1 transition-all duration-300"
                >
                  <span>Leer Artículo</span>
                  <ArrowRight className="h-3.5 w-3.5 text-brand-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
