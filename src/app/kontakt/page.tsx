"use client";

import { useState } from "react";
import BrutalistButton from "@/components/ui/BrutalistButton";
import BrutalistCard from "@/components/ui/BrutalistCard";
import SectionHeader from "@/components/ui/SectionHeader";

const arendetyper = [
  "Skilsmässa",
  "Vårdnad & umgänge",
  "Bodelning",
  "Arv & testamente",
  "Samboavtal / äktenskapsförord",
  "Annat",
];

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    arendetyp: "",
    message: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="border-b-2 border-[#0a0a0a] py-16 md:py-20 bg-[#fafaf8]">
        <div className="max-w-7xl mx-auto px-6">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase border-2 border-[#0a0a0a] px-3 py-1.5 mb-8">
            Kontakt
          </span>
          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
            Ta det{" "}
            <mark className="bg-[#ff5722] text-white px-2">första</mark>
            <br />
            steget.
          </h1>
          <p className="text-[#6b6b6b] text-xl max-w-2xl leading-relaxed">
            Boka ett kostnadsfritt samtal. Vi lyssnar på din situation och
            berättar hur vi kan hjälpa – utan press och utan juridikjargong.
          </p>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div
                className="bg-[#ffeb3b] border-2 border-[#0a0a0a] p-10 text-center"
                style={{ boxShadow: "6px 6px 0 #0a0a0a" }}
              >
                <div className="font-display text-6xl mb-4">✓</div>
                <h2 className="font-display text-3xl mb-3">
                  Tack för ditt meddelande!
                </h2>
                <p className="text-[#444] text-lg leading-relaxed">
                  Vi återkommer inom en arbetsdag. Har du ett akut ärende?
                  Ring oss direkt på{" "}
                  <a href="tel:0812345678" className="font-bold underline">
                    08-123 456 78
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div>
                <h2 className="font-display text-3xl mb-8">
                  Skicka ett meddelande
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest mb-2">
                        Ditt namn *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors"
                        placeholder="Anna Svensson"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest mb-2">
                        E-post *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors"
                        placeholder="anna@exempel.se"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest mb-2">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors"
                        placeholder="070-123 456 78"
                      />
                    </div>
                    <div>
                      <label htmlFor="arendetyp" className="block text-xs font-bold uppercase tracking-widest mb-2">
                        Ärendetyp
                      </label>
                      <select
                        id="arendetyp"
                        value={form.arendetyp}
                        onChange={(e) => setForm({ ...form, arendetyp: e.target.value })}
                        className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors bg-white appearance-none"
                      >
                        <option value="">Välj ärendetyp...</option>
                        {arendetyper.map((a) => (
                          <option key={a} value={a}>
                            {a}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Berätta om din situation *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors resize-none"
                      placeholder="Berätta kort om din situation. Ju mer du berättar, desto bättre kan vi förbereda oss inför samtalet."
                    />
                  </div>

                  <div>
                    <label htmlFor="time" className="block text-xs font-bold uppercase tracking-widest mb-2">
                      Önskad tid för samtal
                    </label>
                    <input
                      id="time"
                      type="text"
                      autoComplete="off"
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full border-2 border-[#0a0a0a] px-4 py-3 text-base focus:outline-none focus:border-[#ff5722] focus:ring-2 focus:ring-[#ff5722] focus:ring-offset-0 transition-colors"
                      placeholder="T.ex. 'Tisdag förmiddag' eller 'Helst imorgon'"
                    />
                  </div>

                  <div className="pt-2">
                    <BrutalistButton
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Skickar…
                        </span>
                      ) : (
                        "Skicka meddelande →"
                      )}
                    </BrutalistButton>
                    <p className="mt-3 text-xs text-[#888]">
                      Vi svarar alltid inom en arbetsdag. Dina uppgifter
                      behandlas konfidentiellt.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BrutalistCard accent="orange" hoverable={false} className="p-6">
              <h3 className="font-display text-xl mb-4">Kontaktuppgifter</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-1">
                    Adress
                  </div>
                  <p>Storgatan 12<br />111 23 Stockholm</p>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-1">
                    Telefon
                  </div>
                  <a
                    href="tel:0812345678"
                    className="font-semibold text-[#ff5722] hover:underline"
                  >
                    08-123 456 78
                  </a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-1">
                    E-post
                  </div>
                  <a
                    href="mailto:hej@hagmans.se"
                    className="font-semibold text-[#ff5722] hover:underline"
                  >
                    hej@hagmans.se
                  </a>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#888] mb-1">
                    Öppettider
                  </div>
                  <p>Måndag–fredag<br />08:00–17:00</p>
                </div>
              </div>
            </BrutalistCard>

            <div
              className="bg-[#ffeb3b] border-2 border-[#0a0a0a] p-6"
              style={{ boxShadow: "4px 4px 0 #0a0a0a" }}
            >
              <div className="font-display text-2xl mb-2">Akut ärende?</div>
              <p className="text-sm text-[#444] mb-4">
                Vid akuta situationer – t.ex. tvångsförsäljning av bostad eller
                akut umgängesfråga – ring oss direkt.
              </p>
              <a
                href="tel:0812345678"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] text-white text-sm font-bold border-2 border-[#0a0a0a] hover:bg-[#1a1a1a] transition-colors"
              >
                <span aria-hidden="true">☎</span>
                <span>08-123 456 78</span>
              </a>
            </div>

            {/* Map placeholder */}
            <div
              className="bg-[#f0f0ee] border-2 border-[#0a0a0a] h-52 flex items-center justify-center"
            >
              <div className="text-center text-[#888]">
                <div className="text-3xl mb-2">◉</div>
                <p className="text-sm font-semibold">Karta kommer här</p>
                <p className="text-xs mt-1">Storgatan 12, Stockholm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
