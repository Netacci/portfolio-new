import Parivest from '../assets/projects/parivest.jpg';
import Real from '../assets/projects/skenny.jpg';
import Bd from '../assets/projects/bd.png';
import RecipeFinderImage from '../assets/projects/recipefinder.png';

export const featuredProjects = [
  {
    number: '01',
    name: 'PerfCompare',
    company: 'Mozilla',
    companyColor: '#ff6611',
    problem:
      'The team wanted engineers to search for content related to patches (bug number, summary, author) directly within PerfCompare. The existing tooling made this slow and inconsistent across large datasets.',
    solution:
      'Built the search feature end-to-end. Designed a PostgreSQL full-text search implementation using search vectors with a GIN index, enabling engineers to query across multiple fields simultaneously while keeping performance overhead low on large datasets. Also handled schema changes for backward compatibility with legacy records and updated the React frontend to surface the new search experience.',
    impact:
      'Used actively by Mozilla\'s performance engineering team to catch regressions before they reach millions of Firefox users.',
    tags: ['React', 'Django', 'PostgreSQL', 'TypeScript', 'Accessibility'],
    live: 'https://perf.compare/',
    github: 'https://github.com/mozilla/treeherder/issues?q=state%3Aclosed%20is%3Apr%20author%3A%40netacci',
    cardColor: '#1a1033',
    accentColor: '#ff6611',
  },
  {
    number: '02',
    name: 'RightNowMD — Telehealth Platform',
    company: 'RightNowMD · Florida',
    companyColor: '#0ea5e9',
    problem:
      'A telehealth platform serving real patients needed an admin system and scheduling engine built from scratch. The core challenge: how do you manage real-time bookings across 4 different session types (telemedicine, nurse, provider, and clinic visits) without double bookings or timezone drift?',
    solution:
      'Built fullstack (backend + frontend) for the entire admin dashboard: triage queue with AI-escalated cases, dispatch center with ETA tracking, KPI analytics via aggregation pipelines, staff management, and CSV exports localized to Florida (ET). Built the backend for provider and clinic visit flows. Engineered a scheduling system where admins define slots once across all 4 session types. Slots are atomically reserved on booking, freed on cancellation, and updated live via SSE so availability changes instantly with no polling.',
    impact:
      'Production system serving real patients. Zero double bookings. Real-time slot updates without polling. Full operational visibility across triage, dispatch, staff, and revenue, all timezone-correct across a distributed system.',
    tags: ['Node.js', 'TypeScript', 'Next.js', 'MongoDB', 'Redis', 'SSE', 'Stripe', 'Express.js'],
    live: 'https://rightnowmd.healthcare/',
    cardColor: '#051525',
    accentColor: '#0ea5e9',
  },
  {
    number: '03',
    name: 'Parivest',
    company: 'Parivest',
    companyColor: '#10b981',
    problem:
      'An early-stage fintech needed to evolve from MVP to a market-fit product: shipping savings and referral features, reducing ops overhead, and converting more visitors into users.',
    solution:
      'Owned engineering strategy end-to-end as Technical Lead. Launched savings and referral features, rebuilt the landing page in Next.js, built an admin dashboard that automated manual ops tasks, and led product research and competitor analysis that shaped roadmap decisions.',
    impact:
      '35% increase in user engagement · 40% increase in retention · 15% lift in conversions · 50% reduction in manual operational tasks · 20% increase in feature adoption.',
    tags: ['Next.js', 'React', 'MUI', 'TailwindCSS', 'MongoDB', 'MixPanel'],
    live: 'https://parivest.com/',
    image: Parivest,
    cardColor: '#0a1628',
    accentColor: '#10b981',
  },
  {
    number: '04',
    name: 'AI Expense Tracker',
    company: 'Personal Project',
    companyColor: '#6366f1',
    problem:
      'Users needed more than a ledger. They wanted to understand their spending habits and get intelligent summaries without doing the analysis themselves.',
    solution:
      'Built a fullstack app with Google OAuth via Passport.js, expense logging, and AI-generated spending reports using Groq. Deployed end-to-end on Vercel.',
    impact:
      'Live and in production. Demonstrates complete product ownership: auth system, data modeling, AI integration, and responsive frontend.',
    tags: ['React', 'Express.js', 'MongoDB', 'Google OAuth', 'Groq AI', 'Redux'],
    live: 'https://expense-tracker-netaccis-projects.vercel.app',
    github: 'https://github.com/Netacci/expenseTracker',
    image: Bd,
    cardColor: '#12101f',
    accentColor: '#6366f1',
  },
  {
    number: '05',
    name: 'Real Estate Platform',
    company: 'Skenny',
    companyColor: '#f59e0b',
    problem:
      'Realtors needed a trusted platform to list verified properties, while admins needed full oversight over listings and agent accounts.',
    solution:
      'Built the full platform: OTP verification via SendGrid, property listing flows, an admin dashboard for managing agents and listings, and structured logging with Winston + Morgan.',
    impact:
      'Live at skenny.org. A production system serving real agents and property seekers with a full admin control layer.',
    tags: ['React', 'Express.js', 'MongoDB', 'Node.js', 'SendGrid', 'Redux'],
    live: 'https://skenny.org',
    github: 'https://github.com/Netacci/skenny-backend',
    image: Real,
    cardColor: '#1a120a',
    accentColor: '#f59e0b',
  },
  {
    number: '06',
    name: 'Optiverifi',
    company: 'Optiverifi · USA',
    companyColor: '#8b5cf6',
    problem:
      'B2B procurement is slow and opaque. Buyers have no efficient way to find verified, capability-matched suppliers without manual sourcing. The platform needed to serve three different user types (public visitors, paying buyers, and internal admins) from a single coherent system.',
    solution:
      'Built 4 applications end-to-end: a public marketing site with a paywall/preview flow where unauthenticated users see a teaser of their match results before signing up, a buyer dashboard for procurement requests, AI match reports, subscriptions and billing, an internal admin dashboard covering suppliers, plans, users, and transactions, and a backend with a two-phase AI matching engine. Pre-payment uses rule-based keyword scoring; post-payment calls the ChatGPT API for semantic capability scoring with AI-generated match explanations. Stripe for payments, Resend for transactional email, JWT auth with separate admin and customer roles.',
    impact:
      'In progress. Complete architecture for a production-ready B2B SaaS platform: 3 frontend apps, 1 API, AI matching, payments, and auth all working in concert.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'ChatGPT API', 'Stripe', 'Tailwind CSS', 'JWT'],
    cardColor: '#0f0a1e',
    accentColor: '#8b5cf6',
  },
];

export const otherProjects = [
  {
    name: 'AI-Powered Recipe Finder',
    description:
      'Searches recipes by dish name and country. Leverages AI to generate detailed recipes not in the database, with Pexels API for food images.',
    github: 'https://github.com/Netacci/Recipefinder',
    live: 'https://recipefinder-netaccis-projects.vercel.app',
    image: RecipeFinderImage,
    tags: ['React', 'Express.js', 'MongoDB', 'Grok AI', 'TypeScript', 'React Query'],
  },
];
