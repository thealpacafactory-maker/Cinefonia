import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, FileText } from "lucide-react";
import DevBadge from "@/components/ui/DevBadge";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaDetallePage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/noticias" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a Noticias</span>
          </Link>
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message={`Fase de Desarrollo: Esta página muestra un artículo borrador con fines de visualización técnica para el slug dinámico "${slug}".`} />

        {/* Article Container */}
        <article className="glass-panel p-8 sm:p-12 space-y-8">
          
          {/* Header */}
          <div className="space-y-4 border-b border-brand-gold/10 pb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-copper">
              Comunicado de Prensa Oficial
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white leading-tight">
              Detalle del Comunicado: {slug.replace(/-/g, " ")}
            </h1>
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-medium pt-2">
              <span className="flex items-center space-x-1.5">
                <Calendar className="h-4 w-4 text-brand-gold" />
                <span>Fecha: 22 de Agosto de 2026 (Simulada)</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Clock className="h-4 w-4 text-brand-gold" />
                <span>Lectura: 5 min aprox.</span>
              </span>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="aspect-video w-full bg-neutral-900 border border-brand-gold/15 flex flex-col items-center justify-center text-gray-700 relative">
            <FileText className="h-16 w-16 stroke-[0.8]" />
            <span className="text-xs uppercase tracking-[0.25em] mt-4">Imagen Detalle Placeholder</span>
            <div className="absolute inset-4 border border-brand-gold/5 pointer-events-none" />
          </div>

          {/* Article Body Placeholder */}
          <div className="space-y-6 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            <p className="font-medium text-gray-200">
              [Resumen de la Noticia] Este párrafo sirve como placeholder para describir el acontecimiento principal. CINEFONÍA Nights se estrenará oficialmente en la ciudad blanca de Arequipa el 22 de agosto del año 2026.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <blockquote className="border-l-4 border-brand-gold bg-brand-card/45 p-6 italic text-gray-300 font-serif text-base sm:text-lg">
              &ldquo;Buscamos que la acústica natural del Teatro Municipal resuene de manera sublime con los arreglos que hemos preparado meticulosamente durante meses para el quinteto.&rdquo;
              <span className="block text-xs uppercase tracking-widest text-brand-gold font-sans font-bold mt-3 not-italic">— Directora Artística, Ensamble CINEFONÍA</span>
            </blockquote>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Footer Info */}
          <div className="pt-8 border-t border-brand-gold/10 text-xs text-gray-500 flex justify-between items-center">
            <span>Redacción CINEFONÍA Nights</span>
            <Link href="/contacto" className="text-brand-gold hover:underline">
              Contacto de Prensa
            </Link>
          </div>

        </article>

      </div>
    </div>
  );
}
