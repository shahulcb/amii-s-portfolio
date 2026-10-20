export const portfolioData = {
  designer: {
    name: "AMEENA FATHIMA",
    role: "Data Analyst & ML Engineer",
    location: "Open to Remote & Worldwide",
    status: "OPEN TO DATA ANALYST & ML ENGINEER ROLES",
    tagline: {
      line1: "I turn complex datasets",
      line2: "into intelligent, impactful models."
    },
    bio: "I'm a Data Analyst & Machine Learning Engineer passionate about translating raw, multi-source data into executive business intelligence dashboards, predictive ML pipelines, and real-time computer vision systems. 📊 From building interactive Power BI dashboards with DAX to training Scikit-Learn pipelines and tracking facial mesh coordinates with OpenCV & MediaPipe, I build data-driven tools that solve real problems. Let's connect! 🤝",
    avatar: "/images/ameena-avatar.jpg",
    workspace: "/images/workspace.jpg",
    email: "ameenafathimawork@gmail.com",
    availability: "Open to Full-Time Data Analyst & ML Engineer Roles (Remote / Hybrid)",
    resumeUrl: "#",
    socials: {
      github: "https://github.com/ameenafathimawork",
      linkedin: "https://linkedin.com",
      email: "mailto:ameenafathimawork@gmail.com"
    }
  },

  skills: [
    {
      id: "power-bi",
      name: "Power BI & DAX",
      color: "#fbbf24",
      bgClass: "pill-yellow",
      icon: "bar-chart-2",
      stampEmoji: "📊",
      description: "Data modeling, Power Query transformations, DAX calculated measures, KPI scorecards, and interactive drill-down reports."
    },
    {
      id: "machine-learning",
      name: "Machine Learning & Scikit-Learn",
      color: "#10b981",
      bgClass: "pill-green",
      icon: "cpu",
      stampEmoji: "🤖",
      description: "Random Forest classification, ColumnTransformer pipelines, class imbalance resolution, cross-validation, and model serialization with Joblib."
    },
    {
      id: "computer-vision",
      name: "Computer Vision & OpenCV",
      color: "#ec4899",
      bgClass: "pill-pink",
      icon: "eye",
      stampEmoji: "👁️",
      description: "MediaPipe Face Mesh (468 keypoints), real-time video feed capture, geometric ratio iris tracking, and orientation classification at 60 FPS."
    },
    {
      id: "python-analytics",
      name: "Python & Streamlit",
      color: "#2563eb",
      bgClass: "pill-blue",
      icon: "terminal",
      stampEmoji: "🐍",
      description: "Pandas & NumPy data wrangling, exploratory data analysis, interactive Streamlit web applications, and automated metric evaluation."
    }
  ],

  projects: [
    {
      id: "hospital-dashboard",
      number: "01",
      tabLabel: "PROJECT 01",
      date: "POWER BI & DAX",
      title: "Hospital Management Dashboard",
      subtitle: "Comprehensive healthcare intelligence dashboard tracking department volume, patient length of stay, and doctor billing revenue.",
      category: "Power BI Project",
      projectType: "Power BI Project",
      theme: "dark",
      heroBg: "#0f1115",
      accentColor: "#0284c7",
      badgeColor: "#38bdf8",
      image: "/images/hospital-dashboard.jpg",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      tags: ["Power BI", "DAX Measures", "Power Query", "Data Modeling", "Healthcare KPI"],
      githubUrl: "https://github.com/ameenafathimawork/hospital-management-dashboard",
      liveUrl: "https://app.powerbi.com/",
      stats: [
        { label: "Total Revenue Tracked", value: "$14.2M" },
        { label: "Total Patients Analyzed", value: "48,500+" },
        { label: "Avg Length of Stay", value: "4.1 Days" }
      ],
      bulletPoints: [
        "Technologies Used: Power BI, DAX, Power Query, Data Modeling.",
        "Created KPI cards for Total Revenue, Total Patients, and Avg Length of Stay using DAX measures.",
        "Built clustered bar charts to analyze patient volume and revenue generated across departments.",
        "Designed a doctor performance table tracking patient count and billing revenue per physician.",
        "Plotted monthly admission trends over time using line charts and date hierarchies.",
        "Added interactive slicers to filter all dashboard visuals by patient gender and discharge outcome.",
        "Visualized patient volume, inpatient duration, and revenue trends using an area chart."
      ],
      overview: "An enterprise-grade healthcare performance dashboard developed in Power BI to streamline clinical operations and financial monitoring. Leveraging multi-table star-schema data modeling in Power Query and optimized DAX calculations, the dashboard equips medical administrators with real-time KPI metrics, department capacity tracking, and physician billing analytics.",
      problem: "Hospital operations relied on fragmented spreadsheets, causing delayed insight into department patient volume bottlenecks, fluctuating length of stay (ALOS), and lack of standardized physician revenue accountability.",
      solution: "Architected a unified Power BI report with interactive cross-filtering slicers (by patient gender and discharge outcome), dynamic DAX measures for core KPIs, clustered bar charts for department volumes, and temporal area charts mapping admission flows.",
      deliverables: [
        "Interactive Power BI Dashboard with Real-Time DAX KPI Cards",
        "Departmental Volume & Revenue Clustered Bar Visualizations",
        "Doctor Performance & Billing Leaderboard Table",
        "Multi-Dimensional Patient Slicers (Gender, Discharge Status, Date Hierarchies)"
      ],
      prototypeData: {
        type: "healthcare",
        defaultDept: "Cardiology",
        defaultVolume: 12400,
        avgStay: 4.1,
        billingPerPatient: 290
      }
    },
    {
      id: "employee-attrition",
      number: "02",
      tabLabel: "PROJECT 02",
      date: "MACHINE LEARNING",
      title: "Employee Attrition Prediction",
      subtitle: "Predictive machine learning pipeline and interactive Streamlit web app anticipating workforce turnover.",
      category: "Machine Learning Project",
      projectType: "Machine Learning Project",
      theme: "yellow",
      heroBg: "#f5be38",
      accentColor: "#18181b",
      badgeColor: "#000000",
      image: "/images/attrition-prediction.jpg",
      technologies: ["Python", "Pandas", "Scikit-Learn", "Random Forest", "Streamlit", "Joblib"],
      tags: ["Python", "Pandas", "Scikit-Learn", "Random Forest", "Streamlit", "Joblib"],
      githubUrl: "https://github.com/ameenafathimawork/employee-attrition-prediction",
      liveUrl: "https://github.com/ameenafathimawork/employee-attrition-prediction",
      stats: [
        { label: "Dataset Processed", value: "10,000 Rows" },
        { label: "Classification Model", value: "Random Forest" },
        { label: "Inference Latency", value: "< 20ms" }
      ],
      bulletPoints: [
        "Technologies Used: Python, Pandas, Scikit-Learn, Random Forest, Streamlit, Joblib.",
        "Cleaned and preprocessed a 10,000-row employee dataset, removing constant identifier columns.",
        "Trained a Random Forest Classifier with balanced class weights using a stratified 80/20 train-test split.",
        "Built a Scikit-Learn Pipeline combining ColumnTransformer, StandardScaler, and OneHotEncoder.",
        "Developed an interactive Streamlit web app allowing users to input employee attributes.",
        "Generated real-time attrition risk assessments and likelihood probabilities via model serialization."
      ],
      overview: "An end-to-end Machine Learning solution designed to help human resource leaders predict employee resignation risks before departures occur. Featuring a clean Scikit-Learn pipeline and serialized via Joblib, the system provides zero-latency probability scores and feature attribution through an intuitive Streamlit interface.",
      problem: "Unanticipated employee churn drives recruitment costs and damages team velocity. HR lacked proactive diagnostic tools to identify at-risk personnel based on multidimensional indicators like overtime, compensation, and role tenure.",
      solution: "Engineered an automated preprocessing pipeline on a 10,000-row dataset, addressed class imbalance using balanced Random Forest estimators, and deployed the trained model into a user-friendly Streamlit web app for instant risk evaluation.",
      deliverables: [
        "Data Preprocessing & Feature Engineering Pipeline (ColumnTransformer)",
        "Trained Random Forest Classifier with Stratified Cross-Validation",
        "Serialized Model Artifact (.joblib) for Instant Inference",
        "Interactive Streamlit Application with Real-Time Risk Probability Gauges"
      ],
      prototypeData: {
        type: "attrition",
        defaultOvertime: "Yes",
        defaultMonthlyIncome: 4800,
        defaultTenure: 3,
        defaultSatisfaction: 2
      }
    },
    {
      id: "eye-gaze",
      number: "03",
      tabLabel: "PROJECT 03",
      date: "COMPUTER VISION",
      title: "Real-Time Eye Gaze Direction Detection",
      subtitle: "High-precision iris coordinate tracking & gaze orientation classification running at 60 FPS.",
      category: "Computer Vision Project",
      projectType: "Computer Vision Project",
      theme: "dark-purple",
      heroBg: "#0f172a",
      accentColor: "#06b6d4",
      badgeColor: "#0ea5e9",
      image: "/images/eye-gaze.jpg",
      technologies: ["Python", "OpenCV", "MediaPipe Face Mesh"],
      tags: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Face Mesh", "Iris Tracking"],
      githubUrl: "https://github.com/ameenafathimawork/eyenew",
      liveUrl: "https://github.com/ameenafathimawork/eyenew",
      stats: [
        { label: "Facial Landmarks", value: "468+ Points" },
        { label: "Gaze Orientations", value: "5 Directions" },
        { label: "Processing Speed", value: "60 FPS" }
      ],
      bulletPoints: [
        "Technologies Used: Python, OpenCV, MediaPipe Face Mesh.",
        "Captured and processed live webcam video feeds using OpenCV with horizontal flip and RGB conversion.",
        "Extracted 468+ facial keypoints and iris coordinates using MediaPipe Face Mesh.",
        "Built a geometric ratio algorithm measuring iris offset relative to eyelid and eye corner boundaries.",
        "Classified gaze into 5 orientations (Left, Right, Up, Down, Center) using normalized spatial thresholds.",
        "Handled zero-division errors for eye closures and displayed real-time text predictions on video."
      ],
      overview: "A lightweight, real-time Computer Vision system capable of classifying eye gaze orientation directly from standard webcam video without requiring specialized hardware or eye trackers. Built on MediaPipe Face Mesh's 468 3D landmark mesh, the algorithm computes geometric iris offsets against eyelid anchors to classify gaze into 5 distinct orientations.",
      problem: "Traditional gaze estimation relies on costly infrared sensors or heavy deep neural nets that suffer latency on standard laptops and trigger crash exceptions when subjects blink or look away.",
      solution: "Developed an efficient geometric iris offset ratio algorithm with zero-division error handling for eye closures, delivering real-time predictions at 60 FPS with horizontal flip for intuitive mirror tracking.",
      deliverables: [
        "OpenCV Live Video Capture & RGB Frame Transformation Pipeline",
        "MediaPipe 468-Point Face Mesh & Iris Landmark Extractor",
        "Spatial Geometric Ratio Algorithm for 5-Orientation Gaze Classification",
        "Robust Eye Closure Exception Handler & Real-Time On-Screen Telemetry HUD"
      ],
      prototypeData: {
        type: "eyegaze",
        orientations: ["Center", "Left", "Right", "Up", "Down"],
        defaultGaze: "Center"
      }
    }
  ],

  playgroundItems: [
    {
      id: "sticker-1",
      type: "sticker",
      text: "POWER BI & DAX 📊",
      bg: "#fde047",
      color: "#000",
      rotation: -5
    },
    {
      id: "sticker-2",
      type: "sticker",
      text: "SCIKIT-LEARN ML 🤖",
      bg: "#a7f3d0",
      color: "#000",
      rotation: 7
    },
    {
      id: "sticker-3",
      type: "sticker",
      text: "MEDIAPIPE CV 👁️",
      bg: "#fbcfe8",
      color: "#000",
      rotation: -3
    },
    {
      id: "sticker-4",
      type: "sticker",
      text: "AMEENA FATHIMA ✨",
      bg: "#fed7aa",
      color: "#000",
      rotation: 4
    }
  ]
};
