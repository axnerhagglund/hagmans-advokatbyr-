import Link from "next/link";
import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/ui/FaqAccordion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { tjanster } from "@/data/tjanster";
import { medarbetare } from "@/data/medarbetare";
import { faqItems } from "@/data/faq";
import { bloggPosts } from "@/data/blogg";

export default function HomePage() {
  const featuredFaq = faqItems.slice(0, 4);
  const featuredBlogg = bloggPosts.slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white border-b-2 border-[#0a0a0a]">

        {/* Two-column body */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-stretch">

            {/* Left — statement */}
            <div className="flex-1 py-12 md:py-16 md:pr-14">

              {/* § micro-label */}
              <div className="flex items-center gap-2.5 mb-9">
                <span
                  className="font-display text-[#c9521a] leading-none select-none"
                  style={{ fontSize: "1.25rem" }}
                  aria-hidden="true"
                >
                  §
                </span>
                <div className="w-px h-3.5 bg-[#d8d4cc]" aria-hidden="true" />
                <span className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-[#767676]">
                  Familjerättsbyrå Stockholm
                </span>
              </div>

              {/* Headline — each word on its own row, separated by hairlines */}
              <h1 className="divide-y divide-[#e5e0d8]">
                {[
                  "Familje-",
                  "rätt",
                  "utan",
                  "krångel.",
                ].map((word) => (
                  <div key={word} className="py-2.5 first:pt-0 last:pb-0">
                    <span
                      className="font-display text-[#0a0a0a] uppercase block leading-[0.9]"
                      style={{ fontSize: "clamp(2.75rem, 5.8vw, 5.25rem)" }}
                    >
                      {word}
                    </span>
                  </div>
                ))}
              </h1>

              {/* Orange rule */}
              <div className="w-8 h-[2px] bg-[#c9521a] mt-9 mb-8" aria-hidden="true" />

              {/* Body copy */}
              <p className="text-[#6b6b6b] text-base leading-relaxed max-w-[50ch]">
                Vi är advokaterna du faktiskt vågar ringa när livet kraschar.
                Rak kommunikation, mänsklig ton, inga dolda kostnader.
              </p>
            </div>

            {/* Right — action */}
            <div className="border-t-2 border-[#0a0a0a] md:border-t-0 md:border-l md:border-l-[#e5e0d8] py-12 md:py-16 md:pl-14 flex flex-col justify-between md:w-80">

              {/* Testimonial — emotional proof */}
              <div>
                <p className="text-[0.6rem] font-bold tracking-[0.28em] uppercase text-[#c9521a] mb-3">
                  Klient
                </p>
                <p className="font-display text-[1.05rem] leading-[1.35] text-[#0a0a0a]">
                  &ldquo;Äntligen en advokat som pratade med mig, inte mot mig.&rdquo;
                </p>
                <p className="text-[0.6rem] text-[#767676] uppercase tracking-[0.15em] mt-2">
                  Skilsmässa · 2023
                </p>
              </div>

              {/* CTA block */}
              <div className="space-y-3">
                <BrutalistButton href="/kontakt" size="lg" className="w-full whitespace-nowrap">
                  Boka samtal →
                </BrutalistButton>
                <p className="text-xs text-[#6b6b6b] leading-snug">
                  <span className="font-semibold text-[#0a0a0a]">Gratis första samtal.</span>{" "}
                  Inget juridikprat, bara ett vanligt samtal.
                </p>
                <BrutalistButton href="/tjanster" variant="outline" size="lg" className="w-full whitespace-nowrap">
                  Våra tjänster
                </BrutalistButton>
              </div>

              {/* Stats — rational proof */}
              <div className="pt-6 border-t border-[#e5e0d8] space-y-4">
                {[
                  { num: "500+", label: "avslutade ärenden" },
                  { num: "98%",  label: "nöjda klienter"   },
                  { num: "2015", label: "grundades"         },
                ].map((s) => (
                  <div key={s.label} className="flex items-baseline gap-3">
                    <span
                      className="font-display text-[#c9521a] leading-none"
                      style={{ fontSize: "2.25rem" }}
                    >
                      {s.num}
                    </span>
                    <span className="text-[0.6rem] text-[#767676] uppercase tracking-[0.18em]">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* ─── TJÄNSTER – editorial row list ─── */}
      <section className="py-20 md:py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c9521a] border border-[#c9521a] px-3 py-1 mb-4">
                Vad vi gör
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Familjerätt utan förbehåll
              </h2>
            </div>
            <BrutalistButton href="/tjanster" variant="outline" size="sm">
              Alla tjänster →
            </BrutalistButton>
          </ScrollReveal>

          <div className="divide-y divide-[#e5e0d8]">
            {tjanster.slice(0, 4).map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 0.06}>
                <Link
                  href="/tjanster"
                  className="group flex items-center gap-6 md:gap-10 py-6 hover:bg-[#fafaf8] -mx-3 px-3 transition-colors"
                >
                  <span className="font-display text-xs text-[#ccc] w-6 flex-shrink-0 hidden sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl flex-shrink-0 w-8 text-center" aria-hidden="true">{t.icon}</span>
                  <h3 className="font-display text-xl md:text-2xl w-48 flex-shrink-0">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed flex-1 hidden md:block">
                    {t.shortDesc}
                  </p>
                  <div className="flex-shrink-0 text-right ml-auto">
                    <div className="text-sm font-bold text-[#c9521a]">{t.price}</div>
                    <div className="text-xs text-[#767676] mt-1 group-hover:text-[#0a0a0a] group-hover:translate-x-0.5 transition-all duration-200">
                      Läs mer →
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESSEN – giant-number typographic layout ─── */}
      <section className="py-20 md:py-24 bg-[#fafaf8] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex items-center gap-4 mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c9521a] border border-[#c9521a] px-3 py-1">
              Processen
            </span>
            <h2 className="font-display text-4xl md:text-5xl">Så enkelt funkar det</h2>
          </ScrollReveal>

          <div>
            {[
              {
                num: "01",
                title: "Första samtalet",
                desc: "Ring eller boka tid online. Vi lyssnar på din situation och berättar vad som gäller – utan kostnad och utan förpliktelser.",
                note: "Alltid gratis",
              },
              {
                num: "02",
                title: "Vi tar hand om allt",
                desc: "Du slipper jaga papper och fylla i blanketter. Vi hanterar kontakt med myndigheter, motpart och domstol – och håller dig uppdaterad.",
                note: "Transparenta priser",
              },
              {
                num: "03",
                title: "Nytt kapitel",
                desc: "Du kan gå vidare med livet. Vi ser till att avtalen är juridiskt hållbara och att inget glöms bort som kan skapa problem senare.",
                note: "Ordning på det juridiska",
              },
            ].map((step, i) => (
              <ScrollReveal
                key={step.num}
                delay={i * 0.1}
                className={`grid grid-cols-[5rem_1fr] md:grid-cols-[10rem_1fr] gap-4 md:gap-10 items-start ${
                  i < 2 ? "border-b border-[#e5e0d8] pb-10 mb-10" : ""
                }`}
              >
                <div className="font-display text-[5rem] md:text-[9rem] leading-none text-[#e8e4de] select-none" aria-hidden="true">
                  {step.num}
                </div>
                <div className="pt-3 md:pt-6">
                  <h3 className="font-display text-2xl md:text-3xl mb-3">{step.title}</h3>
                  <p className="text-[#6b6b6b] leading-relaxed max-w-lg mb-3">{step.desc}</p>
                  <span className="text-xs font-semibold text-[#c9521a] uppercase tracking-widest">
                    — {step.note}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM – featured founder + text list ─── */}
      <section className="py-20 md:py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Left: founder feature */}
            <ScrollReveal direction="left">
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c9521a] border border-[#c9521a] px-3 py-1 mb-8">
                Teamet
              </span>
              <div className="flex items-start gap-5 mb-6">
                <div
                  className="w-16 h-16 flex-shrink-0 flex items-center justify-center font-display text-2xl"
                  style={{ backgroundColor: "#fff0ec", color: "#c9521a" }}
                >
                  {medarbetare[0].initials}
                </div>
                <div>
                  <h3 className="font-display text-2xl leading-tight">{medarbetare[0].name}</h3>
                  <p className="text-xs text-[#c9521a] font-semibold uppercase tracking-widest mt-1">
                    {medarbetare[0].title}
                  </p>
                </div>
              </div>
              <p className="text-[#444] leading-relaxed mb-6">{medarbetare[0].bio}</p>
              <p className="text-sm text-[#888] italic pt-4 mt-4 border-t border-[#e5e0d8]">
                &ldquo;{medarbetare[0].personal}&rdquo;
              </p>
            </ScrollReveal>

            {/* Right: rest of team as clean list + CTA */}
            <ScrollReveal delay={0.15} className="lg:pt-16">
              <p className="text-[#6b6b6b] leading-relaxed mb-8">
                Vi är inte ett anonymt advokatkontor. Vi är fyra jurister med breda specialområden och ett gemensamt DNA: vi lyssnar mer än vi pratar.
              </p>
              <div className="divide-y divide-[#e5e0d8] mb-8">
                {medarbetare.slice(1).map((m) => (
                  <div key={m.id} className="flex items-center gap-4 py-4">
                    <div
                      className="w-9 h-9 flex-shrink-0 flex items-center justify-center font-display text-sm"
                      style={{
                        backgroundColor: m.color === "#ffeb3b" ? "#ffeb3b" : "#f7f7f5",
                        color: m.color === "#ffeb3b" ? "#0a0a0a" : m.color,
                      }}
                    >
                      {m.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm">{m.name}</div>
                      <div className="text-xs text-[#767676]">{m.title}</div>
                    </div>
                    <div className="text-xs text-[#767676] hidden sm:block">
                      {m.specialties[0]}
                    </div>
                  </div>
                ))}
              </div>
              <BrutalistButton href="/medarbetare" variant="outline">
                Möt hela teamet →
              </BrutalistButton>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="border-b border-[#e5e0d8] py-16 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-8 h-px bg-[#c9521a] mx-auto mb-8" />
          <p className="font-display text-2xl md:text-4xl text-white leading-snug mb-6">
            &ldquo;Vi tror att alla förtjänar ett nytt kapitel – och att
            advokaten inte ska vara det svåraste steget dit.&rdquo;
          </p>
          <p className="text-[#aaa] text-sm tracking-widest uppercase">
            Sofia Lindqvist, Grundare
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 md:py-28 bg-[#fafaf8] border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <SectionHeader
                tag="Vanliga frågor"
                title="Det du undrar – vi svarar"
                subtitle="Juridik ska inte vara mystik. Här är de vanligaste frågorna vi får."
              />
              <BrutalistButton href="/faq">Se alla frågor →</BrutalistButton>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <FaqAccordion items={featuredFaq} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── BLOGG – magazine split layout ─── */}
      <section className="py-20 md:py-24 border-b border-[#e5e0d8]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#c9521a] border border-[#c9521a] px-3 py-1 mb-4">
                Från bloggen
              </span>
              <h2 className="font-display text-4xl md:text-5xl">
                Juridik på mänskliga villkor
              </h2>
            </div>
            <BrutalistButton href="/blogg" variant="outline" size="sm">
              Alla artiklar →
            </BrutalistButton>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Featured article – large */}
            <Link
              href={`/blogg/${featuredBlogg[0].slug}`}
              className="lg:col-span-3 group block bg-[#fafaf8] border border-[#e5e0d8] p-8 md:p-10 flex flex-col hover:border-[#c9521a] transition-colors"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9521a] mb-4 block">
                {featuredBlogg[0].category}
              </span>
              <h3 className="font-display text-2xl md:text-3xl leading-tight mb-4 flex-1 group-hover:text-[#c9521a] transition-colors">
                {featuredBlogg[0].title}
              </h3>
              <p className="text-[#6b6b6b] leading-relaxed mb-6">
                {featuredBlogg[0].excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-[#767676] pt-5 border-t border-[#e5e0d8]">
                <span className="font-semibold text-[#0a0a0a]">{featuredBlogg[0].author}</span>
                <span>{featuredBlogg[0].date} · {featuredBlogg[0].readTime}</span>
              </div>
            </Link>

            {/* Two compact articles */}
            <div className="lg:col-span-2 flex flex-col divide-y divide-[#e5e0d8] border border-[#e5e0d8]">
              {featuredBlogg.slice(1).map((post) => (
                <Link
                  href={`/blogg/${post.slug}`}
                  key={post.id}
                  className="group flex flex-col p-6 flex-1 hover:bg-[#fafaf8] transition-colors"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c9521a] mb-2 block">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg leading-tight mb-2 flex-1 group-hover:text-[#c9521a] transition-colors">
                    {post.title}
                  </h3>
                  <div className="text-xs text-[#767676] mt-auto pt-3">
                    {post.author} · {post.date} · {post.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
      <section className="bg-[#0a0a0a] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border border-[#c9521a] text-[#c9521a] px-3 py-1.5 mb-8">
            Redo att prata?
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
            Första samtalet
            <br />
            <span className="text-[#c9521a]">är alltid gratis.</span>
          </h2>
          <p className="text-[#888] text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Inget juridikprat, ingen påtryckning – bara ett vanligt samtal om
            din situation och vad vi kan göra för dig.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-white transition-all duration-100 hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-white hover:text-[#0a0a0a]"
            style={{ boxShadow: "5px 5px 0 #c9521a" }}
          >
            Boka samtal nu →
          </Link>
        </div>
      </section>
    </>
  );
}
