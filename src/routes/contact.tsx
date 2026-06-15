import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import contactHero from "@/assets/contact-hero.jpg";
import { Facebook, Instagram, Mail, Twitter } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Chaim Ilowitz" },
      {
        name: "description",
        content:
          "Get in touch with Chaim Ilowitz — author of Time Wasn't Up! Send a note, request an interview, or join the newsletter.",
      },
      { property: "og:title", content: "Contact — Chaim Ilowitz" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email").max(255),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [newsletterMsg, setNewsletterMsg] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path.join(".")] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
  }

  function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = newsletterSchema.safeParse({ email: form.get("email") });
    if (!result.success) {
      setNewsletterMsg(result.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setNewsletterMsg("Thank you for subscribing — see you in your inbox.");
    e.currentTarget.reset();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <img
          src={contactHero}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[oklch(0.99_0.005_85)]/82" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
              Contact
            </span>
            <span className="gold-rule" />
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-foreground leading-[1.05] text-balance">
            Get In Touch
          </h1>
          <p className="mt-5 text-muted-foreground text-lg">
            For reader letters, interviews, speaking inquiries, or simply to
            share a story — Chaim would love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="p-10 rounded-2xl bg-beige border border-accent/40 text-center">
                <div
                  className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-gold-foreground"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <Mail size={22} />
                </div>
                <h3 className="mt-5 font-display text-3xl text-foreground">
                  Thank you!
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Your message has been received. Chaim reads every note
                  personally and will reply as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" error={errors.name} />
                  <Field label="Email" name="email" type="email" error={errors.email} />
                </div>
                <Field label="Subject" name="subject" error={errors.subject} />
                <Field
                  label="Message"
                  name="message"
                  error={errors.message}
                  textarea
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[var(--gradient-gold)] text-gold-foreground text-sm font-medium shadow-soft hover:-translate-y-0.5 transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-2xl bg-beige border border-border">
              <h3 className="font-display text-2xl text-foreground">
                Author Information
              </h3>
              <p className="mt-3 text-muted-foreground">Chaim Ilowitz</p>
              <a
                href="mailto:hello@chaimilowitz.com"
                className="mt-4 inline-flex items-center gap-2 text-foreground hover:text-accent"
              >
                <Mail size={16} /> hello@chaimilowitz.com
              </a>
              <div className="flex items-center gap-4 mt-6 text-muted-foreground">
                <a href="#" aria-label="Facebook" className="hover:text-accent"><Facebook size={18} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-accent"><Instagram size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-accent"><Twitter size={18} /></a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-beige">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="Newsletter"
            title="Stay Connected"
            description="Receive updates and inspiration from Chaim Ilowitz."
          />
          <form
            onSubmit={handleNewsletter}
            className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
          {newsletterMsg && (
            <p className="mt-4 text-sm text-accent">{newsletterMsg}</p>
          )}
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  textarea?: boolean;
}) {
  const base =
    "w-full px-5 py-3.5 rounded-xl bg-background border border-border focus:border-accent focus:ring-2 focus:ring-accent/30 outline-none transition text-foreground";
  return (
    <label className="block">
      <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={6} className={`mt-2 ${base}`} />
      ) : (
        <input type={type} name={name} className={`mt-2 ${base}`} />
      )}
      {error && <span className="block mt-1.5 text-xs text-destructive">{error}</span>}
    </label>
  );
}
