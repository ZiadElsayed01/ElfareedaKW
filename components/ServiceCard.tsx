import Link from "next/link";
import { iconMap } from "./Icons";

type Props = {
  slug: string;
  title: string;
  short: string;
  icon: keyof typeof iconMap;
};

export default function ServiceCard({ slug, title, short, icon }: Props) {
  const Icon = iconMap[icon];
  return (
    <Link
      href={`/services/${slug}`}
      className="group flex flex-col rounded-2xl border border-navy/10 bg-paper mx-4 md:mx-0 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-4 font-display text-lg md:text-xl font-bold text-navy">
        {title}
      </h3>
      <p className="mt-2 text-sm md:text-lg leading-relaxed text-ink/80">
        {short}
      </p>
      <span className="mt-4 font-display text-sm md:text-base font-bold text-rust transition group-hover:underline">
        التفاصيل ←
      </span>
    </Link>
  );
}
