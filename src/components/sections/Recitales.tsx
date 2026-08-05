"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";
import eventosData from "@/data/eventos.json";

interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  isoDate?: string;
  location: string;
  city: string;
  status: string;
}

const EVENTS = eventosData as EventItem[];

export default function Recitales() {
  return (
    <section className="py-20 bg-[#F7F5F0] text-[#111827] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2">
            PRÓXIMOS RECITALES
          </h2>
          <div className="flex items-center justify-center space-x-3 mt-2">
            <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            <span className="text-[#9CA3AF] text-xs font-serif">✦</span>
            <div className="w-8 h-[1px] bg-[#9CA3AF]" />
          </div>
        </div>

        {/* Cards Grid matching PDF page 1 with Countdown Timers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {EVENTS.map((event, idx) => {
            const dayNumber = event.date.match(/\d+/)?.[0] || "22";
            const monthYear = event.date.includes("Agosto") || event.date.includes("AGO") ? "AGO 2026" : "DIC 2026";
            const targetIso = event.isoDate || (event.id === "aqp-2026" ? "2026-08-22T19:30:00-05:00" : "2026-12-19T19:30:00-05:00");
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="flex items-stretch space-x-6 mb-6">
                    {/* Date Box */}
                    <div className="flex flex-col items-center justify-center border-r border-[#E5E7EB] pr-6 flex-shrink-0">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#111827] leading-none">
                        {dayNumber}
                      </span>
                      <span className="text-[10px] font-semibold tracking-wider text-[#6B7280] uppercase mt-1">
                        {monthYear}
                      </span>
                    </div>

                    {/* Text details */}
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111827] tracking-tight mb-1">
                          {event.title.split("-")[0]} <span className="italic text-[#6B7280] font-light text-lg">Nights</span>
                        </h3>
                        <p className="text-xs text-[#4B5563] font-light leading-snug">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Live Countdown Timer per event */}
                  <div className="bg-[#FAF8F5] border border-[#E5E7EB] p-3 mb-4">
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#6B7280] block mb-2 text-center">
                      TIEMPO RESTANTE
                    </span>
                    <div className="flex justify-center">
                      <CountdownTimer targetDate={targetIso} variant="light" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ad6e4f]">
                    {event.status === "active" ? "Entradas Disponibles" : "Próximamente"}
                  </span>

                  <Link
                    href="/eventos"
                    className="inline-flex items-center text-[11px] font-bold tracking-widest text-[#ad6e4f] uppercase hover:text-[#7d492e] group-hover:translate-x-1 transition-all"
                  >
                    <span>VER DETALLES</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <Link
            href="/eventos"
            className="inline-flex items-center px-8 py-3 border border-[#374151] text-xs font-semibold tracking-[0.2em] text-[#374151] uppercase hover:bg-[#374151] hover:text-white transition-colors"
          >
            VER TODOS LOS EVENTOS
          </Link>
        </div>

      </div>
    </section>
  );
}
