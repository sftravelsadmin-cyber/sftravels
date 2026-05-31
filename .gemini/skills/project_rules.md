# SF Travels - Agentic Skill & Rules

This file represents an **Agentic Skill** and developer rules for **SF Travels**. All future AI agents and sessions MUST read this file at the very start of a chat session.

---

## 🚦 1. MANDATORY FIRST STEP: Read Context
Whenever a new chat starts, the agent MUST immediately read the complete project context from [project_context.md](file:///e:/softwares/sftravels/project_context.md). 

---

## 🛑 2. Strict Commands & Deployment Rules
1. **NO Arbitrary Builds**: You should **NEVER** run the build command (`npm run build`) unless the user explicitly asks you to do so.
2. **NO Arbitrary Git Pushes**: You should **NEVER** push changes to GitHub (`git push`) unless the user specifically asks you to.
3. **Pre-Push Build Verification**: *Only* when the user explicitly asks you to push to GitHub, you **MUST** run the build command (`npm run build`) first to verify there are zero build-time syntax or import errors before pushing.

---

## ⚙️ 3. Execution Environment (PowerShell Windows)
To run local Node.js or npm commands (only when explicitly asked), you must prepend the portable local Node.js path to the environment PATH in PowerShell:
```powershell
$env:PATH = 'C:\Users\user2\node\node-v20.11.1-win-x64;' + $env:PATH
```

---

## 🎨 4. Premium Brand Rules & Tech Stack
- **Tech Stack**: Astro (v4) + React (hydration via `client:load`) + Vanilla CSS.
- **Tailwind CSS**: Do **NOT** use Tailwind CSS. Only use vanilla CSS variables scoped in `src/styles/global.css`.
- **Theme**: Luxury Dark Navy Blue (`#050d1a`) & Soft Emerald/Gold (`#10b981`).
- **Typography**: `Outfit` (Headings) and `Inter` (Body).
- **Responsive & Premium**: Follow rich aesthetics, smooth animations, glassmorphism (`.glass-card`), and sub-second performance.
