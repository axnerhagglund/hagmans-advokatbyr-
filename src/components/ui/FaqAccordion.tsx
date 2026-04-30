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
      {items.map((item, i) => {
        const isOpen = open === item.id;
        const answerId = `faq-answer-${item.id}`;
        return (
          <div key={item.id} className={i > 0 ? "border-t border-[#e5e0d8]" : ""}>
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-sm hover:bg-[#fafaf8] transition-colors gap-4"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span>{item.question}</span>
              <span
                className="flex-shrink-0 w-6 h-6 border border-[#d8d4cc] flex items-center justify-center text-xs font-medium text-[#888]"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
                }}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows 0.25s cubic-bezier(0.25, 1, 0.5, 1)",
              }}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-4 text-sm text-[#444] leading-relaxed border-t border-gray-100 bg-[#fafaf8]">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
