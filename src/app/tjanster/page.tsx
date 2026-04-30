import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { tjanster } from "@/data/tjanster";

export default function TjansterPage() {
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

      {/* ─── TJÄNSTER ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
        {tjanster.map((t, i) => (
          <div
            key={t.id}
            id={t.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-b-2 border-[#0a0a0a] pb-16 last:border-0 last:pb-0"
          >
            {/* Left */}
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

            {/* Right */}
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
