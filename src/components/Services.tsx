import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";

const offers = [
  { title: "Rig builds", body: "เริ่มจาก GPU, unified memory, storage และ model target แล้วปรับ build เพื่อ runtime กับ context ที่คุณใช้จริง" },
  { title: "Rig with Mimir Suites Local", body: "ส่ง rig พร้อม Mimir Suites Local ที่ติดตั้งบนเครื่อง เพื่อเริ่ม local inference ด้วย setup ที่ตกลงร่วมกัน" },
  { title: "Bare hardware", body: "ซื้อ hardware-only ได้ตามปกติ สำหรับคนที่ดูแล runtime, models และ stack ของตัวเอง" },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-panel section-pad">
      <div className="container-wide grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Reveal>
            <h2 className="text-h2">เลือก build, ไม่ต้องเลือกคำโฆษณา</h2>
            <p className="mt-5 text-lead">เริ่มจากสิ่งที่คุณจะรันบนเครื่อง แล้วเลือกว่าจะรับ Mimir Suites Local ไปพร้อมกัน หรือรับเฉพาะ hardware</p>
          </Reveal>
          <Reveal as="figure" delay={0.08} className="mt-10">
            <div className="aspect-[3/2] overflow-hidden rounded-[6px] bg-panel">
              <img
                src={assetUrl("/photography/build-consultation.webp")}
                alt="มือถือ GPU และ SSD เหนือโต๊ะทำงานระหว่างเลือกชิ้นส่วนของ build"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block size-full object-cover text-transparent"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-2">
              ภาพจำลอง · เลือกชิ้นส่วนสำหรับ build
            </figcaption>
          </Reveal>
        </div>
        <div className="border-b border-ink lg:col-span-7">
          {offers.map((offer, index) => (
            <Reveal
              as="article"
              key={offer.title}
              delay={index * 0.06}
              className="grid gap-x-8 gap-y-2 border-t border-ink py-8 sm:grid-cols-[minmax(0,15rem)_1fr]"
            >
              <h3 className="text-h3">{offer.title}</h3>
              <p className="text-base">{offer.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
