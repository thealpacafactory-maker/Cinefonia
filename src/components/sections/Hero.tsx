"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#070D1D] pt-24 pb-16">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,19,41,0.75)_0%,rgba(7,13,29,1)_90%)] z-10" />
      
      {/* Cinematic Golden Glow Spots */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-[150px] pointer-events-none z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        
        {/* Animated Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <h1 className="font-serif text-4xl sm:text-7xl lg:text-8xl font-normal tracking-[0.2em] text-white uppercase leading-tight">
            CINEFONÍA
          </h1>
          <span className="font-serif italic text-3xl sm:text-6xl lg:text-7xl text-[#8EA4C8] block font-normal tracking-wide mt-1">
            Nights
          </span>
        </motion.div>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-sm sm:text-xl lg:text-2xl text-gray-300 font-light tracking-[0.25em] uppercase mb-10"
        >
          LA MÚSICA DEL CINE, VIVIDA EN ESCENA
        </motion.p>

        {/* Separator icon */}
        <div className="flex items-center justify-center space-x-4 mb-10">
          <div className="w-12 h-[1px] bg-brand-gold/30" />
          <span className="text-brand-gold text-xs font-serif">✦</span>
          <div className="w-12 h-[1px] bg-brand-gold/30" />
        </div>

        {/* Date and Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 px-6 py-3 bg-[#0B1329]/80 border border-brand-gold/30 backdrop-blur-md mb-12 text-xs sm:text-sm text-gray-200"
        >
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-brand-gold" />
            <span className="tracking-widest uppercase font-medium">22 de agosto de 2026</span>
          </div>
          <span className="hidden sm:inline text-brand-gold/50">•</span>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-brand-gold" />
            <span className="tracking-widest uppercase font-medium">Teatro Municipal de Arequipa</span>
          </div>
        </motion.div>

        {/* Action Buttons matching PDF reference */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/eventos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#B87A4B] hover:bg-[#a3683a] text-white font-semibold tracking-[0.2em] uppercase text-xs transition-all duration-300 group shadow-lg"
          >
            <span>VER RECITAL</span>
            <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/quiero-auspiciar"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-white/30 hover:border-brand-gold text-white hover:text-brand-gold font-semibold tracking-[0.2em] uppercase text-xs transition-all duration-300 bg-black/20 backdrop-blur-sm"
          >
            QUIERO AUSPICIAR
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
