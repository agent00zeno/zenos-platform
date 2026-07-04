# ZenOS Platform — Handoff & Current State
**Repo:** `agent00zeno/zenos-platform`
**Date:** July 1, 2026
**Status:** Phase 1 In Progress
**Supreme Architect:** Albany Zeno Sr.

---

## What This Repo Is

This is the ZenOS Business Operating Platform — the primary development
repository going forward. It replaces `agent00zeno/zenos-operating-system`
as the main platform repo. The old repo remains as a CMS sandbox.

---

## What's Live Right Now

| URL | What It Is | Status |
|---|---|---|
| `albanyzeno.com` | First org on ZenOS, Alpha waitlist | ✅ Live |
| `cms.albanyzeno.com` | Zen CMS (old repo) | ✅ Live |

---

## Repository Structure (Phase 1 — minimal)

```
zenos-platform/
├── constitution/
│   ├── CONSTITUTION.md              ← Read this first
│   └── ARCHITECTURAL_PRINCIPLES.md ← 10 principles, non-negotiable
├── experience/
│   └── public/                      ← albanyzeno.com
│       ├── package.json
│       ├── vite.config.js
│       ├── vercel.json
│       ├── index.html
│       └── src/
│           ├── main.jsx
│           ├── App.jsx
│           ├── firebase/config.js
│           ├── services/waitlist.js
│           ├── styles/global.css
│           └── components/
│               ├── Nav.jsx
│               ├── Hero.jsx
│               └── WaitlistForm.jsx
└── README.md
```

---

## Infrastructure

**Firebase project:** `zenos-platform-94060` (same as Zen CMS)
**Firestore collection:** `waitlist` (organization-aware, field: `organization: 'albanyzeno'`)
**Deployment:** Vercel, project `zenos-platform`
**Auto-deploy:** Yes — every push to `main` deploys to `albanyzeno.com`
**Root directory in Vercel:** `experience/public`

**Firebase authorized domains (confirmed):**
- `localhost`
- `zenos-platform-94060.firebaseapp.com`
- `zenos-platform-94060.web.app`
- `zenos-operating-system.vercel.app`
- `cms.albanyzeno.com`
- `albanyzeno.com`
- `www.albanyzeno.com`

**GoDaddy DNS for albanyzeno.com:**
- `A` record: `@` → `76.76.21.21` (Vercel)
- Old GoDaddy hosting A record (`107.180.117.105`) deleted

---

## albanyzeno.com — What It Does

A minimal public site for the Albany Zeno personal brand. Single page:

1. **Hero** — headline, positioning statement, "Begin Your Build" CTA
2. **Waitlist form** — five-step intake:
   - Name + Email (required)
   - Business type dropdown (required)
   - Stage dropdown (required)
   - Needs checkboxes (optional)
   - Vision free text (optional)
3. **Footer** — "Built on ZenOS"

On submission, data writes to Firestore `waitlist` collection with:
```javascript
{
  organization: 'albanyzeno',
  name, email, businessType, stage, needs, vision,
  source: 'albanyzeno.com',
  createdAt: serverTimestamp()
}
```

**Design baseline:** Rover skin palette (brushed steel + enamel)
- Off-white surface (`#F5F2ED`)
- Deep forest green (`#2D4A3E`)
- Coral (`#C4614A`)
- Charcoal (`#1E1E1E`)
- Brass (`#B8976A`)

---

## Phase 1 Definition of Done

Phase 1 is complete when:
- [x] albanyzeno.com live on ZenOS architecture
- [x] Waitlist form captures all five intake fields
- [ ] Firestore security rules updated for `waitlist` collection
- [ ] One real submission confirmed end-to-end
- [ ] Content sections below hero (skill stack, ZenOS capabilities)
- [ ] Architect's Chair (`experience/architect-chair/`) started

---

## Immediate Next Actions

**1. Firestore rules** — Add `waitlist` collection rules to `zenos-platform-94060`

```javascript
match /waitlist/{docId} {
  // Anyone can submit
  allow create: if request.auth == null || request.auth != null;
  // Only Supreme Architect can read
  allow read: if request.auth.uid == 'PpDDXq7gtQhTmTm3KGjWFY0OlCN2';
  // Nobody updates or deletes via client
  allow update, delete: if false;
}
```

**2. Test a real submission** — Fill out the form at `albanyzeno.com`,
confirm the document appears in Firestore console under `waitlist/`.

**3. Content sections** — Below the hero, add:
- Albany Zeno skill stack (already defined in the CMS content)
- ZenOS capabilities overview
- The three ventures (Centrainet, Prime Acreage, Albert Zeno) as
  proof points

**4. Scaffold remaining folders** — Only when there is real code to
put in them. Do not create empty folders.

---

## What Does NOT Exist Yet (Do Not Build Prematurely)

The following are real ideas worth pursuing but are NOT Phase 1:

- `intelligence/` — AI agents
- `platform/` — identity, API, workflow
- `bridge/` — cross-border, compliance
- `organizations/` — multi-tenant config
- Node.js backend
- Stripe billing
- Marketplace
- Cross-border (US/China) bridge
- ZENON governance layer
- WeChat integration
- Crypto payment rails

These earn their way in when there is a real requirement. Not before.

---

## Key Architectural Decisions (Locked)

| Decision | Choice | Reason |
|---|---|---|
| Stack | Vite + React + Firebase | Proven, fast, no new complexity |
| Firebase project | `zenos-platform-94060` | Same project, different collections |
| Firestore structure | Organization-aware (`organization` field) | Platform scales, not per-site |
| Backend | None yet (Firebase direct) | No server-side requirement in Phase 1 |
| Deployment | Vercel | Same account, proven from CMS session |
| Domain | `albanyzeno.com` | First org, personal brand |

---

## Context From Previous Session

This repo was created after a long session in `zenos-operating-system`
that covered Zen CMS debugging, production deployment, and an extended
architecture discussion. Full memorial is in the old repo at:
`zen-cms/docs/SESSION-MEMORIAL-AND-HANDOFF.md`

Key ideas from that discussion that will carry forward into this repo:
- Organization-aware Firestore data model
- Seven capability layers as the architectural frame
- Four revenue streams
- UAT network (albanyzeno, centrainet, prime-acreage, albertzeno)
- The Vintage UI concept (warm materials, analog gauges, brass accents)
  as the ZenOS platform interface aesthetic

---

## How To Run Locally

```bash
cd experience/public
npm install
npm run dev
# → http://localhost:5173
```

## How To Deploy

Push to `main`. Vercel auto-deploys within ~60 seconds.
