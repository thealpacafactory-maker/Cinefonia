"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import noticiasData from "@/data/noticias.json";
import blogData from "@/data/blog.json";

export default function LatestNews() {
  return (
    <section className="py-20 bg-[#F7F5F0] text-[#111827] relative border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* NOTICIAS Block matching PDF page 1 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2">
              NOTICIAS
            </h2>
            <div className="flex items-center justify-center space-x-3 my-3">
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
              <span className="text-[#9CA3AF] text-xs font-serif">✦</span>
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticiasData.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#E5E7EB] mb-4 overflow-hidden relative flex items-center justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">
                      IMAGEN NOTICIA
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#B87A4B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={`/noticias`}
                    className="inline-flex items-center text-[10px] font-bold tracking-widest text-[#374151] uppercase hover:text-[#B87A4B] transition-colors"
                  >
                    <span>LEER MÁS</span>
                    <ArrowRight className="h-3 w-3 ml-1.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BLOG Block matching PDF page 1 */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-xs font-bold tracking-[0.3em] uppercase text-[#374151] mb-2">
              BLOG
            </h2>
            <div className="flex items-center justify-center space-x-3 my-3">
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
              <span className="text-[#9CA3AF] text-xs font-serif">✦</span>
              <div className="w-8 h-[1px] bg-[#9CA3AF]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogData.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
              >
                <div>
                  <div className="aspect-[16/9] bg-[#E5E7EB] mb-4 overflow-hidden relative flex items-center justify-center">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#6B7280]">
                      ARTÍCULO BLOG
                    </span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                    {item.date}
                  </span>
                  <h3 className="font-serif text-sm font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#B87A4B] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6]">
                  <Link
                    href={`/blog`}
                    className="inline-flex items-center text-[10px] font-bold tracking-widest text-[#374151] uppercase hover:text-[#B87A4B] transition-colors"
                  >
                    <span>LEER ARTÍCULO</span>
                    <ArrowRight className="h-3 w-3 ml-1.5" />
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
