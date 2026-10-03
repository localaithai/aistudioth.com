import { Terminal } from "lucide-react";
import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import { site } from "@/lib/site";

const rigPrinciples = [
  "เลือกจาก model และ memory ที่ต้องใช้",
  "เลือก Mimir Suites Local หรือ bare hardware",
  "ควบคุม runtime และ stack ของคุณเอง",
];

export default function Hero() {
  return (
    <section className="bg-[#fbfbfd] text-[#1d1d1f]">
      <div className="container-wide grid items-center gap-8 pt-28 pb-16 sm:pt-32 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-[#06c]">
            AI rig บนโต๊ะ
          </p>
          <h1 className="mb-6 max-w-3xl text-[clamp(2.6rem,4.5vw,4.5rem)] font-semibold !leading-[1.2] tracking-[-0.05em]">
            AI machine ของคุณ
            <br />
            <span className="text-[#6e6e73]">อยู่บนโต๊ะคุณ</span>
          </h1>
          <p className="max-w-2xl text-lg leading-[1.5] sm:text-xl">
            AI rig ที่คัดและปรับตาม model เพื่อรันในเครื่อง สำหรับ developer,
            researcher และทีมเทคนิคเล็กที่นั่งใช้มันทุกวัน.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.primaryCta.href}
              className="apple-btn apple-btn-blue min-h-11 transition-transform active:scale-[0.97]"
            >
              {site.primaryCta.label}
            </a>
            <a
              href="/builds"
              className="apple-btn apple-btn-outline min-h-11 transition-transform active:scale-[0.97]"
            >
              ดูสเปก build
            </a>
          </div>
          <ul className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {rigPrinciples.map((item) => (
              <li
                key={item}
                className="flex min-h-11 items-center gap-3 py-3 text-sm"
              >
                <Terminal size={16} className="shrink-0 text-[#06c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <figure className="min-w-0">
          <div className="aspect-[4/3] overflow-hidden rounded-md border border-black/10 bg-white">
            <picture className="block h-full">
              <source
                media="(max-width: 767px)"
                srcSet={assetUrl("/photography/hero-mobile.webp")}
              />
              <Image
                src={assetUrl("/photography/hero.webp")}
                alt="AI rig บนโต๊ะทำงานสำหรับ developer"
                width={1440}
                height={810}
                loading="eager"
                fetchPriority="high"
                className="h-full w-full object-cover object-[70%_center]"
              />
            </picture>
          </div>
          <figcaption className="mt-3 text-xs leading-5 text-[#6e6e73]">
            ภาพจำลองการใช้งาน · AI rig บนโต๊ะ developer
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
