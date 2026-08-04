"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, HeartHandshake, ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import DevBadge from "@/components/ui/DevBadge";

interface TierInfo {
  name: string;
  description: string;
  benefits: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TIERS: TierInfo[] = [
  {
    name: "Socio Principal",
    description: "La máxima distinción de auspicio. Brinda presencia institucional estelar y exclusividad de rubro.",
    benefits: [
      "Branding prioritario en toda la prensa nacional y digital.",
      "Mención de honor por la voz del narrador al iniciar el concierto.",
      "15 invitaciones VIP de cortesía en zona preferente en el Teatro Municipal.",
      "Logotipo estelar en el programa de mano físico impreso a color."
    ],
    icon: Award,
    color: "text-brand-gold border-brand-gold/45 shadow-gold-glow",
  },
  {
    name: "Socio Estratégico",
    description: "Presencia relevante asociada a la promoción y soporte logístico y mediático del evento central.",
    benefits: [
      "Branding en redes sociales oficiales y videos de promoción.",
      "8 invitaciones VIP de cortesía en zona preferente.",
      "Logotipo destacado en el programa de mano físico.",
      "Presencia de banners de marca en el foyer del Teatro Municipal."
    ],
    icon: Briefcase,
    color: "text-brand-copper border-brand-copper/30 shadow-copper-glow",
  },
  {
    name: "Socio Cultural",
    description: "Ideal para empresas comprometidas con el desarrollo cultural y el arte de cámara en Arequipa.",
    benefits: [
      "Branding en el pie de los afiches y material publicitario digital.",
      "4 invitaciones VIP de cortesía.",
      "Logotipo en el programa de mano físico.",
      "Mención de agradecimiento en redes de CINEFONÍA."
    ],
    icon: HeartHandshake,
    color: "text-gray-300 border-white/10",
  },
  {
    name: "Aliado Cultural",
    description: "Dirigido a colaboraciones de intercambio de bienes, servicios o difusiones específicas de menor escala.",
    benefits: [
      "Logotipo en sección de aliados en la web oficial y programa de mano.",
      "2 invitaciones preferentes al recital.",
      "Agradecimiento institucional corporativo."
    ],
    icon: HelpCircle,
    color: "text-gray-500 border-white/5",
  },
];

export default function PatrocinadoresPage() {
  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Red de Alianzas</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Programa de Patrocinios
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            Forma parte de la red empresarial de CINEFONÍA Nights y conecta con un público de alto nivel cultural y de consumo.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message="Nota de Desarrollo: Los beneficios corporativos de cada nivel se detallan de forma preliminar y se formalizan mediante acuerdo escrito." />

        {/* Tiers List */}
        <div className="space-y-8 max-w-5xl mx-auto mt-12">
          {TIERS.map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 bg-brand-card/30 border flex flex-col md:flex-row gap-8 items-start ${tier.color}`}
              >
                {/* Tier Left Header */}
                <div className="w-full md:w-1/3 space-y-4">
                  <div className="p-3 bg-brand-bg/50 border border-white/5 inline-block text-brand-gold">
                    <Icon className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {tier.name}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Tier Benefits */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-[10px] font-semibold uppercase tracking-wider text-brand-copper">Beneficios Clave</h3>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400 font-light">
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2.5">
                        <span className="text-brand-gold flex-shrink-0 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Callout */}
        <div className="mt-20 max-w-3xl mx-auto text-center bg-brand-card/20 border border-brand-gold/15 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-gold/5 blur-[80px] pointer-events-none" />
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4 uppercase tracking-widest">
            ¿Quieres ser parte del Estreno?
          </h2>
          <p className="text-gray-400 text-sm font-light max-w-md mx-auto leading-relaxed mb-8">
            Si deseas un plan a la medida o auspiciar en un formato no listado, ponte en contacto con nuestra división de alianzas estratégicas.
          </p>
          <Link
            href="/quiero-auspiciar"
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-bold tracking-widest uppercase text-xs transition-colors shadow-gold-glow"
          >
            <span>Quiero Auspiciar</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
