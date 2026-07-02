import Link from "next/link";
import { business, services } from "@/lib/business";
import { IconClock, IconMapPin, IconPhone, IconWhatsapp } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="tape-divider" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-extrabold">
            {business.nameShort}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/70">
            {business.description}
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-gold">خدماتنا</p>
          <ul className="mt-3 space-y-2 text-sm text-paper/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition hover:text-gold"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-gold">
            مناطق التغطية
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 text-sm text-paper/80">
            {business.areaServed.map((a) => (
              <li key={a}>{a}،</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-gold">تواصل معنا</p>
          <ul className="mt-3 space-y-3 text-sm text-paper/80">
            <li className="flex items-center gap-2">
              <IconPhone className="h-4 w-4 shrink-0 text-gold" />
              <a
                dir="ltr"
                href={`tel:${business.phone}`}
                className="transition hover:text-gold "
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IconWhatsapp className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={`https://wa.me/${business.whatsapp}`}
                className="transition hover:text-gold"
              >
                واتساب
              </a>
            </li>
            <li className="flex items-start gap-2">
              <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{business.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-paper/50">
        © {new Date().getFullYear()} {business.name} — جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
