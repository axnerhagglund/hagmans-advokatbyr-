import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  {
    num: "01",
    title: "Vi tror på ärlighet",
    desc: "Ingen juridikjargong, inga dolda avgifter och inga förhoppningar vi inte kan hålla. Du ska alltid veta exakt vad du betalar för och vad du kan förvänta dig.",
  },
  {
    num: "02",
    title: "Vi tror att tid är dyrbart",
    desc: "Din tid är viktig. Vi är tillgängliga, svarar snabbt och drar inte ut på processer i onödan. Effektivitet är en del av respekten.",
  },
  {
    num: "03",
    title: "Vi tror på hela människan",
    desc: "Du är inte ett ärende. Du är en människa i en svår situation. Vi lyssnar – på det juridiska och på det som är svårare att sätta ord på.",
  },
  {
    num: "04",
    title: "Vi tror på tillgänglighet",
    desc: "Juridisk hjälp ska inte vara förbehållen dem som har råd. Vi erbjuder transparenta priser, fast avgift när det är möjligt, och hjälper dig utnyttja rättsskydd och rättshjälp.",
  },
];

const manifesto = [
  "Vi tror att juridisk hjälp ska vara tillgänglig för alla – inte bara för dem med djupa fickor.",
  "Vi tror att din advokat ska förklara, inte imponera.",
  "Vi tror att det bästa resultatet ofta nås utan rättegång.",
  "Vi tror att barn alltid ska sättas i centrum – alltid.",
  "Vi tror att separationer kan vara värdiga, även när de är svåra.",
  "Vi tror att transparent prissättning är en självklarhet, inte en fördel.",
];

export default function OmOssPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
              Om oss
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#0a0a0a] mb-6">
              En byrå byggd på{" "}
              <mark className="bg-[#ffeb3b] px-1">missnöje</mark>.
            </h1>
            <p className="text-[#6b6b6b] text-xl leading-relaxed mb-6 max-w-lg">
              Sofia Lindqvist grundade Hagmans 2015 av ett enkelt skäl: hon var
              trött på hur familjerätt sköttes. För mycket distans, för lite
              empati, för komplicerat.
            </p>
            <p className="text-[#6b6b6b] text-xl leading-relaxed max-w-lg">
              Hagmans är annorlunda – by design, inte av misstag.
            </p>
          </div>

          <div
            className="bg-[#0a0a0a] p-10 text-white"
            style={{ boxShadow: "8px 8px 0 #ff5722" }}
          >
            <div className="font-display text-6xl text-[#ff5722] mb-6">2015</div>
            <p className="text-lg leading-relaxed text-[#ccc] mb-8">
              Grundades av Sofia Lindqvist med en enkel vision: en
              familjerättsbyrå som faktiskt lyssnar.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "4", label: "Jurister" },
                { num: "500+", label: "Avslutade ärenden" },
                { num: "98%", label: "Nöjda klienter" },
                { num: "10 år", label: "I branschen" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-white mb-1">
                    {stat.num}
                  </div>
                  <div className="text-xs text-[#888] uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── HISTORIA ─── */}
      <section className="py-20 md:py-28 bg-[#fafaf8] border-b-2 border-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader tag="Vår historia" title="Hur Hagmans blev till" />
          <div className="space-y-6 text-[#444] text-lg leading-relaxed">
            <p>
              Sofia Lindqvist tillbringade tio år på en av Stockholms traditionella
              advokatbyråer. Hon var skicklig, respekterad och frustrerad. Frustrerad
              för att klienter – ofta i sina livs svåraste stunder – behandlades som
              ärenden snarare än människor.
            </p>
            <p>
              Familjerätt handlar om kärlek som spruckit, om barn som inte förstår
              varför mamma och pappa inte bor ihop längre, om arv som delar
              syskon. Det kräver mer än ett juridiskt korrekt svar. Det kräver
              en människa.
            </p>
            <p>
              2015 öppnade Sofia Hagmans med ett enkelt löfte:{" "}
              <mark className="bg-[#ffeb3b]">
                vi ska vara byrån du faktiskt vågar ringa.
              </mark>{" "}
              Inte den du skjuter upp att kontakta för att du tror att det ska
              bli dött, dyrt och distanserat.
            </p>
            <p>
              Idag är vi fyra jurister med breda specialområden och ett gemensamt
              DNA: vi lyssnar mer än vi pratar, vi förklarar mer än vi imponerar,
              och vi mäter framgång i nöjda klienter – inte i fakturerade timmar.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VÄRDERINGAR ─── */}
      <section className="py-20 md:py-28 border-b-2 border-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            tag="Vad vi tror på"
            title="Våra fyra grundpelare"
            subtitle="Det är lätt att skriva fina ord. Det är svårare att leva efter dem. Här är vad vi faktiskt menar när vi säger att vi är annorlunda."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <BrutalistCard key={v.num} accent="orange" hoverable={false} className="p-8">
                <div className="font-display text-5xl text-[#f0f0ee] mb-4 leading-none">
                  {v.num}
                </div>
                <h3 className="font-display text-2xl mb-3">{v.title}</h3>
                <p className="text-[#6b6b6b] leading-relaxed">{v.desc}</p>
              </BrutalistCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ─── */}
      <section className="py-20 md:py-28 bg-[#0a0a0a] border-b-2 border-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border border-[#ff5722] text-[#ff5722] px-3 py-1.5 mb-10">
            Vårt manifest
          </span>
          <div className="space-y-6">
            {manifesto.map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-5 border-b border-[#1a1a1a] pb-6"
              >
                <span className="text-[#ff5722] font-bold text-xl mt-0.5 flex-shrink-0">
                  ✦
                </span>
                <p className="font-display text-2xl md:text-3xl text-white leading-tight">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 border-b-2 border-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Låter det som <mark className="bg-[#ffeb3b]">er byrå</mark>?
          </h2>
          <p className="text-[#6b6b6b] text-lg mb-8">
            Boka ett kostnadsfritt samtal och se om vi passar ihop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <BrutalistButton href="/kontakt" size="lg">
              Boka samtal →
            </BrutalistButton>
            <BrutalistButton href="/medarbetare" variant="outline" size="lg">
              Möt teamet
            </BrutalistButton>
          </div>
        </div>
      </section>
    </>
  );
}
