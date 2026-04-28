export interface PrisPackage {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceNote: string;
  included: string[];
  highlight?: boolean;
}

export const prisPackages: PrisPackage[] = [
  {
    id: "skilsmassa-enkel",
    title: "Skilsmässa – utan barn",
    subtitle: "Ni är överens, inga gemensamma barn",
    price: "4 900 kr",
    priceNote: "Fast pris, allt inkluderat",
    included: [
      "Ansökan om äktenskapsskillnad",
      "Kontakt med Tingsrätten",
      "Vägledning om nästa steg",
      "Svar på dina frågor via mail",
    ],
  },
  {
    id: "skilsmassa-med-barn",
    title: "Skilsmässa – med barn",
    subtitle: "Gemensamma barn, ni är överens",
    price: "7 900 kr",
    priceNote: "Fast pris, inkl. barnavtal",
    highlight: true,
    included: [
      "Ansökan om äktenskapsskillnad",
      "Avtal om boende och umgänge",
      "Underhållsberäkning",
      "Registrering hos Skatteverket",
      "Uppföljningsmöte ingår",
    ],
  },
  {
    id: "bodelning",
    title: "Bodelning",
    subtitle: "Fördelning av gemensamma tillgångar",
    price: "Från 9 900 kr",
    priceNote: "Beroende på ärendets komplexitet",
    included: [
      "Kartläggning av tillgångar",
      "Beräkning av giftorättsgods",
      "Bodelningsavtal",
      "Kontakt med banker/myndigheter",
    ],
  },
  {
    id: "testamente",
    title: "Testamente",
    subtitle: "Trygga dina närmaste",
    price: "Från 3 900 kr",
    priceNote: "Fast pris för standardtestamente",
    included: [
      "Genomgång av din situation",
      "Juridiskt bindande testamente",
      "Råd om särvård och förordnande",
      "Förvaring av testamente (tillval)",
    ],
  },
  {
    id: "samboavtal",
    title: "Samboavtal / Äktenskapsförord",
    subtitle: "Klargör vad som är vad",
    price: "Från 2 900 kr",
    priceNote: "Fast pris",
    included: [
      "Genomgång av er situation",
      "Juridiskt korrekt avtal",
      "Registrering vid behov",
      "Revision vid livshändelse (tillval)",
    ],
  },
];

export const arvodesInfo = {
  hourlyRate: "1 950 kr/timme",
  rattsskydd:
    "De flesta hemförsäkringar täcker juridisk rådgivning med 80 % upp till ett maxbelopp. Vi hjälper dig ansöka.",
  rattshjälp:
    "Om du har låg inkomst kan du ha rätt till rättshjälp, vilket innebär att staten subventionerar juridisk hjälp.",
  freeConsult: "Första samtalet – alltid kostnadsfritt.",
};
