import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, ShieldCheck, Sparkles, Star } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import bookImg from "@/assets/book-mockup.jpg";
import quoteBg from "@/assets/quote-bg.jpg";
import authorImg from "@/assets/author-portrait.png.asset.json";
import pathImg from "@/assets/path-sunrise.jpg";
import { AMAZON_URL } from "@/components/site/Nav";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chaim Ilowitz — Time Wasn't Up! A Memoir of Miracles" },
      {
        name: "description",
        content:
          "A remarkable true story of survival, faith, divine guidance, and the thirty miracles that shaped one man's life. By Chaim Ilowitz.",
      },
      { property: "og:title", content: "Chaim Ilowitz — Time Wasn't Up!" },
      {
        property: "og:description",
        content:
          "Thirty miraculous life events. One unforgettable journey of faith, gratitude, and divine protection.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Sunrise over an open road symbolizing hope"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          width={1920}
          height={1280}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_265)]/40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-24 pb-16">
          <div className="flex items-center justify-center gap-3 animate-fade-in">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              A True Memoir
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <p className="mt-6 font-display text-xl md:text-2xl text-white/85 animate-fade-up">
            Chaim Ilowitz presents
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl leading-[1.02] text-balance animate-fade-up delay-100">
            Time Wasn't Up!
          </h1>
          <p className="mt-5 font-display text-2xl md:text-3xl text-accent italic animate-fade-up delay-200">
            Thirty Miraculous Life Events
          </p>
          <p className="mt-7 mx-auto max-w-2xl text-base md:text-lg text-white/80 leading-relaxed animate-fade-up delay-300">
            A remarkable true story of survival, faith, divine guidance, and the
            miracles that shaped one man's life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-400">
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium tracking-wide shadow-elegant hover:-translate-y-0.5 transition-all"
            >
              Buy the Book <ArrowRight size={16} />
            </a>
            <Link
              to="/trailer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/40 text-white text-sm font-medium tracking-wide hover:bg-white/10 transition-all"
            >
              Watch Trailer
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs uppercase tracking-[0.25em]">
          Scroll to discover
        </div>
      </section>

      {/* FEATURED BOOK */}
      <section className="py-24 md:py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <img
              src={bookImg}
              alt="Time Wasn't Up! hardcover book"
              loading="lazy"
              className="relative rounded-2xl shadow-elegant w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                The Featured Memoir
              </span>
            </div>
            <h2 className="mt-5 font-display text-5xl md:text-6xl text-foreground leading-[1.05] text-balance">
              Time Wasn't Up!
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Across thirty extraordinary moments — near-misses, quiet rescues, and
              unmistakable signs — Chaim Ilowitz tells the true story of a life
              repeatedly spared. Woven through it all are family, faith, and an
              uncommon gratitude that turns each escape into a lesson and each
              lesson into a prayer.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Honest, intimate, and quietly cinematic — a memoir for anyone who
              has ever wondered whether someone is watching over them.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
              >
                <BookOpen size={16} /> Buy on Amazon
              </a>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/15 text-foreground text-sm font-medium hover:border-accent hover:text-accent transition"
              >
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MIRACLES & FAITH */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Themes of the Memoir"
            title="Miracles. Faith. Purpose."
            description="Three threads that run through every chapter — and through every life."
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Miraculous Survival",
                body:
                  "Stories of extraordinary life-saving moments — the kind that cannot be coincidence.",
              },
              {
                icon: Heart,
                title: "Unbreakable Faith",
                body:
                  "How every challenge became a doorway to deeper belief, trust, and quiet courage.",
              },
              {
                icon: Sparkles,
                title: "Life's Purpose",
                body:
                  "Lessons learned from surviving against all odds — and the gratitude that follows.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group p-10 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-elegant transition-all duration-500"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-gold-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <img
          src={quoteBg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_265)]/85" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="text-accent text-5xl font-display leading-none">"</div>
          <blockquote className="mt-2 font-display italic text-3xl md:text-5xl leading-tight text-balance">
            Time wasn't up. Every moment was part of a greater plan.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3 text-white/70">
            <span className="h-px w-8 bg-accent" />
            <span className="uppercase tracking-[0.25em] text-xs">
              Chaim Ilowitz
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
        </div>
      </section>

      {/* AUTHOR SPOTLIGHT */}
      <section className="py-24 md:py-32 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-2 relative">
            <img
              src={authorImg.url}
              alt="Author Chaim Ilowitz"
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full object-cover object-top aspect-[4/5]"
            />
            <div
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full opacity-60 blur-2xl"
              style={{ background: "var(--gradient-gold)" }}
            />
          </div>
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                Meet the Author
              </span>
            </div>
            <h2 className="mt-5 font-display text-5xl text-foreground leading-tight">
              Chaim Ilowitz
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              A husband, father, and lifelong student of gratitude, Chaim Ilowitz
              has spent decades quietly collecting the moments most people would
              call lucky — and recognizing them for what they truly are. From
              childhood escapes to adulthood crossroads, his life has been
              marked by an unmistakable hand of protection.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              <em>Time Wasn't Up!</em> is his testimony — written so that his
              children, and yours, will remember that miracles still happen.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Reader Reactions"
            title="A book that stays with you"
          />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I read it in two sittings and called my mother in tears. A genuine, faith-building memoir.",
                name: "Rivka S.",
                role: "Reader",
              },
              {
                quote:
                  "Honest, moving, and unforgettable. Every chapter felt like a quiet reminder that we are not alone.",
                name: "David L.",
                role: "Reader",
              },
              {
                quote:
                  "An inspiring testimony of gratitude. The kind of book you press into a friend's hands.",
                name: "Miriam K.",
                role: "Reader",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="p-8 rounded-2xl bg-beige border border-border"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-xl text-foreground leading-snug">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{t.name}</span> · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="relative py-24 overflow-hidden">
        <img
          src={pathImg}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.18_0.04_265)]/80" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Begin the journey through thirty miracles.
          </h2>
          <p className="mt-5 text-white/75 text-lg max-w-xl mx-auto">
            Order your copy today and discover why time wasn't up.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Buy the Book <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
