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

## 🚀 Deployment to Cloudflare Pages (Free & Fast)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) $\rightarrow$ **Workers & Pages** $\rightarrow$ **Create Application** $\rightarrow$ **Pages**.
2. Select **Connect to Git** $\rightarrow$ choose `blogtypingwire.in`.
3. Configure Build Settings:
   * **Framework Preset**: `Astro`
   * **Build Command**: `npm run build`
   * **Build Output Directory**: `dist`
4. Click **Save and Deploy**.
5. In the Pages project settings $\rightarrow$ **Custom Domains** $\rightarrow$ Add `blog.typingwire.in`.
