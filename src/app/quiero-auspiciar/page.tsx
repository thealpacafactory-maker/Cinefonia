import React from "react";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PartnershipForm from "@/components/sections/PartnershipForm";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Formulario de Solicitud de Auspicio | CINEFONÍA Nights",
  description: "Envía tu propuesta de alianza corporativa para CINEFONÍA Nights. Completa el formulario de contacto para integrarte como patrocinador oficial del recital.",
  alternates: {
    canonical: "/quiero-auspiciar",
  },
  openGraph: {
    title: "Formulario de Solicitud de Auspicio | CINEFONÍA Nights",
    description: "Únete a las marcas patrocinadoras en el Teatro Municipal de Arequipa.",
    url: "/quiero-auspiciar",
    type: "website",
  },
};

export default function QuieroAuspiciarPage() {
  const steps = [
    { number: "01", title: "Definimos el objetivo de su marca" },
    { number: "02", title: "Elegimos o adaptamos la forma de participación" },
    { number: "03", title: "Diseñamos beneficios, invitaciones e integración" },
    { number: "04", title: "Formalizamos la alianza" },
    { number: "05", title: "Iniciamos la comunicación" }
  ];
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
        "name": "Patrocinadores",
        "item": `${siteUrl}/patrocinadores`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Quiero Auspiciar",
        "item": `${siteUrl}/quiero-auspiciar`
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
          <Link href="/patrocinadores" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Patrocinadores</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-800 tracking-wider">
            Solicitud de Alianza
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
            Su marca puede formar parte de una noche que Arequipa querrá repetir.
          </p>
        </div>

        {/* 5 Steps Process from Rev 5 */}
        <div className="bg-white border border-brand-gold/20 p-8 mb-12 shadow-sm font-sans">
          <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 text-center">
            CÓMO AVANZAR (PROCESO DE 5 PASOS)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.number} className="bg-[#FAF9F5] p-4 text-center border border-gray-150">
                <span className="font-serif text-2xl font-bold text-brand-gold block mb-2">{step.number}</span>
                <span className="text-[11px] text-gray-600 font-light leading-snug block">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <PartnershipForm />

      </div>
    </div>
  );
}
