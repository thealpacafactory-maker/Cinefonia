import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Sparkles, ChevronRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cinefonia-nights.pe";

  // Schema.org Event para el concierto
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "CINEFONÍA Nights - La música del cine, vivida en escena",
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
    "description": "Un recital inmersivo de música de cámara y cine que se estrenará en el Teatro Municipal de Arequipa. 75 minutos de emoción pura sin intermedio.",
    "image": `${siteUrl}/images/og-main.jpg`,
    "organizer": {
      "@type": "Organization",
      "name": "CINEFONÍA",
      "url": siteUrl
    },
    "performer": [
      {
        "@type": "Person",
        "name": "María Lucía Roca Gamarra",
        "jobTitle": "Dirección Artística / Piano"
      },
      {
        "@type": "Person",
        "name": "Julián Enríquez",
        "jobTitle": "Dirección Musical / Flauta"
      }
    ]
  };

  return (
    <>
      <JsonLd data={eventSchema} />
      
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Decorative Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,19,41,0.6)_0%,rgba(3,7,18,1)_80%)] z-10" />
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url('/images/hero-bg-placeholder.jpg')` }} // Will be populated or fall back
        />
        
        {/* Cinematic Golden Light Effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 pt-10">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 border border-brand-gold/20 bg-brand-card/50 backdrop-blur-md text-xs font-semibold uppercase tracking-widest text-brand-gold mb-8 rounded-none">
            <Sparkles className="h-3 w-3 text-brand-gold animate-pulse" />
            <span>Gran Estreno Cultural 2026</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 uppercase leading-tight">
            CINEFONÍA <span className="text-gradient-gold text-glow-gold">Nights</span>
            <span className="block text-xl sm:text-2xl lg:text-3xl font-light tracking-[0.25em] text-gray-300 mt-4 normal-case font-sans">
              La música del cine, vivida en escena
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-10">
            Un recital exclusivo de música de cámara y cine en vivo. 75 minutos sin intermedios, recorriendo las bandas sonoras más emotivas de la historia en un formato inmersivo y de alta fidelidad.
          </p>

          {/* Event Details Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12 text-sm text-gray-300">
            <div className="flex items-center space-x-2 bg-brand-card/45 px-4 py-2 border border-brand-gold/10">
              <Calendar className="h-4 w-4 text-brand-gold" />
              <span className="tracking-wide">22 de Agosto de 2026 • 19:30 hrs</span>
            </div>
            <div className="flex items-center space-x-2 bg-brand-card/45 px-4 py-2 border border-brand-gold/10">
              <MapPin className="h-4 w-4 text-brand-gold" />
              <span className="tracking-wide">Teatro Municipal de Arequipa</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/eventos"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-none bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-semibold tracking-widest uppercase text-xs transition-all duration-300 shadow-gold-glow group"
            >
              <span>Ver Recital</span>
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/quiero-auspiciar"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-none border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white font-semibold tracking-widest uppercase text-xs transition-all duration-300"
            >
              Quiero Auspiciar
            </Link>
          </div>
        </div>
      </div>

      {/* Info Section for Milestone 1 Preview */}
      <section className="bg-brand-card/30 border-y border-brand-gold/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl text-brand-gold mb-4 uppercase tracking-widest">
            Fase de Desarrollo Inicial
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            Este es el primer hito funcional que despliega la arquitectura base del proyecto, el sistema de tipografías premium, las variables del tema visual, y la estructura global de rutas del App Router.
          </p>
        </div>
      </section>
    </>
  );
}
