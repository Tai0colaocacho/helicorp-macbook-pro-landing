# MacBook Pro Landing Page

A premium product landing page concept for the **MacBook Pro**, built as a frontend development showcase. The project demonstrates modern UI/UX practices, 3D model rendering, form validation, dark mode, and mini e-commerce interactions — all running on the latest Next.js stack.

---

## Project Overview

This landing page replicates the feel of an Apple-style product presentation while pushing beyond a static template. It features scroll-driven sections covering performance, display, battery, and technical specs, paired with interactive experiences: a live product configurator, a newsletter sign-up with webhook delivery, and a floating chatbot advisor. The 3D MacBook model is loaded on-demand to preserve initial page performance.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| 3D Rendering | Three.js · `@react-three/fiber` · `@react-three/drei` |
| Animation | Framer Motion 12 |
| Form Handling | React Hook Form · Zod · `@hookform/resolvers` |
| Notifications | Sonner |
| Icons | Lucide React |
| Dark Mode | next-themes |
| Font | Geist Sans · Geist Mono (Google Fonts via `next/font`) |

---

## Core Requirements Completed

- ✅ **Hero Section** — Full-viewport landing with animated floating stat cards and a stylised MacBook screen mockup
- ✅ **Performance Section** — M-series chip highlights with animated metric cards
- ✅ **Display Section** — Liquid Retina XDR showcase with specs and visual callouts
- ✅ **Battery Section** — All-day battery life story with usage scenarios
- ✅ **Specs Section** — Structured technical specifications table
- ✅ **Highlight Section** — Key differentiator callouts between sections
- ✅ **Product Configurator** — Live configuration panel for colour, chip, memory, and storage with real-time price calculation
- ✅ **Newsletter / Pre-order Form** — Multi-field form with client-side (Zod) and server-side validation, webhook delivery via `POST /api/subscribe`
- ✅ **Responsive Design** — Mobile-first layout, works across all screen sizes
- ✅ **Dark Mode** — System-aware with manual toggle via `next-themes`
- ✅ **SEO** — Title tags, meta descriptions, Open Graph, Twitter Card, `robots.ts`, `sitemap.ts`, dynamic OG image via `opengraph-image.tsx`

---

## Bonus Features Completed

- 🎯 **Interactive 3D MacBook Model** — Two `.glb` models (14-inch Space Black for dark mode, 16-inch Silver for light mode) rendered with `@react-three/fiber`, lazy-loaded on user interaction to protect PageSpeed score. Mobile devices receive a lightweight CSS fallback automatically
- 💬 **Chatbot Widget** — Floating MacBook Advisor bot with pre-defined Q&A, suggested questions, free-text input, and conversation reset
- 🛒 **Mini Commerce Layer** — Add to Cart, Add to Favorites, and Recently Viewed states persisted to `localStorage` inside the Product Configurator
- 📜 **Scroll Progress Indicator** — Thin progress bar at the top of the page tracking reading depth
- ✨ **Reveal Animations** — Scroll-triggered entrance animations on key sections using Framer Motion

---

## Performance Strategy

The page is optimised to maintain high Lighthouse / PageSpeed scores without sacrificing rich interactivity:

| Technique | Description |
|---|---|
| **On-demand 3D loading** | The Three.js canvas and `.glb` models are only fetched after the user explicitly clicks "Load 3D Model", keeping the initial bundle and network waterfall lean |
| **Mobile fallback** | Below `768px`, the 3D canvas is never mounted — a CSS-only mockup is shown instead, eliminating Three.js from the mobile critical path entirely |
| **`next/dynamic` + `ssr: false`** | The `MacBook3DCanvas` component is dynamically imported with SSR disabled, so it never blocks server rendering or hydration |
| **`next/font` with `display: swap`** | Geist fonts are self-hosted by Next.js with `font-display: swap` to prevent layout shift |
| **Image-free hero** | The hero section uses pure CSS gradients and SVG-based illustrations — zero raster images to decode on load |
| **Route-level code splitting** | Next.js App Router automatically splits JS per route; heavy client components (`"use client"`) are isolated from server-rendered sections |
| **Sonner toasts** | Lightweight notification library; no heavy modal overlay trees |

---

## 3D Model Optimization Strategy

Two `.glb` files are served from `/public/models/` — each approximately 10 MB in their raw form. The following measures keep the 3D experience viable without hurting the page score:

| Strategy | Implementation |
|---|---|
| **User-gated loading** | Models are not fetched on page load. A gated UI prompt lets the user opt in, at which point `MacBook3DCanvas` mounts and the `.glb` is streamed |
| **Theme-driven model selection** | Only one model is ever loaded per session. Dark mode → `macbook-pro-14-black.glb`; light mode → `macbook-pro-16-silver.glb`. Switching themes swaps the model via `key` prop, triggering a clean remount |
| **`useGLTF` caching** | `@react-three/drei`'s `useGLTF` hook caches the parsed model in memory. If the user re-opens the 3D viewer, no second network request is made |
| **Draco / compression** (recommended) | For production, models should be compressed using `gltf-pipeline` with Draco geometry compression to reduce file size by 60–80% before deployment |
| **Desktop-only rendering** | A `window.matchMedia('(min-width: 768px)')` guard prevents Three.js from ever loading on mobile, protecting Core Web Vitals on the device class most likely to have slower connections |
| **Suspense loading state** | While the model streams in, a spinner fallback is shown inside a `<Suspense>` boundary so the rest of the page remains interactive |

---

## Environment Variables

Create a `.env.local` file in the project root with the following:

```env
# Required – Webhook endpoint for newsletter/pre-order form submissions
# Submissions are forwarded as JSON POST requests to this URL
WEBHOOK_URL=https://your-webhook-endpoint.com/your-id

# Optional – Used to generate absolute URLs for Open Graph and sitemap
# Defaults to http://localhost:3000 if not set
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
```

> **Note:** `WEBHOOK_URL` is a server-only variable (no `NEXT_PUBLIC_` prefix). It is never exposed to the browser. If left unset, the form will still validate and return a success response without forwarding data.

---

## How to Run Locally

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/your-username/macbook-pro-landing.git
cd macbook-pro-landing

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Then edit .env.local and add your WEBHOOK_URL

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

---

## Deployment

> 🔗 **Live Demo:** _[Deployment link placeholder — add after deploying to Vercel / Netlify]_

The recommended deployment target is **Vercel** (zero-config with Next.js):

1. Push the repository to GitHub
2. Import the project in [vercel.com/new](https://vercel.com/new)
3. Add `WEBHOOK_URL` and `NEXT_PUBLIC_SITE_URL` in **Project Settings → Environment Variables**
4. Deploy — Vercel will run `npm run build` automatically

---

## PageSpeed / Lighthouse Score

> 📸 _[Add a PageSpeed Insights screenshot here after deployment]_

Paste your PageSpeed Insights URL:
`https://pagespeed.web.dev/report?url=https://your-production-domain.com`

---

## Project Structure

```
macbook-pro-landing/
├── app/
│   ├── api/
│   │   └── subscribe/
│   │       └── route.ts          # Validates newsletter form and forwards data to webhook
│   ├── globals.css               # Global styles, Tailwind v4 setup, dark mode variant
│   ├── layout.tsx                # Root layout, metadata, fonts, theme provider
│   ├── page.tsx                  # Main landing page composition
│   ├── opengraph-image.tsx       # Dynamic Open Graph image
│   ├── robots.ts                 # robots.txt generation
│   └── sitemap.ts                # sitemap.xml generation
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── MacBook3DShowcase.tsx
│   │   ├── MacBook3DLoader.tsx
│   │   ├── MacBook3DCanvas.tsx
│   │   ├── HighlightSection.tsx
│   │   ├── PerformanceSection.tsx
│   │   ├── DisplaySection.tsx
│   │   ├── BatterySection.tsx
│   │   ├── SpecsSection.tsx
│   │   ├── ProductConfigurator.tsx
│   │   ├── NewsletterForm.tsx
│   │   └── ChatbotWidget.tsx
│   │
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Reveal.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── SectionHeading.tsx
│   │
│   └── providers/
│       └── ThemeProvider.tsx
│
├── data/
│   ├── features.ts               # Product highlights and performance feature data
│   ├── specs.ts                  # Technical specifications data
│   ├── products.ts               # Configurator options
│   └── chatbot.ts                # Rule-based chatbot Q&A
│
├── lib/
│   ├── storage.ts                # localStorage helpers
│   ├── utils.ts                  # cn utility
│   └── validations.ts            # Zod validation schemas
│
├── public/
│   └── models/
│       ├── macbook-pro-14-black.glb
│       └── macbook-pro-16-silver.glb
│
├── types/
│   └── index.ts                  # Shared TypeScript types
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Author

**Huynh Phat Tai** — Frontend Developer

_This project is a landing page concept built for development demonstration purposes. It is not affiliated with Apple Inc._
