import { Meter } from "@/components/Meter";
import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";

const benchmarkTargets = [
  "วัด prompt processing และ generation แยกกัน",
  "วัด memory footprint ตาม runtime, context length และ quantisation",
  "วัด local inference ทั้ง single-stream และ concurrent",
];

export default function BenchmarksSection() {
  return (
    <section id="benchmarks" className="scroll-mt-16 bg-page section-pad">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-14">
        <Reveal className="lg:col-span-6">
          <h2 className="text-h2">ตัวเลขที่ยังไม่ได้วัด จะไม่ถูกแต่งขึ้น</h2>
          <p className="mt-5 text-lead">
            ชุด benchmark ของแต่ละ build จะเผยแพร่เมื่อวัดด้วย runtime, model,
            quantisation และ context ที่ระบุชัดเจน
          </p>
          <figure className="mt-10">
            <div className="aspect-[3/2] overflow-hidden rounded-[6px] bg-panel">
              <img
                src={assetUrl("/photography/runtime-bench.webp")}
                alt="โน้ตบุ๊กและ AI rig บนโต๊ะทำงานสำหรับทดสอบ runtime"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block size-full object-cover text-transparent"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-2">
              ภาพจำลอง · โต๊ะทดสอบ runtime
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={0.08} className="plate p-6 sm:p-8 lg:col-span-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="legend">ห้องทดสอบ</p>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              <span
                aria-hidden="true"
                className="size-2.5 border-2 border-brand"
              />
              สถานะ: รอวัดผล
            </p>
          </div>
          <ul className="mt-6 border-b border-ink">
            {benchmarkTargets.map((target) => (
              <li key={target} className="border-t border-ink py-5">
                <p className="text-base font-medium text-ink">{target}</p>
                <Meter segments={16} lit={0} className="mt-3" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
