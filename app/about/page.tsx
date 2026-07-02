import type { Metadata } from "next";
import { business } from "@/lib/business";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import { IconCheck } from "@/components/Icons";

export const metadata: Metadata = {
  title: "من نحن",
  description: `تعرّف على ${business.name}، شركة نقل عفش في الفروانية الكويت بخبرة تتجاوز 10 سنوات وفريق محترف.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    t: "الأمانة",
    d: "نتعامل مع أثاثك وكأنه أثاثنا، بمصداقية تامة في كل خطوة.",
  },
  { t: "الدقة", d: "التزام صارم بالمواعيد والأسعار المتفق عليها بدون مفاجآت." },
  {
    t: "الاحترافية",
    d: "فريق مدرّب على أحدث أساليب التغليف والتحميل والتركيب.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-0">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            من نحن
          </span>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            شريكك الموثوق في نقل العفش بالفروانية
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg text-justify leading-relaxed text-ink/80">
            {business.description} بدأنا كفريق صغير في الفروانية، واليوم نخدم
            معظم مناطق الكويت مع الحفاظ على نفس قيمة الأمانة التي أسسنا عليها
            الشركة.
          </p>
        </div>
      </section>

      <section className="bg-paper py-12">
        <Stats />
      </section>

      <section className="bg-sand py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-0">
          <h2 className="text-center font-display text-2xl md:text-4xl font-extrabold text-navy">
            قيمنا
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.t}
                className="rounded-2xl bg-paper p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold">
                  <IconCheck className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-base md:text-xl font-bold text-navy">
                  {v.t}
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-ink/80">
                  {v.d}
                </p>
              </div>
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
