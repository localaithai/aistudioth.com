import { Box, Cpu, PackageOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const offers = [
  { icon: Cpu, title: "Rig builds", body: "เริ่มจาก GPU, unified memory, storage และ model target แล้วปรับ build เพื่อ runtime กับ context ที่คุณใช้จริง" },
  { icon: Box, title: "Rig with Mimir Suites Local", body: "ส่ง rig พร้อม Mimir Suites Local ที่ติดตั้งบนเครื่อง เพื่อเริ่ม local inference ด้วย setup ที่ตกลงร่วมกัน" },
  { icon: PackageOpen, title: "Bare hardware", body: "ซื้อ hardware-only ได้ตามปกติ สำหรับคนที่ดูแล runtime, models และ stack ของตัวเอง" },
];

export default function Services() {
  return (
    <section id="services" className="section-white apple-section scroll-mt-16">
      <div className="container-wide">
        <Reveal className="max-w-[44rem] mb-12"><p className="eyebrow mb-4">Three ways to buy</p><h2 className="text-h2 font-semibold mb-5">เลือก build, ไม่ต้องเลือกคำโฆษณา</h2><p className="text-lead">เริ่มจากสิ่งที่คุณจะรันบนเครื่อง แล้วเลือกว่าจะรับ Mimir Suites Local ไปพร้อมกัน หรือรับเฉพาะ hardware</p></Reveal>
        <div className="grid md:grid-cols-3 gap-5">{offers.map((offer, index) => { const Icon = offer.icon; return <Reveal as="article" key={offer.title} delay={index * 0.09} className="apple-card border border-black/[0.06] p-7"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#06c]/10 text-[#06c]"><Icon size={23} /></div><h3 className="text-h3 font-semibold mb-3">{offer.title}</h3><p className="text-sm">{offer.body}</p></Reveal>; })}</div>
      </div>
    </section>
  );
}
