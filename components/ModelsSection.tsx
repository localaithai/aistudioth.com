"use client";

import { motion } from "framer-motion";
import { modelRows } from "@/lib/rig-data";

export default function ModelsSection() {
  return (
    <section id="models" className="section-white apple-section scroll-mt-16">
      <div className="container-wide">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, ease: "easeOut" }} className="max-w-3xl mb-10">
          <p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">VRAM เทียบกับ model</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-5">model weight ไม่ใช่ memory ที่ใช้จริงทั้งหมด</h2>
          <p className="text-lg">ตารางนี้เป็นการคำนวณ memory ของ model weights โดยประมาณ ไม่ใช่ผล benchmark ที่วัดจริง. Runtime, KV cache, context length, batch size และ quantisation format เพิ่ม memory overhead เสมอ</p>
        </motion.div>
        <div className="overflow-x-auto rounded-2xl border border-black/[0.08]">
          <table className="min-w-[980px] w-full text-left text-sm">
            <thead className="bg-[#f5f5f7] text-[#1d1d1f]"><tr><th className="p-4">Model</th><th className="p-4">Weights</th><th className="p-4">หน่วยความจำ model ที่คำนวณ</th><th className="p-4">GPU 32 GB</th><th className="p-4">Unified 96 GB</th><th className="p-4">Unified 128 GB</th><th className="p-4">2x 128 GB</th></tr></thead>
            <tbody>{modelRows.map((row) => <tr key={`${row.model}-${row.weights}`} className="border-t border-black/[0.06] align-top"><td className="p-4 font-semibold text-[#1d1d1f]">{row.model}</td><td className="p-4">{row.weights}</td><td className="p-4 font-mono text-xs">{row.memory}</td><td className="p-4">{row.gpu32}</td><td className="p-4">{row.unified96}</td><td className="p-4">{row.unified128}</td><td className="p-4">{row.dual128}</td></tr>)}</tbody>
          </table>
        </div>
        <p className="mt-5 text-sm">ใช้ตารางเพื่อคัด build แรก แล้วส่ง model, context และ runtime ที่คุณต้องการมาให้เราตรวจ headroom ก่อนสั่ง build.</p>
      </div>
    </section>
  );
}
