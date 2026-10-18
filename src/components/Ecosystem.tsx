import { assetUrl } from "@/lib/assets";
import { mimirScopeNotice } from "@/lib/site";
import { Cloud } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Ecosystem() {
  return (
    <section className="section-gray apple-section">
      <div className="container-wide">
        <Reveal className="max-w-[44rem] mb-12">
          <p className="label mb-4">
            เลือกวิธีใช้งาน
          </p>
          <h2 className="text-h2 font-semibold mb-5">
            Local rig หรือ cloud models
          </h2>
          <p className="text-lead">เลือกจากที่ inference ต้องทำงาน ไม่ใช่จากชื่อแบรนด์</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <Reveal
            as="article"
            amount={0}
            className="apple-card bg-[#1d1d1f] p-8 text-white"
          >
            <img
              src={assetUrl("/mimir-suite-logo.png")}
              alt=""
              width={72}
              height={48}
              loading="lazy"
              decoding="async"
              className="mb-6 h-12 w-auto object-contain"
              style={{ color: "transparent" }}
            />
            <h2 className="text-2xl font-semibold text-white mb-4">
              Mimir Suites Local บน rig ของคุณ
            </h2>
            <p className="text-gray-300 text-sm">
              ติดตั้งและตั้งค่า Mimir Suites Local บน rig ได้ เมื่อคุณต้องการรับ software
              layer พร้อม hardware.
            </p>
            <p className="text-gray-300 text-sm mt-4">{mimirScopeNotice}</p>
          </Reveal>
          <Reveal
            as="article"
            amount={0}
            delay={0.09}
            className="apple-card bg-white p-8 border border-black/[0.06]"
          >
            <Cloud className="text-[#06c] mb-6" size={28} />
            <h2 className="text-2xl font-semibold mb-4">CloudAIThai.com</h2>
            <p className="text-sm mb-6">
              ถ้าไม่ต้องรัน inference ในเครื่อง ดู cloud models ได้ที่ CloudAIThai.com.
            </p>
            <a
              className="apple-link"
              href="https://cloudaithai.com"
              target="_blank"
              rel="noreferrer"
            >
              ไปที่ CloudAIThai.com
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
