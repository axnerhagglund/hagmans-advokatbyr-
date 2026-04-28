"use client";

import { useState } from "react";
import BrutalistButton from "@/components/ui/BrutalistButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { faqItems, faqCategories, FaqCategory } from "@/data/faq";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "alla">("alla");
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = faqItems.filter((item) => {
    const matchCat = activeCategory === "alla" || item.category === activeCategory;
    const matchSearch =
      search === "" ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Vanliga frågor
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Svar på det du{" "}
            <mark className="bg-[#ffeb3b] px-1">undrar</mark>.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Juridik ska inte vara mystik. Här svarar vi på de vanligaste
            frågorna vi får – rakt och ärligt.
          </p>
        </div>
      </section>

      <section className="py-12 border-b-2 border-[#0a0a0a] sticky top-[67px] z-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Sök bland frågorna..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-2 border-[#0a0a0a] px-4 py-3 pr-12 text-sm font-medium focus:outline-none focus:border-[#ff5722] transition-colors bg-white"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#888]">
              ⌕
            </span>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-semibold border-2 border-[#0a0a0a] transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#ff5722] text-white shadow-[3px_3px_0_#0a0a0a]"
                    : "bg-white hover:bg-[#ffeb3b]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ LIST ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-display text-3xl text-[#888] mb-4">
                Hittade inget.
              </p>
              <p className="text-[#6b6b6b]">
                Prova ett annat sökord eller välj en annan kategori.
              </p>
            </div>
          ) : (
            <div className="border-2 border-[#0a0a0a]" style={{ boxShadow: "4px 4px 0 #0a0a0a" }}>
              {filtered.map((item, i) => (
                <div
                  key={item.id}
                  className={i > 0 ? "border-t-2 border-[#0a0a0a]" : ""}
                >
                  <button
                    className="w-full flex items-start justify-between px-6 py-5 text-left hover:bg-[#ffeb3b] transition-colors gap-4 group"
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    aria-expanded={openId === item.id}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-bold text-[#aaa] mt-1 flex-shrink-0 w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-semibold text-sm leading-relaxed">
                        {item.question}
                      </span>
                    </div>
                    <span
                      className="flex-shrink-0 w-7 h-7 border-2 border-[#0a0a0a] flex items-center justify-center text-sm font-bold transition-transform"
                      style={{
                        transform:
                          openId === item.id ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {openId === item.id && (
                    <div className="px-6 pb-6 pl-16 text-sm text-[#444] leading-relaxed bg-[#fafaf8] border-t border-gray-100">
                      <p className="pt-4">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 bg-[#ffeb3b] border-2 border-[#0a0a0a] p-6" style={{ boxShadow: "4px 4px 0 #0a0a0a" }}>
            <h3 className="font-display text-xl mb-2">
              Hittade du inte svaret du sökte?
            </h3>
            <p className="text-sm text-[#444] mb-4">
              Boka ett kostnadsfritt samtal och ställ din fråga direkt till en
              av våra jurister.
            </p>
            <BrutalistButton href="/kontakt" variant="secondary">
              Boka gratis samtal →
            </BrutalistButton>
          </div>
        </div>
      </section>
    </>
  );
}
