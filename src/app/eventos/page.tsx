import React from "react";
import type { Metadata } from "next";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Disc, Sparkles } from "lucide-react";
import Link from "next/link";
import eventosData from "@/data/eventos.json";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Detalle del Concierto | CINEFONÍA Nights",
  description: "Memoria descriptiva y repertorio de nuestro concierto de música de cámara y cine en Arequipa. Revisa las piezas de Morricone, Zimmer, Williams y Hisaishi.",
  alternates: {
    canonical: "/eventos",
  },
  openGraph: {
    title: "Detalle del Concierto | CINEFONÍA Nights",
    description: "Programa y repertorio del recital inmersivo del 22 de Agosto de 2026.",
    url: "/eventos",
    type: "website",
  },
};

export default function EventosPage() {
  const aqpEvent = eventosData.find((e) => e.id === "aqp-2026") || eventosData[0];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cinefoniashow.com";

  // Esquema MusicEvent (Schema.org)
  const musicEventSchema = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    "name": aqpEvent.title,
    "startDate": "2026-08-22T19:30:00-05:00",
    "endDate": "2026-08-22T21:00:00-05:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Teatro Municipal de Arequipa",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Calle Mercaderes 239",
        "addressLocality": "Arequipa",
        "addressRegion": "Arequipa",
        "addressCountry": "PE"
      }
    },
    "description": "Un recital íntimo e inmersivo de música de cámara y cine que se estrenará en el Teatro Municipal de Arequipa.",
    "image": `${siteUrl}/images/og-main.jpg`,
    "performer": {
      "@type": "PerformingGroup",
      "name": "CINEFONÍA Ensamble de Cámara"
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
        "name": "Eventos",
        "item": `${siteUrl}/eventos`
      }
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      {/* Inyección de Datos Estructurados */}
      <JsonLd data={musicEventSchema} />
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">MEMORIA DESCRIPTIVA Y PROGRAMA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Detalle del Concierto
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
            Detalle completo del recital, distribución del Teatro Municipal de Arequipa y el programa musical seleccionado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Event General Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#8A1C36]/15 p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="font-serif text-xs font-bold tracking-[0.25em] text-[#8A1C36] uppercase border-b border-brand-gold/15 pb-4">
                FICHA TÉCNICA
              </h2>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-800">Fecha y Hora</p>
                    <p className="text-gray-500">22 de agosto de 2026 · 19:30 h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-gray-100 pt-3">
                  <MapPin className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-800">Lugar</p>
                    <p className="text-gray-500">Teatro Municipal de Arequipa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-gray-100 pt-3">
                  <Clock className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-800">Duración</p>
                    <p className="text-gray-500">{aqpEvent.duration}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border-t border-gray-100 pt-3">
                  <Users className="h-4 w-4 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-gray-800">Aforo Disponible</p>
                    <p className="text-gray-500">{aqpEvent.capacity} personas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Ticket CTA */}
            <div className="bg-[#0B1329] border border-brand-gold/20 p-6 sm:p-8 text-center space-y-4">
              <Sparkles className="h-6 w-6 text-brand-gold mx-auto" />
              <h3 className="font-serif text-sm font-bold tracking-wider text-white uppercase">¿Deseas asistir?</h3>
              <p className="text-[11px] text-gray-400 font-sans">Asegura tu butaca antes de que se complete el aforo de 850 personas.</p>
              <a
                href={process.env.NEXT_PUBLIC_JOINNUS_URL || "https://www.joinnus.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-bold text-xs tracking-wider uppercase transition-colors font-sans"
              >
                COMPRAR ENTRADAS
              </a>
            </div>
          </div>

          {/* Right Column: Repertoire / Program */}
          <div className="lg:col-span-8 bg-white border border-[#8A1C36]/15 p-6 sm:p-10 space-y-8 shadow-sm">
            <div className="flex items-center space-x-2 border-b border-brand-gold/15 pb-4">
              <Disc className="h-5 w-5 text-brand-gold" />
              <h2 className="font-serif text-sm sm:text-base font-bold tracking-[0.2em] text-[#8a1c36] uppercase">
                REPERTORIO SELECCIONADO
              </h2>
            </div>

            <p className="text-xs text-gray-500 font-light leading-relaxed font-sans">
              El programa musical del recital ha sido cuidadosamente curado por la dirección artística, adaptando grandes partituras orquestales del cine para nuestro ensamble de cámara acústico:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
              {(aqpEvent.repertoire || []).map((block) => (
                <div key={block.block} className="bg-[#FAF9F5] border border-gray-200 p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-200/80 pb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                      {block.block}
                    </span>
                    <span className="font-serif italic text-sm text-gray-700 font-bold">
                      {block.title}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {block.pieces.map((piece, pIdx) => (
                      <div key={pIdx} className="text-xs">
                        <div className="flex justify-between font-semibold text-gray-800">
                          <span>• {piece.name}</span>
                          <span className="text-brand-gold font-semibold">{piece.movie} ({piece.year})</span>
                        </div>
                        <p className="text-[11px] text-gray-500 italic pl-3 font-light">Compositor: {piece.composer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
