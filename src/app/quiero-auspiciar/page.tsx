import React from "react";
import { ArrowLeft, Landmark, HeartHandshake } from "lucide-react";
import Link from "next/link";
import PartnershipForm from "@/components/sections/PartnershipForm";

export default function QuieroAuspiciarPage() {
  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/patrocinadores" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Patrocinadores</span>
          </Link>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Captación de Alianzas</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Solicitud de Patrocinio
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            Completa el siguiente formulario para que nuestra división de desarrollo cultural evalúe tu marca y defina los términos del convenio.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-6 bg-brand-card/20 border border-brand-gold/10 flex items-start space-x-4">
            <Landmark className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-2">Visibilidad Premium</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Presencia estelar en el Teatro Municipal de Arequipa, spots multimedia antes del concierto, logotipo en el programa físico de mano y difusión en prensa.
              </p>
            </div>
          </div>
          <div className="p-6 bg-brand-card/20 border border-brand-gold/10 flex items-start space-x-4">
            <HeartHandshake className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-white mb-2">Propuestas a la Medida</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                Diseñamos integraciones corporativas personalizadas que se alinean exactamente a la identidad y objetivos comerciales de tu organización.
              </p>
            </div>
          </div>
        </div>

        {/* Render Modular Form Component */}
        <PartnershipForm />

      </div>
    </div>
  );
}
