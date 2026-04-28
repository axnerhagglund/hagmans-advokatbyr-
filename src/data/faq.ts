export type FaqCategory =
  | "skilsmassa"
  | "vardnad"
  | "ekonomi"
  | "process"
  | "kostnader";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Hur lång tid tar en skilsmässa?",
    answer:
      "En enkel skilsmässa utan betänketid tar vanligtvis 3–6 veckor från ansökan till beslut. Om Tingsrätten kräver betänketid (t.ex. om ni har gemensamma barn under 16 år) tar det minst sex månader. Vi guidar dig genom hela processen.",
    category: "skilsmassa",
  },
  {
    id: "2",
    question: "Måste vi vara överens om skilsmässan?",
    answer:
      "Nej. I Sverige har var och en rätt att ansöka om skilsmässa ensamt. Motparten kan inte stoppa en skilsmässa. Om du ansöker ensamt och ni inte har gemensamma barn under 16 år beviljas skilsmässan direkt. Har ni barn kräver Tingsrätten betänketid.",
    category: "skilsmassa",
  },
  {
    id: "3",
    question: "Vad kostar det egentligen?",
    answer:
      "Det beror på ärendets komplexitet. En enkel skilsmässa kostar från 4 900 kr. Mer komplexa ärenden – bodelning, vårdnadstvister – debiteras per timme (1 950 kr/h). Första samtalet är alltid kostnadsfritt, och vi ger alltid ett prisöverslag innan vi börjar.",
    category: "kostnader",
  },
  {
    id: "4",
    question: "Täcker min försäkring juridisk hjälp?",
    answer:
      "Ofta ja. De flesta hemförsäkringar inkluderar rättsskydd som täcker 80 % av juridiska kostnader upp till ett maxbelopp (vanligtvis 75 000–150 000 kr). Du betalar 20 % och en självrisk. Vi hjälper dig att ansöka hos ditt försäkringsbolag.",
    category: "kostnader",
  },
  {
    id: "5",
    question: "Kan vi komma till er utan att ha bestämt oss?",
    answer:
      "Absolut. Många av våra klienter bokar ett första samtal för att förstå sina alternativ – inte för att de har bestämt sig. Det kostar ingenting och förpliktigar dig till ingenting. Vi lyssnar och berättar vad som gäller.",
    category: "process",
  },
  {
    id: "6",
    question: "Vad händer om vi inte kan komma överens om barnen?",
    answer:
      "Om ni inte kan komma överens frivilligt kan Tingsrätten besluta om vårdnad och umgänge. Processen börjar ofta med medlingsförsök via socialnämnden. Vi hjälper dig förstå vad domstolen väger in och representerar dig om det går till rättegång.",
    category: "vardnad",
  },
  {
    id: "7",
    question: "Behöver vi båda anlita advokat?",
    answer:
      "Nej. Det är fullt möjligt att bara en av parterna anlitar oss. Vi representerar dig och dina intressen. Om ni vill ha hjälp att nå en gemensam lösning kan vi agera som neutral part, men vi kan inte representera båda i samma tvist.",
    category: "process",
  },
  {
    id: "8",
    question: "Vad är skillnaden mellan sambo och gift – juridiskt sett?",
    answer:
      "Det är stor skillnad. Sambos ärver inte varandra utan testamente, och samboreglerna skyddar bara den gemensamma bostaden och bohaget. Gifta par har ett mycket mer omfattande skyddsnät. Vi rekommenderar alla sambos att upprätta testamente och samboavtal.",
    category: "ekonomi",
  },
  {
    id: "9",
    question: "Vad är betänketid och när gäller det?",
    answer:
      "Betänketid innebär att Tingsrätten inte kan bevilja skilsmässan direkt – paret måste vänta minst sex månader. Det gäller om: (1) bara en part ansöker om skilsmässa, eller (2) ni har gemensamma barn under 16 år. Under betänketiden kan du ångra dig.",
    category: "skilsmassa",
  },
  {
    id: "10",
    question: "Hur fungerar bodelning?",
    answer:
      "Vid äktenskapets slut delas all giftorättsgods lika. Det inkluderar bostad, sparande, bilar etc. Skulder dras av. Vi hjälper till att räkna ut vad som ska delas och upprättar ett bodelningsavtal som är juridiskt bindande.",
    category: "ekonomi",
  },
  {
    id: "11",
    question: "Kan jag skydda mitt arv vid skilsmässa?",
    answer:
      "Ja. Egendom du fått i arv, gåva eller testamente med villkoret att det ska vara enskild egendom ingår inte i bodelningen. Du kan också upprätta ett äktenskapsförord för att göra viss egendom enskild.",
    category: "ekonomi",
  },
  {
    id: "12",
    question: "Hur snabbt kan ni ta mitt ärende?",
    answer:
      "Vi svarar alltid inom en arbetsdag. I akuta fall – t.ex. om det finns risk för tvångsförsäljning av bostad eller akuta umgängesfrågor – prioriterar vi och kan ofta ha ett möte inom 24–48 timmar.",
    category: "process",
  },
  {
    id: "13",
    question: "Vad är rättshjälp?",
    answer:
      "Rättshjälp är statligt stöd till den som inte kan betala juridisk hjälp på grund av låg inkomst. Staten subventionerar kostnaden och du betalar en rättshjälpsavgift utifrån din ekonomi. Vi är godkända för rättshjälp och hjälper dig ansöka.",
    category: "kostnader",
  },
  {
    id: "14",
    question: "Behöver vi gå till rätten?",
    answer:
      "Inte alltid. Många ärenden löses med avtal och utan domstolsprocess. Vi föredrar att hjälpa er hitta lösningar ni kan leva med – det är snabbare, billigare och bättre för alla, särskilt om det finns barn inblandade.",
    category: "process",
  },
  {
    id: "15",
    question: "Vad händer med pensionerna vid bodelning?",
    answer:
      "Tjänstepension och privat pension kan ingå i bodelningen beroende på typ och när de tjänades in. Allmän pension (AP) ingår aldrig. Det är ett komplicerat område – vi hjälper dig förstå vad som gäller just dig.",
    category: "ekonomi",
  },
];

export const faqCategories: { id: FaqCategory | "alla"; label: string }[] = [
  { id: "alla", label: "Alla frågor" },
  { id: "skilsmassa", label: "Skilsmässa" },
  { id: "vardnad", label: "Vårdnad" },
  { id: "ekonomi", label: "Ekonomi & arv" },
  { id: "kostnader", label: "Kostnader" },
  { id: "process", label: "Processen" },
];
