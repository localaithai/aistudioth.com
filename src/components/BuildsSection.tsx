import { ArrowRight, Cpu, HardDrive, MemoryStick } from "lucide-react";
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

// The capacity that leads a memory readout ("128 GB", "2x 128 GB") decodes as
// the card comes into view. Only an all-Latin figure qualifies: scrambling
// Thai splits combining vowels and tone marks from their base consonant.
const capacityOf = (memory: string) => {
  const match = /^((?:\d+x )?\d+ GB)(.*)$/s.exec(memory);
  return match && !/[\u0E00-\u0E7F]/.test(match[1])
    ? { figure: match[1], rest: match[2] }
    : null;
};

function MemoryReadout({ memory }: { memory: string }) {
  const capacity = capacityOf(memory);
  if (!capacity) return memory;
  return (
    <>
      <ScrambledText
        radius={36}
        duration={0.9}
        speed={0.6}
        scrambleChars="0123456789ABCDEF"
        clickBurst={false}
        className="font-semibold tabular-nums text-[#1d1d1f]"
      >
        {capacity.figure}
      </ScrambledText>
      {capacity.rest}
    </>
  );
}

export default function BuildsSection() {
  return (
    <section id="builds" className="section-gray apple-section scroll-mt-16">
      <div className="container-wide">
        <Reveal className="max-w-[44rem] mb-12">
          <p className="label mb-4">จุดตั้งต้น ไม่ใช่แพ็กเกจ</p>
          <h2 className="text-h2 font-semibold mb-5">เริ่มจาก model ที่คุณอยากรัน</h2>
          <p className="text-lead">ทุก build เป็นจุดเริ่มต้นสำหรับปรับ memory, storage, runtime และ Mimir Suites Local ให้พอดีกับงานของคุณ ไม่มีราคาและสเปกตายตัวบนหน้านี้</p>
        </Reveal>
        <div className="mb-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {localMachineOptions.map((option, index) => (
              <Reveal as="figure" key={option.name} delay={index * 0.09} className="apple-card border border-black/[0.06] p-4 sm:p-5">
                <img
                  src={assetUrl(option.image)}
                  alt={option.name}
                  width={option.width}
                  height={option.height}
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-full rounded-xl object-contain sm:h-36"
                  style={{ color: "transparent" }}
                />
                <figcaption className="mt-3 text-sm font-semibold text-[#1d1d1f]">
                  {option.name}
                </figcaption>
              </Reveal>
            ))}
          </div>
          <p className="mt-4 text-sm text-[#6e6e73]">
            ตัวอย่างเครื่อง AI on-site ระดับ NVIDIA GB10 จาก MSI, Acer, ASUS และ Lenovo โดยเลือกรุ่นและขนาดระบบสุดท้ายตาม workload จริง รวมถึงระบบขนาดใหญ่กว่าเมื่อเหมาะกับงาน
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {buildTiers.map((tier, index) => (
            <Reveal
              as="article"
              key={tier.name}
              y={18}
              amount={0.15}
              delay={index * 0.09}
              className="apple-card border border-black/[0.06] p-7 sm:p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">{tier.name}</h3>
              {tier.name === "NVIDIA DGX Spark" && (
                <figure className="mb-6">
                  <img
                    src={assetUrl("/nvidia-dgx-spark.jpg")}
                    alt="NVIDIA DGX Spark"
                    width={1350}
                    height={580}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full rounded-xl"
                    style={{ color: "transparent" }}
                  />
                  <figcaption className="mt-3 text-sm text-[#6e6e73]">
                    ภาพจริงของ NVIDIA DGX Spark
                  </figcaption>
                </figure>
              )}
              <dl className="space-y-4 text-sm">
                <div className="flex gap-3"><Cpu className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">GPU</dt><dd>{tier.hardware}</dd></div></div>
                <div className="flex gap-3"><MemoryStick className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">หน่วยความจำ</dt><dd><MemoryReadout memory={tier.memory} /></dd><dd className="text-xs mt-1">{tier.systemMemory}</dd></div></div>
                <div className="flex gap-3"><HardDrive className="text-[#06c] shrink-0" size={18} /><div><dt className="font-semibold text-[#1d1d1f]">Storage</dt><dd>{tier.storage}</dd></div></div>
              </dl>
              <p className="mt-6 pt-5 border-t border-black/[0.06] text-sm text-[#1d1d1f]"><span className="font-semibold">รันอะไรได้:</span> {tier.whatRuns}</p>
              {tier.note && <p className="mt-3 text-xs text-[#6e6e73]">{tier.note}</p>}
              <a href="#contact" className="apple-link mt-6">ตั้งค่า build นี้ <ArrowRight size={16} /></a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
