import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { blogIndex } from "@/lib/site-data";

// next/link published "/blog/" as "/blog"; kept so internal links stay unchanged.
const links = [
  { label: blogIndex.navLabel, href: "/blog" },
  { label: "Builds", href: "/builds" },
  { label: "Models", href: "/models" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "About", href: "/about" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Contact", href: "/contact" },
];

// Pages build to `about.html` and `blog/<slug>/index.html`, so the path is
// normalised before it is matched against the slashless nav hrefs.
const isCurrent = (pathname: string, href: string) => {
  const path = pathname.replace(/(\/index)?\.html$/, "").replace(/\/$/, "");
  return href === "/blog"
    ? path === href || path.startsWith(`${href}/`)
    : path === href;
};

export default function Navbar({ pathname = "/" }: { pathname?: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className="nav-glass sticky top-0 z-50 border-b border-black/[0.05]">
      <div className="container-wide flex min-h-16 items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-[#1d1d1f]"
        >
          AI <span className="gradient-text">Studio</span> TH
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#1d1d1f] transition-colors hover:bg-[#f0f5ff] hover:text-[#06c] aria-[current=page]:bg-[#f0f5ff] aria-[current=page]:text-[#06c]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="btn-primary ml-3 px-5 py-2.5 text-sm active:scale-[0.97] transition-transform"
          >
            {site.primaryCta.label}
          </a>
        </div>
        <button
          ref={toggle}
          className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-xl text-[#1d1d1f] active:scale-[0.97] transition-transform lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <div id="site-menu" className="border-t border-black/[0.05] bg-white lg:hidden">
          <div className="container-wide py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#1d1d1f] hover:bg-[#f0f5ff] hover:text-[#06c] aria-[current=page]:bg-[#f0f5ff] aria-[current=page]:text-[#06c]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full active:scale-[0.97] transition-transform"
            >
              {site.primaryCta.label}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
