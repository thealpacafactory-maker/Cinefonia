"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import noticiasData from "@/data/noticias.json";

export default function LatestNews() {
  return (
    <section className="py-24 bg-[#F7F5F0] text-[#111827] relative border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* NOTICIAS Block */}
        <div>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2"
            >
              NOTICIAS
            </motion.h2>
            <div className="flex items-center justify-center space-x-3 my-3">
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
              <span className="text-brand-gold text-xs font-serif">✦</span>
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticiasData.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#8A1C36] transition-all duration-300 group"
              >
                <div>
                  <div className="aspect-[16/9] w-full bg-[#EFECE6] mb-4 overflow-hidden relative border border-[#E5E7EB] group-hover:border-[#8A1C36]/30 transition-colors">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={item.imagePlaceholder}
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#8A1C36] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={`/noticias`}
                    className="inline-flex items-center text-[10px] font-bold tracking-widest text-[#374151] uppercase hover:text-[#8A1C36] transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>LEER MÁS</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 text-[#8A1C36]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
