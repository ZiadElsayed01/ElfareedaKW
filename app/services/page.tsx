import type { Metadata } from "next";
import { business, services } from "@/lib/business";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "خدمات نقل العفش في الفروانية",
  description:
    "نقل الأثاث المنزلي، فك وتركيب العفش، وتخزين الأثاث في الفروانية وجميع مناطق الكويت — معاينة مجانية وأسعار واضحة.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-sand py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            خدماتنا
          </span>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            خدمات نقل عفش شاملة في جميع مناطق الكويت
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
            من نقل الأثاث المنزلي لفك وتركيب القطع الكبيرة وتخزين العفش،{" "}
            {business.nameShort} توفر لك حل متكامل بفريق واحد موثوق.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              short={s.short}
              icon={s.icon as "truck" | "wrench" | "box"}
            />
          ))}
        </div>
      </section>

      <section className="bg-sand py-16">
        <CTASection />
      </section>
    </>
  );
}
