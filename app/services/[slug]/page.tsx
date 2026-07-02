import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { business, services } from "@/lib/business";
import { serviceSchema } from "@/lib/schema";
import {
  iconMap,
  IconCheck,
  IconPhone,
  IconWhatsapp,
} from "@/components/Icons";
import CTASection from "@/components/CTASection";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} في الفروانية`,
    description: `${service.description} خدمة ${service.title} من ${business.nameShort} في الفروانية والكويت.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound();

  const Icon = iconMap[service.icon as keyof typeof iconMap];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(service.title, service.description),
          ),
        }}
      />

      <section className="bg-sand py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold">
            <Icon className="h-8 w-8" />
          </span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            {service.title} في الفروانية
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
            {service.description}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
            >
              <IconWhatsapp className="h-5 w-5" />
              اطلب الخدمة عبر واتساب
            </a>
            <a
              href={`tel:${business.phone}`}
              data-tel={business.phone}
              dir="ltr"
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-display text-sm font-bold text-navy transition hover:bg-navy hover:text-paper sm:w-auto"
            >
              <IconPhone className="h-5 w-5" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-0">
          <h2 className="font-display text-xl md:text-2xl font-extrabold text-navy">
            ماذا تشمل الخدمة؟
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {service.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-xl bg-sand p-6"
              >
                <IconCheck className="mt-0.5 h-6 w-6 shrink-0 text-rust" />
                <span className="text-sm md:text-base leading-relaxed text-ink/80">
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-display text-xl md:text-2xl font-extrabold text-navy">
            خدمات أخرى قد تهمك
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border-2 border-navy px-5 py-2 font-display text-sm md:text-base font-bold text-navy transition hover:bg-navy hover:text-paper"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <CTASection />
      </section>
    </>
  );
}
