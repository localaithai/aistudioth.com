import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr,1fr,1fr]">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">AI <span className="gradient-text">Studio</span> TH</Link>
            <p className="mt-4 max-w-sm text-sm text-gray-400">AI rig บนโต๊ะสำหรับ developer, researcher และทีมเทคนิคเล็กที่ต้องการรัน model ในเครื่อง.</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">สำรวจ</h2>
            <div className="mt-4 grid gap-2 text-sm text-gray-400"><Link href="/builds" className="hover:text-white">Builds</Link><Link href="/models" className="hover:text-white">Models</Link><Link href="/benchmarks" className="hover:text-white">Benchmarks</Link><Link href="/about" className="hover:text-white">เกี่ยวกับเรา</Link><Link href="/ecosystem" className="hover:text-white">Local หรือ cloud</Link></div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider">ติดต่อ</h2>
            <div className="mt-4 grid gap-3 text-sm text-gray-400"><a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:text-white"><Mail size={15} />{site.contact.email}</a><a href={`tel:${site.contact.phone.replaceAll("-", "")}`} className="flex items-center gap-2 hover:text-white"><Phone size={15} />{site.contact.phone}</a><a href={site.contact.line} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle size={15} />LINE Official</a></div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-gray-500">© {new Date().getFullYear()} AI Studio TH</div>
      </div>
    </footer>
  );
}
