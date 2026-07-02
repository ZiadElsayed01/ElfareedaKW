import { business } from "@/lib/business";
import { IconWhatsapp } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent("مرحبًا، أبي أستفسر عن خدمة نقل عفش")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل عبر واتساب"
      className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <IconWhatsapp className="h-7 w-7" />
    </a>
  );
}
