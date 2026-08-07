"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Ticket, Calendar, MapPin } from "lucide-react";

export default function TicketCTA() {
    const [imageError, setImageError] = useState(false);

    return (
        <section className="relative py-24 text-white overflow-hidden text-center">
            {/* Background Container */}
            <div className="absolute inset-0 bg-[#1D0A0E] z-0">
                {!imageError ? (
                    <Image
                        src="/images/banner-entradas.jpg"
                        alt="Fondo Venta de Entradas"
                        fill
                        sizes="100vw"
                        className="object-cover opacity-35 transition-transform duration-10000 ease-out hover:scale-105"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    // Rich fallback gradient if image not present yet
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2D0F16] via-[#1D0A0E] to-[#40121C]" />
                )}

                {/* Modern dark red theatrical overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D0A0E] via-[#1D0A0E]/75 to-transparent z-10" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                {/* Mini Accent Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center space-x-3 mb-6"
                >
                    <div className="w-6 h-[1.5px] bg-[#8A1C36]" />
                    <span className="text-[10px] font-bold tracking-[0.35em] text-[#8A1C36] uppercase font-sans">
                        Recital Exclusivo
                    </span>
                    <div className="w-6 h-[1.5px] bg-[#8A1C36]" />
                </motion.div>

                {/* Solo una función */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="font-serif text-3xl sm:text-5xl font-extrabold uppercase tracking-widest text-[#FAF9F5] leading-tight mb-4"
                >
                    Solo una función en agosto
                </motion.h2>

                {/* Fecha y lugar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-gray-305 tracking-wide mb-10 max-w-lg mx-auto font-sans"
                >
                    <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/5">
                        <Calendar className="h-4 w-4 text-[#8A1C36]" />
                        <span>22 de agosto de 2026</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/5">
                        <MapPin className="h-4 w-4 text-[#8A1C36]" />
                        <span>Teatro Municipal de Arequipa</span>
                    </div>
                </motion.div>

                {/* Buy Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                    className="flex justify-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.04, translateY: -3 }}
                        whileTap={{ scale: 0.98 }}
                        href={process.env.NEXT_PUBLIC_JOINNUS_URL || "https://www.joinnus.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-8 py-4.5 bg-[#8A1C36] hover:bg-[#5E0B1F] text-white font-bold tracking-[0.2em] uppercase text-xs transition-all duration-300 shadow-lg border border-[#8A1C36]/50 group"
                    >
                        <Ticket className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Comprar entradas en</span>
                        <div className="relative w-48 h-11 overflow-hidden filter brightness-100 group-hover:brightness-110 transition-all ml-1.5 flex items-center">
                            <Image
                                src="/images/brands/joinnus.png"
                                alt="Joinnus"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </motion.a>
                </motion.div>

            </div>

            {/* Bottom theatrical line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A1C36]/30 to-transparent" />
        </section>
    );
}
