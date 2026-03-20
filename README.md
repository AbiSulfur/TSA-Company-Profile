# TSA Company Profile

This is a premium, modern, and multilingual Next.js web application built for **Tricatha Sempiternal Asia (TSA)**. It utilizes React, TailwindCSS, and Framer Motion to deliver a stunning and functional user experience.

## ✨ Key Features Developed

Here are the major feature additions and structural updates that have been implemented into the project:

- **Full Multilingual Support (EN / ID)**: 
  A custom, Context-based built-in i18n implementation (`/i18n/LanguageContext.tsx`) that persists the user's language preferences via `localStorage`. It translates content seamlessly and instantly via `t()` lookups mapped to comprehensive datasets in `i18n/dictionaries.ts`, avoiding unnecessary URL routing parameters for SEO safety.
  
- **Hierarchical Dropdown Navigation System**: 
  A deeply dynamic, completely responsive Header. It features robust nested multi-level Dropdown menus natively equipped with hover states for Desktop, and smooth animated Accordion sub-menus for Mobile users (covering complex logic like distinct tracking for Business Groups, Brands, and Career paths).
  
- **Dynamic Modular File Structure**: 
  Deprecated, rigid flat pages (`/about-us`, `/services`) were purged and replaced by a scalable 13-page nested structure matching the company's real-life divisions (e.g. `/business-group/event-organizer`, `/brands/dna-studio`). 
  These dynamically generated routes are bootstrapped by a highly reusable, beautifully styled `GenericPageLayout` component.
  
- **Responsive Micro-Animations**: 
  Integrated `framer-motion` to power scroll-reveals, seamless layout transitions, interactive carousels, and engaging hover effects across the entire platform.

- **EmailJS Form System**: 
  A fully integrated contact and survey form methodology utilizing `react-hook-form` to execute frontend client-side validation and securely transmit submission data directly to company inboxes using EmailJS.

## 📁 Core Directory Structure

- `/app`: The Next.js 14+ App Router directory. Contains the dynamic routing structure, centralized layouts, and page definitions.
- `/components`: A repository of reusable, modular UI logic (`Header`, `Footer`, `Button`, `SectionWrapper`, `GenericPageLayout`).
- `/i18n`: Houses the centralized language dictionaries and the global `LanguageProvider` wrapper.
- `/public`: Static assets, brand logos, Team profile shoots, and hero carousel banners.

## 🚀 Getting Started

First, install the required packages:

```bash
npm install
```

Start the development server with live Fast Refresh:

```bash
npm run dev
```

Build the application to test production optimizations and routing bounds:

```bash
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to experience the result.
