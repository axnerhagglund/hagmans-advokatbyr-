export interface BloggPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorTitle: string;
  category: string;
  readTime: string;
}

export const bloggPosts: BloggPost[] = [
  {
    id: "1",
    slug: "sa-funkar-skilsmassa-i-sverige",
    title: "Så funkar skilsmässa i Sverige – en ärlig guide",
    excerpt:
      "Juridiken kring skilsmässa behöver inte vara krånglig. Här går vi igenom processen steg för steg, utan onödig jargong.",
    content: `En skilsmässa i Sverige är egentligen inte så komplicerat juridiskt sett. Det finns tre möjliga vägar:

**Gemensam ansökan, inga barn under 16**
Det enklaste scenariot. Ni ansöker gemensamt till Tingsrätten, och skilsmässan beviljas direkt – utan betänketid. Ni behöver inte uppge skäl.

**Gemensam ansökan, barn under 16**
Samma sak, men Tingsrätten kräver betänketid på minst sex månader. Det är lagstiftarens sätt att ge er tid att tänka efter – men ni behöver inte ångra er.

**Ensam ansökan**
Du har alltid rätt att ansöka om skilsmässa ensamt, oavsett vad din make/maka tycker. Om ni har barn under 16 år krävs betänketid. Om inga sådana barn finns, beviljas skilsmässan direkt.

Observera: en ansökan om skilsmässa säger ingenting om bodelning, vårdnad eller ekonomi. Det är separata frågor som kräver separata överenskommelser.`,
    date: "15 mars 2024",
    author: "Sofia Lindqvist",
    authorTitle: "Advokat & Grundare",
    category: "Skilsmässa",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "barnets-basta-vad-betyder-det-egentligen",
    title: "'Barnets bästa' – vad betyder det egentligen?",
    excerpt:
      "Begreppet 'barnets bästa' är centralt i all familjerätt, men vad innebär det konkret i en vårdnadstvist?",
    content: `"Barnets bästa" – du hör det hela tiden. Men vad väger egentligen domstolarna in?

Enligt Föräldrabalken ska barnets bästa vara avgörande vid alla beslut om vårdnad, boende och umgänge. Lagen ger en lista på faktorer:

**Risker för barnet**
Domstolen väger om det finns risk för att barnet far illa – fysiskt eller psykiskt. Missbruk, våld eller psykisk ohälsa hos en förälder är tungt vägande.

**Barnets behov av en nära relation till båda föräldrarna**
Det finns en presumtion att barn mår bra av kontakt med båda sina föräldrar. Att "vinna" en vårdnadstvist handlar inte om att utesluta den andra föräldern.

**Barnets egna vilja**
Äldre barn (ungefär från 12 år) tillmäts större vikt. Yngre barns vilja beaktas, men domstolen gör alltid en självständig bedömning.

**Föräldrarnas samarbetsförmåga**
Kan ni kommunicera och samarbeta kring barnet? Det är avgörande. En förälder som aktivt omöjliggör samarbete riskerar att förlora ensam vårdnad.`,
    date: "28 februari 2024",
    author: "Anna-Karin Berg",
    authorTitle: "Advokat",
    category: "Vårdnad",
    readTime: "7 min",
  },
  {
    id: "3",
    slug: "5-misstag-vid-bodelning",
    title: "5 misstag som kostar dig vid bodelning",
    excerpt:
      "Bodelning kan verka enkelt – men det finns fallgropar som kan kosta dig hundratusentals kronor. Här är de vanligaste.",
    content: `Bodelning är ett av de mest komplexa och ekonomiskt betydelsefulla stegen i en separation.

**1. Man väntar för länge**
Du har rätt att begära bodelning en period efter skilsmässan. Men väntar du för länge kan rätten preskriberas. Agera tidigt.

**2. Man missar dolda tillgångar**
Pensioner, aktier, andelar i bolag – allt ska med. En advokat vet vad man ska leta efter.

**3. Man tror att enskild egendom alltid är enskild**
Egendom du äger kan ibland blandas ihop med gemensamma tillgångar. En arvsatom bostad kan delvis ha finansierats av gemensamma pengar.

**4. Man skriver eget avtal**
"Det räcker väl om vi skriver ett papper?" Nej. Ett bodelningsavtal måste uppfylla formkrav för att vara juridiskt bindande. Gör det rätt från start.

**5. Man tar för given att lika är rättvist**
Ibland är det rätt att dela lika. Ibland inte. Det beror på vem som bidragit till vad och vilka tillgångar som är enskild egendom.`,
    date: "10 januari 2024",
    author: "Mikael Strand",
    authorTitle: "Biträdande jurist",
    category: "Bodelning",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "testamente-for-sambos",
    title: "Varför sambos MÅSTE ha testamente",
    excerpt:
      "Det är ett av de vanligaste och dyraste juridiska missförstånden: sambos tror att de ärver varandra. Det gör de inte.",
    content: `Låt oss vara tydliga: sambos ärver inte varandra automatiskt.

**Vad händer om ni inte har testamente?**
Om du och din sambo lever ihop i tio år och du dör utan testamente – ärver dina föräldrar allt (eller dina syskon, eller staten). Din sambo kan tvingas flytta.

**Vad kan testamentet göra?**
Med ett testamente kan du se till att din sambo ärver en del – eller all – din kvarlåtenskap. Det finns begränsningar (bröstarvinges laglott kan inte testamenteras bort), men du har stor frihet.

**Kostnaden vs. konsekvensen**
Ett enkelt testamente kostar från 3 900 kr. Konsekvensen av att inte ha ett kan vara att din sambo förlorar er gemensamma bostad.

Ring oss. Boka ett samtal. Det tar en timme och är en av de bästa investeringarna du kan göra.`,
    date: "5 december 2023",
    author: "Sofia Lindqvist",
    authorTitle: "Advokat & Grundare",
    category: "Arv & testamente",
    readTime: "4 min",
  },
  {
    id: "5",
    slug: "rattsskydd-vad-galler",
    title: "Rättsskydd – vad täcker din försäkring egentligen?",
    excerpt:
      "De flesta vet inte att deras hemförsäkring täcker stora delar av juridiska kostnader. Här är vad du behöver veta.",
    content: `Hemförsäkringen du betalar för varje månad innehåller troligtvis ett rättsskydd. Och det kan vara värt enormt mycket.

**Vad är rättsskydd?**
Rättsskydd är ett moment i hemförsäkringen som täcker juridiska kostnader om du hamnar i en tvist. Det gäller typiskt familjerättsliga tvister, arvsrättsliga tvister och tvister om fast egendom.

**Vad täcker det?**
Rättsskyddet täcker vanligtvis 80 % av advokatkostnaderna upp till ett maxbelopp (75 000–150 000 kr beroende på försäkring). Du betalar 20 % plus en självrisk på ca 1 000–2 000 kr.

**Hur gör du?**
1. Ring ditt försäkringsbolag och anmäl ett rättsskyddsärende.
2. Försäkringsbolaget godkänner (eller avslår) ansökan.
3. Vi hanterar resten.

Vi hjälper dig ansöka om rättsskydd som en del av vår service – utan extra kostnad.`,
    date: "20 november 2023",
    author: "James Okoro",
    authorTitle: "Biträdande jurist",
    category: "Kostnader & försäkring",
    readTime: "5 min",
  },
  {
    id: "6",
    slug: "internationell-skilsmassa",
    title: "Separerar ni i Sverige men bor i olika länder?",
    excerpt:
      "Internationell familjerätt är komplex. Vilket lands lag gäller? Vilken domstol är behörig? Vi reder ut begreppen.",
    content: `Allt fler familjer i Sverige har internationell koppling. Det gör juridiken mer komplex men inte omöjlig.

**Vilket lands domstol är behörig?**
Inom EU gäller Bryssel IIa-förordningen, som reglerar vilket land som har behörighet i familjetvister. Generellt gäller att det land där barnet har sin "hemvist" är behörigt för vårdnadsfrågor.

**Vilket lands lag tillämpas?**
Det beror på vad det handlar om. Vid bodelning kan parterna välja tillämplig lag i ett äktenskapsförord. I avsaknad av val tillämpas lagen i det land där makarna senast hade hemvist.

**Praktiska konsekvenser**
Tänk på att ett domstolsbeslut i ett land kanske inte automatiskt erkänns i ett annat. Verkställighet i utlandet kräver extra steg.

Vi på Hagmans har erfarenhet av internationella ärenden och samarbetar med advokater i andra länder när det behövs.`,
    date: "8 oktober 2023",
    author: "James Okoro",
    authorTitle: "Biträdande jurist",
    category: "Internationellt",
    readTime: "6 min",
  },
  {
    id: "7",
    slug: "aldre-och-arv",
    title: "Äldre och arv – vad du behöver ordna nu",
    excerpt:
      "Att planera för framtiden är ett kärleksbevis till dina närmaste. Här är de viktigaste juridiska dokumenten du behöver.",
    content: `Det är aldrig roligt att prata om sin egen bortgång. Men att inte prata om det kan skapa enorm oro och konflikt för dem du lämnar efter dig.

**De fyra viktigaste dokumenten:**

**Testamente**
Styr hur din kvarlåtenskap fördelas. Skydda din sambo, favorisera ett barn som tagit mer ansvar, ge till välgörenhet.

**Framtidsfullmakt**
Om du en dag inte kan fatta egna beslut – pga. demens, sjukdom eller olycka – styr framtidsfullmakten vem som tar hand om dina angelägenheter.

**Samboavtal (om du är sambo)**
Skyddar din sambo om ni separerar och säkrar rätten till bostaden.

**Direktiv om livets slutskede**
Inte juridiskt bindande i Sverige, men ger vägledning till anhöriga och sjukvård om dina önskemål.

Vi erbjuder ett "Trygghetspaket" som tar hand om alla fyra – boka ett samtal så berättar vi mer.`,
    date: "22 september 2023",
    author: "Mikael Strand",
    authorTitle: "Biträdande jurist",
    category: "Arv & testamente",
    readTime: "5 min",
  },
  {
    id: "8",
    slug: "sa-pratar-du-med-barn-om-separationen",
    title: "Hur pratar du med barn om separationen?",
    excerpt:
      "Det juridiska är en sak. Det mänskliga är en annan. Några råd från oss som sett hur det kan gå – och hur det kan bli bra.",
    content: `Vi är jurister, inte psykologer. Men vi har sett hundratals familjer gå igenom separation, och vi har lärt oss vad som gör skillnaden.

**Var ärliga – men inte för mycket**
Barn behöver sanningen i en åldersanpassad version. "Mamma och pappa älskar er lika mycket, men vi kommer inte bo ihop längre" är sanning. Detaljerna om varför ni separerar behöver barnen inte.

**Det är inte barnets fel**
Det låter självklart. Men barn internaliserar ofta separationer som om det vore deras ansvar. Säg det explicit, flera gånger.

**Håll konflikterna borta från barnen**
Talar ni illa om den andra föräldern inför barnet skadar det barnet – inte den andra föräldern. Det är ett av de tydligaste budskapen från forskningen.

**Ta hjälp**
Barnpsykologer, familjerådgivare, BUP – det finns stöd. Att ta emot hjälp är styrka, inte svaghet.`,
    date: "3 september 2023",
    author: "Anna-Karin Berg",
    authorTitle: "Advokat",
    category: "Barn & familj",
    readTime: "4 min",
  },
];
