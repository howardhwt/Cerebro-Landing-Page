# Cerebro Landing Page

A Next.js 14 B2B SaaS landing page for Cerebro, featuring a dark theme, mobile-first design, and conversion-optimized structure.

## Features

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4 (Dark Theme)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Language**: TypeScript

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment**
   Rename `.env.local.example` to `.env.local` and add your keys:
   ```bash
   cp .env.local.example .env.local
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

- **Colors**: Modified in `app/globals.css` (Tailwind v4 CSS variables)
- **Content**: Edit `app/page.tsx` directly
- **Email Form**: Connect to Resend in `components/EmailForm.tsx`

## Deployment

Push to GitHub and deploy on Vercel:
1. `git push origin main`
2. Import project in Vercel
3. Add `RESEND_API_KEY` to Vercel Environment Variables
