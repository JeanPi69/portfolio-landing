# Walter Jean Pierre Huapaya — Portfolio

Personal portfolio built with Next.js 16, React 19, and Framer Motion. Features a terminal-inspired aesthetic, multi-language support, and a working contact form.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend
- **Language:** TypeScript

## Features

- Matrix intro animation on first load
- Animated sections: Hero, Skills, Experience, Projects, Exploration, Contact
- Project detail overlay
- Multi-language (i18n via context + translations lib)
- Contact form with server-side email via Resend API
- Responsive layout

## Getting Started

### Prerequisites

- Node.js 18+
- A [Resend](https://resend.com) account and API key

### Environment

Create `.env/.env.local`:

```env
RESEND_API_KEY=re_your_api_key_here
```

### Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── api/contact/        # Email API route (Resend)
├── components/         # UI components & animations
├── contexts/           # Language context
├── lib/                # Translations, utilities
├── globals.css
├── layout.tsx
└── page.tsx
instrumentation.ts      # Loads env from .env/ subfolder
```

## Deployment

Add `RESEND_API_KEY` in project environment variables.

> Once your domain is verified in Resend, update the `to` address in `app/api/contact/route.ts` to your preferred inbox.
