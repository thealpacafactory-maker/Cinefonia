"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import noticiasData from "@/data/noticias.json";
import blogData from "@/data/blog.json";

export default function LatestNews() {
  return (
    <section className="py-24 bg-[#F7F5F0] text-[#111827] relative border-t border-[#E5E7EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
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
              <span className="text-[#ad6e4f] text-xs font-serif">✦</span>
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
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#ad6e4f] transition-all duration-300 group"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#EFECE6] mb-4 overflow-hidden relative flex items-center justify-center border border-[#E5E7EB] group-hover:border-[#ad6e4f]/30 transition-colors">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ad6e4f]">
                      CINEFONÍA NOTICIAS
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#ad6e4f] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={`/noticias`}
                    className="inline-flex items-center text-[10px] font-bold tracking-widest text-[#374151] uppercase hover:text-[#ad6e4f] transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>LEER MÁS</span>
                    <ArrowRight className="h-3 w-3 ml-1.5 text-[#ad6e4f]" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOG Block */}
        <div>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2"
            >
              BLOG
            </motion.h2>
            <div className="flex items-center justify-center space-x-3 my-3">
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
              <span className="text-[#ad6e4f] text-xs font-serif">✦</span>
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#ad6e4f] transition-all duration-300 group"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#EFECE6] mb-4 overflow-hidden relative flex items-center justify-center border border-[#E5E7EB] group-hover:border-[#ad6e4f]/30 transition-colors">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#ad6e4f]">
                      ARTÍCULO MUSICAL
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#ad6e4f] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={`/blog`}
                    className="inline-flex items-center text-[10px] font-bold tracking-widest text-[#374151] uppercase hover:text-[#ad6e4f] transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>LEER ARTÍCULO</span>
                    <ArrowRight className="h-3 w-3 ml-1.5 text-[#ad6e4f]" />
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
