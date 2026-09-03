"use client";

import { motion } from "framer-motion";
import { Braces, Gauge, Wrench } from "lucide-react";

const principles = [
  { icon: Braces, title: "เริ่มที่ model", body: "เริ่มจาก model size, quantisation, context และ runtime ก่อนเลือก GPU" },
  { icon: Gauge, title: "ต้องเหลือ headroom", body: "model weights ที่โหลดได้ ไม่เท่ากับงานที่ใช้ได้ดีเมื่อมี KV cache และ workload จริง" },
  { icon: Wrench, title: "Build สำหรับโต๊ะทำงาน", body: "จัด machine ให้เข้ากับคนที่ใช้มันทุกวัน ไม่ใช่แค่สเปกบนใบเสนอราคา" },
];

export default function AboutSection() {
  return (
    <section className="section-white apple-section">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, ease: "easeOut" }} className="max-w-3xl">
          <p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">เกี่ยวกับ AI Studio TH</p>
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">ผู้ประกอบและ integrator สำหรับ local AI rig</h1>
          <p className="text-lg">AI Studio TH ประกอบ machine บนโต๊ะสำหรับคนที่ต้องดู memory budget, เลือก runtime และทำงานใกล้กับ model ของตัวเอง เราปรับ hardware ตาม workload ติดตั้ง Mimir Suites Local เมื่อเหมาะกับ build หรือส่ง bare hardware ให้คนที่ดูแล stack เอง.</p>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return <motion.article key={principle.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }} className="apple-card section-gray p-7"><Icon className="text-[#06c] mb-5" size={24} /><h2 className="text-xl font-semibold mb-3">{principle.title}</h2><p className="text-sm">{principle.body}</p></motion.article>;
          })}
        </div>
      </div>
    </section>
  );
}
