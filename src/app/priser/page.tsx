import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { prisPackages, arvodesInfo } from "@/data/priser";

export default function PriserPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Priser
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Inga{" "}
            <mark className="bg-[#ffeb3b] px-1">obehagliga</mark>
            <br />
            fakturor.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Vi tror på transparent prissättning. Fasta priser när det är
            möjligt, tydliga timprisuppskattningar när ärendet är komplexare. Du
            vet alltid vad det kostar innan vi börjar.
          </p>
        </div>
      </section>

      {/* ─── FREE CALL BANNER ─── */}
      <div
        className="bg-[#c9521a] border-b-2 border-[#0a0a0a] py-5"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white font-bold text-lg">
            ★ Första samtalet är alltid kostnadsfritt
          </p>
          <BrutalistButton href="/kontakt" variant="yellow" size="sm">
            Boka nu →
          </BrutalistButton>
        </div>
      </div>

      {/* ─── PAKET ─── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Fasta priser"
            title="Vanliga ärenden – klara priser"
            subtitle="För de vanligaste ärendetyperna erbjuder vi fasta priser. Inga timdebiterade överraskningar."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prisPackages.map((pkg) => (
              <BrutalistCard
                key={pkg.id}
                accent={pkg.highlight ? "orange" : "none"}
                hoverable={false}
                className={`p-8 relative flex flex-col ${
                  pkg.highlight ? "lg:scale-[1.02]" : ""
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-6 bg-[#c9521a] border-2 border-[#0a0a0a] px-3 py-1 text-white text-xs font-bold uppercase tracking-widest">
                    Populärast
                  </div>
                )}

                <div className="mb-5 flex-1">
                  <h3 className="font-display text-2xl mb-1">{pkg.title}</h3>
                  <p className="text-sm text-[#888] mb-5">{pkg.subtitle}</p>

                  <div className="bg-[#fafaf8] border-2 border-[#0a0a0a] p-4 mb-5">
                    <div className="font-display text-3xl text-[#c9521a]">
                      {pkg.price}
                    </div>
                    <div className="text-xs text-[#888] mt-1">{pkg.priceNote}</div>
                  </div>

                  <ul className="space-y-2.5">
                    {pkg.included.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-[#444]">
                        <span className="text-[#c9521a] font-bold mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <BrutalistButton
                  href="/kontakt"
                  variant={pkg.highlight ? "primary" : "outline"}
                  className="w-full justify-center mt-6"
                >
                  Boka samtal →
                </BrutalistButton>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMARVODE ─── */}
      <section className="py-16 md:py-20 bg-[#fafaf8] border-t-2 border-b-2 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Komplexa ärenden"
            title="Timarvode för tvistiga ärenden"
            subtitle="Ärenden som går till domstol eller kräver mer utredning debiteras per timme."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <BrutalistCard accent="orange" hoverable={false} className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-3">
                Standardarvode
              </div>
              <div className="font-display text-4xl text-[#0a0a0a] mb-2">
                {arvodesInfo.hourlyRate}
              </div>
              <p className="text-sm text-[#6b6b6b]">
                Exkl. moms. Gäller för alla jurister på byrån.
              </p>
            </BrutalistCard>

            <BrutalistCard accent="yellow" hoverable={false} className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-3">
                Rättsskydd
              </div>
              <p className="text-sm text-[#444] leading-relaxed">
                {arvodesInfo.rattsskydd}
              </p>
            </BrutalistCard>

            <BrutalistCard hoverable={false} className="p-8">
              <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-3">
                Rättshjälp
              </div>
              <p className="text-sm text-[#444] leading-relaxed">
                {arvodesInfo.rattshjälp}
              </p>
            </BrutalistCard>
          </div>
        </div>
      </section>

      {/* ─── INFO ─── */}
      <section className="py-16 border-b-2 border-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-8">
            Vanliga frågor om priser
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Måste jag betala för det första samtalet?",
                a: "Nej, aldrig. Det första samtalet är alltid kostnadsfritt, oavsett ärendets komplexitet.",
              },
              {
                q: "Hur vet jag vad mitt ärende kommer att kosta?",
                a: "Vi ger alltid ett prisöverslag innan vi börjar arbeta. För enklare ärenden ger vi ett fast pris. För mer komplexa ärenden en uppskattad timram.",
              },
              {
                q: "Kan jag använda rättsskydd från min hemförsäkring?",
                a: "Troligtvis ja. De flesta hemförsäkringar täcker 80% av juridiska kostnader upp till 75 000–150 000 kr. Vi hjälper dig att ansöka.",
              },
              {
                q: "Vad händer om ärendet tar längre tid än beräknat?",
                a: "Vi informerar dig alltid i förväg om vi ser att ett ärende riskerar att bli dyrare än estimerat. Inga överraskningar.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#e5e0d8] pb-6">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Välkommen att fråga.
          </h2>
          <p className="text-[#888] text-lg mb-8">
            Osäker på vad ditt ärende kostar? Boka ett gratis samtal och vi
            berättar.
          </p>
          <BrutalistButton href="/kontakt" size="lg">
            Boka kostnadsfritt samtal →
          </BrutalistButton>
        </div>
      </section>
    </>
  );
}
