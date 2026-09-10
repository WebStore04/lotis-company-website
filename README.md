# Lotis

Lotis is a real-world asset tokenization studio. We issue restricted on-chain units against titled property, allocated gold and silver, and other lots that already have a legal file.

The public site is a dark infrastructure page (Parity-style) with a locations index (Propy-style). Gold and silver are projects on the register, not the whole company.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4531](http://localhost:4531).

| Path | What it is |
|---|---|
| `/` | Home |
| `/projects` | Property, gold, silver, credit and funds |
| `/locations` | Jurisdictions for the underlying asset |
| `/approach` | How a lot is issued |
| `/contact` | Inquiry form |

The contact form posts to `/api/inquiry`. There is no inbox wired yet. Valid inquiries are logged on the server so the flow can be tested without credentials.

## Deploy

Push to Vercel, Netlify, or any Node host. Set the production URL when you have `lotis.gold` or `lotismetals.com`.

## LinkedIn

Use the square mark in `public/lotis-logo.png` as the company logo and `public/lotis-cover.png` as the cover. Paste-ready About copy lives with the launch notes, not in this file.
