import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { AMAZON_URL } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.04_265)] text-[oklch(0.92_0.01_85)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">
            Chaim <span className="text-accent">Ilowitz</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Author of <em>Time Wasn't Up!: Thirty Miraculous Life Events</em> — a true
            story of survival, faith, and divine guidance that shaped one
            remarkable life.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-6 px-5 py-2.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium"
          >
            Buy on Amazon
          </a>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-white/75">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="hover:text-accent">About the Author</Link></li>
            <li><Link to="/book" className="hover:text-accent">The Book</Link></li>
            <li><Link to="/trailer" className="hover:text-accent">Book Trailer</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.18em] text-accent mb-4">
            Connect
          </h4>
          <p className="text-sm text-white/70 mb-4">
            For interviews, speaking, and reader letters.
          </p>
          <a
            href="mailto:hello@chaimilowitz.com"
            className="text-sm text-white/85 hover:text-accent flex items-center gap-2"
          >
            <Mail size={16} /> hello@chaimilowitz.com
          </a>
          <div className="flex items-center gap-4 mt-5 text-white/70">
            <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <span>© {new Date().getFullYear()} Chaim Ilowitz. All rights reserved.</span>
          <span>Time Wasn't Up! — A memoir of miracles, faith, and gratitude.</span>
        </div>
      </div>
    </footer>
  );
}
