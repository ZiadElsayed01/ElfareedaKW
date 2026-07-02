import { testimonials } from "@/lib/business";
import { IconStar } from "./Icons";

export default function Testimonials() {
  return (
    <div className="mx-auto grid max-w-5xl gap-6 px-4 grid-cols-1 sm:px-6">
      {testimonials.map((t) => (
        <figure key={t.name} className="rounded-2xl bg-paper p-6 shadow-sm">
          <div className="flex gap-1 text-gold">
            {Array.from({ length: t.rating }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </div>
          <blockquote className="mt-3 text-sm md:text-lg leading-relaxed text-ink/80">
            “{t.text}”
          </blockquote>
          <figcaption className="mt-4 font-display text-sm md:text-base font-bold text-navy">
            {t.name} <span className="font-normal text-ink/50">— {t.area}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
