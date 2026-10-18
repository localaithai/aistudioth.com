import {
  ArrowRight,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { type CSSProperties, useEffect, useRef, useState } from "react";
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
const normalise = (pathname: string) =>
  pathname.replace(/(\/index)?\.html$/, "").replace(/\/$/, "");

const isCurrent = (pathname: string, href: string) => {
  const path = normalise(pathname);
  return href === "/blog"
    ? path === href || path.startsWith(`${href}/`)
    : path === href;
};

const contactClass =
  "link-line flex min-h-11 items-center gap-3 text-base font-medium text-[#1d1d1f]";

export default function Navbar({ pathname = "/" }: { pathname?: string }) {
  const overHero = normalise(pathname) === "";
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(overHero);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      setAtTop(overHero && y < 24);
      if (y > lastY + 4) {
        if (y > window.innerHeight) setHidden(true);
        lastY = y;
      } else if (y < lastY - 4) {
        setHidden(false);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const wide = window.matchMedia("(min-width: 1024px)");
    const onWide = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <nav
      className="site-nav sticky top-0 z-50"
      data-state={atTop && !open ? "top" : "solid"}
      data-hidden={hidden && !open ? "" : undefined}
      onFocus={() => setHidden(false)}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-[#1d1d1f]"
        >
          AI <span className="gradient-text">Studio</span> TH
        </a>
        <div className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="btn-primary ml-4 px-5 py-2.5 text-sm">
            {site.primaryCta.label}
          </a>
        </div>
        <button
          ref={toggle}
          type="button"
          className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-xl text-[#1d1d1f] transition-transform active:scale-[0.98] lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <div
          id="site-menu"
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-white lg:hidden"
        >
          <div className="container-wide flex w-full flex-1 flex-col justify-between gap-10 pt-4 pb-[max(2rem,env(safe-area-inset-bottom))]">
            <div className="grid">
              {links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={
                    isCurrent(pathname, link.href) ? "page" : undefined
                  }
                  onClick={() => setOpen(false)}
                  className="menu-link menu-rise"
                  style={{ "--i": index } as CSSProperties}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div
              className="menu-rise grid gap-4 border-t border-black/[0.08] pt-6"
              style={{ "--i": links.length } as CSSProperties}
            >
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="apple-btn apple-btn-blue min-h-12 w-full"
              >
                {site.primaryCta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <div className="grid">
                <a data-cta="email" className={contactClass}>
                  <Mail className="text-[#06c]" size={18} aria-hidden="true" />
                </a>
                <a data-cta="tel" className={contactClass}>
                  <Phone className="text-[#06c]" size={18} aria-hidden="true" />
                </a>
                <a data-cta="line" className={contactClass}>
                  <MessageCircle
                    className="text-[#06c]"
                    size={18}
                    aria-hidden="true"
                  />
                  LINE Official
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
