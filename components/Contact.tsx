"use client";

import { usePathname } from "next/navigation";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

const fieldClass = "mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-[#1d1d1f] outline-none transition-[border-color,box-shadow] duration-150 ease-out focus:border-[#06c] focus:ring-2 focus:ring-[#06c]/20";

export default function Contact() {
  const pathname = usePathname() || "/";

  return (
    <section id="contact" className="section-white apple-section scroll-mt-16">
      <div className="container-wide">
        <div className="max-w-3xl mb-10"><p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">Configure your studio</p><h2 className="text-4xl sm:text-5xl font-semibold mb-5">ส่ง workload ของคุณมา</h2><p className="text-lg">บอก model, context และ stack ที่คุณจะใช้ เราจะเริ่มจาก memory budget ก่อนคุยเรื่อง build</p></div>
        <div className="grid gap-8 lg:grid-cols-[1.4fr,0.6fr]">
          <form action={site.contact.formspreeEndpoint} method="POST" className="rounded-3xl border border-black/[0.07] bg-[#f5f5f7] p-6 sm:p-8">
            <input type="hidden" name="source_domain" value="aistudioth.com" />
            <input type="hidden" name="source_page" value={pathname} />
            <input type="hidden" name="campaign" value="" />
            <input type="hidden" name="keyword" value="" />
            <input type="hidden" name="crm_source" value={site.crmSource} />
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-[#1d1d1f]">ชื่อ<input required name="name" autoComplete="name" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">อีเมล<input required name="email" type="email" autoComplete="email" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">โทรศัพท์<input name="phone" type="tel" autoComplete="tel" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">บริษัท<input name="company" autoComplete="organization" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">คุณเป็นใคร<select name="customer_type" defaultValue="developer" className={fieldClass}><option value="developer">Developer</option><option value="researcher">Researcher</option><option value="technical_team">ทีมเทคนิคขนาดเล็ก</option><option value="other">อื่น ๆ</option></select></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">จำนวนผู้ใช้โดยประมาณ<input name="estimated_users" inputMode="numeric" placeholder="เช่น 1 หรือ 5" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">Hardware ที่สนใจ<select required name="hardware_interest" defaultValue="desk_rig" className={fieldClass}><option value="desk_rig">AI rig บนโต๊ะ</option><option value="dgx_spark">NVIDIA DGX Spark</option><option value="dual_spark">2x Spark</option><option value="rtx_5090">RTX 5090 workstation</option><option value="mac_studio_ultra">Mac Studio Ultra</option><option value="unsure">ยังไม่แน่ใจ</option></select></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">Software ที่สนใจ<select required name="software_interest" defaultValue="local" className={fieldClass}><option value="local">Mimir Suites Local</option><option value="none">ไม่เอา software, รับเฉพาะ hardware</option><option value="unsure">ยังไม่แน่ใจ</option></select></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">Edition<select name="edition" defaultValue="local" className={fieldClass}><option value="local">Local</option><option value="hardware_only">เฉพาะ hardware</option></select></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">จำนวนที่นั่งหรือพนักงานบน Suite<input name="seats" inputMode="numeric" placeholder="ถ้าเลือก Local" className={fieldClass} /></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">Budget<select name="budget" defaultValue="unsure" className={fieldClass}><option value="unsure">ยังไม่กำหนด</option><option value="under_100k">ต่ำกว่า 100k THB</option><option value="100k_300k">100k to 300k THB</option><option value="300k_plus">300k+ THB</option></select></label>
              <label className="text-sm font-semibold text-[#1d1d1f]">Timeline<select name="timeline" defaultValue="exploring" className={fieldClass}><option value="exploring">กำลังศึกษา</option><option value="this_quarter">ภายในไตรมาสนี้</option><option value="planned">มีแผนภายหลัง</option></select></label>
            </div>
            <label className="mt-5 block text-sm font-semibold text-[#1d1d1f]">Use case<textarea required name="use_case" rows={3} placeholder="คุณจะให้ rig ทำอะไร" className={fieldClass} /></label>
            <label className="mt-5 block text-sm font-semibold text-[#1d1d1f]">ความต้องการ model<textarea name="model_requirements" rows={3} placeholder="เช่น model size, quantisation, context, runtime" className={fieldClass} /></label>
            <label className="mt-5 block text-sm font-semibold text-[#1d1d1f]">ความอ่อนไหวของข้อมูล<select name="data_sensitivity" defaultValue="unsure" className={fieldClass}><option value="unsure">ยังไม่แน่ใจ</option><option value="public">ข้อมูลสาธารณะ</option><option value="internal">ข้อมูลภายใน</option><option value="sensitive">ข้อมูลอ่อนไหว</option></select></label>
            <button type="submit" className="apple-btn apple-btn-blue mt-7 w-full active:scale-[0.97] transition-transform">ส่งความต้องการของ build</button>
          </form>
          <aside className="space-y-4"><div className="rounded-3xl bg-[#1d1d1f] p-7 text-white"><h3 className="text-xl font-semibold text-white mb-3">อยากคุยโดยตรง?</h3><p className="text-sm text-gray-300">ส่ง model list และ current stack มาก่อนได้</p></div><a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 rounded-2xl border border-black/[0.07] p-5 text-sm font-semibold text-[#1d1d1f] transition-[transform,box-shadow] duration-150 ease-out hover:shadow-md active:scale-[0.97]"><Mail className="text-[#06c]" size={19} />{site.contact.email}</a><a href={`tel:${site.contact.phone.replaceAll("-", "")}`} className="flex items-center gap-3 rounded-2xl border border-black/[0.07] p-5 text-sm font-semibold text-[#1d1d1f] transition-[transform,box-shadow] duration-150 ease-out hover:shadow-md active:scale-[0.97]"><Phone className="text-[#06c]" size={19} />{site.contact.phone}</a><a href={site.contact.line} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-black/[0.07] p-5 text-sm font-semibold text-[#1d1d1f] transition-[transform,box-shadow] duration-150 ease-out hover:shadow-md active:scale-[0.97]"><MessageCircle className="text-[#06c]" size={19} />LINE Official</a></aside>
        </div>
      </div>
    </section>
  );
}
