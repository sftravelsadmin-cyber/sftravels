/**
 * SF Travels — Color Migration V2
 * New palette: Deep Indigo (#1E2D5A) + Warm Amber/Saffron (#D97706) + Ivory White
 * Replaces all old emerald-green / neon-green / blue brand colors
 */
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, 'src');

// Ordered replacement pairs — most specific first to avoid partial replacements
const replacements = [

  // ── Tailwind Gradient/BG Classes ──────────────────────────────────

  // Remove duplicate cdn links (safety net)
  [/https:\/\/cdn\.tailwindcss\.com[^\s"']*/g, 'https://cdn.tailwindcss.com'],

  // Old emerald+blue gradient — replace with indigo gradient
  ['from-[#10b981] to-[#2563eb]',    'from-[#1E2D5A] to-[#2d4080]'],
  ['from-[#10b981] to-[#1d4ed8]',    'from-[#1E2D5A] to-[#2d4080]'],
  ['from-[#059669] to-[#1d4ed8]',    'from-[#1E2D5A] to-[#2d4080]'],
  ['from-emerald-500 to-blue-600',    'from-[#1E2D5A] to-[#2d4080]'],

  // Indigo-to-Amber gradient (for CTA hovers / accent gradients)
  ['from-[#2563eb] to-[#10b981]',    'from-[#D97706] to-[#b45309]'],

  // bg / text / border — emerald to indigo primary
  ['bg-emerald-600',                  'bg-[#1E2D5A]'],
  ['bg-emerald-500',                  'bg-[#1E2D5A]'],
  ['bg-emerald-400',                  'bg-[#2d4080]'],
  ['bg-emerald-100',                  'bg-[#fffbeb]'],
  ['text-emerald-600',                'text-[#D97706]'],
  ['text-emerald-500',                'text-[#D97706]'],
  ['text-emerald-400',                'text-[#fbbf24]'],
  ['border-emerald-600',              'border-[#D97706]'],
  ['border-emerald-500',              'border-[#D97706]'],
  ['border-emerald-400',              'border-[#fbbf24]'],
  ['ring-emerald-500',                'ring-[#D97706]'],
  ['hover:bg-emerald-700',            'hover:bg-[#151f3f]'],
  ['hover:bg-emerald-600',            'hover:bg-[#151f3f]'],
  ['hover:text-emerald-600',          'hover:text-[#D97706]'],
  ['hover:border-emerald-600',        'hover:border-[#D97706]'],
  ['focus:ring-emerald-500',          'focus:ring-[#D97706]'],

  // Hex emerald references
  ['#10b981',  '#1E2D5A'],
  ['#059669',  '#151f3f'],
  ['#34d399',  '#D97706'],
  ['#6ee7b7',  '#fbbf24'],
  ['#d1fae5',  '#fffbeb'],

  // Old blue CTA references → Indigo
  ['bg-blue-600',    'bg-[#1E2D5A]'],
  ['bg-blue-700',    'bg-[#151f3f]'],
  ['bg-blue-500',    'bg-[#2d4080]'],
  ['text-blue-600',  'text-[#1E2D5A]'],
  ['text-blue-700',  'text-[#151f3f]'],
  ['text-blue-500',  'text-[#2d4080]'],
  ['border-blue-600','border-[#1E2D5A]'],
  ['hover:bg-blue-700', 'hover:bg-[#151f3f]'],
  ['focus:ring-blue-500', 'focus:ring-[#1E2D5A]'],

  // Hex blue references → indigo
  ['#2563eb',  '#1E2D5A'],
  ['#1d4ed8',  '#151f3f'],
  ['#3b82f6',  '#2d4080'],
  ['#60a5fa',  '#6b7dd0'],

  // focus:ring for form inputs
  ['focus:ring-[#10b981]',  'focus:ring-[#D97706]'],
  ['focus:ring-[#2563eb]',  'focus:ring-[#1E2D5A]'],

  // Hover gradients for map / utility buttons
  ['hover:from-[#10b981]',  'hover:from-[#1E2D5A]'],
  ['hover:to-[#2563eb]',    'hover:to-[#2d4080]'],

  // Old orange/gold references (neon gold was rejected) — keep subtle amber only
  ['#c5a85c',  '#D97706'],
  ['#ebdcb9',  '#fef3c7'],
  ['#aa8439',  '#b45309'],

  // Neon green (old legacy)
  ['#00ff88',  '#D97706'],
  ['#00cc6e',  '#b45309'],
  ['#00ff88/20', 'rgba(217,119,6,0.15)'],

  // Brand green CSS variables in inline styles
  ['var(--brand-green)',        'var(--primary)'],
  ['var(--brand-green-hover)',  'var(--primary-dark)'],
  ['var(--brand-blue)',         'var(--primary)'],
  ['var(--brand-blue-hover)',   'var(--primary-dark)'],
  ['var(--text-white)',         'var(--text-heading)'],
  ['var(--text-light)',         'var(--text-body)'],
  ['var(--brand-gold)',         'var(--accent)'],
  ['var(--brand-gold-dark)',    'var(--accent-dark)'],
  ['var(--brand-gold-light)',   'var(--accent-light)'],
];

function migrateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [from, to] of replacements) {
    if (!from || !to) continue;
    if (from instanceof RegExp) {
      const newContent = content.replace(from, to);
      if (newContent !== content) { content = newContent; changed = true; }
    } else {
      if (content.includes(from)) {
        content = content.split(from).join(to);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Updated: ${path.relative(__dirname, filePath)}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(full);
    } else if (['.astro', '.html', '.css', '.js', '.ts'].includes(path.extname(entry.name))) {
      migrateFile(full);
    }
  }
}

console.log('🎨 SF Travels — Color Migration V2 (Indigo + Amber)\n');
walkDir(rootDir);
console.log('\n✅ Migration complete!');
