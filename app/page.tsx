import { business, services } from "@/lib/business";
import { faqSchema } from "@/lib/schema";
import RouteHero from "@/components/RouteHero";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { IconPhone, IconWhatsapp } from "@/components/Icons";
import Image from "next/image";
import truckImage from "@/public/images/naql-3afsh-farwaniya-truck.webp";
import logo from "@/public/images/Elfaredaa-company-logo.webp";
import detailsImage from "@/public/images/Elfaredaa-company-details.webp";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />

      {/* Hero */}
      <section className="bg-sand pt-20">
        <div className="mx-auto max-w-4xl px-4 mt-6 text-center sm:px-6">
          <span className="font-display text-sm font-bold text-rust">
            نقل عفش في جميع مناطق الكويت
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy sm:text-6xl">
            ننقل بيتك بأمان، من أول صندوق لآخر تفصيلة
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-ink/80">
            {business.name} — فريق محترف في نقل وتغليف وفك وتركيب الأثاث في جميع
            مناطق الكويت، مع معاينة مجانية وأسعار واضحة بدون مفاجآت.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
            >
              <IconWhatsapp className="h-5 w-5" />
              راسلنا على واتساب
            </a>
            <a
              href={`tel:${business.phone}`}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3 font-display text-sm font-bold text-navy transition hover:bg-navy hover:text-paper sm:w-auto"
            >
              <IconPhone className="h-5 w-5" />
              اتصل بنا الآن
            </a>
          </div>
        </div>

        <RouteHero />
        <div className="tape-divider" />
      </section>

      <section className="bg-paper py-10 md:py-20">
        <Stats />
      </section>

      {/* الخدمات */}
      <section className="bg-sand min-h-screen py-16 flex items-center flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            خدماتنا
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-4xl">
            كل ما يخص نقل عفشك تحت سقف واحد
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
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

      {/* خطوات العمل */}
      <section className="bg-paper min-h-screen py-16 flex items-center flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-0">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            آلية العمل
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-4xl">
            من أول اتصال لحد ترتيب آخر قطعة
          </h2>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
          <Process />
          <div className="mt-6 md:mt-0">
            <Image
              src={logo}
              alt="شعار شركة الفريدة في الفروانية - نقل عفش وتجهيز منازل"
              className="hidden h-[400px] w-[400px] md:block object-contain"
            />
          </div>
        </div>
      </section>

      {/* لماذا نحن */}
      <section className="bg-navy py-16 md:py-20 text-paper">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <span className="font-display text-md md:text-2xl font-bold text-gold">
              لماذا تختارنا
            </span>
            <h2 className="my-2 font-display text-2xl font-extrabold sm:text-4xl">
              خبرة محلية في نقل العفش تفهم احتياجاتك
            </h2>
          </div>
          <div className="flex items-center justify-center flex-col md:flex-row gap-0 md:gap-6">
            <div>
              <Image
                src={truckImage}
                alt="شاحنة نقل عفش تابعة لشركة الفريدة في الفروانية الكويت"
                width={450}
                height={300}
                className="w-[450px] h-auto object-contain"
              />
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  t: "معاينة مجانية",
                  d: "نزور موقعك أو نقيّم عن بعد بدون أي رسوم أو التزام.",
                },
                {
                  t: "أسعار واضحة",
                  d: "سعر نهائي متفق عليه قبل البدء، بدون تكاليف مخفية.",
                },
                {
                  t: "فريق مدرّب",
                  d: "عمالة مدرّبة على التعامل مع الأثاث الحساس والقطع الكبيرة.",
                },
                {
                  t: "التزام بالمواعيد",
                  d: "نلتزم بموعد النقل المتفق عليه من البداية للنهاية.",
                },
              ].map((f) => (
                <div
                  key={f.t}
                  className="rounded-2xl border border-white/10 p-5"
                >
                  <h3 className="font-display text-base md:text-lg font-bold text-gold">
                    {f.t}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed text-paper/70">
                    {f.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* آراء العملاء */}
      <section className="bg-sand py-16 md:py-20 min-h-screen flex items-center flex-col justify-center">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            آراء عملائنا
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-4xl">
            عملاء وثقوا فينا في جميع مناطق الكويت
          </h2>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center max-w-6xl">
          <Testimonials />
          <div className="h-auto w-full mt-4 md:mt-0 p-4 md:h-[550px] md:w-[750px]">
            <Image
              src={detailsImage}
              alt="عمال يحملون أريكة داخل شاحنة نقل في الكويت"
              width={650}
              height={650}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* أسئلة شائعة */}
      <section className="bg-paper py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-0">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            أسئلة شائعة
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-4xl">
            كل اللي يخطر ببالك قبل ما تحجز
          </h2>
        </div>
        <div className="mt-10">
          <FAQ />
        </div>
      </section>

      <div className="tape-divider" />
      <section className="bg-sand py-16 md:py-20">
        <CTASection />
      </section>
    </>
  );
}
