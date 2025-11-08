// studio/sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '4ifwdpth',  // Assicurati che il projectId sia corretto
    dataset: 'production',  // Dataset corretto
  },
  studioHost: 'mywebagency',  // Aggiungi questo per evitare la richiesta di hostname
})
