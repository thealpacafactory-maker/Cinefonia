"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate: string;
  variant?: "hero" | "dark" | "light" | "compact";
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export default function CountdownTimer({
  targetDate,
  variant = "dark",
  className = "",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false,
      };
    };

    // Initial sync
    setTimeLeft(calculateTimeLeft());

    // Timer tick every 1s
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Skeleton during SSR / hydration
  if (!timeLeft) {
    return (
      <div className={`inline-flex items-center justify-center space-x-2 opacity-50 ${className}`}>
        <div className="h-6 w-28 bg-white/10 animate-pulse" />
      </div>
    );
  }

  if (timeLeft.isExpired) {
    return (
      <div className={`inline-flex items-center space-x-2 font-serif text-xs font-bold uppercase tracking-widest text-brand-gold ${className}`}>
        <Clock className="h-4 w-4 text-brand-gold" />
        <span>¡Evento Realizado!</span>
      </div>
    );
  }

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center space-x-2 font-mono text-xs font-semibold ${className}`}>
        <Clock className="h-3.5 w-3.5 text-brand-gold" />
        <span>
          {timeLeft.days}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m {formatNumber(timeLeft.seconds)}s
        </span>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div className={`flex items-center justify-center gap-3 sm:gap-6 ${className}`}>
        <div className="flex flex-col items-center bg-[#121E36]/90 border border-brand-gold/30 p-3 sm:p-4 min-w-[65px] sm:min-w-[85px] shadow-gold-glow backdrop-blur-md">
          <span className="font-serif text-2xl sm:text-4xl font-bold text-white leading-none">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold mt-1.5">
            DÍAS
          </span>
        </div>

        <span className="font-serif text-xl sm:text-3xl text-brand-gold/50 font-light">:</span>

        <div className="flex flex-col items-center bg-[#121E36]/90 border border-brand-gold/30 p-3 sm:p-4 min-w-[65px] sm:min-w-[85px] shadow-gold-glow backdrop-blur-md">
          <span className="font-serif text-2xl sm:text-4xl font-bold text-white leading-none">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold mt-1.5">
            HORAS
          </span>
        </div>

        <span className="font-serif text-xl sm:text-3xl text-brand-gold/50 font-light">:</span>

        <div className="flex flex-col items-center bg-[#121E36]/90 border border-brand-gold/30 p-3 sm:p-4 min-w-[65px] sm:min-w-[85px] shadow-gold-glow backdrop-blur-md">
          <span className="font-serif text-2xl sm:text-4xl font-bold text-white leading-none">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold mt-1.5">
            MINUTOS
          </span>
        </div>

        <span className="font-serif text-xl sm:text-3xl text-brand-gold/50 font-light">:</span>

        <div className="flex flex-col items-center bg-[#121E36]/90 border border-brand-gold/30 p-3 sm:p-4 min-w-[65px] sm:min-w-[85px] shadow-gold-glow backdrop-blur-md">
          <span className="font-serif text-2xl sm:text-4xl font-bold text-white leading-none text-gradient-gold">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold mt-1.5">
            SEGUNDOS
          </span>
        </div>
      </div>
    );
  }

  if (variant === "light") {
    return (
      <div className={`flex items-center gap-2 sm:gap-4 ${className}`}>
        <div className="flex flex-col items-center bg-white border border-[#E5E7EB] px-3 py-2 min-w-[50px] shadow-sm">
          <span className="font-serif text-lg font-bold text-[#111827] leading-none">
            {formatNumber(timeLeft.days)}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#6B7280] mt-1">
            DÍAS
          </span>
        </div>

        <span className="text-xs text-[#9CA3AF] font-bold">:</span>

        <div className="flex flex-col items-center bg-white border border-[#E5E7EB] px-3 py-2 min-w-[50px] shadow-sm">
          <span className="font-serif text-lg font-bold text-[#111827] leading-none">
            {formatNumber(timeLeft.hours)}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#6B7280] mt-1">
            HORAS
          </span>
        </div>

        <span className="text-xs text-[#9CA3AF] font-bold">:</span>

        <div className="flex flex-col items-center bg-white border border-[#E5E7EB] px-3 py-2 min-w-[50px] shadow-sm">
          <span className="font-serif text-lg font-bold text-[#111827] leading-none">
            {formatNumber(timeLeft.minutes)}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#6B7280] mt-1">
            MINS
          </span>
        </div>

        <span className="text-xs text-[#9CA3AF] font-bold">:</span>

        <div className="flex flex-col items-center bg-white border border-[#E5E7EB] px-3 py-2 min-w-[50px] shadow-sm">
          <span className="font-serif text-lg font-bold text-[#ad6e4f] leading-none">
            {formatNumber(timeLeft.seconds)}
          </span>
          <span className="text-[8px] font-bold uppercase tracking-wider text-[#ad6e4f] mt-1">
            SEGS
          </span>
        </div>
      </div>
    );
  }

  // Default Dark Variant
  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <div className="flex flex-col items-center bg-[#0A1326] border border-brand-gold/20 px-3 py-2 min-w-[55px]">
        <span className="font-serif text-base font-bold text-white leading-none">
          {formatNumber(timeLeft.days)}
        </span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-brand-gold mt-1">
          DÍAS
        </span>
      </div>

      <span className="text-xs text-brand-gold/60 font-bold">:</span>

      <div className="flex flex-col items-center bg-[#0A1326] border border-brand-gold/20 px-3 py-2 min-w-[55px]">
        <span className="font-serif text-base font-bold text-white leading-none">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-brand-gold mt-1">
          HORAS
        </span>
      </div>

      <span className="text-xs text-brand-gold/60 font-bold">:</span>

      <div className="flex flex-col items-center bg-[#0A1326] border border-brand-gold/20 px-3 py-2 min-w-[55px]">
        <span className="font-serif text-base font-bold text-white leading-none">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-brand-gold mt-1">
          MINS
        </span>
      </div>

      <span className="text-xs text-brand-gold/60 font-bold">:</span>

      <div className="flex flex-col items-center bg-[#0A1326] border border-brand-gold/20 px-3 py-2 min-w-[55px]">
        <span className="font-serif text-base font-bold text-brand-gold leading-none">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="text-[8px] font-bold uppercase tracking-wider text-brand-gold mt-1">
          SEGS
        </span>
      </div>
    </div>
  );
}
