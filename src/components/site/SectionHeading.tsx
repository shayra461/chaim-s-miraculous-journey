import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
          <span className="gold-rule" />
          <span className="text-xs uppercase tracking-[0.25em] text-accent font-medium">
            {eyebrow}
          </span>
          <span className="gold-rule" />
        </div>
      )}
      <h2 className="mt-5 font-display text-4xl md:text-5xl text-foreground text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
