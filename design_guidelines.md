# Design Guidelines: Saamya Gupta Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Linear's typography system and modern developer portfolios (Vercel, Stripe careers) with a tech-forward aesthetic suitable for AI/ML specialization.

**Core Principle**: Professional, data-driven visual language that emphasizes expertise while maintaining approachability.

---

## Typography System

**Font Families** (via Google Fonts):
- Primary: 'Inter' (weights: 400, 500, 600, 700)
- Accent: 'JetBrains Mono' for code snippets and technical callouts

**Hierarchy**:
- Hero Name: text-5xl md:text-7xl, font-bold, tracking-tight
- Hero Subtitle: text-xl md:text-2xl, font-medium
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Project Titles: text-lg md:text-xl, font-semibold
- Body Text: text-base, leading-relaxed
- Technical Labels: text-sm, font-mono (JetBrains Mono)

---

## Layout System

**Spacing Scale**: Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Container gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Element spacing: space-y-4 for lists, mb-6 for section breaks

**Container Strategy**:
- Max width: max-w-6xl mx-auto
- Side padding: px-6 md:px-8
- Full-width sections with inner constraints

---

## Page Structure & Sections

### 1. Hero Section (100vh)
- Full viewport height with centered content
- Name, title ("AI and Data Science Engineer"), professional summary (3-4 lines from resume)
- Contact CTAs: Email, LinkedIn, Phone (icon + text buttons, horizontal layout)
- Background: Subtle grid pattern overlay with gradient treatment
- **Hero Image**: Large professional headshot or abstract AI/tech visualization (right side on desktop, subtle opacity)

### 2. About Section
- Two-column layout (lg:grid-cols-2)
- Left: Expanded professional summary with key achievements
- Right: Quick stats cards (Years Experience, Projects Completed, Skills Mastered) in 2x2 grid

### 3. Experience Section
- Timeline design with connector lines
- Each role: Company logo placeholder, title, dates, location
- Expandable/collapsible bullet points (default: show first 3, expand for all)
- Internship experiences in condensed cards below main experience

### 4. Projects Showcase (Featured)
- Masonry/grid layout: grid-cols-1 md:grid-cols-2 gap-6
- Priority projects in larger cards:
  - Agentic AI Project 1 (LangGraph)
  - Agentic AI Project 2 (OpenAI SDK)
  - RAG Research Assistant
  - Vulnerability Scanner
- Each card: Title, tech stack pills, description (2-3 lines), "View Details" hover state
- Tech stack pills use font-mono, text-xs

### 5. Skills Section
- Six-column grid on desktop (grid-cols-2 md:grid-cols-3 lg:grid-cols-6)
- Categories: Programming, Data Analytics, ML/AI, Generative AI, Database, Soft Skills
- Each category: Icon (from Heroicons), title, bulleted skill list
- Compact card design with subtle border

### 6. Education Timeline
- Horizontal timeline on desktop, vertical on mobile
- Three nodes: B.Tech, Class XII, Class X
- Each node: Institution, degree/grade, percentage/CGPA, year
- Connector line between nodes

### 7. Interests/Extra-Curricular (Optional Enhancement)
- Four-column icon grid: Video Editing, Arts, Sports, Gaming
- Small cards with icon + label
- Aesthetic Co-ordinator role highlighted separately

### 8. Footer/Contact
- Two-column layout
- Left: "Let's Build Together" heading, brief CTA text, download resume button
- Right: Contact methods (email, phone, LinkedIn) with icons
- Bottom: Copyright, social links

---

## Component Library

**Buttons**:
- Primary CTA: px-8 py-3, rounded-lg, font-semibold, with right arrow icon
- Secondary: px-6 py-2, border-2, rounded-lg
- Icon buttons: p-3, rounded-full
- Buttons on images: backdrop-blur-md with semi-transparent background (NO hover/active states as Button handles internally)

**Cards**:
- Default: rounded-xl, border, p-6, backdrop-blur-sm
- Project cards: rounded-2xl, p-8, subtle shadow
- Skill cards: rounded-lg, p-4, compact spacing

**Tech Stack Pills**:
- inline-flex, px-3 py-1, rounded-full, text-xs, font-mono, border

**Icons**: Heroicons (outline style for most, solid for emphasis)

**Navigation**:
- Fixed top nav: backdrop-blur-lg, py-4
- Logo/name left, nav links center, CTA button right
- Mobile: Hamburger menu with slide-in drawer

---

## Animations & Interactions

**Minimal, purposeful animations**:
- Scroll-triggered fade-up for section entries (once)
- Smooth scroll for anchor links
- Hover scale (1.02) on project cards
- Subtle glow effect on primary CTAs on hover
- No parallax, no excessive motion

---

## Images

**Hero Section**: Professional headshot or abstract AI visualization (particles, neural network aesthetic) - positioned right 40% of hero on desktop, full-width on mobile with text overlay

**Section Backgrounds**: Subtle geometric patterns or grid overlays where appropriate (low opacity)

**No other imagery required** - focus on typography and data presentation

---

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts)