import { createFileRoute } from "@tanstack/react-router";
import bookImg from "@/assets/book-mockup.jpg";
import readingImg from "@/assets/author-reading.jpg";
import lightClouds from "@/assets/light-clouds.jpg";
import { AMAZON_URL } from "@/components/site/Nav";
import { SectionHeading } from "@/components/site/SectionHeading";
import {
  ArrowRight,
  Heart,
  Home,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "The Book — Time Wasn't Up! by Chaim Ilowitz" },
      {
        name: "description",
        content:
          "Time Wasn't Up!: Thirty Miraculous Life Events — a true memoir of survival, faith, family, and divine protection by Chaim Ilowitz.",
      },
      { property: "og:title", content: "Time Wasn't Up! — The Book" },
      { property: "og:url", content: "/book" },
      { property: "og:image", content: bookImg },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const themes = [
  { icon: Sparkles, label: "Miracles" },
  { icon: Sun, label: "Faith" },
  { icon: Users, label: "Family" },
  { icon: ShieldCheck, label: "Survival" },
  { icon: Heart, label: "Hope" },
  { icon: Home, label: "Divine Guidance" },
];

const previews = [
  {
    n: "01",
    title: "The First Glimpse",
    body: "An early memory that planted a seed of awareness — that someone, somewhere, was paying attention.",
  },
  {
    n: "02",
    title: "A Twin's Shadow",
    body: "Parallel lives, parallel rescues. The quiet bond of brothers walking the same protected road.",
  },
  {
    n: "03",
    title: "When the Road Ended",
    body: "A near-fatal moment that should have been the last page — and the unexpected turn that wasn't.",
  },
  {
    n: "04",
    title: "Letters of Gratitude",
    body: "What it means to keep a ledger of mercies and read it aloud at the family table.",
  },
];

function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div
              className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <img
              src={bookImg}
              alt="Time Wasn't Up! book cover"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                The Book
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.02] text-foreground text-balance">
              Time Wasn't Up!
            </h1>
            <p className="mt-3 font-display italic text-2xl text-accent">
              Thirty Miraculous Life Events
            </p>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              By Chaim Ilowitz · A true memoir of survival, faith, and the
              quiet, unmistakable hand of divine protection.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium shadow-soft hover:-translate-y-0.5 transition-all"
              >
                Buy on Amazon <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Book Overview"
            title="Thirty miracles. One unforgettable life."
          />
          <div className="mt-10 space-y-5 text-foreground/85 text-lg leading-[1.85]">
            <p>
              In <em>Time Wasn't Up!</em>, Chaim Ilowitz recounts thirty distinct
              moments when his life — by every reasonable measure — should have
              ended, and didn't. Each story is told with the candor of a
              grandfather at the kitchen table: small details, honest doubts, and
              the unmistakable thread of something greater at work.
            </p>
            <p>
              Together, these chapters form more than a memoir. They form an
              argument for gratitude — and an invitation to look back over your
              own life with new eyes.
            </p>
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Key Themes" title="What this book is about" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themes.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-background border border-border hover:border-accent/50 hover:shadow-soft transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-gold-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon size={20} />
                </div>
                <span className="mt-3 font-display text-lg text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the book */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading
            eyebrow="Inside the Book"
            title="A glimpse between the covers"
            description="Thematic previews of the stories you'll find inside."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {previews.map((p) => (
              <article
                key={p.n}
                className="p-8 rounded-2xl bg-beige border border-border hover:border-accent/50 hover:shadow-elegant transition-all"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-5xl text-accent">{p.n}</span>
                  <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why read */}
      <section className="py-24 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <img
            src={readingImg}
            alt="A quiet reading moment"
            loading="lazy"
            className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
          />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Read This Book"
              title="A book that does something to you"
            />
            <ul className="mt-8 space-y-4 text-foreground/85 text-lg">
              {[
                "Inspirational — a true story that restores your sense of wonder.",
                "Faith-building — quietly persuasive, never preachy.",
                "Emotionally powerful — written with honesty and warmth.",
                "Life-changing lessons — gratitude as a daily practice.",
                "A family heirloom — meant to be passed down.",
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-2.5 h-px w-6 bg-accent shrink-0" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Buy CTA */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={lightClouds}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_265)]/82" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl leading-tight text-balance">
            Bring <em>Time Wasn't Up!</em> home.
          </h2>
          <p className="mt-5 text-white/80 text-lg">
            Available now in hardcover on Amazon.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-base font-medium shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Buy on Amazon <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
