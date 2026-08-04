"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Recitales() {
  const events = [
    {
      id: "aqp-2026",
      day: "22",
      monthYear: "AGO 2026",
      title: "Cinefonía Nights",
      location: "Teatro Municipal de Arequipa",
      city: "Arequipa",
      status: "active",
      href: "/eventos"
    },
    {
      id: "cus-2026",
      day: "19",
      monthYear: "DIC 2026",
      title: "Cinefonía Nights",
      location: "Teatro Municipal de Arequipa",
      city: "Arequipa",
      status: "soon",
      href: "/eventos"
    }
  ];

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

        {/* Cards Grid matching PDF page 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-[#E5E7EB] p-6 sm:p-8 flex items-stretch space-x-6 shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Date Box */}
              <div className="flex flex-col items-center justify-center border-r border-[#E5E7EB] pr-6 flex-shrink-0">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-[#1F2937] leading-none">
                  {event.day}
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#6B7280] uppercase mt-1">
                  {event.monthYear}
                </span>
              </div>

              {/* Text details */}
              <div className="flex flex-col justify-between flex-1 py-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111827] tracking-tight mb-2">
                    {event.title} <span className="italic text-[#6B7280] font-light text-lg">Nights</span>
                  </h3>
                  <p className="text-xs text-[#4B5563] font-light leading-snug">
                    {event.location}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={event.href}
                    className="inline-flex items-center text-[11px] font-bold tracking-widest text-[#B87A4B] uppercase hover:text-[#8C552E] group-hover:translate-x-1 transition-all"
                  >
                    <span>VER DETALLES</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
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
