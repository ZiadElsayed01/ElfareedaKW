"use client";

import { useState } from "react";
import { faqs } from "@/lib/business";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy/10 px-4 sm:px-6 cursor-pointer">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="py-4">
            <button
              type="button"
              aria-label={isOpen ? "Close question" : "Open question"}
              aria-controls={`faq-${i}`}
              id={`faq-${i}-trigger`}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen ? "true" : "false"}
              className="flex w-full items-center justify-between gap-4 text-right font-display text-base md:text-xl font-bold text-navy"
            >
              {f.q}
              <span className="shrink-0 text-xl text-rust">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="mt-3 text-sm md:text-lg leading-relaxed text-ink/80">
                {f.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
