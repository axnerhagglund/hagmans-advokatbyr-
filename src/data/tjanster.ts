export interface Tjanst {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  whatItMeans: string;
  whenYouNeedIt: string;
  howWeHelp: string;
  price: string;
  color: "orange" | "yellow";
}

export const tjanster: Tjanst[] = [
  {
    id: "skilsmassa",
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
  },
  {
    id: "vardnad",
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
  },
  {
    id: "bodelning",
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
  },
  {
    id: "arv-testamente",
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
  },
  {
    id: "samboavtal",
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
  },
];
