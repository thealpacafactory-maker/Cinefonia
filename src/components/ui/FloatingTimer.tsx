"use client";

import React, { useState, useEffect } from "react";
import CountdownTimer from "./CountdownTimer";
import { Clock } from "lucide-react";

export default function FloatingTimer() {
    const [mounted, setMounted] = useState(false);
    const targetDate = "2026-08-22T19:30:00-05:00";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-right hidden sm:block">
            <div className="bg-white/90 backdrop-blur-md border border-[#8A1C36]/20 shadow-xl px-4 py-2.5 flex items-center space-x-3 rounded-none hover:border-[#8A1C36]/40 transition-all duration-300">
                <div className="flex items-center justify-center w-8 h-8 bg-[#8A1C36]/5 text-[#8A1C36] border border-[#8A1C36]/10">
                    <Clock className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#8A1C36] uppercase leading-none mb-1 font-sans">
                        CINEFONÍA NIGHTS
                    </span>
                    <CountdownTimer targetDate={targetDate} variant="compact" className="text-gray-800 font-semibold" />
                </div>
            </div>
        </div>
    );
}
