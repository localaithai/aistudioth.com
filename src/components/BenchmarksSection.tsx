import { FlaskConical } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benchmarkTargets = [
  "วัด prompt processing และ generation แยกกัน",
  "วัด memory footprint ตาม runtime, context length และ quantisation",
  "วัด local inference ทั้ง single-stream และ concurrent",
];

export default function BenchmarksSection() {
  return (
    <section id="benchmarks" className="section-gray apple-section scroll-mt-16">
      <div className="container-wide">
        <Reveal className="grid lg:grid-cols-[1fr_0.8fr] gap-8 items-end">
          <div><p className="label mb-3">ห้องทดสอบ</p><h2 className="text-4xl sm:text-5xl font-semibold mb-5">ตัวเลขที่ยังไม่ได้วัด จะไม่ถูกแต่งขึ้น</h2><p className="text-lg">ชุด benchmark ของแต่ละ build จะเผยแพร่เมื่อวัดด้วย runtime, model, quantisation และ context ที่ระบุชัดเจน</p></div>
          <div className="apple-card bg-white border border-black/[0.06] p-7"><div className="flex items-center gap-3 text-[#06c] mb-4"><FlaskConical size={24} /><span className="font-semibold">สถานะ: รอวัดผล</span></div><ul className="space-y-3 text-sm">{benchmarkTargets.map((target) => <li key={target} className="border-t border-black/[0.06] pt-3 first:border-0 first:pt-0">{target}</li>)}</ul></div>
        </Reveal>
      </div>
    </section>
  );
}
