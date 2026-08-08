import React from "react";
import type { Metadata } from "next";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Datos de Contacto | CINEFONÍA Nights",
  description: "Ponte en contacto con el equipo de producción, prensa y dirección artística de CINEFONÍA Nights. Envíanos un mensaje o consulta directamente.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Datos de Contacto | CINEFONÍA Nights",
    description: "Canales de comunicación oficiales de la plataforma Cinefonía.",
    url: "/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.cinefoniashow.com";

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
        "name": "Contacto",
        "item": `${siteUrl}/contacto`
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
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">INFORMACIÓN Y COMUNICACIÓN</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Datos de Contacto
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
            Canales directos de consulta con el equipo de producción, dirección artística y prensa.
          </p>
        </div>

        {/* Centered Details Wrapper */}
        <div className="max-w-2xl mx-auto space-y-6 mt-8">
          
          {/* Executive & Artistic Leadership */}
          <div className="bg-white border border-[#8A1C36]/15 p-8 sm:p-10 space-y-6 shadow-sm">
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase border-b border-brand-gold/15 pb-4">
              DIRECCIÓN ARTÍSTICA
            </h3>
            <div>
              <p className="font-serif text-xl font-bold text-gray-850">María Lucía Roca Gamarra</p>
              <p className="text-xs text-gray-500 font-light mt-1">Dirección Artística · Piano</p>
            </div>

            <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase border-b border-brand-gold/15 pb-4 pt-4">
              DIRECCIÓN MUSICAL
            </h3>
            <div>
              <p className="font-serif text-xl font-bold text-gray-850">Julián Enríquez</p>
              <p className="text-xs text-gray-500 font-light mt-1">Dirección Musical · Flauta · Adaptación de Arreglos</p>
            </div>
          </div>

          {/* Location & Direct Communication channels */}
          <div className="bg-white border border-[#8A1C36]/15 p-8 sm:p-10 space-y-5 text-sm text-gray-650 shadow-sm font-sans">
            <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-gray-850 uppercase border-b border-brand-gold/15 pb-4">
              UBICACIÓN Y ATENCIÓN
            </h3>

            <div className="flex items-start space-x-4 pt-2">
              <MapPin className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-0.5">Dirección Física</p>
                <p className="text-xs text-gray-600">Teatro Municipal de Arequipa (Calle Mercaderes 239, Arequipa, Perú)</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 pt-2 border-t border-gray-100">
              <Mail className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-0.5">Correo Electrónico</p>
                <a href="mailto:hola@cinefonianights.com" className="text-xs text-gray-600 hover:text-brand-gold transition-colors font-semibold">
                  hola@cinefonianights.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 pt-2 border-t border-gray-100">
              <Phone className="h-5 w-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-0.5">Línea Telefónica</p>
                <p className="text-xs text-gray-600">+51 987 654 321</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
