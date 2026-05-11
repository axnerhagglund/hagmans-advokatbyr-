import { defineField, defineType } from "sanity";

export const serviceSchema = defineType({
  name: "service",
  title: "Tjänst",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Namn", type: "string", validation: (r) => r.required() }),
    defineField({ name: "icon", title: "Ikon (symbol/emoji)", type: "string" }),
    defineField({ name: "shortDesc", title: "Kort beskrivning", type: "text", rows: 2, validation: (r) => r.required() }),
    defineField({ name: "whatItMeans", title: "Vad det innebär", type: "text", rows: 3 }),
    defineField({ name: "whenYouNeedIt", title: "När du behöver det", type: "text", rows: 3 }),
    defineField({ name: "howWeHelp", title: "Hur vi hjälper", type: "text", rows: 3 }),
    defineField({ name: "price", title: "Pris (t.ex. 'Från 4 900 kr')", type: "string" }),
    defineField({ name: "color", title: "Färgtema", type: "string",
      options: { list: [{ title: "Orange", value: "orange" }, { title: "Gul", value: "yellow" }] },
    }),
    defineField({ name: "order", title: "Sorteringsordning", type: "number" }),
  ],
  preview: {
    select: { title: "title", subtitle: "price" },
  },
});
