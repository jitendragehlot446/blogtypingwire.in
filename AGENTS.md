# 📖 TypingWire Blog (blog.typingwire.in) — Complete Project Documentation

> **Essential Reference for AI Agents & Developers**  
> This file contains the complete architecture, deployment pipelines, repository secrets, design systems, and operational workflows for this repository.

---

## 🎯 1. Project Overview & Role
* **Project Name**: `TypingWire Editorial & Exam Rules Blog`
* **Subdomain URL**: `https://blog.typingwire.in`
* **Main Website**: `https://typingwire.in` (India's Typing Test & Preparation Software)
* **Purpose**: Official knowledge, examination guidelines, full vs half mistake calculation formulas (SSC CGL/CHSL, High Court, Steno, DSSSB, RRB), accuracy drills, and keyboard hardware reviews.
* **Architecture**: 100% Static HTML generation with zero runtime JavaScript bloat, scoring 100/100 on Google PageSpeed Insights.

---

## 🛠️ 2. Tech Stack & Integrations
* **Framework**: **Astro v5 (Latest)** (`astro@^5.1.0`)
* **Content Engine**: Astro Content Collections (`src/content.config.ts`) with Zod schema validation.
* **Integrations**:
  * `@astrojs/mdx` — Markdown/MDX component rendering.
  * `@astrojs/sitemap` — Automated Google XML Sitemaps (`sitemap-index.xml`, `sitemap.xml`).
  * `@astrojs/rss` — Dynamic RSS feed (`/rss.xml`).
* **Design & CSS**: Pure Vanilla CSS (`src/styles/global.css`) based on the **Editorial / Modern Swiss Minimalist** architecture.

---

## 🔗 3. Git Repository & Authentication
* **Repository**: `https://github.com/jitendragehlot446/blogtypingwire.in.git`
* **Primary Branch**: `main`
* **Local Workspace**: `d:\typingwire blogs`
* **Git Remote Configuration**:
  The remote `origin` is authenticated via GitHub PAT:
  ```bash
  git remote set-url origin https://jitendragehlot446:<YOUR_GITHUB_TOKEN>@github.com/jitendragehlot446/blogtypingwire.in.git
  ```
* **Push Command**:
  ```bash
  git add .
  git commit -m "your commit message"
  git push origin main
  ```

---

## 🚀 4. Deployment & Hosting Pipeline
* **Hosting Platform**: **Vercel**
* **Project Name on Vercel**: `blogtypingwire.in` (connected to `jitendragehlot446/blogtypingwire.in`)
* **Deployment Trigger**: Automatic on every `git push` to branch `main` (takes ~20-30 seconds).
* **Live Domains on Vercel**:
  * Primary Custom Subdomain: `blog.typingwire.in` (Active with Free SSL)
  * Default Vercel Subdomain: `blogtypingwirein.vercel.app`

---

## 🌐 5. DNS Configuration (Cloudflare)
The DNS for `typingwire.in` is managed on **Cloudflare**. The following records are active:
1. **CNAME Record**:
   * **Name**: `blog`
   * **Target**: `cname.vercel-dns.com`
   * **Proxy Status**: `DNS Only` (Grey Cloud ⚪)
2. **TXT Record (Vercel Ownership Verification)**:
   * **Name**: `_vercel`
   * **Content**: `vc-domain-verify=typingwire.in,...`
   * **Proxy Status**: `DNS Only` (Grey Cloud ⚪)

---

## 📁 6. Folder & File Structure

```text
d:\typingwire blogs\
├── public/
│   ├── favicon.jpg          # Official brand favicon (JPEG)
│   ├── logo.jpg             # Official brand logo (JPEG)
│   ├── robots.txt           # Crawler rules (Googlebot, GPTBot, ClaudeBot, PerplexityBot)
│   └── llms.txt             # AI contextual index document
├── src/
│   ├── content/
│   │   └── blog/            # 15 In-Depth Official Exam Guides (*.md)
│   │       ├── ssc-cgl-dest-typing-test-rules.md
│   │       ├── ssc-chsl-typing-test-rules.md
│   │       ├── rajasthan-high-court-ldc-typing-efficiency-rules.md
│   │       ├── rssb-rsmssb-ldc-typing-efficiency-test-rules.md
│   │       ├── allahabad-high-court-ro-aro-clerk-typing-rules.md
│   │       ├── patna-high-court-assistant-stenographer-typing-rules.md
│   │       ├── bombay-high-court-clerk-typist-typing-rules.md
│   │       ├── gujarat-high-court-computer-operator-typing-rules.md
│   │       ├── up-police-asi-computer-operator-typing-rules.md
│   │       ├── delhi-police-head-constable-typing-test-rules.md
│   │       ├── hindi-typing-exams-mangal-remington-inscript-guide.md
│   │       ├── kdph-to-wpm-speed-calculation-formula-guide.md
│   │       ├── 10-tips-to-increase-typing-speed.md
│   │       ├── court-steno-typing-rules.md
│   │       └── mechanical-keyboard-switch-guide.md
│   ├── components/
│   │   ├── BaseHead.astro   # SEO meta, OpenGraph, Twitter, Google Fonts (Inter + JetBrains Mono)
│   │   ├── Header.astro     # Sticky Swiss Minimalist navigation + logo
│   │   ├── Footer.astro     # Clean 3-group minimal footer + copyright & legal links
│   │   ├── BlogCard.astro   # Interactive article card with pastel badge
│   │   ├── FormattedDate.astro # Semantic <time> component
│   │   └── SchemaOrg.astro  # JSON-LD Schema (BlogPosting, FAQPage, BreadcrumbList)
│   ├── layouts/
│   │   ├── BaseLayout.astro # Master HTML wrapper with SEO head, header, and footer
│   │   └── BlogPostLayout.astro # Article reader layout with breadcrumbs, FAQs & CTA
│   ├── pages/
│   │   ├── index.astro      # Homepage with Hero, Category Pills, Featured & Grid
│   │   ├── about.astro      # About TypingWire, mission, and ecosystem connection
│   │   ├── contact.astro    # Contact and editorial support page
│   │   ├── privacy-policy.astro # Compliance privacy policy
│   │   ├── terms.astro      # Terms of service
│   │   ├── disclaimer.astro # Non-government exam disclaimer
│   │   ├── 404.astro        # 404 page
│   │   ├── rss.xml.ts       # Dynamic RSS endpoint
│   │   ├── blog/[...slug].astro # Dynamic post router
│   │   └── categories/[category].astro # Category archive router
│   ├── styles/
│   │   └── global.css       # Complete Swiss Minimalist design tokens
│   └── content.config.ts    # Astro v5 Content Collections schema
├── astro.config.mjs         # Site URL (https://blog.typingwire.in) & sitemap hook
├── package.json
└── tsconfig.json
```

---

## 🎨 7. Design System & CSS Tokens (`src/styles/global.css`)

### Color Palette (Swiss Minimalist):
* `--colors-canvas`: `#ffffff` (Clean White background)
* `--colors-primary`: `#000000` (High contrast text & headers)
* `--colors-surface-soft`: `#f5f5f7` (Apple-style subtle gray)
* `--colors-hairline`: `#e5e7eb` (Subtle dividers & card borders)
* `--colors-muted-text`: `#6b7280` (Secondary body text)

### Pastel Block Accents:
* `--colors-block-mint`: `#d2fff2` (CTA blocks / Speed test banners)
* `--colors-block-lilac`: `#eadeff` (Exam rules badges)
* `--colors-block-cream`: `#fff8e7` (Hardware / Warning notes)
* `--colors-block-coral`: `#ffdfd5` (Disclaimers & errors)
* `--colors-block-lime`: `#e2fb43` (Highlight tags)

### Typography:
* Body & Headlines: **`Inter`** (weights: 340, 500, 600, 700)
* Badges, Dates, Code: **`JetBrains Mono`**

---

## ✍️ 8. How to Add & Publish a New Blog Post

Create a `.md` file inside `src/content/blog/` (e.g. `src/content/blog/ssc-cgl-typing-rules.md`):

```markdown
---
title: "SSC CGL Typing Test Rules: Speed, Cutoff & Mistakes Allowed"
description: "Everything you need to know about the SSC CGL DEST typing test, speed requirement, error percentages, and Hindi vs English guidelines."
pubDate: 2026-08-16
category: "Exam Rules"
tags: ["ssc cgl", "dest", "typing test", "exam rules"]
author: "TypingWire Editorial Team"
featured: false
imageAlt: "SSC CGL typing test evaluation chart"
faqs:
  - question: "What is the qualifying speed for SSC CGL?"
    answer: "The required speed is 27 WPM (8000 Key Depressions per hour in 15 minutes) for English and 30 WPM for Hindi."
  - question: "Is Backspace allowed in SSC CGL typing test?"
    answer: "Yes, Backspace and arrow keys are fully functional during the 15-minute test."
---

## 1. Overview
Write your article here in Markdown...

## 2. Evaluation Criteria
| Category | Allowed Error % |
| :--- | :--- |
| UR / General | 5% |
| OBC / EWS | 7% |
| SC / ST | 7% |
```

---

## 💻 9. Development & Deployment Commands

```bash
# 1. Start Local Development Server (http://localhost:4321)
npm run dev

# 2. Build Static Production Bundle (Outputs to /dist)
npm run build

# 3. Preview Production Build Locally
npm run preview

# 4. Deploy to Live Website (Pushes to GitHub -> Triggers Vercel Auto-Deploy)
git add .
git commit -m "feat: publish new guide"
git push origin main
```
