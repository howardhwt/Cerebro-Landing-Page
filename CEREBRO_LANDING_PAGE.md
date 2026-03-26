# Cerebro Landing Page — Claude Code Brief

## What This Is

Pre-seed startup landing page for **Cerebro**, a B2B SaaS sales intelligence platform. The page needs to convert two audiences: (1) potential pilot customers (sales/CS leaders at B2B SaaS companies) and (2) investors/accelerator reviewers who will Google us. No fluff. No "unlock the power of AI." This should feel like a company that's already shipping, not a pitch deck in HTML form.

---

## Product in One Line

**AI that remembers every customer pain your sales reps forget.**

## What Cerebro Actually Does

Cerebro is a sales intelligence layer that turns sales call transcripts into structured, actionable context. It extracts customer pain points, maps them to relevant products and features, and generates follow-ups — so reps stop losing deals to forgotten context, and anyone inheriting an account gets full history instead of nothing.

### The Core Insight (Use This to Inform Tone)

Reps are biased captors. They only write down what they already understand — which means raw customer pain AND product fit signals get lost simultaneously. Gong records calls. Cerebro solves what happens after.

### MVP Capabilities (V1 — Live)

- Ingest company website content and product catalog
- Upload sales call transcripts (text)
- Extract pains, objections, competitors, requirements, next steps
- Map identified pains to relevant products and features automatically
- Generate structured call recaps and follow-up email drafts
- Citations and confidence scores on all outputs

### What Cerebro Does NOT Do (Don't Imply These)

- Does NOT replace your CRM
- Does NOT record calls (not a Gong competitor)
- Does NOT claim to "close more deals" — it captures what gets lost
- No live call joining, no CRM integrations in V1

---

## Page Sections (In Order)

### 1. Hero

**Headline:** "AI that remembers every customer pain your sales reps forget."

**Subheadline (one of these, pick what works with the design):**
- "Sales reps are biased captors. They only document what they already understand — which means customer pain and product fit signals get lost simultaneously. Cerebro fixes the last mile."
- "Gong records your calls. Cerebro solves what happens after."

**CTA:** "Request Early Access" → links to a simple email capture form or Typeform/Calendly embed. Keep it tight — name, email, company, role. No sprawling form.

### 2. The Problem (Keep It Sharp)

Frame the problem in two personas. Don't use the word "persona." Make the reader see themselves.

**The rep who misses things in the moment:**
They walk out of a discovery call with gold — and bury it in a Google Doc no one reads again. They heard the customer's pain, but only captured what they already understood. The signal that could've closed the deal? Gone before the follow-up email.

**The successor who inherits nothing:**
New AE on the account. CS director picking up a client relationship. They're not flying blind because they forgot — they're flying blind because the system never gave them anything to remember. Every handoff starts from zero.

### 3. How It Works (Simple 3-Step Visual)

Step 1: **Ingest your product catalog** — Cerebro structures your company's products, features, and positioning into a queryable knowledge base.

Step 2: **Upload a call transcript** — Cerebro extracts pains, objections, competitors, requirements, and next steps. Every extraction is cited back to the source.

Step 3: **Get structured output** — Pain-to-product mappings, call recaps, and follow-up drafts. Your reps send better emails in minutes, not hours. Anyone on the team can pick up the thread.

### 4. The Wedge (Positioning Against Gong)

Don't trash Gong. Position Cerebro as the layer that completes what Gong starts.

Key message: "Gong records everything. But a full transcript doesn't tell your CS director which product solves which pain, or give your new AE the context they need to pick up where someone left off. Cerebro does the last mile Gong leaves completely unaddressed."

This section should feel confident, not defensive. One short paragraph or a clean side-by-side comparison visual:

| | Gong | Cerebro |
|---|---|---|
| Records calls | ✓ | Works with any transcript |
| Coaches reps in the moment | ✓ | — |
| Extracts pain in customer's own words | — | ✓ |
| Maps pain → your specific products | — | ✓ |
| Generates context-aware follow-ups | — | ✓ |
| Gives successors full account context | — | ✓ |

### 5. Team

Three co-founders. Keep bios tight — 2-3 sentences each. Lead with Cerebro, then relevant background.

**Howard** — Co-founder & CEO. Former founding AE at Viggle (a16z-backed). Led MUFG Hong Kong's first Panda Bond. Finance-to-startup trajectory across BD roles at Sequence and Treasure. MBET, University of Waterloo.

**Nikki Ip** — Co-founder & COO. Building Cerebro's go-to-market and operations. Previously led revenue analytics and operational strategy at Adaptavist Group. Background in institutional client management and compliance (AML/KYC) in banking.

**Babajide Okusanya** — Co-founder & Technical Lead. LLM specialist building Cerebro's extraction and mapping engine. Previously scaled a B2B marketplace to meaningful ARR. Active builder with deep experience in applied AI.

### 6. CTA (Bottom)

Repeat the "Request Early Access" CTA. Add a line like: "We're onboarding pilot customers now. If your team runs 20+ sales calls a month and you're tired of losing context between them, let's talk."

### 7. Footer

- Contact email (founders@trycerebro.com or similar — use placeholder if no real email yet)
- Toronto, Canada
- © 2026 Cerebro
- No social links unless they actually exist and are active

---

## Design Direction

### Aesthetic: Editorial / Confident / Clean

This is NOT a playful consumer app. This is NOT a dark-mode dev tool. This is a B2B sales tool built by people who've done the job. The design should feel like a sharp one-pager from a company that's already in market — not a hackathon project, not a corporate enterprise site.

**Think:** Stripe's clarity meets Linear's confidence. Clean type hierarchy, generous whitespace, no visual clutter.

### Typography

- Use a distinctive serif or geometric sans for headlines — something with character, not Inter/Roboto/system fonts
- Clean sans-serif for body text
- Strong type hierarchy: the headline should hit hard, subheadline should be readable at a glance

### Color

- Dark backgrounds are fine (navy, near-black, dark slate) with crisp light text
- OR clean white/light gray with bold accent color
- Accent color: something warm and confident — not the default purple-gradient-on-white that screams "AI startup template"
- Avoid: neon gradients, rainbow effects, excessive glassmorphism

### Layout

- Single-page, vertical scroll
- Each section should breathe — generous spacing
- The comparison table should be scannable in 3 seconds
- Mobile-responsive is mandatory
- No parallax or scroll-jacking — keep it fast and clean

### Interactions

- Subtle fade-in on scroll for sections
- CTA button should have a clear hover state
- Keep animations minimal and purposeful — this isn't a portfolio site

### What to Avoid

- Stock photos of people in suits shaking hands
- Abstract AI imagery (brains, neural networks, robot hands)
- Buzzword soup ("leverage," "synergy," "cutting-edge," "revolutionary")
- Multiple CTAs competing for attention — one action: request early access
- Fake social proof or testimonials we don't have yet

---

## Technical Notes

- Static site is fine — HTML/CSS/JS or a simple React app
- No backend needed unless we're wiring up a real form submission
- If adding email capture, a simple Formspree or similar integration works
- Optimize for fast load — no heavy frameworks for a landing page
- SEO basics: proper meta tags, og:image, title = "Cerebro — AI that remembers every customer pain your sales reps forget"
- Favicon: use a simple "C" mark or brain icon as placeholder

---

## Content Tone Rules

- Write like a founder talking to another founder, not a marketing team writing copy
- Short sentences. No compound clauses stacked three deep.
- Every sentence should earn its place. If it doesn't add information or emotion, cut it.
- "We" is fine. "Our revolutionary platform" is not.
- State the problem concretely. "Nearly half their customers are visibly frustrated when asked to repeat themselves" is better than "improve customer experience."
- Don't promise outcomes we don't control. "Capture what gets lost" — yes. "Close 40% more deals" — no.
