import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TerminosPage() {
  return (
    <div className="min-h-screen py-16 bg-brand-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-brand-gold/10 pb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase text-white tracking-wide mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-500 text-xs uppercase tracking-wider font-mono">
            Última actualización: 4 de Agosto de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base text-gray-400 font-light leading-relaxed">
          <p>
            El acceso y uso de este portal web de **CINEFONÍA Nights** está sujeto a los siguientes términos y condiciones. Al navegar por nuestro sitio web o utilizar nuestros formularios de registro, confirmas tu conformidad y aceptación de las presentes cláusulas.
          </p>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-semibold text-white tracking-wide uppercase">
              1. Propiedad Intelectual
            </h2>
            <p>
              El diseño visual de la plataforma, arreglos conceptuales de imagen, logotipos de CINEFONÍA Nights, textos promocionales e información sobre el ensamble de cámara y concierto son propiedad exclusiva de la organización o de sus respectivos licenciantes. Queda prohibida la reproducción parcial o total de los elementos visuales e informativos del sitio sin autorización expresa previa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-semibold text-white tracking-wide uppercase">
              2. Condiciones del Concierto y Entradas
            </h2>
            <p>
              El concierto central de música de cámara y cine está programado para el **22 de agosto de 2026** a las **19:30 horas** en el Teatro Municipal de Arequipa. Las políticas de boletería están reguladas por las condiciones de la ticketera asociada oficial.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>El aforo de la sala está restringido estrictamente a **850 espectadores**. No se venderán boletos adicionales una vez completada la capacidad.</li>
              <li>El concierto tiene una duración aproximada de **75 minutos continuos sin intermedio**. Se solicita ingresar a la sala con 15 minutos de anticipación.</li>
              <li>Una vez iniciadas las interpretaciones musicales, se restringirá el acceso a la sala por respeto a los músicos en escena y al público oyente.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-semibold text-white tracking-wide uppercase">
              3. Uso Responsable del Sitio
            </h2>
            <p>
              Te comprometes a utilizar este portal únicamente con fines legítimos de consulta e información sobre el evento y envío de propuestas de auspicio o consultas válidas. El envío de información fraudulenta, spam, ataques de bots o cualquier acción dirigida a interrumpir la operatividad técnica del servidor resultará en el bloqueo permanente de accesos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-semibold text-white tracking-wide uppercase">
              4. Limitación de Responsabilidad
            </h2>
            <p>
              Hacemos nuestro mayor esfuerzo por mantener la información del sitio actualizada y precisa. Sin embargo, en fase de desarrollo o ante imprevistos técnicos o logísticos, la organización se reserva el derecho de modificar o reprogramar los detalles del evento de cámara e informar debidamente a los canales autorizados.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
