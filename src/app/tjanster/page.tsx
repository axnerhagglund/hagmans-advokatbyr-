import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  fallbackTjansterServices,
  tjansterFakeTestimonials,
  tjansterPageFaqItems,
} from "@/data/tjansterPageStatic";
import { getAllServices } from "@/sanity/queries";

export const revalidate = 3600;

export default async function TjansterPage() {
  const fromCms = await getAllServices();
  const tjanster = fromCms.length > 0 ? fromCms : fallbackTjansterServices;

  const featuredQuote =
    tjansterFakeTestimonials.find((t) => t.variant === "featured") ??
    tjansterFakeTestimonials[0];
  const sideQuotes = tjansterFakeTestimonials.filter((t) => t !== featuredQuote);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Tjänster
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 max-w-3xl">
            Vi hjälper dig med{" "}
            <mark className="bg-[#ffeb3b] px-1">det svåra</mark>.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Familjerätt täcker livets mest laddade juridiska frågor. Vi är
            specialister på att hantera dem med precision och empati.
          </p>
        </div>
      </section>

      {fromCms.length === 0 && (
        <div className="border-b-2 border-[#0a0a0a] bg-[#ffeb3b] py-4">
          <p className="max-w-7xl mx-auto px-6 text-sm font-semibold text-[#0a0a0a]">
            Demo-läge: ingen data i Sanity ännu — du ser Hagmans-standardtjänster. När CMS är fyllt hämtas innehållet automatiskt.
          </p>
        </div>
      )}

      {/* ─── TJÄNSTER ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {tjanster.map((t, i) => (
          <div
            key={t._id}
            id={t._id.replace(/^fallback-/, "")}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-b-2 border-[#0a0a0a] pb-16 last:border-0 last:pb-0"
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 flex items-center justify-center text-3xl font-display border-2 border-[#0a0a0a]"
                  style={{
                    backgroundColor:
                      t.color === "orange" ? "#fff0ec" : "#fffde7",
                  }}
                >
                  {t.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#888] uppercase tracking-widest mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl leading-tight">
                    {t.title}
                  </h2>
                </div>
              </div>

              <p className="text-[#6b6b6b] text-lg leading-relaxed mb-8">
                {t.shortDesc}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#c9521a] inline-block" />
                    Vad det innebär
                  </h3>
                  <p className="text-[#444] leading-relaxed">{t.whatItMeans}</p>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#c9521a] inline-block" />
                    När du behöver det
                  </h3>
                  <p className="text-[#444] leading-relaxed">
                    {t.whenYouNeedIt}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#c9521a] inline-block" />
                    Hur vi hjälper
                  </h3>
                  <p className="text-[#444] leading-relaxed">{t.howWeHelp}</p>
                </div>
              </div>
            </div>

            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <BrutalistCard
                accent={t.color === "orange" ? "orange" : "yellow"}
                hoverable={false}
                className="p-8"
              >
                <div className="text-4xl font-display mb-4">{t.icon}</div>
                <h3 className="font-display text-2xl mb-2">{t.title}</h3>
                <div className="h-0.5 bg-[#0a0a0a] w-16 mb-5" />

                <div className="bg-[#fafaf8] border-2 border-[#0a0a0a] p-4 mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-1">
                    Pris
                  </div>
                  <div className="font-display text-2xl text-[#c9521a]">
                    {t.price}
                  </div>
                </div>

                <p className="text-sm text-[#888] mb-6 leading-relaxed">
                  Alla priser är exkl. moms. Vi ger alltid ett prisöverslag
                  innan arbetet påbörjas. Rättsskydd och rättshjälp kan täcka
                  delar av kostnaden.
                </p>

                <BrutalistButton href="/kontakt" className="w-full justify-center">
                  Boka samtal om {t.title.toLowerCase()} →
                </BrutalistButton>
              </BrutalistCard>
            </div>
          </div>
        ))}
      </div>

      {/* ─── REFERENSER (demo) ─── Editorial split, inte identiska kort-rutor */}
      <section className="border-t-2 border-[#0a0a0a] bg-[#0a0a0a] text-white py-16 md:py-24 relative overflow-hidden">
        <div
          className="absolute top-8 right-[8%] font-display leading-none opacity-[0.07] pointer-events-none select-none text-white"
          style={{ fontSize: "clamp(8rem, 22vw, 18rem)" }}
          aria-hidden
        >
          &ldquo;
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="none">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
              <div>
                <span className="inline-block text-[0.65rem] font-bold tracking-[0.28em] uppercase text-[#ffeb3b] border border-[#ffeb3b] px-2.5 py-1 mb-5">
                  Röster
                </span>
                <h2 className="font-display text-4xl md:text-6xl leading-[1.05] max-w-2xl">
                  Det här säger människor som redan{' '}
                  <span className="text-[#ffeb3b]">varit i kläm</span>.
                </h2>
              </div>
              <p className="text-sm text-[#9a9a9a] max-w-xs leading-relaxed border-l-2 border-[#c9521a] pl-5">
                Fiktiva omdömen för layout och ton — byt mot verifierbara citat när
                ni kan publicera dem.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-stretch">
            <ScrollReveal
              className="lg:col-span-7 flex flex-col"
              delay={0.06}
              direction="left"
            >
              <div
                className="flex flex-col justify-between flex-1 border-2 border-[#2a2a2a] p-8 md:p-12 bg-[#141414]"
                style={{ boxShadow: "8px 8px 0 #c9521a" }}
              >
                <p className="font-display text-2xl md:text-[1.85rem] leading-snug text-white mb-10">
                  {featuredQuote.quote}
                </p>
                <div>
                  <p className="font-semibold text-white tracking-wide">
                    {featuredQuote.attribution}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#888] mt-2">
                    {featuredQuote.detail}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:col-span-5 flex flex-col gap-6">
              {sideQuotes.map((item, idx) => (
                <ScrollReveal
                  key={item.attribution + item.detail}
                  delay={0.08 + idx * 0.05}
                  direction="up"
                >
                  <BrutalistCard
                    accent={idx === 0 ? "yellow" : "none"}
                    hoverable={false}
                    className={`p-6 md:p-7 bg-[#fafaf8] text-[#0a0a0a] ${idx === 1 ? "-translate-x-0 lg:-translate-x-2" : ""}`}
                  >
                    <p className="font-display text-lg leading-snug mb-5">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#c9521a]">
                      {item.attribution}
                    </div>
                    <div className="text-[11px] text-[#767676] mt-1">{item.detail}</div>
                  </BrutalistCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ (tjänstenära) ─── */}
      <section className="py-16 md:py-20 bg-[#fafaf8] border-b-2 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeader
              tag="Frågor om tjänsterna"
              title={
                <>
                  Kort sagt om{' '}
                  <mark className="bg-[#ffeb3b] px-1">vad som gäller</mark>
                </>
              }
              subtitle="Svaren nedan är till för tjänstesidan. Alla juridiska frågor finns också samlade under vanliga frågor."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="max-w-3xl mb-10">
              <FaqAccordion items={tjansterPageFaqItems} />
            </div>
            <BrutalistButton href="/faq" variant="outline">
              Se alla vanliga frågor →
            </BrutalistButton>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-[#c9521a] border-t-2 border-[#0a0a0a] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Osäker på vad du behöver?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Boka ett kostnadsfritt samtal. Vi lyssnar på din situation och
            berättar vilken hjälp som passar dig.
          </p>
          <BrutalistButton href="/kontakt" variant="yellow" size="lg">
            Boka kostnadsfritt samtal →
          </BrutalistButton>
        </div>
      </section>
    </>
  );
}
