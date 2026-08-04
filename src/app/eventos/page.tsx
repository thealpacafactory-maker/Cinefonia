"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";
import DevBadge from "@/components/ui/DevBadge";

interface EventShow {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  capacity: string;
  duration: string;
  concept: string;
  status: "active" | "soon";
}

const EVENTS: EventShow[] = [
  {
    id: "aqp-2026",
    title: "CINEFONÍA Nights - Concierto Estreno Arequipa",
    date: "Sábado, 22 de Agosto de 2026",
    time: "19:30",
    location: "Teatro Municipal de Arequipa (Calle Mercaderes 239)",
    city: "Arequipa",
    capacity: "850 personas",
    duration: "75 minutos sin intermedio (58 minutos de música)",
    concept: "La música de las películas más memorables de la historia del cine interpretada en vivo por un quinteto de cámara de primer nivel, en sincronía con proyecciones audiovisuales inmersivas.",
    status: "active",
  },
  {
    id: "cus-2026",
    title: "CINEFONÍA Nights - Gira Cusco",
    date: "Sábado, 12 de Septiembre de 2026",
    time: "19:30",
    location: "Teatro Municipal del Cusco (Calle Mesón de la Estrella 149)",
    city: "Cusco",
    capacity: "600 personas",
    duration: "75 minutos sin intermedio",
    concept: "Recital inmersivo en el corazón del Cusco antiguo. Una noche íntima para revivir las partituras clásicas del séptimo arte.",
    status: "soon",
  },
  {
    id: "lim-2026",
    title: "CINEFONÍA Nights - Gira Lima",
    date: "Sábado, 3 de Octubre de 2026",
    time: "20:00",
    location: "Auditorio Santa Úrsula (Av. Santo Toribio 150, San Isidro)",
    city: "Lima",
    capacity: "950 personas",
    duration: "75 minutos sin intermedio",
    concept: "Gran gala de cierre en la capital, adaptando las icónicas piezas cinematográficas con acústica optimizada.",
    status: "soon",
  },
];

export default function EventosPage() {
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
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Nuestra Agenda</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold uppercase text-white tracking-wide">
            Agenda de Conciertos
          </h1>
          <p className="max-w-xl mx-auto text-sm text-gray-400 mt-4 font-light leading-relaxed">
            Explora las fechas, locaciones y detalles técnicos de la temporada oficial de recitales CINEFONÍA Nights 2026.
          </p>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Dev Warning Badge */}
        <DevBadge message="Nota de Desarrollo: Las fechas de Cusco y Lima son estimaciones de gira y están sujetas a firma de contratos de teatros." />

        {/* Events Layout */}
        <div className="space-y-16 mt-12">
          {EVENTS.map((event, idx) => {
            const isFeatured = event.id === "aqp-2026";
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`p-8 sm:p-12 bg-brand-card/30 border flex flex-col justify-between transition-all duration-300 relative group ${
                  isFeatured ? "border-brand-gold/45 shadow-gold-glow" : "border-brand-gold/10"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-10 bg-brand-gold text-brand-bg text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 shadow-gold-glow">
                    Estreno Central
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: Title and Concept */}
                  <div className="lg:col-span-2 space-y-6">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-copper">
                      {event.city} • Concierto de Cámara
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-wide group-hover:text-brand-gold-light transition-colors">
                      {event.title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {event.concept}
                    </p>
                    
                    {/* Additional Details */}
                    {isFeatured && (
                      <div className="p-4 bg-brand-bg/50 border border-brand-gold/10 flex items-start space-x-3 text-xs text-gray-500">
                        <Info className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-300 uppercase tracking-wider mb-1">Información Importante</p>
                          <p>Concierto de 75 minutos continuos sin intermedios. Se solicita puntualidad estricta. Una vez iniciado el concierto, no se permitirá el ingreso a la sala hasta la primera pausa musical establecida.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Event specifications */}
                  <div className="bg-brand-bg/40 border border-brand-gold/5 p-6 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-300">
                        <Calendar className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Fecha y Hora</p>
                          <p className="font-medium">{event.date} • {event.time} hrs</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3 text-sm text-gray-300">
                        <MapPin className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Teatro / Locación</p>
                          <p className="font-medium">{event.location}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-sm text-gray-300">
                        <Clock className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Duración</p>
                          <p className="font-medium">{event.duration}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 text-sm text-gray-300">
                        <Users className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase text-gray-500 font-semibold tracking-wider">Aforo de la Sala</p>
                          <p className="font-medium">{event.capacity}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-brand-gold/10">
                      {event.status === "active" ? (
                        <button className="w-full py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-bold tracking-widest uppercase text-xs transition-colors shadow-gold-glow">
                          Comprar Entrada
                        </button>
                      ) : (
                        <button disabled className="w-full py-3 bg-gray-800 text-gray-500 font-bold tracking-widest uppercase text-xs cursor-not-allowed">
                          Próximamente
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
