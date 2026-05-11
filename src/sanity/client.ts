import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

// sanityClient is null when NEXT_PUBLIC_SANITY_PROJECT_ID is not configured.
// All query functions return empty arrays/null in that case so the site builds without Sanity.
export const sanityClient = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn: process.env.NODE_ENV === "production" })
  : null;
