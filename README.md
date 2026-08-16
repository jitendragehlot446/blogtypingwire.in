# 🚀 TypingWire Blog Portal (Astro v5)

An ultra-fast, SEO-engineered static blog portal built with **Astro v5**, **Markdown Content Collections**, and **Automated Schema & Sitemap generators**.

Target URL: `https://blog.typingwire.in`  
GitHub Repository: `https://github.com/jitendragehlot446/blogtypingwire.in.git`

---

## ⚡ Key Features

* 🚀 **100/100 Google PageSpeed Score**: Pure static HTML generation with zero runtime JS overhead.
* 📝 **Markdown / MDX Publishing**: Simply create `.md` files in `src/content/blog/` to publish.
* 🤖 **SEO & AI Bot Ready**:
  * Automated XML Sitemaps (`sitemap-index.xml`, `sitemap.xml`)
  * Schema.org Structured Data (`BlogPosting`, `FAQPage`, `BreadcrumbList`)
  * AI Crawler permissions in `robots.txt` (`GPTBot`, `ClaudeBot`, `PerplexityBot`)
  * Contextual `llms.txt` for AI search engines
* 🎨 **Modern TypingWire Theme**: Clean glassmorphism cards, responsive tables, interactive FAQ accordions, and tag filtering.
* 🌐 **Cloudflare Pages / Vercel Ready**: Connect with GitHub for automatic 30-second builds on every push.

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build static production files
npm run build

# 4. Preview local build
npm run preview
```

---

## ✍️ How to Publish a New Blog Post

Create a new `.md` file inside `src/content/blog/` (e.g. `src/content/blog/my-new-article.md`):

```markdown
---
title: "Your High-Ranking Article Title"
description: "A compelling 150-character summary for Google search snippets."
pubDate: 2026-08-16
category: "Typing Tips"
tags: ["typing", "wpm", "speed"]
author: "TypingWire Team"
featured: false
faqs:
  - question: "Your Question Here?"
    answer: "Detailed answer for Google FAQ rich snippets."
---

## 1. Introduction
Write your article content here in Markdown...
```

---

## 🚀 Deployment to Vercel (Free & Instant)

### Option A: Via Vercel Dashboard (Recommended)
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **Import** next to `jitendragehlot446/blogtypingwire.in`.
3. Vercel automatically detects the **Astro** framework preset.
4. Click **Deploy** (site goes live in ~30 seconds).
5. Go to **Settings** $\rightarrow$ **Domains** $\rightarrow$ Add `blog.typingwire.in`.
6. Add this **CNAME Record** in your DNS:
   - **Type**: `CNAME`
   - **Name**: `blog`
   - **Target**: `cname.vercel-dns.com`

---

### Option B: Via Terminal (Vercel CLI)
```bash
npx vercel
# Follow prompts to link and deploy!
```
