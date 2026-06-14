# SF Travels - Project Development & Resume Context

> **IMPORTANT FOR NEW CHAT AGENTS**: Read this file first before doing any research or starting work. This file contains the complete, up-to-date roadmap, tech stack details, active brand rules, and environment workarounds for this workspace.

---

## 1. Project Overview & Brand Rules
* **Project Name**: SF Travels (Smooth Ride On Time)
* **Client**: Gagan (Travel Agency owner)
* **Goal**: Build a high-converting, premium travel booking and lead-generation website.
* **Tech Stack**: Astro (v4) + React (for high-interactivity dynamic elements like forms/modals) + Vanilla CSS (No TailwindCSS unless explicitly requested).
* **Hosting & Forms**: Netlify + Netlify Forms (`data-netlify="true"`) for lead collection.
* **Design Theme**: Elegant **Dark Navy Blue & Gold** color scheme with custom glassmorphism.
  * *Typography*: Google Fonts **Outfit** (Headings) and **Inter** (Body text).
  * *Colors (HSL scoped in `global.css`)*: Scoped variables in `src/styles/global.css` (e.g., `--gold-base`, `--navy-base`, `--glass-bg`).
* **Slab Rates**: Standard corporate rate card:
  * 0–10 km: ₹700
  * 11–20 km: ₹800
  * 21–30 km: ₹900
  * 31+ km: ₹1,000
  * Escort charges: 1.5x Slab Rate.

---

## 2. Special Environment Setup (Windows Node Workaround)
Because of user profile permissions constraints on this machine (running under user `user2` but main dev account is `Deepak`), the default global node commands may fail with permission or symlink errors. 
A **portable local Node.js v20.11.1** environment has been set up to resolve all dependencies:
* **Node Binary Path**: `C:\Users\user2\node\node-v20.11.1-win-x64\node.exe`
* **Npm Binary Path**: `C:\Users\user2\node\node-v20.11.1-win-x64\npm.cmd`
* **Execution Environment Tip**: If running sub-shells (like for `esbuild` during `npm install`), make sure the local node folder is temporarily or permanently prepended to the environment path inside PowerShell:
  `$env:PATH = 'C:\Users\user2\node\node-v20.11.1-win-x64;' + $env:PATH`
* **Local Dev Server**: To run the project locally, run `npm run dev` in `e:\softwares\sftravels`.

---

## 3. GitHub & Deployment Setup
* **GitHub Repository**: Linked and pushed to `https://github.com/webdev-deepak18/sftravels-in.git` on the `main` branch.
* **To Push Changes**: Use `git add .`, `git commit -m "commit message"`, and `git push origin main`.
* **Staging/Production Host**: Netlify is connected to the GitHub repository. It compiles automatically via `npm run build` using the publish directory `dist`.

---

## 4. Completed Work So Far
1. **Phase 1: Project Foundations & Layouts (100% Done)**
   * Astro configured with React islands integration.
   * `src/styles/global.css` written with color tokens, glassmorphism utilities, and premium gold button styles.
   * `src/layouts/Layout.astro` completed with Google fonts, responsive configurations, and a clean viewport container.
   * `src/components/Header.astro` styled with premium navy glass-blur, clean vector gold monogram logo, and dropdown hover states.
   * `src/components/Footer.astro` filled with contact links, site structure, PWD address, and active hotlines.
2. **Phase 2: Landing Page & Hero Section (100% Done)**
   * `src/pages/index.astro` fully created.
   * Premium responsive Hero banner with active slider graphics and high-trust taglines.
   * Quick Booking Tab card built (with Cab Selection, Flight Number, Date/Time, and hidden form integration hooks).
   * Trust pillars, stats counters, and highlights designed in vanilla CSS.
3. **Content Copy Architecture (100% Done)**: All custom, high-trust, optimized copy written in markdown at `e:\softwares\sftravels\content/`:
   * `content/navigation.md` (Sitemap & Page flows)
   * `content/01_home.md` (Home copy)
   * `content/02_about.md` (Mission, Values, and History)
   * `content/03_services/` (`airport_taxi.md`, `corporate_services.md`, `local_car_rental.md`, `outstation_cabs.md`)
   * `content/04_more_services/` (`bus_rental.md`, `tour_packages.md`, `wedding_transport.md`)
   * `content/05_driver_vacancy.md` (Careers)
   * `content/06_contact_us.md` (Address, Maps, Contact channels)
   * `content/07_blog.md` (Articles, travel guides)

---

## 5. Next Steps for Development (Resume Here!)
When resuming the project, please start with **Phase 3** of the roadmap:

### Phase 3: Interactive Booking Form & Modal
* **Widget Features**: Create floating quick-contact widgets (WhatsApp direct tap and direct call buttons) for the bottom right of the screen.
* **Interactive React Modal**:
  * Build a dynamic overlay in `src/components/BookingModal.jsx` (loaded with `client:load` for hydration).
  * The modal should load with a comprehensive multi-step form when a user clicks any "Book Now" buttons on the landing page.
  * Inputs: Trip Type (Airport, Local, Outstation), Vehicle Choice, Flight No. (optional), Pick-up Address, Drop-off Address, Date, Time, Full Name, Email, and Phone.
  * Integrate Netlify Forms attributes (`data-netlify="true"`, hidden inputs for Astro compatibility) to capture submissions.
  * Add a secondary trigger opening a direct WhatsApp API message containing prefilled booking details so Gagan gets an instant chat alert!

### Phase 4: Dynamic Services & Fleet Grids
* Create a central fleet database in `src/data/fleet.js`.
* Create reusable `<VehicleCard />` and build services pages using markdown content under `content/03_services/` and `content/04_more_services/`.

### Phase 5: Dynamic Details Template
* Create `src/pages/fleet/[id].astro` for individual vehicle spec details.

### Phase 6: Static Pages & Blog
* Implement static pages for About, Careers (Driver Vacancy), Contact, and Blog layouts.
