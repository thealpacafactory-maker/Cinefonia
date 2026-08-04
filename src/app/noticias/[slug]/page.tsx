import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Newspaper } from "lucide-react";
import noticiasData from "@/data/noticias.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const noticia = noticiasData.find((n) => n.slug === slug) || {
    slug,
    title: slug.replace(/-/g, " "),
    category: "Noticias",
    date: "08 MAY 2025",
    readTime: "4 min",
    description: "Comunicado oficial de prensa sobre CINEFONÍA Nights.",
    content: "CINEFONÍA NIGHTS — Música de Cine en Concierto reunirá un sexteto instrumental, narración en vivo y proyecciones audiovisuales en el Teatro Municipal de Arequipa el próximo 22 de agosto de 2026."
  };

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/noticias" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Noticias</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-[#0B1329] border border-brand-gold/20 p-8 sm:p-12 space-y-8">
          
          {/* Header */}
          <div className="space-y-4 border-b border-brand-gold/15 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              {noticia.category} • Comunicado Oficial
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-semibold text-white leading-tight">
              {noticia.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-medium pt-2">
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-brand-gold" />
                <span>Fecha: {noticia.date}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-brand-gold" />
                <span>Lectura: {noticia.readTime}</span>
              </span>
            </div>
          </div>

          {/* Visual Box */}
          <div className="aspect-video w-full bg-[#050914] border border-brand-gold/15 flex flex-col items-center justify-center text-gray-500 relative">
            <Newspaper className="h-16 w-16 stroke-[0.8] text-brand-gold/40 mb-2" />
            <span className="text-xs font-serif uppercase tracking-[0.25em]">CINEFONÍA NIGHTS — PRENSA</span>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed">
            <p className="font-normal text-white text-base">
              {noticia.description}
            </p>
            <p>
              {noticia.content}
            </p>
            <blockquote className="border-l-4 border-brand-gold bg-[#050914] p-6 italic text-gray-200 font-serif text-sm sm:text-base">
              &ldquo;El concierto propone un puente de escucha atenta a través del lenguaje que el público ya reconoce y guarda en su memoria emocional.&rdquo;
              <span className="block text-xs uppercase tracking-widest text-brand-gold font-sans font-bold mt-3 not-italic">
                — Dirección Artística CINEFONÍA Nights
              </span>
            </blockquote>
          </div>

          {/* Footer Info */}
          <div className="pt-8 border-t border-brand-gold/15 text-xs text-gray-500 flex justify-between items-center">
            <span>Oficina de Prensa y Comunicaciones</span>
            <Link href="/contacto" className="text-brand-gold hover:underline">
              Contacto de Prensa
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
