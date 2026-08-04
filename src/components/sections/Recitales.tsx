"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket } from "lucide-react";

interface Recital {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  city: string;
  status: "active" | "soon" | "soldout";
  isFeatured?: boolean;
}

const EVENTS: Recital[] = [
  {
    id: "aqp-2026",
    title: "CINEFONÍA Nights - Estreno Arequipa",
    date: "2026-08-22",
    time: "19:30",
    location: "Teatro Municipal de Arequipa",
    city: "Arequipa",
    status: "active",
    isFeatured: true,
  },
  {
    id: "cus-2026",
    title: "CINEFONÍA Nights - Gira Cusco",
    date: "2026-09-12",
    time: "19:30",
    location: "Teatro Municipal del Cusco",
    city: "Cusco",
    status: "soon",
  },
  {
    id: "lim-2026",
    title: "CINEFONÍA Nights - Gira Lima",
    date: "2026-10-03",
    time: "20:00",
    location: "Auditorio Santa Úrsula",
    city: "Lima",
    status: "soon",
  },
];

export default function Recitales() {
  return (
    <section className="py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-3">Cartelera de Conciertos</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold uppercase text-white tracking-wide">
            Próximos Recitales
          </h2>
          <div className="mt-4 w-16 h-[1.5px] bg-brand-gold mx-auto" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EVENTS.map((event, idx) => {
            const isAqp = event.id === "aqp-2026";
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative glass-panel glass-panel-hover flex flex-col justify-between p-8 group ${
                  event.isFeatured ? "border-brand-gold/40 shadow-gold-glow" : ""
                }`}
              >
                {/* Featured Badge */}
                {event.isFeatured && (
                  <div className="absolute -top-3.5 left-8 bg-brand-gold text-brand-bg text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                    Evento Principal
                  </div>
                )}

                <div>
                  {/* City */}
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold block mb-2">
                    {event.city}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-6 leading-snug group-hover:text-brand-gold-light transition-colors">
                    {event.title}
                  </h3>

                  {/* Details */}
                  <div className="space-y-4 mb-8 text-sm text-gray-400">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-4.5 w-4.5 text-brand-gold flex-shrink-0" />
                      <span>
                        {isAqp ? "Sábado, 22 de Agosto de 2026" : event.date} • {event.time} hrs
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-6 border-t border-brand-gold/10 flex items-center justify-between">
                  <span className="text-xs uppercase font-medium tracking-wider">
                    {event.status === "active" ? (
                      <span className="text-emerald-400 font-semibold animate-pulse">Entradas Disponibles</span>
                    ) : event.status === "soldout" ? (
                      <span className="text-red-400 font-semibold">Agotado</span>
                    ) : (
                      <span className="text-gray-500">Próximamente</span>
                    )}
                  </span>

                  <Link
                    href={`/eventos`}
                    className={`inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest transition-colors ${
                      event.status === "active"
                        ? "text-brand-gold hover:text-brand-gold-light"
                        : "text-gray-500 cursor-not-allowed pointer-events-none"
                    }`}
                  >
                    <span>{event.status === "active" ? "Comprar" : "Detalles"}</span>
                    {event.status === "active" && <Ticket className="h-4 w-4" />}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
