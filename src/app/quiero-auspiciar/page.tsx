"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PartnershipForm from "@/components/sections/PartnershipForm";

export default function QuieroAuspiciarPage() {
  const steps = [
    { number: "01", title: "Definimos el objetivo de su marca" },
    { number: "02", title: "Elegimos o adaptamos la forma de participación" },
    { number: "03", title: "Diseñamos beneficios, invitaciones e integración" },
    { number: "04", title: "Formalizamos la alianza" },
    { number: "05", title: "Iniciamos la comunicación" }
  ];

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/patrocinadores" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Patrocinadores</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">DOSSIER DE PATROCINIO (REV 5)</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Solicitud de Alianza
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-xl mx-auto text-sm text-gray-400 font-light leading-relaxed">
            Su marca puede formar parte de una noche que Arequipa querrá repetir.
          </p>
        </div>

        {/* 5 Steps Process from Rev 5 */}
        <div className="bg-[#0B1329] border border-brand-gold/20 p-8 mb-12">
          <h3 className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold uppercase mb-6 text-center">
            CÓMO AVANZAR (PROCESO DE 5 PASOS)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.number} className="bg-[#050914] p-4 text-center border border-brand-gold/10">
                <span className="font-serif text-2xl font-bold text-brand-gold block mb-2">{step.number}</span>
                <span className="text-[11px] text-gray-300 font-light leading-snug block">{step.title}</span>
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
