import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, Check, Crown, Award } from "lucide-react";
import Link from "next/link";
import patrocinadoresData from "@/data/patrocinadores.json";
import JsonLd from "@/components/seo/JsonLd";

// 1. Metadatos de Servidor para SEO
export const metadata: Metadata = {
  title: "Alianzas Culturales y Auspicios | CINEFONÍA Nights",
  description: "Conoce las marcas aliadas y los niveles de patrocinio disponibles para Cinefonía en Arequipa. Cinco niveles de participación corporativa para integrar su marca.",
  alternates: {
    canonical: "/patrocinadores",
  },
  openGraph: {
    title: "Alianzas Culturales y Auspicios | CINEFONÍA Nights",
    description: "Únete a las marcas aliadas que hacen posible Cinefonía en el Teatro Municipal.",
    url: "/patrocinadores",
    type: "website",
  },
};

export default function PatrocinadoresPage() {
  const tiers = patrocinadoresData.tiers || [];
  const palcoFeatures = patrocinadoresData.palcoVipFeatures || [];
  const sponsors = patrocinadoresData.sponsorsList || [];
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
      }
    ]
  };

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      {/* Inyección de Esquemas Estructurados */}
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Alianzas Culturales
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-600 font-light leading-relaxed font-sans">
            No todas las marcas necesitan la misma presencia. Cinco niveles de participación para integrar su marca a una experiencia cultural memorable.
          </p>
        </div>

        {/* Official Sponsors Showcase Section */}
        <div className="mb-20 bg-white border border-brand-gold/20 p-8 sm:p-12 shadow-md">
          <div className="text-center mb-10">
            <span className="text-[10px] font-bold tracking-[0.25em] text-brand-gold uppercase block mb-2 flex items-center justify-center font-sans">
              <Award className="h-4 w-4 mr-2" /> NUESTROS ALIANZAS Y PATROCINADORES ACTUALES
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-gray-800">
              Marcas e Instituciones Comprometidas con la Cultura
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
            {sponsors.map((sponsor, idx) => (
              <div
                key={sponsor.id || idx}
                className="bg-white border border-gray-200/80 p-6 flex flex-col items-between justify-between text-center aspect-[4/3] shadow-xs hover:border-[#8A1C36]/30 transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative w-full h-16 sm:h-20 my-auto flex items-center justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    sizes="200px"
                    className="object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="pt-3 border-t border-gray-100 w-full">
                  <span className="font-serif text-xs font-bold uppercase tracking-wider text-gray-850 block line-clamp-1">
                    {sponsor.name}
                  </span>
                  <span className="text-[8px] text-[#8A1C36] font-semibold tracking-widest uppercase block mt-1">
                    {sponsor.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Five levels matrix from Page 4 of Memoria Descriptiva */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-gray-800">Niveles de Participación</h2>
            <p className="text-xs text-gray-500 font-light mt-2 font-sans">Propuestas flexibles diseñadas para ajustarse a los objetivos y presupuestos de cada marca.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch font-sans">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-white border p-6 flex flex-col justify-between shadow-xs transition-all duration-300 hover:-translate-y-1 ${
                  tier.recommended ? "border-brand-gold/60 ring-1 ring-brand-gold/20" : "border-gray-200"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                    <span className="font-serif font-bold text-xs uppercase tracking-wide text-gray-800">
                      {tier.name}
                    </span>
                    {tier.recommended && (
                      <span className="bg-brand-gold/15 text-brand-gold text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 border border-brand-gold/30">
                        Recomendado
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <span className="text-xl font-bold text-[#8A1C36] font-serif">{tier.price}</span>
                    <span className="text-[9px] text-gray-400 block uppercase tracking-wider">Valor estimado</span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-light leading-relaxed mb-6">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-50 text-[10px] text-gray-650 font-sans">
                  <div className="flex justify-between border-b border-gray-100/40 pb-1">
                    <span className="text-gray-400">Exclusividad:</span>
                    <span className="font-semibold text-gray-800">{tier.exclusivity}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100/40 pb-1">
                    <span className="text-gray-400">Invitaciones:</span>
                    <span className="font-semibold text-gray-800">{tier.totalInvitations}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100/40 pb-1">
                    <span className="text-gray-400">Acceso Palco:</span>
                    <span className="font-semibold text-gray-800">{tier.palcoAccess}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Networking:</span>
                    <span className="font-semibold text-gray-800">{tier.networking}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Theatrical VIP Box Experience from Page 5 of Memoria Descriptiva */}
        <div className="mt-20 bg-white border border-[#8A1C36]/15 p-8 sm:p-12 shadow-sm font-sans">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#8A1C36] uppercase block mb-2">HOSPITALIDAD CORPORATIVA</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-gray-800 mb-4 font-bold">
                El mejor lugar del evento no es solo una butaca.
              </h2>
              <h3 className="font-serif italic text-base text-brand-gold mb-6 font-bold">
                EXPERIENCIA PREFERENTE PARA AUSPICIADORES
              </h3>
              <p className="text-xs sm:text-sm text-gray-650 font-light leading-relaxed mb-6">
                Una experiencia de hospitalidad cultural diseñada para sponsors, clientes,
                directivos, instituciones y aliados estratégicos de Cinefonía.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                {palcoFeatures.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-brand-gold flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF9F5] p-8 border border-gray-200 text-center">
              <Crown className="h-12 w-12 text-brand-gold mx-auto mb-4 stroke-[1]" />
              <h4 className="font-serif text-lg font-bold text-gray-800 mb-2 uppercase">EXPERIENCIA EXCLUSIVA</h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed mb-6">
                &ldquo;La empresa no solo entrega entradas. Invita a sus relaciones estratégicas a compartir una experiencia con contenido.&rdquo;
              </p>
              <Link
                href="/quiero-auspiciar"
                className="inline-block px-8 py-3 bg-[#8A1C36] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#5E0B1F] transition-colors cursor-pointer"
              >
                RESERVAR ALIANZA
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
