# Lotis

Lotis is a software development company. The flagship project is real-world asset tokenization (property, allocated gold and silver, funds). Gold and silver are workstreams inside that project, not the company.

The public site is a cinematic company site: full-viewport photography, autoplaying slides, and motion on every main page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4531](http://localhost:4531). The dev script fronts Next.js with a small proxy so Preview (and other HTTP tunnels) get complete `Content-Length` responses instead of chunked keep-alive streams.

| Path | What it is |
|---|---|
| `/` | Company home, hero slider, RWA film strip |
| `/about` | Who Lotis is: film, kaos collage, reliability, flagship |
| `/projects` | Software work and the RWA flagship |
| `/locations` | Jurisdictions for the RWA project |
| `/approach` | How a Lotis project runs |
| `/culture` | How Lotis works |
| `/careers` | Hiring, what you will work on, process |
| `/contact` | Inquiry form |

The contact form posts to `/api/inquiry`. There is no inbox wired yet. Valid inquiries are logged on the server.

## LinkedIn

Paste-ready fields: [LINKEDIN.md](./LINKEDIN.md). Logo: `public/lotis-logo-light.png`. Cover: `public/lotis-cover.png`.

## Deploy

Push to Vercel, Netlify, or any Node host.
