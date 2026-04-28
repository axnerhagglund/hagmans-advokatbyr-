import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { medarbetare } from "@/data/medarbetare";

export default function MedarbetarePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Teamet
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Jurister med{" "}
            <mark className="bg-[#ffeb3b] px-1">ansikten</mark>.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Vi är inte ett anonymt kontor med slipsar och distanserade blickar.
            Vi är fyra jurister som valt familjerätt för att vi bryr oss om
            människor – på riktigt.
          </p>
        </div>
      </section>

      {/* ─── MEDARBETARE ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {medarbetare.map((m, i) => (
            <div
              key={m.id}
              className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-[#0a0a0a]"
              style={{ boxShadow: "5px 5px 0 #0a0a0a" }}
            >
              {/* Photo placeholder */}
              <div
                className="h-64 lg:h-auto flex flex-col items-center justify-center border-b-2 lg:border-b-0 lg:border-r-2 border-[#0a0a0a] p-8"
                style={{
                  backgroundColor:
                    m.color === "#ffeb3b"
                      ? "#ffeb3b"
                      : m.color === "#0a0a0a"
                      ? "#f0f0ee"
                      : "#fff0ec",
                }}
              >
                <span
                  className="font-display text-7xl mb-4"
                  style={{ color: m.color === "#ffeb3b" ? "#0a0a0a" : m.color }}
                >
                  {m.initials}
                </span>
                <div className="text-center">
                  <div className="font-bold text-xs uppercase tracking-widest text-[#0a0a0a]/50">
                    {m.title}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="p-8 lg:col-span-2">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="font-display text-3xl mb-1">{m.name}</h2>
                    <p className="text-[#ff5722] font-semibold text-sm uppercase tracking-wide">
                      {m.title}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {m.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs border-2 border-[#0a0a0a] px-2 py-1 font-semibold bg-white"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-[#444] leading-relaxed mb-5">{m.bio}</p>

                <div className="bg-[#ffeb3b] border-2 border-[#0a0a0a] p-4 mb-6">
                  <div className="text-xs font-bold uppercase tracking-widest mb-1">
                    Utanför jobbet
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed">
                    {m.personal}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`mailto:${m.email}`}
                    className="font-semibold text-[#ff5722] hover:underline"
                  >
                    {m.email}
                  </a>
                  <a
                    href={`tel:${m.phone.replace(/-/g, "").replace(/ /g, "")}`}
                    className="font-semibold text-[#0a0a0a] hover:text-[#ff5722] transition-colors"
                  >
                    {m.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-[#fafaf8] border-t-2 border-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl mb-4">
            Vill du träffa oss?
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8">
            Boka ett kostnadsfritt samtal. Vi matchar dig med den jurist som
            passar bäst för ditt ärende.
          </p>
          <BrutalistButton href="/kontakt" size="lg">
            Boka samtal →
          </BrutalistButton>
        </div>
      </section>
    </>
  );
}
