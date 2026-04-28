"use client";

import { useState } from "react";
import { FaqItem } from "@/data/faq";

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="border border-[#d8d4cc]">
      {items.map((item, i) => (
        <div key={item.id} className={i > 0 ? "border-t border-[#e5e0d8]" : ""}>
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm hover:bg-[#fafaf8] transition-colors gap-4"
            onClick={() => setOpen(open === item.id ? null : item.id)}
            aria-expanded={open === item.id}
          >
            <span>{item.question}</span>
            <span
              className="flex-shrink-0 w-6 h-6 border border-[#d8d4cc] flex items-center justify-center text-xs font-medium text-[#888] transition-transform"
              style={{ transform: open === item.id ? "rotate(45deg)" : "none" }}
            >
              +
            </span>
          </button>
          {open === item.id && (
            <div className="px-6 pb-5 text-sm text-[#444] leading-relaxed border-t border-gray-100 bg-[#fafaf8]">
              <p className="pt-4">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
