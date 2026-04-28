import Link from "next/link";

const services = [
  "Skilsmässa",
  "Vårdnad & umgänge",
  "Bodelning",
  "Arv & testamente",
  "Samboavtal",
];

const pages = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Medarbetare", href: "/medarbetare" },
  { label: "Priser", href: "/priser" },
  { label: "FAQ", href: "/faq" },
  { label: "Blogg", href: "/blogg" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-4xl mb-5 text-white">HAGMANS</div>
          <p className="text-[#888] text-sm leading-relaxed max-w-xs mb-6">
            En familjerättsbyrå som tror på ärlig kommunikation, rimliga priser
            och att faktiskt vara tillgängliga när du behöver oss som mest.
          </p>
          <div className="space-y-2 text-sm text-[#888]">
            <p>
              Storgatan 12, 111 23 Stockholm
            </p>
            <p>
              <a href="tel:0812345678" className="hover:text-white transition-colors">
                08-123 456 78
              </a>
            </p>
            <p>
              <a href="mailto:hej@hagmans.se" className="hover:text-white transition-colors">
                hej@hagmans.se
              </a>
            </p>
            <p>Mån–fre 08:00–17:00</p>
          </div>

          <div className="mt-8">
            <Link
              href="/kontakt"
              className="inline-flex items-center px-5 py-3 bg-[#ff5722] text-white text-sm font-bold border-2 border-white shadow-[3px_3px_0_white] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-100"
            >
              Boka kostnadsfritt samtal →
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#ff5722]">
            Tjänster
          </h3>
          <ul className="space-y-2.5 text-sm text-[#888]">
            {services.map((t) => (
              <li key={t}>
                <Link
                  href="/tjanster"
                  className="hover:text-white transition-colors"
                >
                  {t}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#ff5722]">
            Byrån
          </h3>
          <ul className="space-y-2.5 text-sm text-[#888]">
            {pages.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#555]">
          <p>© 2024 Hagmans Familjerättsbyrå AB · Org.nr 556789-0123</p>
          <p>Advokatsamfundets vägledande regler om god advokatsed tillämpas</p>
        </div>
      </div>
    </footer>
  );
}
