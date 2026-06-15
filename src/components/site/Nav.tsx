import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const AMAZON_URL =
  "https://www.amazon.com/Time-Wasnt-Up-Thirty-Miraculous/dp/B0FB8X6PF8";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/book", label: "The Book" },
  { to: "/trailer", label: "Book Trailer" },
  { to: "/contact", label: "Contact" },
] as const;

function BrandMark({ onDark }: { onDark: boolean }) {
  const accent = "text-amber-400";
  const wordTop = onDark ? "text-white" : "text-foreground";
  const wordBottom = onDark ? "text-amber-400" : "text-accent";
  const border = onDark ? "border-amber-400/50" : "border-accent/60";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <span
        className={`relative w-10 h-10 flex items-center justify-center shrink-0`}
      >
        <span
          className={`absolute inset-0 border ${border} rotate-45 transition-transform duration-500 group-hover:rotate-[60deg]`}
        />
        <span
          className={`font-cinzel text-lg font-bold ${accent} leading-none`}
        >
          C
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-cinzel text-[15px] tracking-[0.28em] uppercase ${wordTop}`}
        >
          Chaim
        </span>
        <span
          className={`font-cinzel text-[11px] tracking-[0.32em] uppercase mt-1 ${wordBottom}`}
        >
          Ilowitz
        </span>
      </span>
    </Link>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  // Transparent dark hero overlay on home until scroll; on other routes solid right away
  const onDark = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const headerClass = onDark
    ? "bg-transparent"
    : "bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/5 shadow-sm";

  const linkClass = onDark
    ? "text-white/75 hover:text-amber-400"
    : "text-white/80 hover:text-amber-400";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <BrandMark onDark={onDark} />

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors ${linkClass}`}
              activeProps={{ className: "text-amber-400" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-[#0a0a0c] text-[11px] font-bold uppercase tracking-[0.22em] rounded-sm shadow-[0_0_24px_-6px_rgba(245,158,11,0.6)] transition-all hover:-translate-y-0.5"
          >
            Buy the Book
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className={`lg:hidden p-2 ${onDark ? "text-white" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a0a0c] border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-white/85 hover:text-amber-400 py-1 text-sm uppercase tracking-[0.2em]"
                activeProps={{ className: "text-amber-400" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 bg-amber-500 text-[#0a0a0c] text-xs font-bold uppercase tracking-[0.22em] rounded-sm"
            >
              Buy the Book
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export { AMAZON_URL };
