// Datalagret för prispaket.
export type { SanityPricingPackage as PrisPackage } from "@/sanity/types";
export { getAllPricingPackages } from "@/sanity/queries";

// Arvodestexten är statisk redaktionell text — behöver inte vara i CMS.
export const arvodesInfo = {
  hourlyRate: "1 950 kr/timme",
  rattsskydd:
    "De flesta hemförsäkringar täcker juridisk rådgivning med 80 % upp till ett maxbelopp. Vi hjälper dig ansöka.",
  rattshjälp:
    "Om du har låg inkomst kan du ha rätt till rättshjälp, vilket innebär att staten subventionerar juridisk hjälp.",
  freeConsult: "Första samtalet – alltid kostnadsfritt.",
};
