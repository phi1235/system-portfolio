export type Project = {
  id: string;
  name: string;
  type: string;
  summary: string;
  challenge: string;
  architecture: string;
  outcome: string;
  decisions: string;
  stack: string[];
  status: string;
  accent: string;
  metric: string;
  color: string;
  link?: string;
  github?: string;
};

export type WindowId = "about" | "projects" | "terminal" | "systems" | "lab" | "writings" | "contact";

export type WindowInstance = {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  zIndex: number;
};

export type ThemeId = "space" | "sunset" | "forest" | "cyber";

export const themes: Record<ThemeId, { name: string; bgGlows: string[]; starColors: string[] }> = {
  space: {
    name: "Deep Space",
    bgGlows: ["bg-indigo-900/10", "bg-blue-950/15", "bg-emerald-950/5"],
    starColors: ["rgba(16, 185, 129, 0.45)", "rgba(59, 130, 246, 0.45)", "rgba(255, 255, 255, 0.55)", "rgba(139, 92, 246, 0.4)"]
  },
  sunset: {
    name: "Sunset Purple",
    bgGlows: ["bg-rose-900/20", "bg-purple-950/15", "bg-orange-950/10"],
    starColors: ["rgba(244, 63, 94, 0.45)", "rgba(168, 85, 247, 0.45)", "rgba(255, 255, 255, 0.55)", "rgba(249, 115, 22, 0.4)"]
  },
  forest: {
    name: "Aurora Forest",
    bgGlows: ["bg-emerald-900/20", "bg-teal-950/15", "bg-green-950/10"],
    starColors: ["rgba(16, 185, 129, 0.55)", "rgba(45, 212, 191, 0.45)", "rgba(255, 255, 255, 0.55)", "rgba(34, 197, 94, 0.4)"]
  },
  cyber: {
    name: "Cyberpunk Neon",
    bgGlows: ["bg-fuchsia-900/20", "bg-cyan-950/15", "bg-pink-950/10"],
    starColors: ["rgba(236, 72, 153, 0.55)", "rgba(6, 182, 212, 0.55)", "rgba(255, 255, 255, 0.55)", "rgba(244, 63, 94, 0.4)"]
  }
};

export const projects: Project[] = [
  {
    id: "autotest-ai-recorder",
    name: "Autotest AI Recorder",
    type: "Automation System",
    summary: "A robust browser extension and tracking script designed to capture complex user interactions (such as Angular focus changes and button clicks) and translate them into stable automated test step JSON schemas.",
    challenge: "Traditional recorders capture volatile click coordinates and target generic nodes, causing fragile selectors and frequent test breakages on dynamic single-page applications.",
    architecture: "Engineered a framework-agnostic event broker employing focus tracking, element-specific validation (ignoring layout wrappers), and contextual Angular attribute evaluation (e.g. formcontrolname).",
    outcome: "Improved interaction capture stability by 85%, dramatically reducing step-adjustment times and simplifying integration with backend test suites.",
    decisions: "Adopted semantic focus/blur listeners rather than standard layout click-interceptors, and prioritized attribute-based CSS selectors over unstable absolute DOM paths.",
    stack: ["JavaScript", "Chrome Extensions", "CSS Selectors", "JSON Schemas", "Event Loop"],
    status: "Active project",
    accent: "Focus logic",
    metric: "85% selector stability improvement",
    color: "from-blue-500/20 to-indigo-500/10",
    github: "https://github.com/nguyen-phi/autotest-ai"
  },
  {
    id: "ai-chat-workspace",
    name: "AI Project Generation Portal",
    type: "Fullstack Platform",
    summary: "An interactive, wizard-based system that automates the generation of Business Requirement Documents (BRDs), developer tasks, mock database schemas, and AI instructions based on brief user prompts.",
    challenge: "Integrating 20+ disparate API endpoints into a cohesive 5-step React wizard while maintaining smooth state caching and resilient error rollbacks.",
    architecture: "Built modular Step controllers backed by queue managers, WebSockets for telemetry streams, and transaction-safe schema parsers.",
    outcome: "Reduced time-to-project-scaffold from 3 days to under 4 minutes, allowing fast prototyping of enterprise microservices.",
    decisions: "Utilized Redis caching layers for wizard steps and introduced schema-validation stages before committing instructions to database stores.",
    stack: ["Next.js", "Redis", "TypeScript", "WebSockets", "Node.js", "Express"],
    status: "Live dashboard",
    accent: "Wizard orchestration",
    metric: "Scaffolding time: 3 days → 4 mins",
    color: "from-purple-500/20 to-pink-500/10",
    link: "https://projectportal.phi.system"
  },
  {
    id: "premium-bank-portal",
    name: "Corporate Premium Bank Portal",
    type: "UI / FinTech Shell",
    summary: "A state-of-the-art UI shell for high-end banking approvals and corporate finance, utilizing refined multi-layered elevation, Banking Blue layouts, and highly optimized data grids.",
    challenge: "Designing rich, complex financial dashboards that are exceptionally dense yet remain extremely clean, intuitive, and performant.",
    architecture: "Highly modular layout using custom CSS variables, custom elevation models, and custom chart wrappers decoupled from heavy external layout libraries.",
    outcome: "Elevated standard corporate modern visuals to a distinct 'Premium Financial' aesthetic, enhancing confidence in approval queues.",
    decisions: "Crafted a custom styling token layer (HSL-based) instead of standard Tailwind defaults to achieve deep rich blues and clean grid spacing.",
    stack: ["React", "Tailwind CSS", "Data Grids", "SVG Visualization", "UX Tokens"],
    status: "Client review",
    accent: "Visual premium",
    metric: "60fps dashboard scrolling speed",
    color: "from-teal-500/20 to-emerald-500/10"
  }
];

export const initialWindows = (topZ: number): Record<WindowId, WindowInstance> => ({
  about: { id: "about", title: "About Nguyen Phi", isOpen: true, isMinimized: false, isMaximized: false, x: 80, y: 80, zIndex: topZ },
  projects: { id: "projects", title: "Finder — Projects", isOpen: false, isMinimized: false, isMaximized: false, x: 140, y: 120, zIndex: topZ - 1 },
  terminal: { id: "terminal", title: "Terminal — zsh", isOpen: false, isMinimized: false, isMaximized: false, x: 200, y: 160, zIndex: topZ - 2 },
  systems: { id: "systems", title: "System Preferences", isOpen: false, isMinimized: false, isMaximized: false, x: 260, y: 200, zIndex: topZ - 3 },
  lab: { id: "lab", title: "Safari — Labs & Sandboxes", isOpen: false, isMinimized: false, isMaximized: false, x: 120, y: 160, zIndex: topZ - 4 },
  writings: { id: "writings", title: "Notes", isOpen: false, isMinimized: false, isMaximized: false, x: 220, y: 220, zIndex: topZ - 5 },
  contact: { id: "contact", title: "Mail — Contact Gate", isOpen: false, isMinimized: false, isMaximized: false, x: 300, y: 240, zIndex: topZ - 6 },
});
