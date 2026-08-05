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
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Blog</span>
          </Link>
        </div>

        {/* Article Container */}
        <article className="bg-white border border-[#8A1C36]/15 p-8 sm:p-12 space-y-8 shadow-sm">

          {/* Header */}
          <div className="space-y-4 border-b border-gray-150 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold font-sans">
              {article.category} • Ensayo Musicología
            </span>
            <h1 className="font-serif text-2xl sm:text-4xl font-semibold text-gray-805 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium pt-2 font-sans">
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
          <div className="aspect-video w-full bg-[#FAF9F5] border border-gray-200/80 flex flex-col items-center justify-center text-gray-500 relative">
            <BookOpen className="h-16 w-16 stroke-[0.8] text-brand-gold/50 mb-2" />
            <span className="text-xs font-serif uppercase tracking-[0.25em] text-gray-650">CINEFONÍA NIGHTS — ESSAY</span>
          </div>

          {/* Article Body */}
          <div className="space-y-6 text-sm text-gray-650 font-light leading-relaxed">
            <p className="font-semibold text-gray-800 text-base font-sans">
              {article.excerpt}
            </p>
            <p className="font-sans">
              {article.content}
            </p>
            <blockquote className="border-l-4 border-[#8A1C36] bg-[#FAF9F5] p-6 italic text-gray-705 font-serif text-sm sm:text-base">
              &ldquo;Una ciudad con patrimonio también necesita nuevas experiencias. No utiliza Arequipa como escenario; dialoga con su identidad.&rdquo;
              <span className="block text-[10px] uppercase tracking-widest text-[#8A1C36] font-sans font-bold mt-3 not-italic">
                — CINEFONÍA Nights
              </span>
            </blockquote>
          </div>

          {/* Footer Info */}
          <div className="pt-8 border-t border-gray-150 text-xs text-gray-500 flex justify-between items-center font-sans">
            <span>Publicado en el Blog de CINEFONÍA Nights</span>
            <Link href="/contacto" className="text-brand-gold hover:underline font-semibold">
              Contacto Editorial
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
