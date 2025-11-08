// studio/sanity.config.js

import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import {visionTool} from '@sanity/vision';
import {schemaTypes} from './schemaTypes'; 

export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  title: 'Dotships Studio',
  apiVersion: '2023-01-01',
  basePath: '/',       
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
})

