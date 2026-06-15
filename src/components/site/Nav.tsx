import { Link } from "@tanstack/react-router";
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

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-tight text-foreground">
            Chaim <span className="text-accent">Ilowitz</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium tracking-wide shadow-soft hover:shadow-elegant transition-all hover:-translate-y-0.5"
          >
            Buy the Book
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-accent py-1"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium"
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
