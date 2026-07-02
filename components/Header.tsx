import Link from "next/link";
import { business } from "@/lib/business";
import { IconPhone } from "./Icons";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navy text-paper">
      <div className="tape-divider" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-extrabold leading-tight sm:text-xl"
        >
          {business.nameShort}
          <span className="block text-xs font-normal text-gold">
            {business.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 font-display text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${business.phone}`}
          className="flex items-center text-left gap-2 rounded-full bg-rust px-4 py-2 font-display text-sm font-bold text-paper transition hover:bg-gold hover:text-navy"
        >
          <IconPhone className="h-4 w-4" />

          <span dir="ltr" className="hidden sm:inline bidi-isolate">
            {business.phoneDisplay}
          </span>

          <span className="sm:hidden">اتصل الآن</span>
        </a>
      </div>

      <nav className="flex items-center justify-around border-t border-white/10 py-2 font-display text-xs md:hidden">
        {navLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-2 py-1 transition hover:text-gold"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
