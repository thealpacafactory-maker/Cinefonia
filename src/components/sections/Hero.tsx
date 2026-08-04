"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-brand-bg pt-20">
      {/* Background Decorative Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,19,41,0.65)_0%,rgba(3,7,18,1)_85%)] z-10" />
      
      {/* Background Cinematic Texture Effect */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(circle_at_50%_120%,rgba(197,168,128,0.2),rgba(3,7,18,0))]" />

      {/* Cinematic Golden Glow Spots */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-copper/5 blur-[140px] pointer-events-none z-0" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 border border-brand-gold/25 bg-brand-card/60 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-8 shadow-gold-glow"
        >
          <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-pulse" />
          <span>Gran Estreno Cultural Arequipa 2026</span>
        </motion.div>

        {/* Animated Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-white mb-6 uppercase leading-tight"
        >
          CINEFONÍA <span className="text-gradient-gold text-glow-gold">Nights</span>
          <span className="block text-lg sm:text-2xl lg:text-3xl font-light tracking-[0.25em] text-gray-300 mt-4 normal-case font-sans">
            La música del cine, vivida en escena
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 font-light leading-relaxed mb-12"
        >
          Un recital exclusivo de música de cámara y cine en vivo. 75 minutos sin intermedios, recorriendo las bandas sonoras más emotivas de la historia en un formato inmersivo y de alta fidelidad.
        </motion.p>

        {/* Animated Details Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 text-xs sm:text-sm text-gray-300"
        >
          <div className="flex items-center space-x-2 bg-brand-card/45 px-5 py-2.5 border border-brand-gold/15 backdrop-blur-sm">
            <Calendar className="h-4.5 w-4.5 text-brand-gold" />
            <span className="tracking-widest uppercase">22 de Agosto de 2026 • 19:30</span>
          </div>
          <div className="flex items-center space-x-2 bg-brand-card/45 px-5 py-2.5 border border-brand-gold/15 backdrop-blur-sm">
            <MapPin className="h-4.5 w-4.5 text-brand-gold" />
            <span className="tracking-widest uppercase">Teatro Municipal de Arequipa</span>
          </div>
        </motion.div>

        {/* Animated CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/eventos"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 rounded-none bg-brand-gold hover:bg-brand-gold-light text-brand-bg font-semibold tracking-widest uppercase text-xs transition-all duration-300 shadow-gold-glow group"
          >
            <span>Ver Recital</span>
            <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/quiero-auspiciar"
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4.5 rounded-none border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white font-semibold tracking-widest uppercase text-xs transition-all duration-300 bg-brand-bg/25 backdrop-blur-sm"
          >
            Quiero Auspiciar
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-2 font-medium">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1.5px] h-8 bg-gradient-to-b from-brand-gold to-transparent"
        />
      </div>
    </section>
  );
}
