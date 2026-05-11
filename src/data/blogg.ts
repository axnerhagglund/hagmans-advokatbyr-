// Datalagret för blogginlägg.
// Exporterar getAllPosts / getPostBySlug från Sanity.
// Behåller samma interface-namn för bakåtkompatibilitet med sidor som redan importerar härifrån.
export type { SanityPost as BloggPost } from "@/sanity/types";
export { getAllPosts, getPostBySlug, getPostSlugs } from "@/sanity/queries";
