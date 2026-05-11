import { defineField, defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Blogginlägg",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Rubrik", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Slug (URL)", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "excerpt", title: "Ingress", type: "text", rows: 3, validation: (r) => r.required().max(300) }),
    defineField({ name: "content", title: "Innehåll (Markdown)", type: "text", rows: 20, validation: (r) => r.required() }),
    defineField({ name: "publishedAt", title: "Publiceringsdatum", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "category", title: "Kategori", type: "string",
      options: { list: ["Skilsmässa", "Vårdnad", "Bodelning", "Arv & testamente", "Kostnader & försäkring", "Internationellt", "Barn & familj"] },
      validation: (r) => r.required(),
    }),
    defineField({ name: "readTime", title: "Lästid (t.ex. '5 min')", type: "string" }),
    defineField({ name: "author", title: "Författare", type: "reference", to: [{ type: "teamMember" }], validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
