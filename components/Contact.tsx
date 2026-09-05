import { Mail, MessageCircle, Phone } from "lucide-react";

const channelClass = "flex items-center gap-3 rounded-2xl border border-black/[0.07] p-5 text-sm font-semibold text-[#1d1d1f] transition-[transform,box-shadow] duration-150 ease-out hover:shadow-md active:scale-[0.97]";

export default function Contact() {
  return (
    <section id="contact" className="section-white apple-section scroll-mt-16">
      <div className="container-wide">
        <div className="max-w-3xl mb-10"><p className="text-[#06c] text-sm font-semibold tracking-widest uppercase mb-3">Configure your studio</p><h2 className="text-4xl sm:text-5xl font-semibold mb-5">ส่ง workload ของคุณมา</h2><p className="text-lg">บอก model, context และ stack ที่คุณจะใช้ เราจะเริ่มจาก memory budget ก่อนคุยเรื่อง build</p></div>
        <div className="grid gap-8 lg:grid-cols-[1.4fr,0.6fr]">
          <div data-cta="form" />
          <aside className="space-y-4"><div className="rounded-3xl bg-[#1d1d1f] p-7 text-white"><h3 className="text-xl font-semibold text-white mb-3">อยากคุยโดยตรง?</h3><p className="text-sm text-gray-300">ส่ง model list และ current stack มาก่อนได้</p></div><div className={`channel-row ${channelClass}`}><Mail className="text-[#06c]" size={19} /><a data-cta="email" className="flex-1" /></div><div className={`channel-row ${channelClass}`}><Phone className="text-[#06c]" size={19} /><a data-cta="tel" className="flex-1" /></div><a data-cta="line" className={channelClass}><MessageCircle className="text-[#06c]" size={19} />LINE Official</a></aside>
        </div>
      </div>
    </section>
  );
}
