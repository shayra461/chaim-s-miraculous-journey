import { createFileRoute, Link } from "@tanstack/react-router";
import authorPortrait from "@/assets/author-portrait.jpg";
import authorReading from "@/assets/author-reading.jpg";
import authorWalking from "@/assets/author-walking.jpg";
import lightClouds from "@/assets/light-clouds.jpg";
import familyHands from "@/assets/family-hands.jpg";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Chaim Ilowitz — A Life of Miracles and Faith" },
      {
        name: "description",
        content:
          "Meet Chaim Ilowitz: husband, father, and author of Time Wasn't Up! A life marked by extraordinary survival, faith, and purpose.",
      },
      { property: "og:title", content: "About Chaim Ilowitz" },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: authorPortrait },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "Childhood", title: "A Brother, A Bond", body: "Growing up alongside a twin brother, sharing experiences that hint at something larger." },
  { year: "Youth", title: "First Glimpses", body: "Early near-misses that, in hindsight, formed a pattern impossible to ignore." },
  { year: "Adulthood", title: "Building a Life", body: "Family, work, community — and the quiet recognition of protection at every turn." },
  { year: "Midlife", title: "Crossroads & Clarity", body: "Defining moments that turned belief into conviction and challenges into prayer." },
  { year: "Today", title: "A Testimony in Print", body: "Thirty miracles, collected and shared — so the lessons aren't lost." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                The Author
              </span>
            </div>
            <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[1.05] text-foreground">
              Meet Chaim Ilowitz
            </h1>
            <p className="mt-6 font-display italic text-2xl text-muted-foreground">
              "A life marked by extraordinary survival, faith, and purpose."
            </p>
          </div>
          <div className="relative">
            <img
              src={authorPortrait}
              alt="Portrait of Chaim Ilowitz"
              className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Biography" title="A life, quietly extraordinary" />
          <div className="mt-12 prose-lg space-y-6 text-foreground/85 text-lg leading-[1.85]">
            <p>
              Chaim Ilowitz was born into a close-knit family where faith was less
              a subject of study than the air everyone breathed. From childhood,
              he and his twin brother shared a bond that would carry them through
              moments most people only read about — moments where time, by every
              measure, should have been up.
            </p>
            <p>
              He grew into a husband, a father, and a working man whose days were
              filled with the ordinary rhythms of family and prayer. But woven
              into those rhythms was a thread of the extraordinary: near-death
              encounters, sudden rescues, and small, unmistakable signs of
              protection that no one — least of all Chaim — could explain away.
            </p>
            <p>
              He did not write <em>Time Wasn't Up!</em> to be remembered. He wrote
              it so his children, and yours, would remember the One who keeps watch.
              The book is at once a memoir, a thank-you note, and a quiet act of
              witness.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-beige">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Life Journey" title="A timeline of grace" />
          <ol className="mt-16 relative border-l border-accent/40 ml-3 space-y-12">
            {timeline.map((item, idx) => (
              <li key={item.year} className="pl-8 relative">
                <span
                  className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full border-4 border-beige"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
                  {item.year}
                </div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                  {item.body}
                </p>
                {idx === timeline.length - 1 && (
                  <span className="sr-only">end of timeline</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Faith section */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={lightClouds}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.15_0.04_265)]/82" />
        <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center gap-3 text-accent">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em]">Faith & Gratitude</span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-tight text-balance">
            Belief turned each rescue into a responsibility.
          </h2>
          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            For Chaim, surviving was never the end of the story. Every miracle
            became a quiet invitation — to live more deeply, to thank more
            often, and to pass the message on.
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeading eyebrow="Gallery" title="Moments along the way" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <img src={authorReading} alt="Chaim reading by the window" loading="lazy" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-soft" />
            <img src={authorWalking} alt="Chaim walking through a sunlit field" loading="lazy" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-soft" />
            <img src={familyHands} alt="Family hands over an album" loading="lazy" className="rounded-2xl w-full aspect-[3/4] object-cover shadow-soft" />
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Explore the Book <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
