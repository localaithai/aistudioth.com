"use client";

import { motion } from "framer-motion";
import { ArrowDown, Terminal } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const rigPrinciples = [
  "เลือกจาก model และ memory ที่ต้องใช้",
  "เลือก Mimir Suites Local หรือ bare hardware",
  "ควบคุม runtime และ stack ของคุณเอง",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd]">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 left-[10%] h-[34rem] w-[34rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(41,151,255,0.14) 0%, transparent 70%)" }}
          animate={{ x: [0, 24, 0], y: [0, -14, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-32 right-[5%] h-[28rem] w-[28rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(88,86,214,0.11) 0%, transparent 70%)" }}
          animate={{ x: [0, -18, 0], y: [0, 16, 0] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container-wide relative z-10 pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-7"><AnimatedLogo /></div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }} className="text-[#06c] text-[13px] font-semibold uppercase tracking-[0.2em] mb-4">AI rig บนโต๊ะ</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }} className="text-[46px] sm:text-[64px] md:text-[78px] font-semibold leading-[1.03] tracking-[-0.05em] mb-6">AI machine ของคุณ<br /><span className="text-[#6e6e73]">อยู่บนโต๊ะคุณ</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.24, ease: "easeOut" }} className="mx-auto max-w-2xl text-lg sm:text-xl">AI rig ที่คัดและปรับตาม model เพื่อรันในเครื่อง สำหรับ developer, researcher และทีมเทคนิคเล็กที่นั่งใช้มันทุกวัน.</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.32, ease: "easeOut" }} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="apple-btn apple-btn-blue active:scale-[0.97] transition-transform">Configure your studio</a>
            <a href="#contact" className="apple-btn apple-btn-outline active:scale-[0.97] transition-transform">Request a build quote</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, delay: 0.42 }} className="mt-14 grid gap-3 sm:grid-cols-3 text-left">
            {rigPrinciples.map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-white/70 p-4 text-sm text-[#1d1d1f]"><Terminal size={16} className="text-[#06c] shrink-0" />{item}</div>)}
          </motion.div>
          <a href="#builds" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#06c] active:scale-[0.97] transition-transform">ดูจุดตั้งต้นของ build <ArrowDown size={16} /></a>
        </div>
      </div>
    </section>
  );
}
