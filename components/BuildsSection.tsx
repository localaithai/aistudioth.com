"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, HardDrive, MemoryStick } from "lucide-react";
import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import { buildTiers } from "@/lib/rig-data";

const localMachineOptions = [
  { name: "MSI EdgeXpert", image: "/msi-edgexpert.png", width: 520, height: 230 },
  { name: "Acer Veriton GN100", image: "/acer-gn100.jpg", width: 1306, height: 808 },
  { name: "ASUS Ascent GX10", image: "/asus-gx10.png", width: 498, height: 205 },
  { name: "Lenovo ThinkStation PGX", image: "/lenovo-pgx.png", width: 537, height: 281 },
] as const;

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
        <div className="mb-10">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {localMachineOptions.map((option) => (
              <figure key={option.name} className="apple-card border border-black/[0.06] p-5">
                <Image
                  src={assetUrl(option.image)}
                  alt={option.name}
                  width={option.width}
                  height={option.height}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-36 w-full rounded-xl object-contain"
                />
                <figcaption className="mt-3 text-sm font-semibold text-[#1d1d1f]">
                  {option.name}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#6e6e73]">
            ตัวอย่างเครื่อง AI on-site ระดับ NVIDIA GB10 จาก MSI, Acer, ASUS และ Lenovo โดยเลือกรุ่นและขนาดระบบสุดท้ายตาม workload จริง รวมถึงระบบขนาดใหญ่กว่าเมื่อเหมาะกับงาน
          </p>
        </div>
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
              {tier.name === "NVIDIA DGX Spark" && (
                <figure className="mb-6">
                  <Image
                    src={assetUrl("/nvidia-dgx-spark.jpg")}
                    alt="NVIDIA DGX Spark"
                    width={1350}
                    height={580}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full rounded-xl"
                  />
                  <figcaption className="mt-3 text-sm text-[#6e6e73]">
                    ภาพจริงของ NVIDIA DGX Spark
                  </figcaption>
                </figure>
              )}
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
