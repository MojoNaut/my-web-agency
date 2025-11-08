// client/src/sanity/sanityClient.js

// client/src/sanity/sanityClient.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || "2023-01-01",
  useCdn: process.env.NODE_ENV === "production",
  perspective: "published",
});