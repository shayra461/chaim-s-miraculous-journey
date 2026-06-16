import { createFileRoute } from "@tanstack/react-router";
import trailerHero from "@/assets/trailer-hero.jpg";
const trailerVideo = "https://id-preview--22179785-29c6-427f-8f90-6840d750f934.lovable.app/__l5e/assets-v1/87cccd7f-90d4-44fc-8350-f221b4884884/trailer-video.mp4";
import { AMAZON_URL } from "@/components/site/Nav";
import { Heart, ShieldCheck, Sparkles, Sun, Users } from "lucide-react";

export const Route = createFileRoute("/trailer")({
  head: () => ({
    meta: [
      { title: "Book Trailer — Time Wasn't Up! by Chaim Ilowitz" },
      {
        name: "description",
        content:
          "Watch the official book trailer for Time Wasn't Up! Experience the journey behind the miracles.",
      },
      { property: "og:title", content: "Book Trailer — Time Wasn't Up!" },
      { property: "og:url", content: "/trailer" },
      { property: "og:image", content: trailerHero },
    ],
    links: [{ rel: "canonical", href: "/trailer" }],
  }),
  component: TrailerPage,
});

const highlights = [
  { icon: ShieldCheck, label: "Survival" },
  { icon: Sun, label: "Faith" },
  { icon: Sparkles, label: "Miracles" },
  { icon: Users, label: "Family" },
  { icon: Heart, label: "Divine Protection" },
];

function TrailerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[oklch(0.12_0.03_265)]">
        <img
          src={trailerHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.03_265)] via-[oklch(0.12_0.03_265)]/60 to-[oklch(0.12_0.03_265)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Official Trailer
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-balance">
            Book Trailer
          </h1>
          <p className="mt-5 font-display italic text-xl md:text-2xl text-white/80">
            Experience the journey behind the miracles.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 bg-[oklch(0.12_0.03_265)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-white/10 aspect-video bg-black">
            <video
              src={trailerVideo}
              controls
              className="w-full h-full"
              poster={trailerHero}
            />
          </div>
          <p className="mt-4 text-center text-white/50 text-xs uppercase tracking-[0.25em]">
            Official Book Trailer — Time Wasn't Up!
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Trailer Highlights
            </span>
            <span className="gold-rule" />
          </div>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground">
            What you'll feel
          </h2>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-5">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-beige border border-border hover:border-accent/50 hover:-translate-y-1 transition-all duration-500"
              >
                <div
                  className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-gold-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Icon size={20} />
                </div>
                <div className="mt-4 font-display text-lg text-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Ready to read the full story?
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            The miracles continue, page after page.
          </p>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center mt-8 px-8 py-4 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-base font-medium shadow-elegant hover:-translate-y-0.5 transition-all"
          >
            Buy the Book
          </a>
        </div>
      </section>
    </>
  );
}
