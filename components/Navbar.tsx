"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { label: "Builds", href: "/builds" },
  { label: "Models", href: "/models" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav-glass sticky top-0 z-50 border-b border-black/[0.05]"><div className="container-wide flex min-h-16 items-center justify-between"><Link href="/" className="text-xl font-bold tracking-tight text-[#1d1d1f]">AI <span className="gradient-text">Studio</span> TH</Link><div className="hidden items-center gap-1 lg:flex">{links.map((link) => <Link key={link.href} href={link.href} className="rounded-full px-3 py-2 text-sm font-medium text-[#1d1d1f] transition-colors hover:bg-[#f0f5ff] hover:text-[#06c]">{link.label}</Link>)}<Link href="/contact" className="btn-primary ml-3 !px-5 !py-2.5 text-sm active:scale-[0.97] transition-transform">{site.primaryCta.label}</Link></div><button className="lg:hidden rounded-xl p-2 text-[#1d1d1f] active:scale-[0.97] transition-transform" aria-label="Toggle menu" onClick={() => setOpen((current) => !current)}>{open ? <X size={23} /> : <Menu size={23} />}</button></div>{open && <div className="border-t border-black/[0.05] bg-white lg:hidden"><div className="container-wide py-3">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#1d1d1f] hover:bg-[#f0f5ff] hover:text-[#06c]">{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full active:scale-[0.97] transition-transform">{site.primaryCta.label}</Link></div></div>}</nav>
  );
}
