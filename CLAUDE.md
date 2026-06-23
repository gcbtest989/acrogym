# AcroGym website — project context for Claude

This file is auto-loaded by Claude Code. It captures what this project is, how it
works, and everything changed recently, so any session (local or cloud) is up to
speed immediately. Owner: **Kirill** (non-technical — explain steps simply, he
prefers Russian for discussion; code/docs stay in English).

## What this is

Landing site for **AcroGym** — a children's gymnastics center in **The Pearl,
Doha, Qatar**, opening **September 2026**. Legal entity: **AcroGym FZCO**.
Live at **https://www.acrogym.org**. Audience: parents of kids aged 3–14
(expat + local), so the site is in English.

## Stack & structure

- **Nuxt 4 + Vuetify 3 + Pinia**, single-page landing. `ssr: true` with nitro
  **prerender** of `/` and `/privacy` (static output in `.output/public`).
- One page: `app/pages/index.vue` (layout `naked`). Sections are components in
  `app/components/landing/` (Hero, WhyChooseGym, Programs, MeetCoach,
  Competitions, ParentsTrust, PhotoGallery, OurBrandSpace, ReadyToStart,
  Contact) + `WhatsApp.vue`, `LeadPopup.vue`, `CookieNotice.vue`.
- Brand colors: primary blue `#28347F`, orange `#F37021`; font **Montserrat**.
  Images in `public/img/`. Contact on site: `info@acrogym.org`, `+974 7085 9382`.

## Hosting & deploy

- Repo: **`gcbtest989/acrogym`** (owned by the site developer; Kirill's GitHub
  `rekilll-stack` is a **collaborator**). Work via GitHub: push to `main`.
- **Vercel auto-deploys `main`** (~60–80s). The Vercel project is under the
  **developer's** account (`juan-albertos-projects`), NOT Kirill's — so we
  **cannot set Vercel env vars or dashboard settings**. Anything public that the
  live build needs must live **in the code**, not in env vars.
- Domain `acrogym.org` DNS is under **Kirill's Squarespace** (he controls it).
- After any push, verify against prod (curl the live URL / re-fetch the changed
  chunk) — don't trust local build alone.

## Lead pipeline (most important — don't break it)

The lead form posts directly from the browser to the n8n webhook:

```
POST https://hook.acrogym.org/webhook/acrogym-lead
header: x-webhook-token: <token>      body: JSON { name*, phone*, child_age?, source? }
```

→ n8n (Docker on the VPS) → canonical Google Sheet (Leads) → Telegram card via
Agent 1. **The webhook token is hardcoded client-side in `LeadPopup.vue` on
purpose**: the site is static with no backend, so this was a conscious,
owner-approved decision (token is public in page source but rotatable). Full
contract + an equivalent paste-in embed block live in the **sibling repo
`rekilll-stack/AcroGym-Agents`** (`docs/website-form-integration.md`,
`docs/website-form-embed.html`) — keep the site form and that block in sync.

⚠️ Submitting the form creates a **real lead** (Sheet row + Telegram card + GA
event). Don't test-submit casually; if you must, tell Kirill so the test lead
gets cleaned out.

## Lead popup behavior (`app/components/landing/LeadPopup.vue`)

- Fixed full-screen overlay; card slides up. Shown **once per browser** on first
  visit (localStorage `acro_lead_form_seen`), never again — refreshes included.
- `?acroform=show` forces it (QA / marketing links), without touching the flag.
- Any CTA opens it on demand by dispatching `window` event
  **`acro:open-lead-form`**. Hero "Try Now" and ReadyToStart "Book your first
  lesson" both do this. (The old external Google Form link was removed.)
- Phone validation: rejects **< 8 digits** client-side ("Please enter a valid
  phone number"); the n8n side is the authoritative gate.
- Success screen is standalone & compact (mobile-fixed): checkmark + thank-you +
  **Close** button; the corner ✕ is hidden on success (only shown on the form).
  Auto-closes after 5s. Card uses `overflow:hidden`; the **overlay** scrolls
  (don't reintroduce `overflow-y:auto` on the card — caused janky mobile scroll).
- Copy is **"Book Your First Class"** — NOT "Trial". The first class is **paid**,
  so avoid "trial"/"free" wording anywhere.

## Lead source attribution

- `/book` (Instagram bio link) → routeRule redirect to
  `/?acroform=show&utm_source=instagram`.
- LeadPopup reads `utm_source`; if it's a known channel (`KNOWN_SOURCES =
  ['instagram']`, lowercased) it sends `source` with that value; otherwise it
  omits `source` and the pipe defaults to `website_form`. Owner-bot digests
  split reporting by `source`. Add new channels to `KNOWN_SOURCES`.

## Analytics — Google Analytics 4

- Property **`G-PMEXF9N7SS`** under **Kirill's own Google** (rekilll@gmail.com),
  so it reports regardless of who hosts. Wired via `app/plugins/gtag.client.ts`
  reading `runtimeConfig.public.gtagId` (hardcoded default in `nuxt.config.ts`
  because the live build is the developer's Vercel where we can't set env vars;
  the ID is public anyway).
- Form submit fires GA4 event **`generate_lead`** with `{ source }`.
- (History: Vercel Web Analytics was tried first, commit `04dca48`, then removed
  in favor of GA4 — the Vercel project isn't Kirill's so he couldn't view it.)

## Cookie consent (`app/components/landing/CookieNotice.vue`)

- Banner with Accept / Decline. Key `acro_cookie_consent` (`accepted`/`denied`).
- Analytics is **on by default**; **Decline** opts the visitor out — and
  `gtag.client.ts` skips GA on future visits when the value is `denied`.
- Shown only until a choice is stored.

## Privacy policy

- Static page at **`/privacy`** (`app/pages/privacy.vue`, prerendered), linked
  from the homepage footer. Brand-styled, plain English, reflects actual data
  practices (form fields, GA + cookies, no data selling, children's-privacy
  note, retention, contact). Added because **Facebook/Meta requires a public
  privacy-policy URL**. Note: a lawyer review is advisable (children's data +
  Qatar PDPPL) — not yet done.

## Open / in-progress

- **Facebook/Meta app "AcroGym Leads"** (developers.facebook.com) is being set
  up by Kirill for the Instagram/lead integration. App Domain `acrogym.org`,
  Privacy Policy URL `https://www.acrogym.org/privacy`. **Pending: the OAuth
  "Valid OAuth Redirect URIs"** — that value must come from the n8n OAuth
  callback (the AcroGym-Agents / VPS side), not the website. Don't guess it.
- A pending n8n change (VPS side): reject phones `< 8` digits after
  normalization (the site already does the client-side check).

## Working norms here

- Push to `main`; Vercel deploys; verify on prod.
- `npm run build` to check; preview the static output from `.output/public`.
- Keep the lead-form contract intact. Keep public IDs/tokens in code (env vars
  don't reach the developer's Vercel build).
