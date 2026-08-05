"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Building, Sparkles } from "lucide-react";
import CountdownTimer from "@/components/ui/CountdownTimer";

export default function Hero() {
  const mainEventIsoDate = "2026-08-22T19:30:00-05:00";

  return (
    <section className="relative min-h-screen w-full bg-[#FAF9F5] overflow-hidden flex items-center">

      {/* Dynamic Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A1C36]/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B62F4A]/10 rounded-full filter blur-[140px] pointer-events-none animate-pulse-glow z-0" style={{ animationDelay: "2s" }} />

      {/* Capa de Imágenes de Fondo */}
      {/* Imagen Izquierda (Catedral de Arequipa) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-y-0 left-0 w-full md:w-1/2 z-0 opacity-45 md:opacity-55"
        style={{
          maskImage: "linear-gradient(to right, black 25%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 25%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/catedral-aqp.jpeg"
          alt="Catedral de Arequipa"
          fill
          priority={true}
          style={{ objectFit: "cover", objectPosition: "50% center" }}
        />
      </motion.div>

      {/* Imagen Derecha (Músicos de Cámara) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.45, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        className="absolute inset-y-0 right-0 w-full md:w-2/3 z-0 opacity-45 md:opacity-60"
        style={{
          maskImage: "linear-gradient(to left, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 45%, transparent 100%)",
        }}
      >
        <Image
          src="/images/hero/recital.jpg"
          alt="Ensamble de Cámara CINEFONÍA"
          fill
          priority={true}
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </motion.div>

      {/* Oscurecimiento central y gradiente teatral */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/70 to-[#FAF9F5]/30 z-5 pointer-events-none" />

      {/* Capa de Contenido Principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl text-left">

          {/* Badge de Gran Estreno Animado */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 border border-[#8A1C36]/30 bg-[#FFFFFF]/90 backdrop-blur-md text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#8A1C36] mb-6 shadow-gold-glow cursor-default"
          >
            <Sparkles className="h-3.5 w-3.5 text-[#8A1C36] animate-pulse" />
            <span>Gran Estreno</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] text-[#8A1C36] uppercase mb-3 font-sans"
          >
            LA MÚSICA DEL CINE, VIVIDA EN ESCENA
          </motion.p>

          {/* Title con Gradient y Glow */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#1D0A0E] mb-6 uppercase leading-none text-glow-gold"
          >
            CINEFONÍA <br className="hidden sm:inline" />
            <span className="text-gradient-gold">Nights</span>
          </motion.h1>

          {/* Metadata Grid Horizontal Animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            whileHover={{ borderColor: "rgba(138, 28, 54, 0.4)" }}
            className="flex flex-row flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-800 font-medium uppercase tracking-widest border-y border-[#8A1C36]/25 py-4 mb-6 bg-white/50 backdrop-blur-md max-w-xl transition-all"
          >
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#8A1C36] flex-shrink-0" />
              <span>22 de agosto de 2026</span>
            </div>

            <span className="text-[#8A1C36] font-bold text-xs">◆</span>

            <div className="flex items-center space-x-2">
              <Building className="h-4 w-4 text-[#8A1C36] flex-shrink-0" />
              <span>Teatro Municipal de Arequipa</span>
            </div>
          </motion.div>

          {/* Cronómetro con Animación de Entrada y Borde Flotante */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8 bg-white/80 border border-[#8A1C36]/30 p-4 backdrop-blur-lg max-w-xl shadow-gold-glow rounded-none relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#8A1C36]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#8A1C36] uppercase block mb-3 font-sans">
              TIEMPO RESTANTE PARA EL ESTRENO
            </span>
            <div className="flex justify-start">
              <CountdownTimer targetDate={mainEventIsoDate} variant="light" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.75 }}
            className="text-gray-700 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg"
          >
            Un recital exclusivo de música de cámara y cine en vivo. 75 minutos sin intermedios, recorriendo las bandas sonoras más emotivas de la historia en un formato inmersivo y de alta fidelidad.
          </motion.p>

          {/* Botones de Acción con Animaciones Interactivas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-row flex-wrap gap-4 items-center"
          >
            {/* Botón 1: Joinnus con efecto Hover Zoom */}
            <motion.a
              whileHover={{ scale: 1.04, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="https://joinnus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 px-7 py-4 bg-[#8A1C36] hover:bg-[#5E0B1F] text-white font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 shadow-copper-glow rounded-none group"
            >
              <span>ENTRADAS EN</span>
              <div className="relative w-16 h-4.5 overflow-hidden filter brightness-100 group-hover:brightness-110 transition-all">
                <Image
                  src="/images/brands/joinnus.svg"
                  alt="Joinnus Logo"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </motion.a>

            {/* Botón 2: Ver Recital con Hover Slide */}
            <motion.div whileHover={{ scale: 1.03, translateY: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/eventos"
                className="inline-flex items-center justify-center px-7 py-4 bg-white/90 hover:bg-white border border-gray-300 hover:border-[#8A1C36]/50 text-gray-800 font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 rounded-none shadow-sm"
              >
                VER RECITAL &rarr;
              </Link>
            </motion.div>

            {/* Botón 3: Auspiciar con Borde Dorado Shimmer */}
            <motion.div whileHover={{ scale: 1.03, translateY: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/quiero-auspiciar"
                className="inline-flex items-center justify-center px-7 py-4 border border-[#8A1C36] hover:bg-[#8A1C36] hover:text-white text-[#8A1C36] font-bold tracking-widest uppercase text-[10px] sm:text-xs transition-all duration-300 rounded-none bg-transparent"
              >
                QUIERO AUSPICIAR
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
