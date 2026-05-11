import BrutalistButton from "@/components/ui/BrutalistButton";
import FaqPageClient from "@/components/ui/FaqPageClient";
import { getAllFaqItems } from "@/sanity/queries";

export const revalidate = 3600;

export default async function FaqPage() {
  const faqItems = await getAllFaqItems();

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

      {/* ─── INTERAKTIVT FAQ-BLOCK (Client Component) ─── */}
      <FaqPageClient items={faqItems} />
    </>
  );
}
