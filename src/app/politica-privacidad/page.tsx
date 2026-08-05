import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-gray-150 pb-8">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8A1C36] uppercase block mb-3 font-sans">
            LEGAL & COMPROMISO
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold uppercase text-gray-850 tracking-wide mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-550 text-xs uppercase tracking-wider font-mono">
            Última actualización: 4 de Agosto de 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm sm:text-base text-gray-650 font-light leading-relaxed font-sans">
          <p>
            En **CINEFONÍA Nights**, nos tomamos muy en serio la privacidad y seguridad de los datos personales de nuestros usuarios, espectadores y patrocinadores. Esta política de privacidad describe cómo recopilamos, usamos y protegemos la información personal compartida con nosotros a través de este portal web, asegurando el cumplimiento de la Ley de Protección de Datos Personales.
          </p>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-gray-800 tracking-wide uppercase">
              1. Información que Recopilamos
            </h2>
            <p>
              Recopilamos información únicamente cuando interactúas de forma activa con nuestros canales de comunicación:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>**Formulario de Contacto:** Recopilamos tu nombre, correo electrónico, asunto y el contenido de tu mensaje.</li>
              <li>**Formulario de Patrocinio:** Recopilamos el nombre de la empresa, el nombre del representante, correo corporativo, teléfono y detalles de la propuesta de alianza comercial.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-gray-800 tracking-wide uppercase">
              2. Uso de la Información
            </h2>
            <p>
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder consultas directas de los usuarios sobre la boletería, locación y fechas del concierto.</li>
              <li>Evaluar propuestas de alianzas corporativas y ponernos en contacto para definir el patrocinio.</li>
              <li>Cumplir con las obligaciones legales y normativas aplicables.</li>
            </ul>
            <p>
              Bajo ninguna circunstancia vendemos, alquilamos ni transferimos tus datos personales a terceros con fines comerciales ajenos a CINEFONÍA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-gray-800 tracking-wide uppercase">
              3. Almacenamiento y Seguridad
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para resguardar la confidencialidad de tus datos frente a accesos no autorizados o pérdidas accidentales. Los datos enviados mediante formularios de contacto son procesados mediante servidores en la nube seguros y encriptación HTTPS de extremo a extremo para evitar interceptaciones.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif text-lg font-bold text-gray-800 tracking-wide uppercase">
              4. Tus Derechos (ARCO)
            </h2>
            <p>
              Tienes el derecho de acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, puedes remitir una solicitud formal al correo electrónico oficial: **contacto@cinefonia-nights.pe**, adjuntando la información correspondiente para validar tu identidad titular.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
