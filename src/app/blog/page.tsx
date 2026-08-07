import React from "react";
import type { Metadata } from "next";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import blogData from "@/data/blog.json";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Blog Cultural y Análisis de Bandas Sonoras | CINEFONÍA Nights",
  description: "Explora ensayos de musicología, la historia de los recitales de cine en vivo y análisis profundos sobre compositores como Zimmer, Morricone y Williams.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog Cultural y Análisis de Bandas Sonoras | CINEFONÍA Nights",
    description: "Reflexiones históricas y trasfondo cultural de CINEFONÍA Nights.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  // Esquema BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteUrl}/blog`
      }
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      {/* Inyección de Esquemas Estructurados */}
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">ANÁLISIS Y ESTÉTICA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Blog Cultural
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-655 font-light leading-relaxed font-sans">
            Reflexiones musicológicas, historia del cine y trasfondo cultural sobre las bandas sonoras del recital.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((article) => (
            <div
              key={article.slug}
              className="bg-white border border-brand-gold/20 p-6 flex flex-col justify-between group hover:border-brand-gold/45 transition-all duration-300 shadow-sm hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="aspect-[16/9] w-full bg-[#FAF9F5] border border-gray-150 mb-6 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden group-hover:bg-[#FAF9F5] transition-colors font-sans">
                  <BookOpen className="h-10 w-10 stroke-[0.8] mb-1 text-brand-gold/40" />
                  <div className="absolute top-2 left-2 bg-[#8A1C36] border border-[#8A1C36] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white">
                    {article.category}
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-[10px] text-gray-500 font-semibold mb-2 font-sans">
                  <Clock className="h-3.5 w-3.5 text-brand-gold" />
                  <span>{article.date} • {article.readTime} lectura</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-gray-805 mb-3 leading-snug group-hover:text-brand-gold transition-colors">
                  {article.title}
                </h3>

                <p className="text-gray-655 text-xs font-light leading-relaxed mb-6 font-sans">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-150 font-sans">
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold hover:underline transition-colors"
                >
                  <span>LEER ARTÍCULO</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Inline replacement helper for ArrowLeft icon to avoid extra file imports
function ArrowLeft({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  );
}
