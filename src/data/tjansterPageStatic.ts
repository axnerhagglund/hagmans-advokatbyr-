import type { SanityService, SanityFaqItem } from "@/sanity/types";

/** Visas när inget är publicerat i Sanity — exempelinnehåll för demo / utveckling */
export const fallbackTjansterServices: SanityService[] = [
  {
    _id: "fallback-skilsmassa",
    _type: "service",
    title: "Skilsmässa",
    icon: "○",
    shortDesc:
      "Separationen gjord rätt – utan onödigt käbbel och med klarhet om vad som gäller.",
    whatItMeans:
      "En skilsmässa innebär att äktenskapet upplöses juridiskt. Processen kan vara enkel eller komplex beroende på om det finns gemensamma tillgångar, barn och om parterna är överens.",
    whenYouNeedIt:
      "När du vill ansöka om äktenskapsskillnad, antingen gemensamt eller ensamt. Även om ni är överens finns det papper som ska in till Skatteverket och Tingsrätten.",
    howWeHelp:
      "Vi ser till att allt går rätt till från start. Vi hanterar ansökan, kommunicerar med motparten om det behövs, och ser till att inga viktiga frågor glöms bort.",
    price: "Från 4 900 kr",
    color: "orange",
    order: 0,
  },
  {
    _id: "fallback-vardnad",
    _type: "service",
    title: "Vårdnad & umgänge",
    icon: "♡",
    shortDesc:
      "Barnens bästa är alltid i centrum – vi hjälper er att hitta en lösning som fungerar i verkligheten.",
    whatItMeans:
      "Vårdnadsfrågor handlar om vem som har det juridiska ansvaret för barnet. Umgängesrätten reglerar hur den förälder barnet inte bor hos träffar barnet.",
    whenYouNeedIt:
      "När ni inte kan komma överens om var barnet ska bo, hur umgänget ska se ut, eller om du behöver ändra ett befintligt avtal.",
    howWeHelp:
      "Vi lyssnar på din situation, förklarar vad som är möjligt, hjälper till med samarbetssamtal och företräder dig i Tingsrätten om det går till domstol.",
    price: "Från 7 500 kr",
    color: "yellow",
    order: 1,
  },
  {
    _id: "fallback-bodelning",
    _type: "service",
    title: "Bodelning",
    icon: "◻",
    shortDesc:
      "Att dela upp det ni byggt ihop kräver noggrannhet – vi ser till att det blir rätt.",
    whatItMeans:
      "Vid skilsmässa eller samboseparation ska era gemensamma tillgångar och skulder fördelas. Det kan handla om bostad, sparande, pensioner och mycket mer.",
    whenYouNeedIt:
      "Direkt efter separationens juridiska avslut. Dröjer ni för länge kan rätten att begära bodelning preskriberas.",
    howWeHelp:
      "Vi kartlägger era tillgångar och skulder, räknar ut vad som är giftorättsgods respektive enskild egendom, och upprättar ett juridiskt bindande bodelningsavtal.",
    price: "Från 9 900 kr",
    color: "orange",
    order: 2,
  },
  {
    _id: "fallback-arv",
    _type: "service",
    title: "Arv & testamente",
    icon: "✦",
    shortDesc:
      "Trygga din framtid och dina närastes – ett testamente är den viktigaste handling du aldrig skrivit.",
    whatItMeans:
      "Utan testamente fördelas din kvarlåtenskap enligt lag. Med ett testamente kan du styra mer av vad som händer – skydda en sambo, fördela arv ojämnt bland barn, eller stödja en välgörenhet.",
    whenYouNeedIt:
      "Alltid – men särskilt om du har sambo (som inte ärver utan testamente), barn från tidigare förhållanden, eller specifika önskemål om din egendom.",
    howWeHelp:
      "Vi ritar upp din situation, förklarar vad lagen säger, och upprättar ett testamente som håller juridiskt. Vi hanterar också arvsskiften och tvister om arv.",
    price: "Från 3 900 kr",
    color: "yellow",
    order: 3,
  },
  {
    _id: "fallback-sambo",
    _type: "service",
    title: "Samboavtal & äktenskapsförord",
    icon: "◇",
    shortDesc:
      "Kärlek och juridik – inte varandras motpoler. Skydda er relation och varandra.",
    whatItMeans:
      "Samboavtal reglerar vad som händer med samboegendom om ni separerar. Äktenskapsförord bestämmer att viss egendom ska vara enskild och inte ingå i bodelning.",
    whenYouNeedIt:
      "Innan ni flyttar ihop eller gifter er, men kan upprättas när som helst under relationen.",
    howWeHelp:
      "Vi förklarar skillnaderna, pratar igenom er situation och upprättar juridiskt korrekta avtal anpassade till er.",
    price: "Från 2 900 kr",
    color: "orange",
    order: 4,
  },
];

export interface TjansterTestimonial {
  quote: string;
  attribution: string;
  detail: string;
  variant: "featured" | "compact";
}

/** Fiktiva referenser för sidlayout — ersätts av riktiga quotes när ni har publicerbara omdömen */
export const tjansterFakeTestimonials: TjansterTestimonial[] = [
  {
    quote:
      "De sa exakt vad jag behövde höra – inte vad som lät bekvämt. Efter tre månaders rävsoppa med min ex make fick vi till slut ett umgängesavtal jag kunde leva med.",
    attribution: "Karolina M.",
    detail: "Vårdnad · Stockholms län · 2025",
    variant: "featured",
  },
  {
    quote:
      "Bodelningen krävdes på tre veckor för att banken skulle hinna. Hagmans levererade dokumenten i tid utan att jag fick betala för tio timmar 'strategi.'",
    attribution: "Fredrik L.",
    detail: "Bodelning · 2024",
    variant: "compact",
  },
  {
    quote:
      "Vi var sambor i tolv år. Utan testamente hade jag förlorat halva insatsen på huset. Nu sover jag bättre.",
    attribution: "Thomas & Erik",
    detail: "Testamente · 2025",
    variant: "compact",
  },
];

/** Kort FAQ som hör till tjänste — kompletterar övergripande /faq */
export const tjansterPageFaqItems: SanityFaqItem[] = [
  {
    _id: "tjanster-static-faq-1",
    _type: "faqItem",
    question: "Måste jag bestämma vilken tjänst jag behöver innan jag ringer?",
    answer:
      "Nej. Det första samtalet är gratis just för att du ska få reda på vad som faktiskt gäller för dig. Vi matchar dig sedan med rätt jurist.",
    category: "process",
    order: 1,
  },
  {
    _id: "tjanster-static-faq-2",
    _type: "faqItem",
    question: "Kan ni ta flera tjänster i samma ärende?",
    answer:
      "Ja. Många klienter kombinerar till exempel skilsmässa med bodelning och vårdnadsavtal. Vi utreder allt i ett spår så att inget faller mellan stolarna.",
    category: "process",
    order: 2,
  },
  {
    _id: "tjanster-static-faq-3",
    _type: "faqItem",
    question: "Är priserna på den här sidan definitiva?",
    answer:
      "De fasta paketen gäller för standardärenden som du ser dem. Mer komplexa tvister debiteras per timme – du får alltid ett skriftligt förslag innan vi startar.",
    category: "kostnader",
    order: 3,
  },
  {
    _id: "tjanster-static-faq-4",
    _type: "faqItem",
    question: "Hur vet jag om min försäkring täcker?",
    answer:
      "I de flesta fall kan rättsskydd i hemförsäkringen täcka upp till åttio procent av juridiska kostnader. Vi hjälper dig fylla i och skicka ansökan till ditt bolag.",
    category: "kostnader",
    order: 4,
  },
];
