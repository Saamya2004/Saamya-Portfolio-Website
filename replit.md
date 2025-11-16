# Saamya Gupta Portfolio

## Overview

This is a modern, single-page portfolio website for Saamya Gupta, an AI and Data Science Engineer. The application showcases professional experience, projects, skills, and contact information with a tech-forward aesthetic inspired by Linear's design system and modern developer portfolios (Vercel, Stripe).

The portfolio emphasizes expertise in LLM-integrated automation, multi-agent systems (LANGGRAPH, OpenAI Agentic SDK), and data-driven analytics through a clean, professional visual language.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, providing fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application with home and 404 routes)
- **React Query (@tanstack/react-query)** for state management and data fetching with built-in caching

**UI Component Library**
- **shadcn/ui** component system built on Radix UI primitives, configured in "new-york" style
- Comprehensive set of accessible, customizable components (buttons, cards, dialogs, forms, navigation, etc.)
- Component aliases configured for clean imports: `@/components`, `@/lib`, `@/hooks`

**Styling System**
- **Tailwind CSS** for utility-first styling with custom design tokens
- Custom color system using HSL values with CSS variables for theme support
- Typography system using Inter (primary) and JetBrains Mono (code/technical elements) from Google Fonts
- Design guidelines emphasizing professional, data-driven visual language with specific spacing scales and hierarchy

**Design Tokens & Theme**
- Neutral base color scheme with primary accent color (cyan/turquoise: `hsl(195 85% 42%)`)
- Dark mode support via class-based theme switching
- Custom border radiuses, shadows, and elevation system for depth
- Responsive breakpoints following Tailwind conventions (mobile-first)

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with TypeScript
- ESM module system throughout the application
- Custom middleware for request logging and JSON response capture
- Development mode with hot reload via tsx

**API Structure**
- RESTful endpoints under `/api` prefix
- Resume download endpoint: `GET /api/resume/download` serving PDF from attached_assets
- Static file serving for production builds
- Session management infrastructure (connect-pg-simple) for future authentication needs

**Development vs Production**
- Development: Vite dev server integrated as Express middleware for HMR
- Production: Pre-built static assets served from `dist/public`
- Environment-aware configuration via `NODE_ENV`

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL with Neon serverless adapter
- Schema location: `shared/schema.ts` with migrations in `./migrations`
- Type-safe schema definitions with Zod validation via drizzle-zod
- Database URL required via environment variable (`DATABASE_URL`)

**Current Schema**
- Users table with UUID primary keys, username, and password fields
- Prepared for authentication/authorization implementation

**In-Memory Storage Fallback**
- `MemStorage` class providing IStorage interface implementation
- Used for development/testing without database dependency
- Supports basic CRUD operations for users

### External Dependencies

**Third-Party UI Libraries**
- **Radix UI** primitives for accessible, unstyled component foundations (accordion, dialog, dropdown, select, tabs, toast, tooltip, etc.)
- **Embla Carousel** for carousel/slider functionality
- **cmdk** for command palette interface
- **vaul** for drawer components
- **Lucide React** for icon system

**Utilities & Helpers**
- **class-variance-authority (cva)** for component variant management
- **clsx** and **tailwind-merge** for conditional className composition
- **date-fns** for date manipulation and formatting
- **React Hook Form** with Zod resolvers for form validation

**Build & Development Tools**
- **esbuild** for server-side bundling in production
- **Replit-specific plugins** for runtime error overlays, cartographer, and dev banners
- **PostCSS** with Autoprefixer for CSS processing
- **TypeScript** with strict mode enabled

**Database & ORM**
- **@neondatabase/serverless** for PostgreSQL connectivity
- **Drizzle ORM** for type-safe database queries
- **drizzle-kit** for schema migrations and database push operations

**Fonts & Assets**
- Google Fonts (Inter, JetBrains Mono) loaded via preconnect for performance
- Static assets stored in `attached_assets` directory
- Generated AI/tech visualization images for hero section

### Build & Deployment

**Scripts**
- `dev`: Development server with tsx watch mode
- `build`: Vite build for client + esbuild bundle for server
- `start`: Production server from compiled dist
- `db:push`: Push Drizzle schema changes to database

**Output Structure**
- Client build: `dist/public`
- Server build: `dist/index.js`
- TypeScript compilation with incremental builds and build info caching