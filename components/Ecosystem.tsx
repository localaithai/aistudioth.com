"use client";

import { motion } from "framer-motion";
import { Cloud, HardDrive } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="section-gray apple-section">
      <div className="container-wide">
        <div className="max-w-3xl mb-12">
          <p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">เลือกวิธีใช้งาน</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-5">Local rig หรือ cloud models</h1>
          <p className="text-lg">เลือกจากที่ inference ต้องทำงาน ไม่ใช่จากชื่อแบรนด์</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, ease: "easeOut" }} className="apple-card bg-[#1d1d1f] p-8 text-white">
            <HardDrive className="text-[#2997ff] mb-6" size={28} />
            <h2 className="text-2xl font-semibold text-white mb-4">Mimir Suites Local บน rig ของคุณ</h2>
            <p className="text-gray-300 text-sm">ติดตั้งและตั้งค่า Mimir Suites Local บน rig ได้ เมื่อคุณต้องการรับ software layer พร้อม hardware.</p>
          </motion.article>
          <motion.article initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }} className="apple-card bg-white p-8 border border-black/[0.06]">
            <Cloud className="text-[#06c] mb-6" size={28} />
            <h2 className="text-2xl font-semibold mb-4">CloudAIThai.com</h2>
            <p className="text-sm mb-6">ถ้าไม่ต้องรัน inference ในเครื่อง ดู cloud models ได้ที่ CloudAIThai.com.</p>
            <a className="apple-link active:scale-[0.97] transition-transform" href="https://cloudaithai.com" target="_blank" rel="noreferrer">ไปที่ CloudAIThai.com</a>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
