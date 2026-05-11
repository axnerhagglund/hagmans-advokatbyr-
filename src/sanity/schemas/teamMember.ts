import { defineField, defineType } from "sanity";

export const teamMemberSchema = defineType({
  name: "teamMember",
  title: "Medarbetare",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Namn", type: "string", validation: (r) => r.required() }),
    defineField({ name: "title", title: "Titel", type: "string", validation: (r) => r.required() }),
    defineField({ name: "specialties", title: "Specialistområden", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "bio", title: "Professionell bio", type: "text", rows: 4 }),
    defineField({ name: "personal", title: "Personlig beskrivning", type: "text", rows: 3 }),
    defineField({ name: "email", title: "E-post", type: "string" }),
    defineField({ name: "phone", title: "Telefon", type: "string" }),
    defineField({ name: "initials", title: "Initialer (t.ex. SL)", type: "string", validation: (r) => r.max(3) }),
    defineField({ name: "accentColor", title: "Accentfärg (hex)", type: "string" }),
    defineField({ name: "order", title: "Sorteringsordning", type: "number" }),
  ],
  preview: {
    select: { title: "name", subtitle: "title" },
  },
});
