import { ArrowRight } from "lucide-react";
import { Meter } from "@/components/Meter";
import ScrambledText from "@/components/reactbits/ScrambledText";
import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";
import { buildTiers } from "@/lib/rig-data";

const localMachineOptions = [
  { name: "MSI EdgeXpert", image: "/msi-edgexpert.png", width: 520, height: 230 },
  { name: "Acer Veriton GN100", image: "/acer-gn100.jpg", width: 1306, height: 808 },
  { name: "ASUS Ascent GX10", image: "/asus-gx10.png", width: 498, height: 205 },
  { name: "Lenovo ThinkStation PGX", image: "/lenovo-pgx.png", width: 537, height: 281 },
] as const;

const SCALE_GB = 256;

// The capacity that leads a memory readout ("128 GB", "2x 128 GB") decodes as
// the card comes into view. Only an all-Latin figure qualifies: scrambling
// Thai splits combining vowels and tone marks from their base consonant.
const capacityOf = (memory: string) => {
  const match = /^((?:\d+x )?\d+ GB)(.*)$/s.exec(memory);
  return match && !/[\u0E00-\u0E7F]/.test(match[1])
    ? { figure: match[1], rest: match[2] }
    : null;
};

const capacityGb = (figure: string): number => {
  const match = /^(?:(\d+)x )?(\d+) GB$/.exec(figure);
  return match ? Number(match[1] ?? 1) * Number(match[2]) : 0;
};

function MemoryReadout({ memory }: { memory: string }) {
  const capacity = capacityOf(memory);
  if (!capacity)
    return <span className="text-h3 font-bold text-ink">{memory}</span>;
  return (
    <>
      <ScrambledText
        radius={36}
        duration={0.9}
        speed={0.6}
        scrambleChars="0123456789"
        clickBurst={false}
        className="font-readout text-readout font-extrabold text-ink"
      >
        {capacity.figure}
      </ScrambledText>
      <span className="mt-1 block text-base text-ink-2">
        {capacity.rest.trim()}
      </span>
    </>
  );
}

export default function BuildsSection() {
  return (
    <section id="builds" className="scroll-mt-16 bg-page section-pad">
      <div className="container-wide">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-h2">เริ่มจาก model ที่คุณอยากรัน</h2>
            <p className="mt-4 text-xl font-semibold text-ink">จุดตั้งต้น ไม่ใช่แพ็กเกจ</p>
          </div>
          <p className="text-lead lg:col-span-5">ทุก build เป็นจุดเริ่มต้นสำหรับปรับ memory, storage, runtime และ Mimir Suites Local ให้พอดีกับงานของคุณ ไม่มีราคาและสเปกตายตัวบนหน้านี้</p>
        </Reveal>
        <div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[6px] border border-ink bg-ink xl:grid-cols-4">
            {localMachineOptions.map((option, index) => (
              <Reveal as="figure" key={option.name} delay={index * 0.09} className="bg-white p-4 sm:p-6">
                <img
                  src={assetUrl(option.image)}
                  alt={option.name}
                  width={option.width}
                  height={option.height}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-full object-contain text-transparent sm:h-36"
                />
                <figcaption className="mt-4 text-sm font-semibold text-ink">
                  {option.name}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 max-w-[75ch] text-sm">
            ตัวอย่างเครื่อง AI on-site ระดับ NVIDIA GB10 จาก MSI, Acer, ASUS และ Lenovo โดยเลือกรุ่นและขนาดระบบสุดท้ายตาม workload จริง รวมถึงระบบขนาดใหญ่กว่าเมื่อเหมาะกับงาน
          </p>
        </div>
        <div className="mt-14 border-b border-ink">
          {buildTiers.map((tier, index) => {
            const capacity = capacityOf(tier.memory);
            const gb = capacity ? capacityGb(capacity.figure) : 0;
            const lit = Math.max(1, Math.round((gb / SCALE_GB) * 16));
            return (
              <Reveal
                as="article"
                key={tier.name}
                y={16}
                amount={0.15}
                delay={index * 0.06}
                className="grid gap-8 border-t border-ink py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <h3 className="text-[clamp(1.625rem,1.3rem+1.2vw,2.25rem)] leading-[1.2] font-extrabold">{tier.name}</h3>
                  {tier.name === "NVIDIA DGX Spark" && (
                    <figure className="mt-6">
                      <img
                        src={assetUrl("/nvidia-dgx-spark.jpg")}
                        alt="NVIDIA DGX Spark"
                        width={1350}
                        height={580}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full rounded-[4px] text-transparent"
                      />
                      <figcaption className="mt-3 text-sm text-ink-2">
                        ภาพจริงของ NVIDIA DGX Spark
                      </figcaption>
                    </figure>
                  )}
                </div>
                <div className="lg:col-span-4">
                  <dl>
                    <dt className="text-legend font-semibold text-ink-2">หน่วยความจำ</dt>
                    <dd className="mt-2"><MemoryReadout memory={tier.memory} /></dd>
                    <dd className="mt-1 text-sm text-ink-2">{tier.systemMemory}</dd>
                  </dl>
                  {gb > 0 && (
                    <>
                      <Meter segments={16} lit={lit} size="md" className="mt-5" />
                      <p aria-hidden="true" className="mt-1.5 flex justify-between font-readout text-sm font-bold text-ink-2">
                        <span>0</span>
                        <span>64</span>
                        <span>128</span>
                        <span>192</span>
                        <span>256 GB</span>
                      </p>
                    </>
                  )}
                </div>
                <div className="lg:col-span-4">
                  <dl className="grid gap-4">
                    <div>
                      <dt className="text-legend font-semibold text-ink-2">GPU</dt>
                      <dd className="mt-0.5 text-base font-medium text-ink">{tier.hardware}</dd>
                    </div>
                    <div>
                      <dt className="text-legend font-semibold text-ink-2">Storage</dt>
                      <dd className="mt-0.5 text-base font-medium text-ink">{tier.storage}</dd>
                    </div>
                  </dl>
                  <p className="mt-6 border-t border-line pt-5 text-base text-ink"><span className="font-semibold">รันอะไรได้:</span> {tier.whatRuns}</p>
                  {tier.note && <p className="mt-3 text-sm">{tier.note}</p>}
                  <a href="#contact" className="text-link mt-4">ตั้งค่า build นี้ <ArrowRight size={16} aria-hidden="true" /></a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
