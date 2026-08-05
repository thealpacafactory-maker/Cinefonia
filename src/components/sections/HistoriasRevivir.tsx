"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Film } from "lucide-react";
import historiasData from "@/data/historias.json";

export default function HistoriasRevivir() {
    return (
        <section className="py-24 bg-[#FAF9F5] text-gray-805 border-t border-b border-gray-150 relative overflow-hidden">

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8A1C36]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.3em] text-[#8A1C36] uppercase block mb-3 font-sans">
                        REPERTORIO Y NOSTALGIA
                    </span>
                    <h2 className="font-serif text-3xl sm:text-5xl font-semibold uppercase text-gray-850 tracking-wider">
                        Historias a Revivir
                    </h2>
                    <div className="flex items-center justify-center space-x-3 my-4">
                        <div className="w-12 h-[1px] bg-brand-gold/30" />
                        <span className="text-brand-gold text-xs font-serif">✦</span>
                        <div className="w-12 h-[1px] bg-brand-gold/30" />
                    </div>
                    <p className="max-w-xl mx-auto text-sm text-gray-650 font-light leading-relaxed font-sans">
                        La banda sonora de las películas que definieron generaciones, reinterpretadas en vivo por nuestro ensamble de cámara.
                    </p>
                </div>

                {/* Stories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {historiasData.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white border border-gray-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#8A1C36]/30 transition-all duration-300 group"
                        >
                            <div>
                                {/* Movie Poster Image Box */}
                                <div className="aspect-[2/3] w-full bg-[#FAF9F5] mb-5 overflow-hidden relative border border-gray-150 group-hover:border-[#8A1C36]/25 transition-colors">
                                    <Image
                                        src={item.image}
                                        alt={item.movie}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-2 left-2 bg-[#8A1C36] px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest text-white z-10 flex items-center space-x-1 font-sans">
                                        <Film className="h-2.5 w-2.5" />
                                        <span>CINEFONÍA SELECCIÓN</span>
                                    </div>
                                </div>

                                <span className="text-[10px] font-bold tracking-widest text-brand-gold uppercase block mb-1.5 font-sans">
                                    {item.movie}
                                </span>

                                <h3 className="font-serif text-lg font-bold text-gray-805 mb-2 leading-snug group-hover:text-[#8A1C36] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-450 font-sans">
                                <span>Versión Ensamble</span>
                                <span className="text-[#8A1C36] font-semibold">En Vivo</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="flex justify-center mt-14">
                    <Link
                        href="/eventos"
                        className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8A1C36] hover:text-[#5E0B1F] border-b border-[#8A1C36]/30 pb-1 hover:border-[#5E0B1F] transition-all duration-300 group font-sans"
                    >
                        <span>Ver Todo el Programa</span>
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
