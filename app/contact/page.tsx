import type { Metadata } from "next";
import { business } from "@/lib/business";
import {
  IconBox,
  IconMapPin,
  IconPhone,
  IconWhatsapp,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: `تواصل مع ${business.nameShort} في الفروانية عبر الهاتف أو واتساب واحصل على معاينة مجانية لنقل عفشك.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-sand py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-0">
        <div className="text-center">
          <span className="font-display text-md md:text-2xl font-bold text-rust">
            اتصل بنا
          </span>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            نسمع منك، ونرد بسرعة
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-ink/80">
            راسلنا على واتساب أو اتصل بنا مباشرة، وفريقنا جاهز يجاوبك ويرتب لك
            موعد المعاينة المجانية.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`https://wa.me/${business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-[#25D366] p-5 text-white transition hover:opacity-90"
            >
              <IconWhatsapp className="h-8 w-8" />
              <div>
                <p className="font-display font-bold">راسلنا على واتساب</p>
                <p className="text-sm md:text-base text-white/80">
                  رد سريع خلال دقائق
                </p>
              </div>
            </a>

            <a
              rel="noopener noreferrer"
              href={`tel:${business.phone}`}
              className="flex items-center gap-4 rounded-2xl bg-navy p-5 text-paper transition hover:bg-navy/90"
            >
              <IconPhone className="h-8 w-8 text-gold" />
              <div>
                <p className="font-display font-bold text-right" dir="ltr">
                  {business.phoneDisplay}
                </p>
                <p className="text-sm md:text-base text-paper/70">
                  {business.hours}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl bg-paper p-5 shadow-sm">
              <IconMapPin className="h-8 w-8 shrink-0 text-rust" />
              <div>
                <p className="font-display font-bold text-navy">العنوان</p>
                <p className="text-sm md:text-base text-ink/80">
                  {business.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-paper p-5 shadow-sm">
              <IconBox className="h-8 w-8 shrink-0 text-rust" />
              <div>
                <p className="font-display font-bold text-navy">
                  مناطق التغطية
                </p>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-ink/80">
                  {business.areaServed.join("، ")}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              src={business.mapEmbedUrl}
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع شركة الفريدة لنقل العفش على الخريطة"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
