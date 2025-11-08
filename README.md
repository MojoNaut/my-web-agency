DEPLOY — Production

Front-end (React) → Vercel

Root directory: /client

Build command: npm run build

Output dir: build

Env vars richieste:

REACT_APP_SANITY_PROJECT_ID

REACT_APP_SANITY_DATASET

REACT_APP_SANITY_API_VERSION

CMS Studio (Sanity v3) → Railway

Root directory: /studio

Build: npm run build

Start: npm start

Env vars richieste:

SANITY_STUDIO_PROJECT_ID

SANITY_STUDIO_DATASET

SANITY_API_VERSION

Sanity CORS Required

http://localhost:3000

http://localhost:3333

https://<your-vercel-domain>

https://<your-railway-domain>

Dataset policy attuale: Public Read