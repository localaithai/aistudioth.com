import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";
import { mimirScopeNotice } from "@/lib/site";

export default function Ecosystem() {
  return (
    <section className="bg-panel section-pad">
      <div className="container-wide">
        <Reveal className="mb-10 max-w-[44rem]">
          <h2 className="text-h2">Local rig หรือ cloud models</h2>
          <p className="mt-5 text-lead">
            เลือกจากที่ inference ต้องทำงาน ไม่ใช่จากชื่อแบรนด์
          </p>
        </Reveal>
        <Reveal amount={0}>
          <p className="legend mb-4">เลือกวิธีใช้งาน</p>
          <div className="grid overflow-hidden rounded-[6px] border border-ink md:grid-cols-2">
            <article className="bg-deck p-8 sm:p-10">
              <img
                src={assetUrl("/mimir-suite-logo.png")}
                alt=""
                width={72}
                height={48}
                loading="lazy"
                decoding="async"
                className="mb-6 h-12 w-auto object-contain text-transparent"
              />
              <h2 className="text-h3 text-deck-ink">
                Mimir Suites Local บน rig ของคุณ
              </h2>
              <p className="mt-4 text-base text-deck-ink-2">
                ติดตั้งและตั้งค่า Mimir Suites Local บน rig ได้
                เมื่อคุณต้องการรับ software layer พร้อม hardware.
              </p>
              <p className="mt-4 text-sm text-deck-ink-2">
                {mimirScopeNotice}
              </p>
            </article>
            <article className="border-t border-ink bg-surface p-8 sm:p-10 md:border-t-0 md:border-l">
              <h2 className="text-h3">CloudAIThai.com</h2>
              <p className="mt-4 text-base">
                ถ้าไม่ต้องรัน inference ในเครื่อง ดู cloud models
                ได้ที่ CloudAIThai.com.
              </p>
              <a
                className="text-link mt-4"
                href="https://cloudaithai.com"
                target="_blank"
                rel="noreferrer"
              >
                ไปที่ CloudAIThai.com{" "}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
