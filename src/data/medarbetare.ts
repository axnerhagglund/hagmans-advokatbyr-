export interface Medarbetare {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  bio: string;
  personal: string;
  email: string;
  phone: string;
  initials: string;
  color: string;
}

export const medarbetare: Medarbetare[] = [
  {
    id: "sofia",
    name: "Sofia Lindqvist",
    title: "Advokat & Grundare",
    specialties: ["Skilsmässa", "Vårdnad", "Bodelning"],
    bio: "Sofia grundade Hagmans 2015 efter tio år på en av Stockholms traditionella advokatbyråer. Hon insåg att familjerätt kräver mer än juridisk kompetens – det kräver empati, tydlighet och förmågan att se hela människan bakom ärendet.",
    personal:
      "Bor i Södermalm med sina två döttrar och en katt som heter Paragraf. Springer halvmaraton, sover för lite och kokar världens bästa pasta.",
    email: "sofia@hagmans.se",
    phone: "08-123 456 71",
    initials: "SL",
    color: "#ff5722",
  },
  {
    id: "mikael",
    name: "Mikael Strand",
    title: "Biträdande jurist",
    specialties: ["Arv & testamente", "Bodelning", "Äktenskapsförord"],
    bio: "Mikael kom till Hagmans 2019 direkt efter juristexamen från Uppsala. Hans metodiska sätt och förmåga att förklara komplexa regler på begriplig svenska gör honom till en uppskattad rådgivare.",
    personal:
      "Uppvuxen i Umeå, bor numera i Vasastan. Spelar bas i ett band som ännu inte nått utanför Stockholms innerstad. Är något av en tedrickare i en kontorsfull av kaffeentusiaster.",
    email: "mikael@hagmans.se",
    phone: "08-123 456 72",
    initials: "MS",
    color: "#0a0a0a",
  },
  {
    id: "anna",
    name: "Anna-Karin Berg",
    title: "Advokat",
    specialties: ["Vårdnad & umgänge", "Barnrätt", "Medling"],
    bio: "Anna-Karin har 15 års erfarenhet av familjerätt med fokus på barn och ungdomar. Hon är utbildad medlare och tror på att hitta lösningar utanför domstol när det är möjligt – och strida för sina klienters rätt när det krävs.",
    personal:
      "Trebarnsmamma i Bromma. Odlar grönsaker på sin kolonilott med varierande framgång. Läser deckarromaner och hävdar att det är yrkesrelaterat.",
    email: "anna-karin@hagmans.se",
    phone: "08-123 456 73",
    initials: "AB",
    color: "#ffeb3b",
  },
  {
    id: "james",
    name: "James Okoro",
    title: "Biträdande jurist",
    specialties: ["Samboavtal", "Skilsmässa", "Internationell familjerätt"],
    bio: "James är specialiserad på internationell familjerätt – ett område som blir allt viktigare i ett mångkulturellt Sverige. Han talar svenska, engelska och franska flytande.",
    personal:
      "Kör regelbundet Lidingöloppet och säger att han en dag ska klara det 'riktigt snabbt.' Är fascinerad av schackhistoria och gillar att laga afrikansk mat på helgerna.",
    email: "james@hagmans.se",
    phone: "08-123 456 74",
    initials: "JO",
    color: "#ff5722",
  },
];
