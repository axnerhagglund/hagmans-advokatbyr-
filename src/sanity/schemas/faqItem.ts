import { defineField, defineType } from "sanity";

export const faqItemSchema = defineType({
  name: "faqItem",
  title: "FAQ-fråga",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Fråga", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Svar", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "category", title: "Kategori", type: "string",
      options: { list: [
        { title: "Skilsmässa", value: "skilsmassa" },
        { title: "Vårdnad", value: "vardnad" },
        { title: "Ekonomi & arv", value: "ekonomi" },
        { title: "Kostnader", value: "kostnader" },
        { title: "Processen", value: "process" },
      ]},
      validation: (r) => r.required(),
    }),
    defineField({ name: "order", title: "Sorteringsordning", type: "number" }),
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
