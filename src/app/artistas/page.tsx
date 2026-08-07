import React from "react";
import type { Metadata } from "next";
import { User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import artistasData from "@/data/artistas.json";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Dirección y Elenco | CINEFONÍA Nights",
  description: "Conoce al elenco del recital CINEFONÍA Nights: María Lucía Roca (Piano), Julián Enríquez (Flauta), Lucho Vera (Violín), Mijael Cuarite (Viola) y Ederson Maquito (Violonchelo).",
  alternates: {
    canonical: "/artistas",
  },
  openGraph: {
    title: "Dirección y Elenco | CINEFONÍA Nights",
    description: "Conoce a los músicos del ensamble de cámara acústico para el recital de Arequipa.",
    url: "/artistas",
    type: "website",
  },
};

export default function ArtistasPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  // Esquema ItemList de artistas (Schema.org)
  const artistsListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Ensamble de Cámara CINEFONÍA",
    "description": "Lista de músicos profesionales de formación clásica e instrumentistas del quinteto de música de cámara.",
    "numberOfItems": artistasData.length,
    "itemListElement": artistasData.map((artist, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Person",
        "name": artist.name,
        "jobTitle": artist.role,
        "description": artist.bio,
        "image": `${siteUrl}${artist.image}`
      }
    }))
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
        "name": "Artistas",
        "item": `${siteUrl}/artistas`
      }
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      {/* Inyección de Esquemas Estructurados */}
      <JsonLd data={artistsListSchema} />
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
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">MEMORIA DESCRIPTIVA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Dirección y Elenco
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
            Seis instrumentistas. Una narración. Una sola experiencia.
          </p>
        </div>

        {/* Carta de la Dirección Artística from Memoria Descriptiva page 3 */}
        <div className="bg-white border border-brand-gold/30 p-8 sm:p-12 mb-16 relative shadow-sm">
          <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2 font-sans">MENSAJE EDITORIAL</span>
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-gray-855 mb-6">
            Carta de la Dirección Artística
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-gray-650 font-light leading-relaxed italic border-l-2 border-[#8A1C36]/40 pl-6 my-6 font-sans">
            <p>
              &ldquo;CINEFONÍA NIGHTS nace de una inquietud que fui construyendo a lo largo de varios años de trabajo como pianista: la certeza de que el repertorio de cámara, pese a su riqueza, no siempre logra tender un puente emocional inmediato con públicos ajenos a la formación clásica. Descubrí, en cambio, que las bandas sonoras de cine despiertan de manera casi inmediata recuerdos y emociones compartidas.&rdquo;
            </p>
            <p>
              &ldquo;De esa observación surgió la idea de utilizar la música cinematográfica no como un fin en sí mismo, sino como una puerta de entrada a la escucha activa. Más íntimo. Más cercano. Más camerístico.&rdquo;
            </p>
            <p>
              &ldquo;Elegí Arequipa como ciudad de estreno por ser mi ciudad natal y por el deseo de aportar a su programación cultural una propuesta artística distinta, construida junto a músicos profesionales de la ciudad.&rdquo;
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-gray-150 flex items-center justify-between text-xs font-sans">
            <span className="font-serif font-bold text-gray-805 tracking-widest">María Lucía Roca Gamarra</span>
            <span className="text-brand-gold uppercase tracking-wider text-[11px] font-bold">DIRECCIÓN ARTÍSTICA</span>
          </div>
        </div>

        {/* Artists List */}
        <div className="space-y-12">
          {artistasData.map((artist) => (
            <div
              key={artist.slug}
              className="bg-white border border-brand-gold/20 p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start hover:border-brand-gold/45 transition-all duration-500 hover:-translate-y-1 group shadow-sm text-gray-800"
            >
              {/* Photo Box */}
              <div className="w-full md:w-48 aspect-[4/5] bg-gray-100 border border-brand-gold/15 flex items-center justify-center flex-shrink-0 relative overflow-hidden">
                {artist.image ? (
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    style={{ objectFit: "cover" }}
                    className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                ) : (
                  <User className="h-20 w-20 text-gray-400 stroke-[0.8]" />
                )}
                <span className="absolute bottom-3 left-3 bg-[#8A1C36] px-2 py-1 text-[9px] font-bold text-white uppercase tracking-widest border border-[#8A1C36]/20 z-10 font-sans">
                  {artist.instrument}
                </span>
              </div>

              {/* Bio & Trajectory */}
              <div className="flex-1 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold block font-sans">
                  {artist.role}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-gray-805 tracking-wide">
                  {artist.name}
                </h3>
                <p className="text-xs text-gray-650 font-light leading-relaxed font-sans">
                  {artist.bio}
                </p>
                <div className="pt-3 border-t border-gray-150">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1 font-sans">
                    Trayectoria Académica y Profesional:
                  </span>
                  <p className="text-xs text-gray-600 font-light leading-relaxed font-sans">
                    {artist.trajectory}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
