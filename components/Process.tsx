import { process } from "@/lib/business";

export default function Process() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-0">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <div key={p.step} className="relative">
            <span className="font-display text-7xl font-extrabold text-navy/10">
              {p.step}
            </span>
            <h3 className="-mt-3 font-display text-lg md:text-xl font-bold text-navy">
              {p.title}
            </h3>
            <p className="mt-2 text-sm md:text-lg leading-relaxed text-ink/80">
              {p.text}
            </p>
            {i < process.length - 1 && (
              <span className="absolute text-5xl left-2 top-6 hidden text-navy/20 lg:block">
                ←
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
