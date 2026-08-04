import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import blogData from "@/data/blog.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = blogData.find((b) => b.slug === slug) || {
    slug,
    title: slug.replace(/-/g, " "),
    category: "Blog",
    date: "30 MAY 2025",
    readTime: "5 min",
    excerpt: "Artículo musicológico e histórico sobre la música de cine.",
    content: "En CINEFONÍA NIGHTS, el narrador no explica las obras: las conecta. La combinación de sexteto acústico, narración sutil e iluminación atmosférica genera un entorno de inmersión íntima."
  };

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Blog</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-[#0B1329] border border-brand-gold/20 p-8 sm:p-12 space-y-8">
          
          {/* Header */}
          <div className="space-y-4 border-b border-brand-gold/15 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              {article.category} • Ensayo Musicology
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-semibold text-white leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium pt-2">
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-brand-gold" />
                <span>Fecha: {article.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-brand-gold" />
                <span>Lectura: {article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Visual Box */}
          <div className="aspect-video w-full bg-[#050914] border border-brand-gold/15 flex flex-col items-center justify-center text-gray-500 relative">
            <BookOpen className="h-16 w-16 stroke-[0.8] text-brand-gold/40 mb-2" />
            <span className="text-xs font-serif uppercase tracking-[0.25em]">CINEFONÍA NIGHTS — ESSAY</span>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed">
            <p className="font-normal text-white text-base">
              {article.excerpt}
            </p>
            <p>
              {article.content}
            </p>
            <blockquote className="border-l-4 border-brand-gold bg-[#050914] p-6 italic text-gray-200 font-serif text-sm sm:text-base">
              &ldquo;Una ciudad con patrimonio también necesita nuevas experiencias. No utiliza Arequipa como escenario; dialoga con su identidad.&rdquo;
              <span className="block text-xs uppercase tracking-widest text-brand-gold font-sans font-bold mt-3 not-italic">
                — CINEFONÍA Nights
              </span>
            </blockquote>
          </div>

          {/* Footer Info */}
          <div className="pt-8 border-t border-brand-gold/15 text-xs text-gray-500 flex justify-between items-center">
            <span>Publicado en el Blog de CINEFONÍA Nights</span>
            <Link href="/contacto" className="text-brand-gold hover:underline">
              Contacto Editorial
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
