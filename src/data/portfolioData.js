export const portfolioData = {
  designer: {
    name: "ROBIN",
    role: "Product Designer",
    location: "Chicago, IL",
    status: "OPEN TO NEW WORK AND GOOD PROBLEMS",
    tagline: {
      line1: "I design software that",
      line2: "gets out of your way."
    },
    bio: "I'm a product designer who gets a little too excited about making complicated things feel simple. ✨ I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone's day easier. 🎨",
    avatar: "/images/robin-avatar.jpg",
    workspace: "/images/workspace.jpg",
    email: "robin.design@example.com",
    availability: "Available for Q4 2026 & 2027 projects",
    socials: {
      linkedin: "https://linkedin.com",
      dribbble: "https://dribbble.com",
      instagram: "https://instagram.com",
      github: "https://github.com",
      twitter: "https://twitter.com"
    }
  },

  skills: [
    {
      id: "interaction",
      name: "Interaction Design",
      color: "#fbbf24",
      bgClass: "pill-yellow",
      icon: "sparkles",
      stampEmoji: "🌼",
      description: "Crafting intuitive micro-interactions, responsive flows, and friction-free user journeys."
    },
    {
      id: "prototyping",
      name: "Prototyping",
      color: "#10b981",
      bgClass: "pill-green",
      icon: "code",
      stampEmoji: "🎨",
      description: "From rapid lo-fi paper sketches to production-grade interactive React & Figma prototypes."
    },
    {
      id: "research",
      name: "User Research",
      color: "#ec4899",
      bgClass: "pill-pink",
      icon: "users",
      stampEmoji: "🧩",
      description: "Contextual inquiry, user interviews, usability audits, and turning raw feedback into product direction."
    },
    {
      id: "motion",
      name: "Motion Design",
      color: "#2563eb",
      bgClass: "pill-blue",
      icon: "play",
      stampEmoji: "👀",
      description: "Meaningful animation curves that communicate hierarchy, spatial continuity, and delight."
    }
  ],

  projects: [
    {
      id: "tandem",
      number: "01",
      tabLabel: "PROJECT 01",
      date: "MAR 2, 2026",
      title: "Tandem",
      subtitle: "From 'who owes who' to money that finally feels shared.",
      category: "Fintech & Mobile App",
      theme: "dark",
      heroBg: "#0f1115",
      accentColor: "#2563eb",
      badgeColor: "#3b82f6",
      image: "/images/tandem.jpg",
      tags: ["Mobile iOS", "Fintech", "Design System", "Interaction Design"],
      stats: [
        { label: "Active Users", value: "240k+" },
        { label: "App Store Rating", value: "4.9 ★" },
        { label: "Bill Settlement Speed", value: "3.2x faster" }
      ],
      overview: "Tandem is a collaborative group expense and bill-splitting platform engineered to eliminate the awkwardness of peer-to-peer debts. Traditional payment apps treat money as a solo transactional chore; Tandem creates shared living ledgers with automated receipt OCR, instant split calculations, and one-tap settling.",
      problem: "Traditional bill-splitting apps like Splitwise and Venmo require tedious manual calculation, create uncomfortable reminder dynamics between friends, and break down when bills have uneven tips, itemized taxes, or varying participant shares.",
      solution: "We designed a camera-first smart receipt breakdown, transparent live calculation rooms, and micro-delights (like customizable animated thank-you stickers) that turn debt settling into a positive bonding moment.",
      deliverables: [
        "End-to-end iOS & Android App Architecture",
        "Camera-based AI receipt scanner interface",
        "Multi-currency dynamic split engine",
        "Design token system with 80+ components"
      ],
      prototypeData: {
        billName: "Dinner at La Table",
        total: 248.60,
        participants: [
          { name: "Robin (You)", share: 41.43, avatar: "/images/robin-avatar.jpg", paid: true },
          { name: "Sarah J.", share: 41.43, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150", paid: false },
          { name: "Mike L.", share: 41.44, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150", paid: true },
          { name: "Emily R.", share: 41.43, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150", paid: false },
          { name: "Ben W.", share: 41.44, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150", paid: false },
          { name: "David K.", share: 41.43, avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150", paid: false }
        ]
      }
    },
    {
      id: "forge",
      number: "02",
      tabLabel: "PROJECT 02",
      date: "JAN 2, 2026",
      title: "Forge",
      subtitle: "Getting a new engineer from day one to shipping without the panic.",
      category: "Developer Experience & Web Platform",
      theme: "yellow",
      heroBg: "#f5be38",
      accentColor: "#18181b",
      badgeColor: "#000000",
      image: "/images/forge.jpg",
      tags: ["Developer Tools", "Web Dashboard", "Design Systems", "Onboarding"],
      stats: [
        { label: "Onboarding Time", value: "-65%" },
        { label: "Engineering Teams", value: "85+" },
        { label: "First PR Merge", value: "Day 2 (avg)" }
      ],
      overview: "Forge transforms the chaotic, fragmented developer onboarding experience into a guided, gamified journey. It integrates IDE setup, environment containerization, codebase architecture tours, and mentor matchmaking into a single focused command center.",
      problem: "Software engineers typically spend their first 2–3 weeks struggling with broken local environments, outdated README files, tribal knowledge barriers, and anxiety around pushing their initial pull request.",
      solution: "Forge introduced verified 1-click cloud sandbox environments, interactive architecture maps linked to Git repos, and step-by-step checklist validation that automatically verifies each CLI setup command.",
      deliverables: [
        "Web App Platform Design & UI Components",
        "Terminal output visualization and error diagnosis",
        "Interactive Roadmap and Milestone Tracker",
        "Mentor pairing and live pairing notifications"
      ],
      prototypeData: {
        currentStep: "Configure IDE & Extensions",
        completedSteps: 3,
        totalSteps: 6,
        checklist: [
          { id: 1, title: "Setup Dev Environment & SSH Keys", status: "completed" },
          { id: 2, title: "Install Node.js 22 & Docker Desktop", status: "completed" },
          { id: 3, title: "Clone core monorepo repository", status: "completed" },
          { id: 4, title: "Configure IDE extensions & Linting rules", status: "active" },
          { id: 5, title: "Run local development server & test suite", status: "pending" },
          { id: 6, title: "Submit first Good First Issue pull request", status: "pending" }
        ]
      }
    },
    {
      id: "nebula",
      number: "03",
      tabLabel: "PROJECT 03",
      date: "NOV 18, 2025",
      title: "Nebula DS",
      subtitle: "A multi-brand design system bridging the gap between Figma and production React.",
      category: "Design System & Component Library",
      theme: "dark-purple",
      heroBg: "#1a162b",
      accentColor: "#8b5cf6",
      badgeColor: "#7c3aed",
      image: "/images/prism.jpg",
      tags: ["Design System", "Tokens", "Accessibility", "Figma Plugins"],
      stats: [
        { label: "Component Tokens", value: "1,200+" },
        { label: "Team Adoption", value: "100%" },
        { label: "WCAG Compliance", value: "AAA" }
      ],
      overview: "Nebula is an enterprise design system supporting 4 distinct customer-facing web products. Featuring automated Figma-to-Code sync, multi-theme support (dark, light, high-contrast), and zero-friction accessibility tokens.",
      problem: "Designers and engineers were losing hundreds of hours to design token drift, inaccessible color pairings, and duplicated component code across separate product repositories.",
      solution: "Created an automated single-source-of-truth token pipeline, paired with accessible React primitives and an interactive live documentation playground with copy-paste code snippets.",
      deliverables: [
        "Complete Token Architecture (Colors, Typography, Elevation, Motion)",
        "Figma Component Library with Variant Properties",
        "React UI Component Suite with Storybook Docs",
        "Accessibility Linter integration for design reviews"
      ]
    }
  ],

  playgroundItems: [
    {
      id: "sticker-1",
      type: "sticker",
      text: "SHIP IT 🚀",
      bg: "#fde047",
      color: "#000",
      rotation: -6
    },
    {
      id: "sticker-2",
      type: "sticker",
      text: "PIXELS MATTER 🔍",
      bg: "#a7f3d0",
      color: "#000",
      rotation: 8
    },
    {
      id: "sticker-3",
      type: "sticker",
      text: "COFFEE FIRST ☕",
      bg: "#fbcfe8",
      color: "#000",
      rotation: -3
    },
    {
      id: "sticker-4",
      type: "sticker",
      text: "SWEAT THE DETAILS 💧",
      bg: "#fed7aa",
      color: "#000",
      rotation: 5
    }
  ]
};
