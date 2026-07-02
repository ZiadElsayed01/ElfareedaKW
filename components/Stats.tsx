import { stats } from "@/lib/business";

export default function Stats() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4 sm:px-6">
      {stats.map((s) => (
        <div key={s.label} className="text-center my-4 md:my-0">
          <p className="font-display text-4xl font-extrabold text-rust sm:text-5xl">
            {s.value}
          </p>
          <p className="mt-1 text-md text-ink/80">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
