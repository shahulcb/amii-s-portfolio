export const portfolioData = {
  designer: {
    name: "ROBIN",
    role: "Business Analyst",
    location: "Chicago, IL",
    status: "OPEN TO FULL-TIME BA ROLES & RECRUITER INQUIRIES",
    tagline: {
      line1: "I turn complex data",
      line2: "into decisions that move teams."
    },
    bio: "I'm a business analyst who loves diving deep into business workflows, analyzing complex datasets, and collaborating with cross-functional product & engineering teams to deliver high-impact systems. 📊 This site showcases my end-to-end case studies, technical requirements, and process artifacts. If you're a recruiter or hiring manager looking for a dedicated Business Analyst, let's connect! 🤝",
    avatar: "/images/robin-avatar.jpg",
    workspace: "/images/workspace.jpg",
    email: "robin.analyst@example.com",
    availability: "Open to Full-Time Business Analyst Roles (On-site Chicago / Hybrid / Remote)",
    resumeUrl: "#",
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
      id: "requirements",
      name: "Requirements Gathering",
      color: "#fbbf24",
      bgClass: "pill-yellow",
      icon: "clipboard",
      stampEmoji: "📋",
      description: "Authoring comprehensive BRDs, PRDs, user stories, and acceptance criteria (Given-When-Then) that bridge business stakeholders and engineers."
    },
    {
      id: "modeling",
      name: "Data & Financial Modeling",
      color: "#10b981",
      bgClass: "pill-green",
      icon: "trending-up",
      stampEmoji: "📊",
      description: "Advanced SQL, scenario modeling, forecasting, ROI feasibility analysis, and automated KPI pipelines."
    },
    {
      id: "process",
      name: "Process Optimization",
      color: "#ec4899",
      bgClass: "pill-pink",
      icon: "git-branch",
      stampEmoji: "⚙️",
      description: "BPMN 2.0 mapping, gap analysis, root-cause diagnostics, and workflow automation reducing cycle times."
    },
    {
      id: "stakeholder",
      name: "Stakeholder Alignment",
      color: "#2563eb",
      bgClass: "pill-blue",
      icon: "users",
      stampEmoji: "🤝",
      description: "Facilitating discovery workshops, executive dashboard presentations (Tableau/Power BI), and sprint backlog prioritization."
    }
  ],

  projects: [
    {
      id: "tandem",
      number: "01",
      tabLabel: "PROJECT 01",
      date: "MAR 2, 2026",
      title: "FinFlow Ledger",
      subtitle: "From manual reconciliation to 99.8% automated straight-through ledger settlement.",
      category: "Fintech & Financial Operations Analytics",
      theme: "dark",
      heroBg: "#0f1115",
      accentColor: "#2563eb",
      badgeColor: "#3b82f6",
      image: "/images/tandem.jpg",
      tags: ["SQL & ETL", "BPMN 2.0 Mapping", "Financial Modeling", "BRD / User Stories"],
      stats: [
        { label: "Reconciliation Speed", value: "4.5x faster" },
        { label: "Annual Cost Saved", value: "$1.2M" },
        { label: "Ledger SLA Accuracy", value: "99.8%" }
      ],
      overview: "FinFlow is an enterprise payment reconciliation system engineered to eliminate manual multi-currency debt mismatches. As the Lead Business Analyst, I scoped end-to-end business requirements, standardized ledger data schemas across 5 banking partners, and architected automated anomaly-detection workflows.",
      problem: "The operations team lost 180+ hours each month manually cross-referencing multi-currency bank statements with PostgreSQL transactional databases, causing multi-day settlement delays and audit vulnerability.",
      solution: "Defined rule-based auto-reconciliation specifications, mapped AS-IS vs. TO-BE processes, and designed real-time exception dashboards with automated notifications for discrepancies over $1,000.",
      deliverables: [
        "Business Requirements Document (BRD) & Functional Specs",
        "BPMN 2.0 Process Workflow Maps",
        "Data Dictionary & Cross-Platform Entity Relationship Model",
        "User Acceptance Testing (UAT) Test Plan & Sign-off Matrix"
      ],
      prototypeData: {
        type: "reconciliation",
        monthlyTransactions: 24000,
        manualHourlyCost: 45,
        hoursSavedPerMonth: 160,
        discrepancyThreshold: 1000
      }
    },
    {
      id: "forge",
      number: "02",
      tabLabel: "PROJECT 02",
      date: "JAN 2, 2026",
      title: "Forge Ops",
      subtitle: "Diagnosing delivery bottlenecks and boosting sprint predictability by 42%.",
      category: "Agile Delivery & Engineering Velocity Analytics",
      theme: "yellow",
      heroBg: "#f5be38",
      accentColor: "#18181b",
      badgeColor: "#000000",
      image: "/images/forge.jpg",
      tags: ["Agile Scrum", "Jira Analytics", "Capacity Planning", "UAT Framework"],
      stats: [
        { label: "Sprint Predictability", value: "+42%" },
        { label: "Cycle Time Reduction", value: "-3.4 days" },
        { label: "UAT Defect Leakage", value: "< 2.1%" }
      ],
      overview: "Forge Ops is an engineering workflow optimization initiative spanning 14 squads. As the Business Analyst, I conducted value-stream mapping, analyzed 18 months of Jira delivery data, and aligned product management and engineering leadership on objective story sizing and capacity planning.",
      problem: "Engineering squads suffered from 38% scope churn mid-sprint, delayed release milestones, and unclear acceptance criteria that generated endless revision loops between QA and developers.",
      solution: "Standardized Given-When-Then Gherkin acceptance criteria, automated Jira-to-Tableau burn-up reports, and instituted pre-sprint Definition of Ready (DoR) gate reviews.",
      deliverables: [
        "Value Stream Mapping & Bottleneck Diagnosis Report",
        "Standardized Epic & User Story Template Suite",
        "Executive Velocity & Capacity Allocation Dashboard",
        "Change Management Playbook & Team Training Curriculum"
      ],
      prototypeData: {
        type: "agile",
        sprintTargetPoints: 65,
        initialPlanned: 60,
        scopeCreepPoints: 15,
        milestones: [
          { id: 1, title: "Stakeholder Discovery & Problem Definition", status: "completed" },
          { id: 2, title: "Historical Jira Delivery Data Extraction & SQL Querying", status: "completed" },
          { id: 3, title: "AS-IS Process Flowchart & Value Stream Map", status: "completed" },
          { id: 4, title: "Draft BRD & User Stories with Acceptance Criteria", status: "active" },
          { id: 5, title: "UAT Test Scripts Execution & Defect Triage", status: "pending" },
          { id: 6, title: "Post-Implementation ROI & Velocity Audit", status: "pending" }
        ]
      }
    },
    {
      id: "nebula",
      number: "03",
      tabLabel: "PROJECT 03",
      date: "NOV 18, 2025",
      title: "Prism BI",
      subtitle: "Translating 14M customer touchpoints into an executive retention and churn forecasting system.",
      category: "Business Intelligence & Churn Analytics",
      theme: "dark-purple",
      heroBg: "#1a162b",
      accentColor: "#8b5cf6",
      badgeColor: "#7c3aed",
      image: "/images/prism.jpg",
      tags: ["Power BI / Tableau", "SQL Cohort Analysis", "Churn Risk Modeling", "Executive Strategy"],
      stats: [
        { label: "ARR Churn Mitigated", value: "$2.4M" },
        { label: "At-Risk Flag Accuracy", value: "91.4%" },
        { label: "C-Suite Dashboard Adoption", value: "100%" }
      ],
      overview: "Prism BI unified fragmented CRM, Stripe billing, and product usage telemetries into an executive-facing early warning churn forecasting dashboard. Defined metric definitions, data governance standards, and customer retention triggers.",
      problem: "Enterprise customer churn was noticed only after contract renewal cancellation. Cross-functional sales, customer success, and product teams lacked a unified definition of an 'active account'.",
      solution: "Formulated a composite Health Score algorithm (0-100), automated daily alerts for at-risk accounts showing 30-day inactivity drops, and provided customer success teams with proactive retention action playbooks.",
      deliverables: [
        "Customer Health Score Metric Definition & Data Dictionary",
        "Interactive Power BI Dashboard with Drill-Down Filters",
        "Automated Slack / Email Alert Integration Schema",
        "Executive Board Presentation on Retention Strategy"
      ]
    }
  ],

  playgroundItems: [
    {
      id: "sticker-1",
      type: "sticker",
      text: "DATA DRIVEN 📊",
      bg: "#fde047",
      color: "#000",
      rotation: -6
    },
    {
      id: "sticker-2",
      type: "sticker",
      text: "SQL QUERY MASTER 🔍",
      bg: "#a7f3d0",
      color: "#000",
      rotation: 8
    },
    {
      id: "sticker-3",
      type: "sticker",
      text: "GAP ANALYSIS ⚙️",
      bg: "#fbcfe8",
      color: "#000",
      rotation: -3
    },
    {
      id: "sticker-4",
      type: "sticker",
      text: "BRD APPROVED ✅",
      bg: "#fed7aa",
      color: "#000",
      rotation: 5
    }
  ]
};
