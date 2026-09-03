"use client";

import { motion } from "framer-motion";
import { Box, Cpu, PackageOpen } from "lucide-react";

const offers = [
  { icon: Cpu, title: "Rig builds", body: "เริ่มจาก GPU, unified memory, storage และ model target แล้วปรับ build เพื่อ runtime กับ context ที่คุณใช้จริง" },
  { icon: Box, title: "Rig with Mimir Suites Local", body: "ส่ง rig พร้อม Mimir Suites Local ที่ติดตั้งบนเครื่อง เพื่อเริ่ม local inference ด้วย setup ที่ตกลงร่วมกัน" },
  { icon: PackageOpen, title: "Bare hardware", body: "ซื้อ hardware-only ได้ตามปกติ สำหรับคนที่ดูแล runtime, models และ stack ของตัวเอง" },
];

export default function Services() {
  return (
    <section id="services" className="section-white apple-section scroll-mt-16">
      <div className="container-wide">
        <div className="max-w-3xl mb-12"><p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">Three ways to buy</p><h2 className="text-4xl sm:text-5xl font-semibold mb-5">เลือก build, ไม่ต้องเลือกคำโฆษณา</h2><p className="text-lg">เริ่มจากสิ่งที่คุณจะรันบนเครื่อง แล้วเลือกว่าจะรับ Mimir Suites Local ไปพร้อมกัน หรือรับเฉพาะ hardware</p></div>
        <div className="grid md:grid-cols-3 gap-5">{offers.map((offer, index) => { const Icon = offer.icon; return <motion.article key={offer.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }} className="apple-card border border-black/[0.06] p-7"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06c]/10 text-[#06c]"><Icon size={23} /></div><h3 className="text-xl font-semibold mb-3">{offer.title}</h3><p className="text-sm">{offer.body}</p></motion.article>; })}</div>
      </div>
    </section>
  );
}
