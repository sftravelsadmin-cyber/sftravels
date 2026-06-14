# Implementation Plan: SF Travels (Smooth Ride On Time)

This plan outlines a highly efficient, chunk-by-chunk strategy to build a modern, high-performance, and premium website for **SF Travels** in **Astro**. 

Inspired by Gagan's custom flyer, we are shifting the brand colors to a **Luxury Dark Navy Blue & Gold** theme.

---

## 🎨 1. Brand Identity & Design System

To match the flyer design, we will establish a premium custom color palette in our CSS variables.

### Custom Palette (CSS variables in `src/styles/global.css`)
*   **Primary Background**: Deep Navy Blue (`#0b1a30` / HSL `216, 62%, 11%`)
*   **Secondary Background**: Slate Blue (`#132743` / HSL `216, 55%, 17%`)
*   **Brand Accent (Gold)**: Metallic Amber Gold (`#cda043` / HSL `41, 58%, 53%` and HSL `43, 85%, 60%` for gradients)
*   **Body Text**: Crisp White / Warm Gray (`#f3f4f6`)
*   **Logo & Badges**: Golden circles and gold-embossed labels.

### Dummy Logo Design
We will build a high-fidelity inline SVG component for the **SF Travels Logo**:
*   A golden outer ring with a stylish, double-lined **"SF"** monogram inside.
*   Gold text representing **SF TRAVELS** and the tagline **"Smooth Ride On Time"**.

---

## 🛠️ 2. Chunk-by-Chunk Roadmap

To save token usage and allow for collaborative reviews, we will build this website page-by-page, starting from the foundation. **No build processes or file creation will begin until you approve this plan.**

### 📍 Phase 1: Foundations & Shared Layouts
*   **Goal**: Setup the workspace, configure the theme variables, and create modular outer frames.
*   **Proposed Files**:
    *   `src/styles/global.css`: Core typography (using premium Outfit/Inter google fonts) and HSL color variables.
    *   `src/layouts/Layout.astro`: Responsive HTML skeleton, custom SVG metadata, dynamic viewport settings, and floating Call/WhatsApp widgets.
    *   `src/components/Header.astro`: Premium responsive Navbar featuring dark blue backdrop-blur (glassmorphism), gold hover animations, and a mobile slide-out menu.
    *   `src/components/Footer.astro`: Sleek footer with gold borders, quick links, active phone number (`9187232348`), and corporate credentials.

### 📍 Phase 2: Landing Page & Hero Section (`index.astro`)
*   **Goal**: Translate Gagan's flyer aesthetic into a stunning homepage landing screen.
*   **Key Sections**:
    *   **Hero Unit**: Immersive dark blue-to-gold gradient backdrop featuring corporate fleet imagery, highlighting "Smooth Ride On Time."
    *   **Interactive Search/Enquiry Card**: Allows users to select services (Outstation, Airport Taxi, Corporate Duty, Local Hire) and get immediate quotes or submit inquiries.
    *   **Trust Pillars Grid**: Clean cards showcasing driver safety, 24/7 support, and on-time performance.

### 📍 Phase 3: Interactive Booking Form & Modal
*   **Goal**: Integrate high-converting booking widgets.
*   **Components**:
    *   `src/components/BookingModal.astro` + `client-side JS`: Lightweight overlay triggered when users click "Book Now" on any package.
    *   **Netlify Forms Integration**: Forms will capture names, numbers, travel dates, and vehicle preferences, uploading them straight to Netlify Leads.
    *   **WhatsApp API shortcut**: Auto-formats details into a WhatsApp draft for immediate booking.

### 📍 Phase 4: Dynamic Services & Fleet Grids
*   **Goal**: Modularize the pages so we don't repeat HTML.
*   **Strategy**:
    *   We will store all vehicle categories (Sedan, SUVs, Tempo Travellers, Force Urbania, Buses) in a centralized data file: `src/data/fleet.js`.
    *   Create a reusable `<VehicleCard />` component displaying features (seats, AC, luggage capacity) and golden pricing details.
    *   Implement `services/airport-taxi.astro` and a dedicated corporate duty catalog featuring the **Slab Rate Card** shown in Gagan's flyer.

### 📍 Phase 5: Dynamic Details Template (`fleet/[id].astro`)
*   **Goal**: Build a dynamic sub-page template for every vehicle category (matching `details.html`).
*   **Structure**:
    *   High-fidelity image carousel/grid.
    *   Detailed specifications tables.
    *   Sticky golden booking panel.

### 📍 Phase 6: Career & Corporate Support Pages
*   **Goal**: Complete support routes.
*   **Pages**:
    *   `about.astro`: The story of SF Travels, Mission, and Core Values.
    *   `driver-vacancy.astro`: Driver careers page featuring an application form (Netlify-enabled).
    *   `contact.astro`: Full details with touch-to-call numbers and inquiry grids.
    *   `blog/`: Reusable high-trust travel tips and local guides.

---

## 📋 3. Slab Rates Integration (Corporate Duty)

We will incorporate Gagan's custom **Slab Rate Card** in the corporate booking and services section:
*   **0-10 kms**: ₹700
*   **11-20 kms**: ₹800
*   **21-30 kms**: ₹900
*   **31+ kms**: ₹1,000
*   *Escort Charge*: 1.5 as per Slab Rate

---

## 🚦 4. Verification & QA Plan

*   **Build Integrity**: Compile standard builds locally using `npm run build` to verify there are zero build-time syntax or routing errors.
*   **Form Integrity**: Ensure all lead forms compile with identical attribute signatures (`name="booking-form" data-netlify="true"`).
*   **Performance Audits**: Ensure image placeholders and styles enforce sub-second load times.

---

### 💬 Ready to Brainstorm?
Let me know if this implementation strategy, HSL color blueprint, and roadmap match your expectations! Once you give the explicit green light, we will initialize the workspace and tackle Phase 1.
