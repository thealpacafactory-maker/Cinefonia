"use client";

import React from "react";
import { Calendar, MapPin, Clock, Users, ArrowLeft, Disc, Sliders, Timer, Sparkles } from "lucide-react";
import Link from "next/link";
import eventosData from "@/data/eventos.json";

export default function EventosPage() {
  const aqpEvent = eventosData.find((e) => e.id === "aqp-2026") || eventosData[0];

  return (
    <div className="min-h-screen py-16 bg-[#070D1D] text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8 pt-10">
          <Link href="/" className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Header Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] text-brand-gold uppercase block mb-3">MEMORIA DESCRIPTIVA Y PROGRAMA</span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal uppercase text-white tracking-wider">
            Detalle del Concierto
          </h1>
          <div className="flex items-center justify-center space-x-3 my-4">
            <div className="w-12 h-[1px] bg-brand-gold/30" />
            <span className="text-brand-gold text-xs font-serif">✦</span>
            <div className="w-12 h-[1px] bg-brand-gold/30" />
          </div>
          <p className="max-w-2xl mx-auto text-sm text-gray-400 font-light leading-relaxed">
            Teatro Municipal de Arequipa • 22 de Agosto de 2026
          </p>
        </div>

        {/* Main Event Card */}
        <div className="bg-[#0B1329] border border-brand-gold/30 p-8 sm:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 pb-8 border-b border-brand-gold/15">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Estreno Oficial Arequipa
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-normal text-white">
                {aqpEvent.title}
              </h2>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {aqpEvent.concept}
              </p>
            </div>
            
            <div className="bg-[#050914] p-6 border border-brand-gold/15 space-y-3 text-xs">
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400 flex items-center"><Calendar className="h-3.5 w-3.5 text-brand-gold mr-2" /> Fecha:</span>
                <span className="font-medium">{aqpEvent.date}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400 flex items-center"><Clock className="h-3.5 w-3.5 text-brand-gold mr-2" /> Hora:</span>
                <span className="font-medium">{aqpEvent.time} hrs</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400 flex items-center"><Users className="h-3.5 w-3.5 text-brand-gold mr-2" /> Aforo:</span>
                <span className="font-medium">{aqpEvent.capacity}</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span className="text-gray-400 flex items-center"><MapPin className="h-3.5 w-3.5 text-brand-gold mr-2" /> Lugar:</span>
                <span className="font-medium text-right">{aqpEvent.location}</span>
              </div>
            </div>
          </div>

          {/* 6 Moments Experience */}
          {aqpEvent.experiencePhases && (
            <div className="mb-12">
              <h3 className="font-serif text-xs font-bold tracking-[0.25em] uppercase text-brand-gold mb-6 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" /> FASES DE LA EXPERIENCIA ESCÉNICA
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {aqpEvent.experiencePhases.map((phase) => (
                  <div key={phase.number} className="bg-[#050914] border border-brand-gold/10 p-4 text-center">
                    <span className="font-serif text-xl font-bold text-brand-gold block mb-1">{phase.number}</span>
                    <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">{phase.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Repertoire Breakdown */}
          {aqpEvent.repertoire && (
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6 pb-2 border-b border-brand-gold/15">
                <Disc className="h-5 w-5 text-brand-gold" />
                <h3 className="font-serif text-base font-bold tracking-[0.2em] uppercase text-white">
                  PROGRAMA MUSICAL OFICIAL (REPERTORIO)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aqpEvent.repertoire.map((block) => (
                  <div key={block.block} className="bg-[#050914] border border-brand-gold/15 p-6">
                    <div className="flex items-center justify-between mb-4 border-b border-brand-gold/10 pb-2">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-gold">
                        {block.block}
                      </span>
                      <span className="font-serif italic text-sm text-gray-200">
                        {block.title}
                      </span>
                    </div>

                    <div className="space-y-3">
                      {block.pieces.map((piece, pIdx) => (
                        <div key={pIdx} className="text-xs">
                          <div className="flex justify-between font-semibold text-white">
                            <span>• {piece.name}</span>
                            <span className="text-brand-gold/80 font-normal">{piece.movie} ({piece.year})</span>
                          </div>
                          <p className="text-[11px] text-gray-400 italic pl-3 font-light">Compositor: {piece.composer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Rider & Schedule */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 border-t border-brand-gold/15">
            
            {/* Technical Rider */}
            {aqpEvent.technicalRider && (
              <div className="bg-[#050914] p-6 border border-brand-gold/15">
                <div className="flex items-center space-x-2 mb-4 text-brand-gold">
                  <Sliders className="h-4 w-4" />
                  <h4 className="font-serif text-xs font-bold tracking-[0.2em] uppercase text-white">RIDER TÉCNICO (REQUERIMIENTOS)</h4>
                </div>
                <div className="space-y-3 text-xs text-gray-300">
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
              <div className="bg-[#050914] p-6 border border-brand-gold/15">
                <div className="flex items-center space-x-2 mb-4 text-brand-gold">
                  <Timer className="h-4 w-4" />
                  <h4 className="font-serif text-xs font-bold tracking-[0.2em] uppercase text-white">CRONOGRAMA TÉCNICO</h4>
                </div>
                <div className="space-y-2 text-xs">
                  {aqpEvent.technicalSchedule.map((item, sIdx) => (
                    <div key={sIdx} className="flex justify-between py-1.5 border-b border-white/5 text-gray-300">
                      <span className="font-medium">{item.activity}</span>
                      <span className="text-brand-gold font-serif">{item.duration}</span>
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
