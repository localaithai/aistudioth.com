"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, HardDrive, MemoryStick } from "lucide-react";
import { buildTiers } from "@/lib/rig-data";

export default function BuildsSection() {
  return (
    <section id="builds" className="section-gray apple-section scroll-mt-16">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-3xl mb-12"
        >
          <p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">จุดตั้งต้น ไม่ใช่แพ็กเกจ</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-5">เริ่มจาก model ที่คุณอยากรัน</h2>
          <p className="text-lg">ทุก build เป็นจุดเริ่มต้นสำหรับปรับ memory, storage, runtime และ Mimir Suites Local ให้พอดีกับงานของคุณ ไม่มีราคาและสเปกตายตัวบนหน้านี้</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {buildTiers.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              className="apple-card border border-black/[0.06] p-7 sm:p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">{tier.name}</h3>
              <dl className="space-y-4 text-sm">
                <div className="flex gap-3"><Cpu className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">GPU</dt><dd>{tier.hardware}</dd></div></div>
                <div className="flex gap-3"><MemoryStick className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">หน่วยความจำ</dt><dd>{tier.memory}</dd><dd className="text-xs mt-1">{tier.systemMemory}</dd></div></div>
                <div className="flex gap-3"><HardDrive className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">Storage</dt><dd>{tier.storage}</dd></div></div>
              </dl>
              <p className="mt-6 pt-5 border-t border-black/[0.06] text-sm text-[#1d1d1f]"><span className="font-semibold">รันอะไรได้:</span> {tier.whatRuns}</p>
              {tier.note && <p className="mt-3 text-xs text-[#6e6e73]">{tier.note}</p>}
              <a href="#contact" className="apple-link mt-6 active:scale-[0.97] transition-transform">ตั้งค่า build นี้ <ArrowRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
