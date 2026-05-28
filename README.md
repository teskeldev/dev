# TESKEL — Final Cursor-Style Web SaaS Product Specification

> **Status:** Final UI/UX + Fullstack Product Spec  
> **Product Type:** SaaS Web App, cloud-first, browser-based developer workspace  
> **Primary Design Direction:** Premium light-mode developer tool inspired by Cursor.com, Linear, Vercel, Raycast, GitHub Codespaces  
> **Important:** Use Cursor.com as quality benchmark, not as something to copy 1:1. Teskel must have its own product identity: all-in-one workspace + installable package marketplace.

---

## 0. Final Product Definition

**Teskel** is a cloud-first **all-in-one developer workspace and marketplace** where developers can run projects, edit code, open terminals, preview apps, write notes, install packages, use AI agents, and sell reusable developer workflows.

Teskel is **not a desktop app** and not just a marketplace. Teskel is a **web SaaS workspace** with a package ecosystem.

Final positioning:

> **Teskel is the all-in-one web workspace where developers build projects, install AI-ready workflows, and sell reusable developer packages.**

Core product formula:

```txt
Teskel = Web Workspace + Cloud Runtime + Code Editor + Terminal + Preview + AI Agents + Packages + Marketplace + Registry + Teams
```

Primary user promise:

> **Open a project in the browser, restore everything, install the right workflow, and build faster with AI context.**

Primary tagline:

> **The workspace that remembers how you build.**

Alternative headline for marketing:

> **The all-in-one workspace for developers and AI agents.**

---

## 1. Cursor-Style Product Reference

Teskel should feel as polished as Cursor.com, but it must not be a clone.

### 1.1 What to Learn From Cursor

Use Cursor as a quality benchmark for:

- Clean premium developer-tool UI
- Large confident hero typography
- Minimal navigation
- Product-first messaging
- Interactive product preview
- Strong AI agent narrative
- Code/editor interface as hero visual
- Calm, high-contrast, modern visual hierarchy
- Clear CTA structure
- Developer-first copywriting
- Fast perceived performance
- Polished micro-interactions

### 1.2 What Teskel Should Do Differently

Cursor focuses on AI coding inside an editor/agent experience. Teskel focuses on a broader **browser workspace + package economy**.

Teskel must emphasize:

- Browser-based all-in-one workspace
- Cloud terminal
- Web editor
- Preview panel
- Notes and project memory
- AI assistant and agents
- Installable packages
- Marketplace for developer assets
- Creator economy
- Team/private package registry

### 1.3 Visual Principle

Cursor-like does **not** mean dark cyber UI. For Teskel, use:

- Light-first UI
- White and soft gray backgrounds
- Minimal borders
- Clean cards
- Elegant shadows
- Subtle brand accent
- Workspace mockups that look functional and real
- Developer density without visual clutter

---

## 2. Product Modules

All modules use the **Teskel** brand.

| Module | Description |
|---|---|
| **Teskel Workspace** | Main browser workspace for projects, terminal, editor, preview, notes, AI, packages |
| **Teskel Runtime** | Cloud container/session runtime for terminal, preview, commands, recipes |
| **Teskel Packages** | Installable developer assets: skills, agents, templates, recipes, UI kits, docs, automation |
| **Teskel Marketplace** | Public store for free/paid packages |
| **Teskel Registry** | Publish/install/versioning backend for packages |
| **Teskel AI** | Workspace assistant, AI agents, package adaptation, project context |
| **Teskel Creator** | Creator dashboard, package publishing, analytics, payouts |
| **Teskel Teams** | Shared workspace, members, private packages, internal workflows |
| **Teskel Enterprise** | SSO, audit, private registry, policy control, compliance |
| **Teskel CLI** | Optional command-line interface for publish/install/sync |

---

## 3. User Personas

### 3.1 Developer / Power User

Wants:

- One browser workspace for project work
- Terminal + editor + preview in one layout
- Project memory and restore
- AI assistant with real context
- Packages that accelerate setup, debugging, review, testing

Pays for:

- Pro workspace
- AI usage
- Premium packages

### 3.2 Indie Hacker / SaaS Builder

Wants:

- SaaS starters
- Stripe/Supabase/Vercel packages
- Landing page kits
- Templates and recipes
- Fast project launch

Pays for:

- Project templates
- Integration packs
- UI kits
- Pro subscription

### 3.3 AI Coding User

Wants:

- `CLAUDE.md`, `AGENTS.md`, Cursor rules, Copilot instructions
- Prompt/workflow packs
- AI agents
- Agent safety and approval
- Project-aware context

Pays for:

- Skill packs
- Agent packs
- AI workspace features

### 3.4 Creator / Expert Developer

Wants:

- Sell reusable workflows
- Publish package versions
- Get analytics and revenue
- Build reputation

Pays through:

- Marketplace revenue split
- Creator tooling later

### 3.5 Engineering Team

Wants:

- Shared team workspaces
- Internal package registry
- Onboarding workflows
- Standard engineering rules
- Audit logs
- Private marketplace

Pays for:

- Team subscription
- Enterprise plan

---

## 4. Core Product Narrative

Developer work is fragmented across terminals, editors, browser previews, notes, AI chats, rules files, deployment scripts, and docs.

Teskel brings these into one browser-based workspace:

1. **Workspace**: run terminal, edit code, preview app, take notes, restore sessions.
2. **AI Context**: assistant understands files, terminal history, packages, notes, logs, and snapshots.
3. **Packages**: install workflows, agents, templates, UI kits, automation, runbooks, and rules.
4. **Marketplace**: buy, sell, review, and update packages.
5. **Teams**: share internal packages and workspaces.

The key sentence:

> **Teskel turns developer workflows into installable products.**

---

## 5. Visual Identity

### 5.1 Design Direction

Teskel should look like a premium AI developer SaaS:

- Light mode first
- Calm white/gray surfaces
- Crisp typography
- Minimalist navigation
- Product UI in the hero
- Functional mockups, not decorative screenshots
- Elegant cards
- Subtle motion
- Clear CTA hierarchy
- Workspace feeling, not generic dashboard

### 5.2 Avoid

Do not use:

- Default dark full-page background
- Neon cyberpunk UI
- Heavy glow effects
- Overly colorful gradient headlines
- Generic admin dashboard layout
- Terminal-only impression
- Cluttered marketing sections
- Low-quality icon grids
- Over-rounded toy-like cards

### 5.3 Design System Colors

Use this as the primary light palette:

```ts
export const teskelColors = {
  background: "#FFFFFF",
  backgroundSoft: "#F7F7F8",
  backgroundMuted: "#F3F4F6",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",
  surfaceSubtle: "#FAFAFA",
  border: "#E5E7EB",
  borderSoft: "#EEF0F3",
  borderStrong: "#D4D4D8",
  textPrimary: "#09090B",
  textSecondary: "#52525B",
  textMuted: "#71717A",
  textFaint: "#A1A1AA",
  accent: "#5B5BD6",
  accentHover: "#4F46E5",
  accentSoft: "#EEF2FF",
  purple: "#7C3AED",
  blue: "#2563EB",
  cyan: "#0891B2",
  green: "#16A34A",
  amber: "#D97706",
  red: "#DC2626",
  terminal: "#0A0A0A",
  terminalText: "#E5E7EB"
}
```

### 5.4 Theme Rule

The product is light mode by default. The terminal panel may remain dark because terminal users expect it, but the surrounding workspace shell remains light.

### 5.5 Typography

Recommended:

- Font: `Inter`, `Geist Sans`, or `Satoshi`
- Mono font: `JetBrains Mono`, `Geist Mono`, or `Fira Code`

Type scale:

```txt
Display: 64–80px / 0.95 line-height / -0.05em tracking
Hero: 56–72px / 1.0 line-height / -0.045em tracking
H1: 44–56px
H2: 32–44px
H3: 24–32px
Body Large: 18px / 1.7
Body: 15–16px / 1.6
Small: 13–14px
Tiny: 11–12px
```

Typography style:

- Big, confident, clean headings
- Very short paragraphs
- Avoid buzzword-heavy copy
- Use developer-native language
- Use precise labels in UI

### 5.6 Spacing

Use a consistent 4px/8px grid.

```txt
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
4xl: 64px
5xl: 96px
```

### 5.7 Border Radius

```txt
Small controls: 8px
Cards: 16px
Large panels: 20px
Hero mockup: 24px
Pills: 999px
```

### 5.8 Shadows

Use clean soft shadows:

```css
--shadow-card: 0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.05);
--shadow-float: 0 12px 40px rgba(15,23,42,.10);
--shadow-workspace: 0 24px 80px rgba(15,23,42,.14);
```

### 5.9 Motion

Use subtle motion only:

- Section fade-up on scroll
- Card hover lift: `translateY(-2px)`
- Button hover: slight brightness/scale
- Panels: soft shadow on focus
- Command palette: scale/fade
- AI chat: gentle message transition
- Package cards: hover border accent

Avoid loud animation.

---

## 6. Tech Stack

### 6.1 Frontend

Use:

- **Next.js App Router**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Radix UI**
- **Lucide React**
- **Framer Motion**
- **TanStack Query** for server state
- **Zustand** for local workspace UI state
- **React Hook Form**
- **Zod**
- **Monaco Editor** or **CodeMirror 6**
- **xterm.js** for terminal UI
- **React Resizable Panels** for workspace panes
- **Next Themes** optional, but default theme must be light
- **Sonner** for toast notifications
- **Cmdk** for command palette

### 6.2 Backend

MVP:

- Next.js Route Handlers
- Server Actions where suitable
- PostgreSQL
- Prisma ORM
- Redis
- BullMQ
- WebSocket gateway for terminal/runtime output
- S3-compatible storage for package files/snapshots/uploads
- Stripe for subscription and marketplace payments
- Auth.js / Clerk / Better Auth depending on implementation preference

Scale later:

- Separate Runtime API service
- Separate Registry service
- Separate AI Orchestrator service
- Container runner service on Kubernetes/Fly.io/Render/nomad
- Event bus for runtime/session events

### 6.3 Runtime Infrastructure

Runtime must support:

- Cloud workspace sessions
- Container per project/session
- Terminal command execution
- Preview port forwarding
- File operations
- Snapshot export
- Workspace restore
- Logs streaming
- Package install action
- AI agent action with approval

Recommended runtime approach:

```txt
Browser UI
  → Next.js API / BFF
  → Runtime Orchestrator
  → Workspace Container
  → WebSocket stream back to browser
```

### 6.4 Database

- PostgreSQL primary DB
- Prisma schema
- Row ownership by user/team/workspace
- Audit logs for sensitive actions
- Package version immutability
- Purchase/install history

### 6.5 AI Providers

Provider abstraction:

- OpenAI
- Anthropic
- Gemini
- OpenRouter
- Local/custom endpoint later

AI capabilities:

- Workspace assistant
- Explain terminal error
- Generate runbook
- Adapt package to project
- Generate `SKILL.md`, `CLAUDE.md`, `AGENTS.md`, `DESIGN.md`
- Run agents with approval
- Summarize snapshot/timeline
- Recommend packages

---

## 7. Information Architecture

### 7.1 Public Pages

```txt
/
/pricing
/marketplace
/marketplace/[slug]
/packages
/packages/[type]
/creators
/creators/[handle]
/enterprise
/teams
/ai
/workspace
/docs
/docs/[...slug]
/blog
/blog/[slug]
/changelog
/security
/contact
/login
/signup
/forgot-password
```

### 7.2 App Pages

```txt
/app
/app/onboarding
/app/workspaces
/app/workspaces/new
/app/workspaces/[workspaceId]
/app/projects
/app/projects/new
/app/projects/[projectId]
/app/projects/[projectId]/workspace
/app/projects/[projectId]/files
/app/projects/[projectId]/terminal
/app/projects/[projectId]/preview
/app/projects/[projectId]/notes
/app/projects/[projectId]/packages
/app/projects/[projectId]/skills
/app/projects/[projectId]/agents
/app/projects/[projectId]/recipes
/app/projects/[projectId]/snapshots
/app/projects/[projectId]/timeline
/app/marketplace
/app/marketplace/[slug]
/app/library
/app/library/purchased
/app/library/installed
/app/library/saved
/app/creator
/app/creator/packages
/app/creator/packages/new
/app/creator/packages/[packageId]/edit
/app/creator/sales
/app/creator/payouts
/app/team
/app/team/members
/app/team/private-marketplace
/app/team/audit
/app/settings
/app/settings/profile
/app/settings/account
/app/settings/ai-providers
/app/settings/api-keys
/app/settings/billing
/app/billing
```

### 7.3 Admin / Internal Pages

```txt
/admin
/admin/packages
/admin/reports
/admin/users
/admin/creators
/admin/transactions
/admin/moderation
/admin/audit
```

---

## 8. Global Layout System

### 8.1 Marketing Layout

Structure:

```txt
MarketingLayout
  ├── StickyLightNavbar
  ├── PageContent
  └── Footer
```

Navbar:

- White translucent background
- Thin bottom border
- Logo left
- Center nav links on desktop
- Right auth buttons
- Mobile hamburger menu
- Active hover underline or soft pill

Navbar links:

```txt
Product
Marketplace
Packages
Creators
Teams
Pricing
Docs
```

### 8.2 App Layout

Structure:

```txt
AppLayout
  ├── AppSidebar
  ├── MainColumn
  │   ├── AppTopbar
  │   ├── MainContent
  │   └── OptionalStatusBar
  └── CommandPalette
```

App shell look:

- Background: `#F7F7F8`
- Sidebar: white with right border
- Topbar: white with bottom border
- Content: light gray canvas with white cards/panels
- Active nav: soft accent pill
- Icons: Lucide line icons

### 8.3 Workspace Layout

Core workspace page:

```txt
WorkspaceShell
  ├── WorkspaceSidebar
  ├── WorkspaceMain
  │   ├── WorkspaceTopbar
  │   ├── ResizablePanelGroup
  │   │   ├── LeftPanel: Files / Packages / Recipes
  │   │   ├── CenterPanel: Editor / Preview
  │   │   ├── BottomPanel: Terminal
  │   │   └── RightPanel: AI / Notes / Timeline
  │   └── WorkspaceStatusBar
```

Workspace must feel like the heart of Teskel.

---

## 9. Landing Page Final Spec

### 9.1 Landing Page Goal

The homepage must communicate in 10 seconds:

1. Teskel is a web SaaS workspace.
2. It is all-in-one: terminal, editor, preview, notes, AI, packages.
3. It has a marketplace.
4. Users can buy/sell installable developer workflows.
5. It feels premium like Cursor/Linear/Vercel.

### 9.2 Homepage Sections

```txt
1. Navbar
2. Hero
3. Workspace Product Mockup
4. Social Proof / Trusted By placeholder
5. Workspace — 12-feature grid
6. Marketplace — category pills + package cards
7. Packages — package types explained
8. AI — animated chat/product panel
9. Creator Economy — sell workflow narrative
10. Teams — private workspace/marketplace
11. Pricing Preview
12. FAQ
13. CTA Banner
14. Footer
```

### 9.3 Hero Section

Visual:

- Soft white-to-gray background
- Subtle radial accent behind mockup
- Centered headline
- Two CTA buttons
- Product mockup below

Copy:

```txt
Badge: All-in-one workspace & marketplace
Headline: The all-in-one workspace for developers and AI agents.
Subheadline: Run terminals, edit code, preview apps, save sessions, install packages, and sell reusable developer workflows — all from one cloud workspace.
Primary CTA: Start building for free
Secondary CTA: Browse Marketplace
Microcopy: No setup required. Import a repo and start in your browser.
```

Hero headline alternatives:

```txt
The workspace that remembers how you build.
Build projects, install workflows, and ship faster with AI context.
Your browser-based workspace for code, agents, and reusable workflows.
```

### 9.4 Hero Product Mockup

Must show a real-looking Teskel workspace:

- Top bar: project name, branch, runtime status, command palette search
- Left sidebar: Files, Packages, Recipes, Agents, Notes, Snapshots
- Center editor: code file
- Bottom terminal: command running
- Right panel: AI assistant with context tags
- Small package notification: “Package update available”
- Preview tab: localhost URL

Do not make the mockup only a terminal. It must show the all-in-one nature.

### 9.5 Workspace Feature Grid

12 cards:

1. Cloud terminal
2. Code editor
3. Browser preview
4. Project notes
5. Session restore
6. Snapshots
7. AI assistant
8. AI agents
9. Package installer
10. Command recipes
11. Project timeline
12. Team workspace

Card style:

- White card
- Thin border
- Soft icon container
- Hover lift
- Short copy

### 9.6 Marketplace Section

Category pills:

```txt
Skills
Agents
Templates
Recipes
UI Kits
Design Packs
Automation
Security
Testing
Docs
```

Show 6 cards:

1. Next.js SaaS Pro Pack — $49 — 4.9 — 12.4k installs
2. Security Review Agent — $29 — 4.8 — 7.8k installs
3. Stripe Billing Integration — $39 — 4.9 — 9.1k installs
4. SaaS Dashboard UI Kit — $59 — 4.7 — 5.6k installs
5. Production Incident Runbook — Free — 4.8 — 18.2k installs
6. Playwright E2E Testing Pack — $19 — 4.6 — 4.3k installs

### 9.7 Creator Economy Section

Structure:

- Left: copy
- Right: creator dashboard mockup
- 80% revenue callout
- 6 feature cards

Copy:

```txt
Turn your engineering workflow into a product.
Publish reusable packages, sell premium workflows, and help other developers build faster.
```

Feature cards:

1. Package publishing
2. Versioned releases
3. Creator storefront
4. Sales analytics
5. Reviews and ratings
6. 80% creator revenue

### 9.8 AI Section

Show animated chat UI cycling prompts:

Prompt examples:

```txt
Explain this terminal error using my project context.
Generate AGENTS.md for this repo.
Install a Stripe billing workflow and adapt it to my stack.
Create a runbook from this session.
Review this project for security issues.
```

Context tags:

```txt
terminal.log
package: stripe-billing
repo: nextjs-saas
snapshot: before-release
notes: billing-bug
```

### 9.9 Teams Section

6 cards:

1. Shared workspaces
2. Private marketplace
3. Approved packages
4. Team recipes
5. Audit logs
6. Role-based access

### 9.10 Pricing Preview

4 cards:

- Free
- Pro — Most popular
- Team
- Enterprise

Pro should have accent border and badge.

### 9.11 FAQ

7 questions:

1. Is Teskel a desktop app?
2. How is Teskel different from Cursor?
3. What can be sold on the marketplace?
4. Can teams create private packages?
5. Can packages run commands?
6. Does Teskel support AI agents?
7. Can I use Teskel without paying?

### 9.12 CTA Banner

Copy:

```txt
Ready to build in one workspace?
Start with a project, install your first package, and let Teskel remember how you build.
```

Buttons:

```txt
Start building for free
Browse Marketplace
```

### 9.13 Footer

5 columns:

Product:
- Workspace
- Marketplace
- Packages
- AI Agents
- Teams

Marketplace:
- Browse packages
- Skill packs
- Agent packs
- Templates
- UI kits

Company:
- Creators
- Pricing
- Enterprise
- Changelog
- Blog

Resources:
- Docs
- API
- CLI
- Security
- Support

Legal:
- Terms
- Privacy
- Refund Policy
- Marketplace Policy
- DPA

---

## 10. Public Page Specs

### 10.1 `/marketplace`

Goal: browsing and discovery.

Layout:

```txt
MarketplaceHero
SearchAndFilters
FeaturedPackages
CategoryTabs
PackageGrid
CreatorSpotlight
CTA
```

Filters:

- Search query
- Category
- Package type
- Price: Free, Paid
- Rating
- Compatibility: Teskel, Claude, Cursor, Copilot, Windsurf
- Sort: Popular, Newest, Top rated, Free, Paid

Package card fields:

- Icon
- Title
- Description
- Type badge
- Category
- Creator
- Verified badge
- Price
- Rating
- Install count
- Compatibility badges
- Permission badge

### 10.2 `/marketplace/[slug]`

Layout:

```txt
PackageDetailHeader
InstallPurchaseCard
PreviewTabs
IncludedFiles
Compatibility
PermissionsSecurity
VersionsChangelog
Reviews
CreatorCard
RelatedPackages
```

Tabs:

- Overview
- Files
- Manifest
- Changelog
- Reviews
- Security

CTA states:

- Install free
- Buy package
- Purchased: Install
- Installed: Manage
- Update available

### 10.3 `/pricing`

Sections:

```txt
PricingHero
BillingToggle
PlanCards
FeatureComparison
MarketplaceFees
CreatorRevenue
EnterpriseCTA
FAQ
```

Plans:

| Plan | Monthly | Target |
|---|---:|---|
| Free | $0 | Try workspace + free packages |
| Pro | $19 | Individual power users |
| Team | $39/user | Teams and shared packages |
| Enterprise | Custom | Private registry and governance |

### 10.4 `/creators`

Sections:

- Hero: sell your workflow
- How it works
- Creator dashboard mockup
- Revenue split
- Package examples
- Creator features
- Creator FAQ
- CTA

### 10.5 `/enterprise`

Sections:

- Enterprise hero
- Private marketplace
- SSO/SAML
- Audit logs
- Policy controls
- Approved packages
- Private runtime
- Security/compliance
- Contact sales form

### 10.6 `/teams`

Sections:

- Team workspaces
- Shared package library
- Role-based access
- Internal runbooks
- Onboarding workflows
- Audit trail
- Team pricing CTA

### 10.7 `/docs`

Docs categories:

- Getting started
- Workspaces
- Packages
- Marketplace
- Creators
- Teams
- AI agents
- Security
- API
- CLI

### 10.8 Auth Pages

Pages:

```txt
/login
/signup
/forgot-password
```

Design:

- Light split layout
- Left: form
- Right: product preview card
- OAuth button placeholders
- Email/password fields
- Validation states
- Error states
- Legal links

Auth copy:

```txt
Login: Welcome back to Teskel.
Signup: Start building in one cloud workspace.
```

---

## 11. App Dashboard Specs

### 11.1 `/app`

Dashboard sections:

- Welcome header
- Quick actions
- Recent workspaces
- Recent projects
- Installed packages
- Recommended packages
- Recent snapshots
- AI activity
- Creator earnings card if creator

Quick actions:

- New workspace
- Import repo
- Browse marketplace
- Create package
- Invite team

### 11.2 `/app/workspaces`

Features:

- Workspace list
- Personal/team tabs
- Search
- Create workspace modal
- Member count
- Project count
- Last activity
- Runtime status

### 11.3 `/app/projects`

Features:

- Project list
- Import from GitHub
- Create blank project
- Create from template
- Filter by workspace
- Status badges

### 11.4 `/app/projects/[projectId]`

Project overview:

- Project health card
- Open workspace CTA
- Installed packages
- Recent sessions
- Recent notes
- Recent commands
- Snapshot timeline
- Team activity

---

## 12. Core Workspace Page

### 12.1 Route

```txt
/app/projects/[projectId]/workspace
```

This is the most important page in the entire product.

### 12.2 Workspace Goal

The workspace must communicate:

> Teskel is where actual development happens.

Not just a dashboard.

### 12.3 Workspace Layout

Desktop layout:

```txt
┌──────────────────────────────────────────────────────────────────────────────┐
│ Topbar: Project switcher | branch | command search | run | install | share  │
├─────────────┬───────────────────────────────────────────────┬────────────────┤
│ Left rail   │ Main editor / preview area                    │ AI / Notes     │
│ Files       │                                               │ Packages       │
│ Packages    │                                               │ Timeline       │
│ Recipes     ├───────────────────────────────────────────────┤                │
│ Agents      │ Terminal panel                                │                │
│ Notes       │                                               │                │
├─────────────┴───────────────────────────────────────────────┴────────────────┤
│ Status bar: runtime | branch | env | package count | AI provider | sync      │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 12.4 Panels

#### Left Sidebar

Items:

- Files
- Packages
- Recipes
- Agents
- Notes
- Snapshots
- Timeline
- Settings

#### Topbar

Elements:

- Project name
- Workspace name
- Git branch
- Runtime status
- Command palette input
- Run recipe button
- Install package button
- Snapshot button
- Share button
- User menu

#### Editor Panel

Use Monaco or CodeMirror.

Must show:

- Tabs
- File tree interaction
- Syntax highlighting
- Breadcrumb
- Save state
- AI edit indicator

#### Terminal Panel

Use xterm.js.

- Dark terminal inside light shell
- Tabbed terminals
- Command input
- Running process status
- Copy output
- Send to AI button

#### Browser Preview Panel

- URL bar
- Refresh button
- Open external button
- Device size switcher
- Preview iframe
- Runtime unavailable state

#### Notes Panel

- Project notes
- Markdown support
- Linked to snapshot/session
- AI summarize button

#### AI Assistant Panel

- Context tags
- Chat thread
- Suggested actions
- Approval cards
- File diff preview
- Terminal error explain button

Suggested AI actions:

- Explain error
- Generate runbook
- Adapt package
- Create recipe
- Review security
- Summarize session

#### Packages Panel

- Installed packages
- Update available
- Add package
- Package files
- Permission state

#### Recipes Panel

- Start dev
- Run tests
- Deploy preview
- Reset DB
- Seed DB
- Run security scan

Each recipe requires approval before running.

#### Snapshots / Timeline Panel

- Session snapshots
- Commands run
- Files edited
- Packages installed
- AI actions
- Notes created
- Runtime events

### 12.5 Workspace States

Implement states:

- Empty project
- Runtime starting
- Runtime running
- Runtime paused
- Runtime failed
- Package installed
- Package update available
- AI waiting approval
- No notes yet
- No snapshots yet

### 12.6 Mobile Behavior

On mobile:

- Use tabbed panels
- Workspace is readable, not full IDE
- Primary mobile actions: AI, notes, marketplace, project overview
- Terminal/editor can be horizontally scrollable

---

## 13. Package Marketplace System

### 13.1 Package Types

All marketplace items are **Teskel Packages**.

Types:

```txt
skill-pack
agent-pack
project-template
command-recipe
workspace-layout
design-pack
ui-kit
automation-pack
runbook-pack
checklist-pack
integration-pack
testing-pack
security-pack
database-pack
docs-pack
theme-pack
plugin
```

### 13.2 Package Manifest

```json
{
  "schema": "teskel.package.v1",
  "type": "skill-pack",
  "name": "nextjs-saas-pro",
  "title": "Next.js SaaS Pro Pack",
  "version": "1.0.0",
  "description": "Production-ready AI rules, workflows, and runbooks for building SaaS with Next.js.",
  "author": "creator_handle",
  "license": "personal",
  "price": 49,
  "targets": ["teskel", "claude", "cursor", "copilot", "windsurf", "agents"],
  "includes": ["skills", "recipes", "runbooks", "checklists"],
  "files": {
    "skill": "SKILL.md",
    "claude": "CLAUDE.md",
    "agents": "AGENTS.md",
    "design": "DESIGN.md",
    "architecture": "ARCHITECTURE.md",
    "security": "SECURITY.md"
  },
  "permissions": {
    "runs_commands": false,
    "modifies_files": true,
    "uses_ai": true,
    "requires_approval": true
  }
}
```

### 13.3 Package Security Badges

- Safe package: no executable code
- Command package: contains command recipes, approval required
- Script package: contains executable scripts, review required
- Agent package: includes AI behavior, approval required
- Verified package: reviewed by Teskel

### 13.4 Install Flow

1. User opens package detail.
2. User clicks install/buy.
3. System shows permission summary.
4. User selects target project.
5. System previews files/actions.
6. User confirms.
7. Package installs.
8. Timeline event is created.
9. Package appears in project package panel.

### 13.5 Purchase Flow

1. User clicks buy.
2. Stripe checkout or in-app payment.
3. Purchase record created.
4. Package added to library.
5. User can install into projects.

---

## 14. Creator System

### 14.1 Creator Dashboard

Route:

```txt
/app/creator
```

Cards:

- Total revenue
- Monthly revenue
- Packages published
- Installs
- Rating average
- Pending payouts

Charts:

- Revenue over time
- Installs over time
- Top packages

### 14.2 Create Package Flow

Route:

```txt
/app/creator/packages/new
```

Steps:

1. Select package type
2. Add metadata
3. Upload files or paste manifest
4. Set pricing
5. Set compatibility
6. Set permissions
7. Preview package page
8. Publish draft / submit for review

### 14.3 Creator Revenue

Default split:

```txt
Creator: 80%
Teskel: 20%
```

Enterprise/private marketplace terms may differ.

---

## 15. Teams System

### 15.1 Team Features

- Team workspaces
- Member roles
- Shared projects
- Shared package library
- Private marketplace
- Approved package list
- Audit logs
- Team recipes
- Internal runbooks
- Onboarding flows

### 15.2 Roles

```txt
Owner
Admin
Developer
Creator
Viewer
Billing
```

### 15.3 Private Marketplace

Teams can publish internal packages:

- Engineering standards
- Deployment workflows
- Incident runbooks
- Onboarding templates
- Design system rules
- Internal agents

---

## 16. AI System

### 16.1 AI Assistant

AI assistant must be scoped to a project/workspace.

Context sources:

- Files
- Terminal output
- Installed packages
- Notes
- Snapshots
- Timeline
- Project metadata
- Recipes
- Errors
- Git branch/commit

### 16.2 AI Actions

Actions:

- Explain terminal error
- Generate runbook
- Generate Skill files
- Adapt package to project
- Review code
- Create recipe
- Summarize session
- Suggest marketplace packages
- Run agent

### 16.3 Approval Model

AI must ask approval before:

- Running command
- Modifying files
- Installing package
- Publishing package
- Changing environment variables
- Deploying
- Deleting files

### 16.4 Agent Packs

Agent Pack includes:

```txt
agent.json
instructions.md
tools.md
permissions.json
output-format.md
eval-checklist.md
```

Agent examples:

- PR Reviewer Agent
- Bug Fix Agent
- Test Generator Agent
- Security Reviewer Agent
- Documentation Agent
- Release Manager Agent
- Database Migration Agent

---

## 17. Database Schema

### 17.1 Prisma Models Required

Models:

```txt
User
Team
TeamMember
Workspace
Project
WorkspaceSession
RuntimeSession
TerminalPane
EditorTab
BrowserPreview
Note
Snapshot
TimelineEvent
Package
PackageVersion
PackageFile
PackageCategory
PackageInstall
PackagePurchase
PackageReview
CreatorProfile
Recipe
Agent
Skill
BillingSubscription
Invoice
ApiKey
AuditLog
Notification
EnvironmentVariable
```

### 17.2 Ownership Rules

Every major entity must be scoped by:

- userId or teamId
- workspaceId where relevant
- projectId where relevant

### 17.3 Important Indexes

Add indexes for:

- package slug
- package type
- package category
- creator id
- team id
- workspace id
- project id
- install count
- rating
- createdAt
- updatedAt

### 17.4 Package Version Rule

Package versions should be immutable after publish.

To change package files, publish a new version.

---

## 18. Backend API Specs

### 18.1 Auth

```txt
GET /api/me
POST /api/auth/onboarding
PATCH /api/user/profile
```

### 18.2 Workspaces

```txt
GET /api/workspaces
POST /api/workspaces
GET /api/workspaces/:id
PATCH /api/workspaces/:id
DELETE /api/workspaces/:id
POST /api/workspaces/:id/invite
```

### 18.3 Projects

```txt
GET /api/projects
POST /api/projects
GET /api/projects/:id
PATCH /api/projects/:id
DELETE /api/projects/:id
POST /api/projects/:id/import
```

### 18.4 Runtime

```txt
POST /api/projects/:id/runtime/start
POST /api/projects/:id/runtime/stop
GET /api/projects/:id/runtime/status
POST /api/projects/:id/terminal
POST /api/projects/:id/terminal/:paneId/command
GET /api/projects/:id/preview
POST /api/projects/:id/snapshots
GET /api/projects/:id/timeline
```

WebSocket:

```txt
/ws/projects/:projectId/runtime
/ws/projects/:projectId/terminal/:paneId
/ws/projects/:projectId/ai
```

### 18.5 Marketplace

```txt
GET /api/packages
GET /api/packages/:slug
GET /api/packages/:slug/versions
POST /api/packages/:slug/purchase
POST /api/packages/:slug/install
POST /api/packages/:slug/uninstall
POST /api/packages/:slug/reviews
```

### 18.6 Creator

```txt
GET /api/creator/dashboard
GET /api/creator/packages
POST /api/creator/packages
PATCH /api/creator/packages/:id
POST /api/creator/packages/:id/releases
GET /api/creator/sales
GET /api/creator/payouts
```

### 18.7 AI

```txt
POST /api/ai/chat
POST /api/ai/explain-error
POST /api/ai/generate-runbook
POST /api/ai/adapt-package
POST /api/ai/generate-skill-files
POST /api/ai/run-agent
POST /api/ai/approve-action
POST /api/ai/reject-action
```

### 18.8 Billing

```txt
POST /api/billing/checkout
POST /api/billing/portal
POST /api/billing/webhook
GET /api/billing/subscription
GET /api/billing/invoices
```

---

## 19. Component System

### 19.1 Marketing Components

```txt
MarketingNavbar
HeroSection
WorkspaceMockup
FeatureGrid
FeatureCard
MarketplacePreview
PackageCard
CreatorEconomySection
AIChatPreview
TeamsSection
PricingCards
FAQAccordion
CTABanner
MarketingFooter
```

### 19.2 App Components

```txt
AppShell
AppSidebar
AppTopbar
CommandPalette
WorkspaceSwitcher
ProjectSwitcher
UserMenu
StatsCard
EmptyState
LoadingState
ErrorState
```

### 19.3 Workspace Components

```txt
WorkspaceShell
WorkspaceSidebar
WorkspaceTopbar
WorkspaceStatusBar
FileTree
EditorPanel
TerminalPanel
PreviewPanel
NotesPanel
AIAssistantPanel
PackagesPanel
RecipesPanel
SnapshotsPanel
TimelinePanel
ApprovalCard
RuntimeStatusBadge
```

### 19.4 Marketplace Components

```txt
PackageGrid
PackageCard
PackageFilters
PackageSearch
CategoryPills
PackageDetailHeader
PackageInstallCard
PackageFilePreview
PackagePermissionBadge
PackageCompatibilityBadges
CreatorCard
ReviewList
VersionChangelog
```

### 19.5 Creator Components

```txt
CreatorDashboard
RevenueChart
PackageStatsCard
PackageUploadDropzone
ManifestPreview
PackageTypeSelector
PricingSelector
PermissionSelector
PublishChecklist
```

---

## 20. UI Copy Guidelines

### 20.1 Voice

Teskel copy should be:

- Clear
- Developer-native
- Confident
- Not hype-heavy
- Not corporate
- Not vague

### 20.2 Good Copy Examples

```txt
Open your project exactly where you left it.
Install workflows that understand your stack.
Turn your engineering process into a package.
Run commands with approval, context, and history.
Give AI agents the same project context your team uses.
```

### 20.3 Avoid

```txt
Revolutionary platform for next-generation synergy.
10x your productivity instantly.
The ultimate everything app.
AI-powered blockchain cloud innovation.
```

---

## 21. Pricing Model

### 21.1 Plans

| Plan | Price | Features |
|---|---:|---|
| Free | $0 | Basic workspace, limited projects, free packages |
| Pro | $19/mo | Unlimited personal workspaces, snapshots, AI, package installs |
| Team | $39/user/mo | Shared workspaces, private packages, members, audit logs |
| Enterprise | Custom | SSO, private registry, policy, custom runtime, compliance |

### 21.2 Marketplace Fees

Default:

```txt
Creator receives 80%
Teskel receives 20%
```

### 21.3 Package Pricing

Suggested ranges:

| Type | Price Range |
|---|---:|
| Skill Pack | Free–$49 |
| Agent Pack | $19–$149 |
| Project Template | $29–$199 |
| UI Kit | $19–$99 |
| Security Pack | $49–$299 |
| Enterprise/Internal Pack | Custom |

---

## 22. Workflows

### 22.1 New User Onboarding

1. User signs up.
2. Chooses persona: developer, creator, team.
3. Creates workspace.
4. Imports repo or starts from template.
5. Opens workspace.
6. Teskel recommends packages based on stack.
7. User installs first package.
8. User starts terminal/runtime.
9. AI assistant offers next actions.

### 22.2 Install Package Workflow

1. Browse marketplace.
2. Open package detail.
3. Review files/permissions.
4. Buy or install.
5. Select target project.
6. Preview changes.
7. Confirm.
8. Package installed.
9. Timeline event created.
10. AI can adapt package to project.

### 22.3 Creator Publish Workflow

1. Open creator dashboard.
2. Create package.
3. Select type.
4. Add metadata.
5. Upload files.
6. Validate manifest.
7. Set price/license.
8. Set permissions.
9. Preview page.
10. Publish or submit for review.

### 22.4 Workspace Runtime Workflow

1. User opens project workspace.
2. Runtime status is checked.
3. User starts runtime.
4. Container boots.
5. Terminal attaches via WebSocket.
6. Preview port is detected.
7. Workspace layout restored.
8. Timeline starts recording.

### 22.5 AI Agent Workflow

1. User opens AI panel.
2. Selects task or prompt.
3. AI reads allowed context.
4. AI proposes actions.
5. If command/file changes needed, approval card appears.
6. User approves/rejects.
7. Action runs.
8. Result logged to timeline.
9. Snapshot can be created.

---

## 23. Security Requirements

### 23.1 General Security

- Validate all inputs with Zod.
- Protect all app/API routes.
- Use RBAC for teams.
- Never expose secrets to frontend.
- Use signed package versions.
- Store package checksums.
- Audit sensitive actions.
- Rate-limit auth, AI, install, publish, payment endpoints.
- Scan uploads.
- Require approval for commands and scripts.

### 23.2 Package Security

Package must disclose:

- Whether it modifies files
- Whether it runs commands
- Whether it contains scripts
- Whether it uses AI
- Whether it accesses environment variables
- Whether approval is required

### 23.3 Agent Security

Agents cannot automatically:

- Run commands
- Delete files
- Modify secrets
- Deploy
- Publish packages
- Change billing

without explicit approval.

---

## 24. Implementation Roadmap

### Phase 1 — Foundation

- Next.js app
- TypeScript
- Tailwind
- shadcn/ui
- light design system
- Prisma schema
- seed data
- auth scaffold
- app shell

### Phase 2 — Marketing Site

- Landing page
- Marketplace preview
- Pricing page
- Creators page
- Enterprise page
- Auth pages

### Phase 3 — App Dashboard

- `/app`
- workspaces
- projects
- library
- settings

### Phase 4 — Core Workspace UI

- `/app/projects/[projectId]/workspace`
- resizable panels
- terminal UI
- editor UI
- preview UI
- AI panel
- packages panel
- notes/timeline

### Phase 5 — Marketplace

- package listing
- package detail
- install flow
- purchase placeholder
- creator profile

### Phase 6 — Creator Tools

- creator dashboard
- create package flow
- upload/manifest
- publish version
- sales page

### Phase 7 — Backend Integration

- real database
- APIs
- package registry
- install records
- purchases
- reviews

### Phase 8 — Runtime

- container sessions
- terminal streaming
- preview forwarding
- runtime status
- snapshots

### Phase 9 — AI

- provider abstraction
- assistant
- package adaptation
- agents
- approval system

### Phase 10 — Billing & Teams

- Stripe
- plans
- marketplace payments
- team billing
- private marketplace

---

## 25. Build Prompt for AI App Builder

Use this when asking a builder to implement Teskel:

```txt
Build Teskel as a light-mode-first SaaS web app inspired by the polish of Cursor.com, Linear, and Vercel. Do not use dark mode as the default. Teskel is not a desktop app and not just a marketplace. It is an all-in-one browser workspace for developers and AI agents, with terminal, editor, preview, notes, sessions, packages, marketplace, creator tools, teams, and AI workflows.

Use Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Radix, Lucide, Framer Motion, TanStack Query, Zustand, Prisma, PostgreSQL, Redis, xterm.js, Monaco/CodeMirror, Stripe, and WebSockets.

First build the complete light-mode design system, landing page, public pages, auth pages, app dashboard, marketplace pages, and core workspace UI. Use realistic mock data if backend is not ready, but structure everything for real APIs later.

The core page is /app/projects/[projectId]/workspace. It must clearly show Teskel as an all-in-one web workspace: files, code editor, terminal, preview, notes, AI assistant, packages, recipes, snapshots, and project timeline in one polished interface.

Make every page premium, modern, responsive, and production-ready. Use clean white surfaces, soft gray backgrounds, subtle borders, elegant shadows, tasteful accent color, smooth hover states, and Cursor-quality visual hierarchy.
```

---

## 26. Acceptance Criteria

A completed Teskel MVP should demonstrate:

- SaaS web app, not desktop
- Light-mode premium UI
- Cursor-level polish without copying Cursor
- Complete marketing site
- Complete app shell
- Core workspace page
- Marketplace listing and detail
- Creator dashboard
- Package creation flow
- Team pages
- Pricing/auth/settings
- Mock data or real API integration
- Clear package system
- AI assistant/agent UI
- Security/permission model
- Responsive design

The user should immediately understand:

1. Teskel is a browser workspace.
2. Teskel is all-in-one.
3. Teskel supports AI agents.
4. Teskel has installable packages.
5. Developers can buy/sell packages.
6. Teams can use private workspaces and private packages.
7. The UI is premium, modern, and developer-grade.

---

## 27. Final One-Sentence Product

> **Teskel is a Cursor-quality web workspace where developers run projects, install AI-ready workflow packages, and sell reusable engineering systems.**

