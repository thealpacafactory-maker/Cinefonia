"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Clock, X } from "lucide-react";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    icon: React.ComponentType<{ className?: string }>;
    label: string;
}

export default function FaqSection() {
    const [activeId, setActiveId] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: "¿Cuándo es?",
            label: "FECHA Y HORA",
            icon: Calendar,
            answer: "El recital CINEFONÍA Nights se estrenará el Sábado 22 de Agosto de 2026 a las 19:30 horas (7:30 PM). Se recomienda llegar con 20 minutos de anticipación al teatro."
        },
        {
            id: 2,
            question: "¿Dónde se realiza?",
            label: "UBICACIÓN Y SEDE",
            icon: MapPin,
            answer: "Se llevará a cabo en el histórico Teatro Municipal de Arequipa (Calle Mercaderes 239, Arequipa, Perú), un escenario idóneo para la acústica íntima del concierto."
        },
        {
            id: 3,
            question: "¿Cuánto dura?",
            label: "DURACIÓN DEL ESPECTÁCULO",
            icon: Clock,
            answer: "El espectáculo tiene una duración continua de 75 minutos (1 hora y 15 minutos) de pura música y emoción, interpretada sin intermedios."
        }
    ];

    const activeFAQ = faqs.find((f) => f.id === activeId);

    return (
        <section className="py-20 bg-white border-t border-gray-100 text-gray-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-[0.3em] text-[#8A1C36] uppercase block mb-3">CONSULTAS FRECUENTES</span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal uppercase text-gray-900 tracking-wider">
                        Preguntas Frecuentes
                    </h2>
                    <div className="flex items-center justify-center space-x-3 my-4">
                        <div className="w-12 h-[1px] bg-brand-gold/30" />
                        <span className="text-brand-gold text-xs font-serif">✦</span>
                        <div className="w-12 h-[1px] bg-brand-gold/30" />
                    </div>
                    <p className="max-w-xl mx-auto text-sm text-gray-500 font-light leading-relaxed">
                        Presiona cualquiera de las preguntas para desplegar la información detallada en escena.
                    </p>
                </div>

                {/* FAQ Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {faqs.map((faq) => {
                        const Icon = faq.icon;
                        return (
                            <motion.button
                                key={faq.id}
                                onClick={() => setActiveId(faq.id)}
                                whileHover={{ y: -4, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-[#FAF9F5] border border-gray-200/80 p-8 text-left flex flex-col justify-between h-56 shadow-sm hover:shadow-md hover:border-[#8A1C36]/30 transition-all duration-300 group cursor-pointer"
                            >
                                <div>
                                    <div className="h-10 w-10 bg-white rounded-none flex items-center justify-center border border-[#8A1C36]/15 group-hover:bg-[#8A1C36] group-hover:text-white transition-colors duration-300">
                                        <Icon className="h-5 w-5 text-[#8A1C36] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-[9px] font-bold tracking-[0.2em] text-brand-gold uppercase block mt-6 mb-2">
                                        {faq.label}
                                    </span>
                                    <h3 className="font-serif text-lg font-bold text-gray-800 group-hover:text-[#8A1C36] transition-colors duration-300">
                                        {faq.question}
                                    </h3>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A1C36]/70 group-hover:text-[#8A1C36] group-hover:underline transition-colors mt-4 self-end">
                                    Ver respuesta →
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Modal Overlay */}
                <AnimatePresence>
                    {activeId !== null && activeFAQ && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

                            {/* Dark Blur Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActiveId(null)}
                                className="absolute inset-0 bg-[#5E0B1F]/30 backdrop-blur-md"
                            />

                            {/* Modal Box */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                                className="bg-[#FAF9F5] border border-[#8A1C36]/35 p-8 sm:p-10 max-w-lg w-full shadow-2xl relative z-10 rounded-none flex flex-col justify-between"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveId(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 hover:rotate-90 transition-all duration-300 p-1 cursor-pointer"
                                    aria-label="Cerrar modal"
                                >
                                    <X className="h-5 w-5" />
                                </button>

                                <div>
                                    <div className="flex items-center space-x-2 text-[#8A1C36] mb-3">
                                        <activeFAQ.icon className="h-5 w-5 text-[#8A1C36]" />
                                        <span className="text-[9px] font-bold tracking-[0.2em] text-[#8A1C36] uppercase">
                                            {activeFAQ.label}
                                        </span>
                                    </div>
                                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-gray-900 border-b border-brand-gold/15 pb-4 mb-4">
                                        {activeFAQ.question}
                                    </h3>
                                    <p className="text-gray-655 text-sm leading-relaxed font-sans font-light">
                                        {activeFAQ.answer}
                                    </p>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={() => setActiveId(null)}
                                        className="bg-[#8A1C36] hover:bg-[#5E0B1F] text-white text-[10px] font-bold tracking-widest uppercase py-2.5 px-6 shadow-sm duration-300 transition-colors cursor-pointer"
                                    >
                                        Entendido
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
