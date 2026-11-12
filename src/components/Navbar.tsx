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
  "link-line flex min-h-11 items-center gap-3 text-base font-medium text-ink";

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
      className="sticky top-0 z-50 bg-page transition-[background-color,box-shadow,transform] duration-[.4s,.4s,.5s] ease-glide data-hidden:[transform:translateY(-100%)] data-[state=solid]:bg-page/92 data-[state=solid]:shadow-[inset_0_-1px_0_var(--color-ink)] data-[state=solid]:backdrop-blur-[12px]"
      data-state={atTop && !open ? "top" : "solid"}
      data-hidden={hidden && !open ? "" : undefined}
      onFocus={() => setHidden(false)}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <a href="/" className="flex min-h-11 items-center gap-2.5 text-ink">
          <span aria-hidden="true" className="size-2.5 flex-none bg-brand" />
          <span className="font-readout text-[1.625rem] leading-none font-extrabold tracking-[0.02em] uppercase">
            AI Studio TH
          </span>
        </a>
        <div className="hidden items-center lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
              className="relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium text-ink transition-[color] duration-200 ease-glide after:absolute after:right-3 after:bottom-[0.5rem] after:left-3 after:h-0.5 after:origin-[right] after:bg-brand after:[transform:scaleX(0)] after:transition-[transform] after:duration-300 after:ease-glide hover:after:origin-[left] hover:after:[transform:scaleX(1)] aria-[current=page]:font-semibold aria-[current=page]:after:origin-[left] aria-[current=page]:after:[transform:scaleX(1)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            className="btn btn-primary ml-4 min-h-11 px-5 text-sm"
          >
            {site.primaryCta.label}
          </a>
        </div>
        <button
          ref={toggle}
          type="button"
          className="-mr-2.5 inline-flex size-11 items-center justify-center rounded-[4px] text-ink transition-transform active:scale-[0.98] lg:hidden"
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
          className="absolute inset-x-0 top-full flex h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-page lg:hidden"
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
                  className="flex min-h-14 items-center border-b border-line text-[clamp(1.75rem,7.5vw,2.25rem)] leading-[1.3] font-bold tracking-[-0.01em] text-ink transition-[color] duration-200 ease-glide hover:text-brand-deep aria-[current=page]:text-brand motion-safe:animate-menu-rise"
                  style={{ "--i": index } as CSSProperties}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div
              className="grid gap-4 border-t border-ink pt-6 motion-safe:animate-menu-rise"
              style={{ "--i": links.length } as CSSProperties}
            >
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary min-h-13 w-full"
              >
                {site.primaryCta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <div className="grid">
                <a data-cta="email" className={contactClass}>
                  <Mail className="text-brand" size={18} aria-hidden="true" />
                </a>
                <a data-cta="tel" className={contactClass}>
                  <Phone className="text-brand" size={18} aria-hidden="true" />
                </a>
                <a data-cta="line" className={contactClass}>
                  <MessageCircle
                    className="text-brand"
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
