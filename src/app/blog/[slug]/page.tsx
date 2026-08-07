import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import blogData from "@/data/blog.json";
import JsonLd from "@/components/seo/JsonLd";
import { parseSpanishDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

// 1. Generación de Metadatos Dinámicos para el Blog
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const article = blogData.find((b) => b.slug === slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  if (!article) {
    return {
      title: "Artículo no encontrado",
      description: "El ensayo musicológico o crítica de cine no está disponible en la plataforma.",
    };
  }

  return {
    title: `${article.title} | Blog`,
    description: article.excerpt.slice(0, 155),
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: article.date,
      authors: ["CINEFONÍA"],
      images: [
        {
          url: "/images/og-main.jpg", // Fallback a imagen de marca del proyecto
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: ["/images/og-main.jpg"],
    },
  };
}

// 2. Renderizado de la Página con JSON-LD
export default async function BlogDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";
  
  const article = blogData.find((b) => b.slug === slug) || {
    slug,
    title: slug.replace(/-/g, " "),
    category: "Blog",
    date: "2026-08-01",
    readTime: "5 min",
    excerpt: "Artículo musicológico e histórico sobre la música de cine.",
    content: "En CINEFONÍA NIGHTS, el narrador no explica las obras: las conecta. La combinación de sexteto acústico, narración sutil e iluminación atmosférica genera un entorno de inmersión íntima."
  };

  // Esquema BlogPosting
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${slug}`
    },
    "headline": article.title,
    "description": article.excerpt,
    "datePublished": parseSpanishDate(article.date),
    "author": {
      "@type": "Organization",
      "name": "CINEFONÍA",
      "url": siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "CINEFONÍA",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/images/logo.png`
      }
    }
  };

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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `${siteUrl}/blog/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      {/* Marcado JSON-LD */}
      <JsonLd data={blogPostingSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/blog" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
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
          <div className="space-y-6 text-sm text-gray-650 font-light leading-relaxed font-sans">
            <p className="font-semibold text-gray-800 text-base">
              {article.excerpt}
            </p>
            <p>
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
            <Link href="/contacto" className="text-brand-gold hover:underline font-semibold font-sans">
              Contacto Editorial
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
