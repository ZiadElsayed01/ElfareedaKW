import { business } from "@/lib/business";
import { IconPhone, IconWhatsapp } from "./Icons";

export default function CTASection() {
  return (
    <div className="md:mx-auto max-w-4xl rounded-3xl bg-navy px-6 py-16 text-center text-paper sm:px-12 mx-3">
      <h2 className="font-display text-2xl font-extrabold sm:text-4xl">
        جاهز تنقل عفشك بأمان؟
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-paper/70 sm:text-lg">
        احصل على معاينة مجانية وعرض سعر واضح خلال دقائق — فريقنا جاهز يخدمك
        اليوم.
      </p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`https://wa.me/${business.whatsapp}`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-display text-sm font-bold text-white transition hover:opacity-90 sm:w-auto"
        >
          <IconWhatsapp className="h-5 w-5" />
          راسلنا على واتساب
        </a>
        <a
          href={`tel:${business.phone}`}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-rust px-6 py-3 font-display text-sm font-bold text-paper transition hover:bg-gold hover:text-navy sm:w-auto"
        >
          <IconPhone className="h-5 w-5" />
          <span dir="ltr" className="hidden sm:inline bidi-isolate">
            {business.phoneDisplay}
          </span>
        </a>
      </div>
    </div>
  );
}
