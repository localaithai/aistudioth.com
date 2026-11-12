import { Reveal } from "@/components/Reveal";
import { assetUrl } from "@/lib/assets";

const principles = [
  {
    title: "เริ่มที่ model",
    body: "เริ่มจาก model size, quantisation, context และ runtime ก่อนเลือก GPU",
  },
  {
    title: "ต้องเหลือ headroom",
    body: "model weights ที่โหลดได้ ไม่เท่ากับงานที่ใช้ได้ดีเมื่อมี KV cache และ workload จริง",
  },
  {
    title: "Build สำหรับโต๊ะทำงาน",
    body: "จัด machine ให้เข้ากับคนที่ใช้มันทุกวัน ไม่ใช่แค่สเปกบนใบเสนอราคา",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-page section-pad">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
          <Reveal amount={0} className="lg:col-span-7">
            <p className="legend mb-5">เกี่ยวกับ AI Studio TH</p>
            <h2 className="text-h2">ผู้ประกอบและ integrator สำหรับ local AI rig</h2>
            <p className="mt-6 text-lead">
              AI Studio TH ประกอบ machine บนโต๊ะสำหรับคนที่ต้องดู memory budget, เลือก
              runtime และทำงานใกล้กับ model ของตัวเอง เราปรับ hardware ตาม workload
              ติดตั้ง Mimir Suites Local เมื่อเหมาะกับ build หรือส่ง bare hardware
              ให้คนที่ดูแล stack เอง.
            </p>
          </Reveal>
          <Reveal
            as="figure"
            amount={0}
            delay={0.08}
            className="lg:col-span-5"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[6px] bg-panel">
              <img
                src={assetUrl("/photography/research-studio.webp")}
                alt="นักวิจัยนั่งทำงานที่โต๊ะ มี AI rig สีเงินวางข้างจอและสมุดจด"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block size-full object-cover text-transparent"
              />
            </div>
            <figcaption className="mt-3 text-sm text-ink-2">
              ภาพจำลอง · rig บนโต๊ะนักวิจัย
            </figcaption>
          </Reveal>
        </div>
        <div className="mt-16 border-b border-ink">
          {principles.map((principle, index) => (
            <Reveal
              as="article"
              key={principle.title}
              amount={0}
              delay={index * 0.06}
              className="grid gap-x-10 gap-y-2 border-t border-ink py-8 md:grid-cols-12"
            >
              <h2 className="text-h3 md:col-span-4">{principle.title}</h2>
              <p className="text-lg md:col-span-8">{principle.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="figure" amount={0} className="mt-16">
          <div className="aspect-[16/9] overflow-hidden rounded-[6px] bg-panel lg:aspect-[21/9]">
            <img
              src={assetUrl("/photography/airflow-build.webp")}
              alt="เคสอะลูมิเนียมเปิดฝาเห็นฮีตซิงก์และพัดลมของ build"
              width={1536}
              height={1024}
              loading="lazy"
              decoding="async"
              className="block size-full object-cover text-transparent"
            />
          </div>
          <figcaption className="mt-3 text-sm text-ink-2">
            ภาพจำลอง · ทางลมภายใน build
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
