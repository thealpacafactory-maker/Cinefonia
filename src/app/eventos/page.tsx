"use client";

import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Disc, Sliders, Timer, Sparkles } from "lucide-react";
import Link from "next/link";
import eventosData from "@/data/eventos.json";

export default function EventosPage() {
  const aqpEvent = eventosData.find((e) => e.id === "aqp-2026") || eventosData[0];

  return (
    <div className="min-h-screen py-16 bg-[#FAF9F5] text-gray-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:underline transition-colors font-sans">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3 font-sans">MEMORIA DESCRIPTIVA Y PROGRAMA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-gray-850 tracking-wider">
            Detalle del Concierto
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
            Teatro Municipal de Arequipa • 22 de Agosto de 2026
          </p>
        </div>

        {/* Main Event Card */}
        <div className="bg-white border border-[#8A1C36]/20 p-8 sm:p-12 mb-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-150">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8A1C36] font-sans">
                Estreno Oficial Arequipa
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-gray-850">
                {aqpEvent.title}
              </h2>
              <p className="text-sm text-gray-650 font-light leading-relaxed font-sans">
                {aqpEvent.concept}
              </p>
            </div>

            <div className="bg-[#FAF9F5] p-6 border border-gray-200/80 space-y-3 text-xs font-sans">
              <div className="flex items-center justify-between text-gray-650">
                <span className="text-gray-500 flex items-center"><Calendar className="h-3.5 w-3.5 text-brand-gold mr-2" /> Fecha:</span>
                <span className="font-semibold text-gray-800">{aqpEvent.date}</span>
              </div>
              <div className="flex items-center justify-between text-gray-650">
                <span className="text-gray-500 flex items-center"><Clock className="h-3.5 w-3.5 text-brand-gold mr-2" /> Hora:</span>
                <span className="font-semibold text-gray-800">{aqpEvent.time} hrs</span>
              </div>
              <div className="flex items-center justify-between text-gray-650">
                <span className="text-gray-500 flex items-center"><Users className="h-3.5 w-3.5 text-brand-gold mr-2" /> Aforo:</span>
                <span className="font-semibold text-gray-800">{aqpEvent.capacity}</span>
              </div>
              <div className="flex items-center justify-between text-gray-650">
                <span className="text-gray-500 flex items-center"><MapPin className="h-3.5 w-3.5 text-brand-gold mr-2" /> Lugar:</span>
                <span className="font-semibold text-gray-800 text-right">{aqpEvent.location}</span>
              </div>
            </div>
          </div>

          {/* 6 Moments Experience */}
          {aqpEvent.experiencePhases && (
            <div className="mb-12">
              <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-brand-gold mb-6 flex items-center font-sans">
                <Sparkles className="h-4 w-4 mr-2 text-[#8A1C36]" /> FASES DE LA EXPERIENCIA ESCÉNICA
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {aqpEvent.experiencePhases.map((phase) => (
                  <div key={phase.number} className="bg-[#FAF9F5] border border-gray-200 p-4 text-center shadow-xs">
                    <span className="font-serif text-2xl font-bold text-[#8A1C36] block mb-1">{phase.number}</span>
                    <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold font-sans">{phase.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Repertoire Breakdown */}
          {aqpEvent.repertoire && (
            <div className="mb-12 font-sans">
              <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-gray-150">
                <Disc className="h-5 w-5 text-[#8A1C36] animate-spin-slow" />
                <h3 className="font-serif text-base font-bold tracking-[0.2em] uppercase text-gray-805">
                  PROGRAMA MUSICAL OFICIAL (REPERTORIO)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aqpEvent.repertoire.map((block) => (
                  <div key={block.block} className="bg-[#FAF9F5] border border-gray-200 p-6 shadow-xs">
                    <div className="flex items-center justify-between mb-4 border-b border-gray-200/80 pb-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                        {block.block}
                      </span>
                      <span className="font-serif italic text-sm text-gray-700 font-bold">
                        {block.title}
                      </span>
                    </div>

                    <div className="space-y-4">
                      {block.pieces.map((piece, pIdx) => (
                        <div key={pIdx} className="text-xs">
                          <div className="flex justify-between font-semibold text-gray-800">
                            <span>• {piece.name}</span>
                            <span className="text-brand-gold font-semibold">{piece.movie} ({piece.year})</span>
                          </div>
                          <p className="text-[11px] text-gray-500 italic pl-3 font-light">Compositor: {piece.composer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Rider & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-gray-150 font-sans">

            {/* Technical Rider */}
            {aqpEvent.technicalRider && (
              <div className="bg-[#FAF9F5] p-6 border border-gray-200 shadow-xs">
                <div className="flex items-center space-x-2 mb-4 text-[#8A1C36]">
                  <Sliders className="h-4 w-4" />
                  <h4 className="font-serif text-xs font-bold tracking-[0.2em] uppercase text-gray-800">RIDER TÉCNICO (REQUERIMIENTOS)</h4>
                </div>
                <div className="space-y-3 text-xs text-gray-650">
                  <div>
                    <span className="font-semibold text-brand-gold uppercase text-[10px]">Escenario:</span>
                    <p className="font-light">{aqpEvent.technicalRider.stage.join(" • ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-gold uppercase text-[10px]">Sonido:</span>
                    <p className="font-light">{aqpEvent.technicalRider.sound.join(" • ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-gold uppercase text-[10px]">Iluminación:</span>
                    <p className="font-light">{aqpEvent.technicalRider.lighting.join(" • ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-brand-gold uppercase text-[10px]">Proyección:</span>
                    <p className="font-light">{aqpEvent.technicalRider.projection.join(" • ")}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Schedule */}
            {aqpEvent.technicalSchedule && (
              <div className="bg-[#FAF9F5] p-6 border border-gray-200/80 shadow-xs">
                <div className="flex items-center space-x-2 mb-4 text-[#8A1C36]">
                  <Timer className="h-4 w-4" />
                  <h4 className="font-serif text-xs font-bold tracking-[0.2em] uppercase text-gray-800">CRONOGRAMA TÉCNICO</h4>
                </div>
                <div className="space-y-2 text-xs">
                  {aqpEvent.technicalSchedule.map((item, sIdx) => (
                    <div key={sIdx} className="flex justify-between py-1.5 border-b border-gray-200/60 text-gray-650">
                      <span className="font-semibold">{item.activity}</span>
                      <span className="text-[#8A1C36] font-semibold">{item.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
