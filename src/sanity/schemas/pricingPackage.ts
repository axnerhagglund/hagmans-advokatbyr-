import { defineField, defineType } from "sanity";

export const pricingPackageSchema = defineType({
  name: "pricingPackage",
  title: "Prispaket",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Rubrik", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subtitle", title: "Undertitel", type: "string" }),
    defineField({ name: "price", title: "Pris (t.ex. '4 900 kr')", type: "string", validation: (r) => r.required() }),
    defineField({ name: "priceNote", title: "Prisnotering (t.ex. 'Fast pris')", type: "string" }),
    defineField({ name: "included", title: "Inkluderat", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "highlight", title: "Markera som populärast?", type: "boolean" }),
    defineField({ name: "order", title: "Sorteringsordning", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
  },
});
