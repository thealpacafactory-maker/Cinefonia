"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink, Navigation } from "lucide-react";

export default function ComoLlegar() {
    const [imageError, setImageError] = useState(false);

    const mapsUrl = "https://www.google.com/maps/place/teatro+municipal+de+arequipa/data=!4m2!3m1!1s0x91424a572f11bea7:0xfc15c747b34823ab?sa=X&ved=1t:242&ictx=111";

    return (
        <section className="py-20 bg-[#FAF9F5] text-[#111827] relative border-t border-[#E5E7EB] overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#8A1C36]/5 rounded-full filter blur-[100px] pointer-events-none -translate-y-1/2 z-0" />
            <div className="absolute top-10 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none z-0" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-[#8A1C36] uppercase block mb-2 font-sans">
                        UBICACIÓN Y ACCESO
                    </span>
                    <h2 className="font-serif text-2xl sm:text-4xl font-semibold uppercase text-gray-850 tracking-wider">
                        ¿Cómo Llegar?
                    </h2>
                    <div className="flex items-center justify-center space-x-3 my-3">
                        <div className="w-10 h-[1px] bg-brand-gold/30" />
                        <span className="text-brand-gold text-xs font-serif">✦</span>
                        <div className="w-10 h-[1px] bg-brand-gold/30" />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Event details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="border border-[#8A1C36]/20 bg-white p-8 sm:p-10 shadow-md relative">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8A1C36]" />

                            <span className="text-xs font-bold tracking-[0.2em] text-[#8A1C36] uppercase block mb-4 font-sans">
                                Fecha Única
                            </span>

                            <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase text-[#111827] tracking-wider mb-6 leading-tight">
                                UNA SOLA NOCHE. <br />UN ESCENARIO HISTÓRICO.
                            </h3>

                            <div className="space-y-5 text-sm sm:text-base border-t border-[#F3F4F6] pt-6 mb-8">

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-none border border-[#8A1C36]/20 flex items-center justify-center text-[#8A1C36] bg-[#FAF8F5] flex-shrink-0">
                                        <Calendar className="h-4 w-4" />
                                    </div>
                                    <div className="pt-0.5">
                                        <span className="text-xs text-[#6B7280] block font-sans uppercase tracking-wider">Fecha y Hora</span>
                                        <span className="font-medium text-[#111827]">22 de agosto de 2026 • 7:30 p. m.</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-none border border-[#8A1C36]/20 flex items-center justify-center text-[#8A1C36] bg-[#FAF8F5] flex-shrink-0">
                                        <Clock className="h-4 w-4" />
                                    </div>
                                    <div className="pt-0.5">
                                        <span className="text-xs text-[#6B7280] block font-sans uppercase tracking-wider">Acceso</span>
                                        <span className="font-medium text-[#111827]">Apertura de puertas: 7:00 p. m.</span>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-8 h-8 rounded-none border border-[#8A1C36]/20 flex items-center justify-center text-[#8A1C36] bg-[#FAF8F5] flex-shrink-0">
                                        <MapPin className="h-4 w-4" />
                                    </div>
                                    <div className="pt-0.5">
                                        <span className="text-xs text-[#6B7280] block font-sans uppercase tracking-wider">Lugar</span>
                                        <span className="font-medium text-[#111827] block">Teatro Municipal de Arequipa</span>
                                        <span className="text-xs text-gray-500 font-light block">Calle Mercaderes 239, Cercado, Arequipa</span>
                                    </div>
                                </div>

                            </div>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2.5 w-full sm:w-auto px-8 py-4 bg-[#8A1C36] hover:bg-[#5E0B1F] text-white font-bold tracking-widest uppercase text-xs transition-colors shadow-sm"
                            >
                                <Navigation className="h-4 w-4 fill-current" />
                                <span>Cómo Llegar</span>
                                <ExternalLink className="h-3 w-3 opacity-60" />
                            </motion.a>

                        </div>
                    </motion.div>

                    {/* Right Column: Image container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] w-full bg-[#EFECE6] border-2 border-white shadow-lg overflow-hidden relative group">

                            {!imageError ? (
                                <Image
                                    src="/teatro-municipal.jpg"
                                    alt="Teatro Municipal de Arequipa"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                // Elegant fallback view if image doesn't exist yet
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#EFECE8] to-[#DDD9CE]">
                                    <div className="w-16 h-16 rounded-full border border-[#8A1C36]/30 flex items-center justify-center text-[#8A1C36]/70 mb-4 bg-white/40">
                                        <MapPin className="h-8 w-8 stroke-[1.2]" />
                                    </div>
                                    <h4 className="font-serif text-[#1D0A0E] text-lg font-bold tracking-wide uppercase mb-1">
                                        Teatro Municipal de Arequipa
                                    </h4>
                                    <p className="text-xs text-gray-500 font-light max-w-xs leading-relaxed">
                                        [ Imagen del escenario o fachada del Teatro ]
                                    </p>
                                    <p className="text-[10px] text-brand-gold tracking-[0.2em] font-semibold uppercase mt-6">
                                        CINEFONÍA SECCIÓN
                                    </p>
                                </div>
                            )}

                            {/* Overlay decoration */}
                            <div className="absolute inset-0 border border-[#8A1C36]/10 pointer-events-none m-3" />

                            {/* Badge */}
                            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#FAF9F5] flex items-center space-x-1 sm:space-x-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                <span>Escenario Histórico</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
