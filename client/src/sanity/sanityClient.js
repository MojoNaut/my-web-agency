import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4ifwdpth',
  dataset: 'production',
  apiVersion: '2023-01-01', // Usa una versione API recente
  useCdn: true, // false se desideri garantire dati freschi
  
});

export default client;