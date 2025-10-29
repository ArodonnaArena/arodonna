# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project: Arodonna ICT Arena Website (Next.js 14 + TypeScript + Prisma + Tailwind)

Commands
- Install deps
  ```bash path=null start=null
  npm install
  ```
- Dev server (http://localhost:3000)
  ```bash path=null start=null
  npm run dev
  ```
- Build and start (production)
  ```bash path=null start=null
  npm run build
  npm run start
  ```
- Prisma client and schema
  ```bash path=null start=null
  # generate client
  npm run prisma:generate

  # create and apply a migration (interactive)
  npm run prisma:migrate

  # push schema without migration (useful early in dev)
  npm run db:push

  # open Prisma Studio
  npm run prisma:studio
  ```
- Database setup and seeding
  Note: package.json defines db:seed twice; the effective script is the last one (node scripts/setup-database.js).
  ```bash path=null start=null
  # create/update tables from schema + seed initial data
  npm run db:setup

  # just seed (uses scripts/setup-database.js)
  npm run db:seed
  ```
- Type-check (no ESLint configured)
  ```bash path=null start=null
  npx tsc --noEmit
  ```

API quick tests (requires ADMIN_KEY for mutating routes)
- Blog
  ```bash path=null start=null
  # list published posts
  curl http://localhost:3000/api/blog

  # list all (including unpublished)
  curl "http://localhost:3000/api/blog?all=1"

  # create a post
  curl -X POST http://localhost:3000/api/blog \
    -H "Content-Type: application/json" \
    -H "x-admin-key: $ADMIN_KEY" \
    -d '{"title":"Hello","slug":"hello","content":"# Hello"}'

  # update a post
  curl -X PUT http://localhost:3000/api/blog/hello \
    -H "Content-Type: application/json" \
    -H "x-admin-key: $ADMIN_KEY" \
    -d '{"published":true}'

  # delete a post
  curl -X DELETE http://localhost:3000/api/blog/hello \
    -H "x-admin-key: $ADMIN_KEY"
  ```
- Projects
  ```bash path=null start=null
  # list projects
  curl http://localhost:3000/api/projects

  # create a project
  curl -X POST http://localhost:3000/api/projects \
    -H "Content-Type: application/json" \
    -H "x-admin-key: $ADMIN_KEY" \
    -d '{"name":"Demo","description":"Desc","href":"https://example.com"}'

  # update/delete project
  curl -X PUT http://localhost:3000/api/projects/{id} -H "Content-Type: application/json" -H "x-admin-key: $ADMIN_KEY" -d '{"name":"New"}'
  curl -X DELETE http://localhost:3000/api/projects/{id} -H "x-admin-key: $ADMIN_KEY"
  ```

Environment configuration
- Local env template: .env.local.example
  - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO
  - ADMIN_KEY
  - DATABASE_URL (required for Prisma client to initialize)
- Example cloud env: .env.example (PostgreSQL/Supabase), includes DIRECT_URL.
- Important: schema.prisma uses provider = "postgresql". README mentions MySQL, but current schema/env templates are PostgreSQL-first. If you switch to MySQL, update prisma/schema.prisma provider and DATABASE_URL accordingly.

High-level architecture
- Framework: Next.js 14 App Router with server components by default.
  - Root layout in app/layout.tsx provides site chrome (header/footer) and imports app/globals.css.
  - Pages: app/page.tsx (home), app/projects/page.tsx, app/blog/page.tsx, app/blog/[slug]/page.tsx, app/about/page.tsx, app/contact/page.tsx, app/admin/page.tsx.
  - Dynamic rendering is explicitly enabled on key pages using export const dynamic = 'force-dynamic' to avoid static generation issues and ensure server-side data fetches.
- API layer: Route Handlers under app/api/*
  - Blog: app/api/blog/route.ts (GET list, POST create), app/api/blog/[slug]/route.ts (GET one published, PUT update, DELETE remove).
  - Projects: app/api/projects/route.ts (GET list, POST create), app/api/projects/[id]/route.ts (PUT, DELETE).
  - Simple admin gate: x-admin-key header or ?key= query must match process.env.ADMIN_KEY for mutating routes.
- Data layer: Prisma + thin repositories in lib/
  - lib/db.ts: safe PrismaClient singleton. Initializes only when DATABASE_URL is present.
  - lib/blog-db.ts, lib/projects-db.ts: CRUD helpers. Read operations return []/null with console warnings when no DB is available, letting the app render gracefully with sample data.
  - prisma/schema.prisma defines Project and BlogPost models. prisma/seed.mjs can seed projects from data/projects.json (if present). scripts/setup-database.js seeds both BlogPost and Project with sample content.
  - lib/projects.ts provides simple JSON-file helpers backing prisma/seed.mjs; not used at runtime.
- Styling and UI
  - Tailwind CSS with a custom brand theme (tailwind.config.ts) and additional animations/utilities. Content scanning paths include app/**/*.{ts,tsx,mdx} and components/**/*.{ts,tsx}.
  - Minimal component library: components/ui/button.tsx (uses tailwind-merge via lib/utils.ts cn helper), components/layout/PageHeader.tsx.
- Content/MDX
  - MDX is enabled via next.config.mjs (@next/mdx) and pageExtensions include md/mdx. Blog pages currently render Markdown from the database using react-markdown + remark-gfm, not MDX files.
- Images
  - next.config.mjs allows remote images from i.postimg.cc. Local images are served from public/.

Common flows
- First run (local, with Postgres)
  ```bash path=null start=null
  cp .env.local.example .env.local
  # set ADMIN_KEY and DATABASE_URL (PostgreSQL) in .env.local
  npm install
  npm run db:setup   # creates tables and seeds example data
  npm run dev
  ```
- Seed-only refresh during dev
  ```bash path=null start=null
  npm run db:seed
  ```
- Verify database visually
  ```bash path=null start=null
  npm run prisma:studio
  ```

Notes and gotchas
- If DATABASE_URL is unset, lib/db.ts exports a null Prisma client; list operations render with empty/sample data and print console warnings. Ensure DATABASE_URL is set for full functionality.
- The effective npm run db:seed uses scripts/setup-database.js due to duplicate keys in package.json; prefer npm run db:setup for tables + seeds.
- README lists MySQL; current schema + env templates target PostgreSQL. Align provider and URLs before running migrations.
- No lint or test scripts/config are present at this time.
