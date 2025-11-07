import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION,
  useCdn: true,
  // se hai un token:
  // token: process.env.REACT_APP_SANITY_WRITE_TOKEN,
});

export default client;
