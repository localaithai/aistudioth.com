import { Braces, Gauge, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const principles = [
  {
    icon: Braces,
    title: "เริ่มที่ model",
    body: "เริ่มจาก model size, quantisation, context และ runtime ก่อนเลือก GPU",
  },
  {
    icon: Gauge,
    title: "ต้องเหลือ headroom",
    body: "model weights ที่โหลดได้ ไม่เท่ากับงานที่ใช้ได้ดีเมื่อมี KV cache และ workload จริง",
  },
  {
    icon: Wrench,
    title: "Build สำหรับโต๊ะทำงาน",
    body: "จัด machine ให้เข้ากับคนที่ใช้มันทุกวัน ไม่ใช่แค่สเปกบนใบเสนอราคา",
  },
];

export default function AboutSection() {
  return (
    <section className="section-white apple-section">
      <div className="container-wide">
        <Reveal amount={0} className="max-w-[44rem]">
          <p className="label mb-4">
            เกี่ยวกับ AI Studio TH
          </p>
          <h2 className="text-h2 font-semibold mb-6">
            ผู้ประกอบและ integrator สำหรับ local AI rig
          </h2>
          <p className="text-lead">
            AI Studio TH ประกอบ machine บนโต๊ะสำหรับคนที่ต้องดู memory budget, เลือก
            runtime และทำงานใกล้กับ model ของตัวเอง เราปรับ hardware ตาม workload
            ติดตั้ง Mimir Suites Local เมื่อเหมาะกับ build หรือส่ง bare hardware
            ให้คนที่ดูแล stack เอง.
          </p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal
                as="article"
                key={principle.title}
                amount={0}
                delay={index * 0.09}
                className="apple-card section-gray p-7"
              >
                <Icon className="text-[#06c] mb-5" size={24} />
                <h2 className="text-h3 font-semibold mb-3">
                  {principle.title}
                </h2>
                <p className="text-sm">{principle.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
