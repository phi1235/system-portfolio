"use client";

import { User, Cpu, Layers, Terminal as TerminalIcon, Sparkles } from "lucide-react";
import { WindowId } from "@/config/portfolio";

type AboutWindowProps = {
  onOpenWindow: (id: WindowId) => void;
};

export function AboutWindow({ onOpenWindow }: AboutWindowProps) {
  const skillGroups = [
    {
      title: "Core Languages",
      skills: ["TypeScript / JavaScript", "Go", "Python", "Rust", "HTML5 / CSS3"],
    },
    {
      title: "Frameworks & Runtimes",
      skills: ["React / Next.js", "Node.js / Express", "WASM", "Tailwind CSS v4"],
    },
    {
      title: "Data & Caching",
      skills: ["PostgreSQL", "MongoDB", "Redis Cache", "Durable Queues"],
    },
    {
      title: "Systems & DevOps",
      skills: ["Docker / Containers", "Linux Shell scripting", "OpenVPN 3 Admin", "Git CI/CD"],
    },
  ];

  return (
    <div className="p-6 space-y-6 select-text selection:bg-emerald-500/30 selection:text-white">
      {/* Introduction Banner */}
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="p-4 bg-gradient-to-tr from-emerald-500/20 to-blue-500/10 border border-white/10 rounded-2xl flex-shrink-0 shadow-lg shadow-black/20">
          <User className="w-12 h-12 text-emerald-400 animate-pulse" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-emerald-400">Nguyen Phi</span>.
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed max-w-xl">
            A software engineer specializing in bridging complex system operations, robust backend automation architectures, and premium developer tools. I design systems that remain reliable under state pressure, and build workspaces that feel calming and satisfying to use.
          </p>
        </div>
      </div>

      {/* Specialty Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/5">
        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-emerald-500/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs font-bold text-white">AI System Integrations</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Developing focus-driven user interaction trackers, custom wizard generation tools, and semantic workflow parsers using Claude and Gemini.
          </p>
        </div>
        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-blue-500/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-blue-400" />
            <h4 className="text-xs font-bold text-white">Architecture & Logic</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Creating static compile architectures, modular frontend states, robust web caches, and event-driven API brokers with absolute reliability.
          </p>
        </div>
        <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl hover:border-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h4 className="text-xs font-bold text-white">Premium UX/UI Design</h4>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Crafting beautiful financial and developer portals utilizing tailored HSL palettes, smooth micro-animations, and glassmorphism.
          </p>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="pt-4 border-t border-white/5 space-y-3">
        <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-widest">TECHNICAL MATRIX</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="space-y-2 p-3 bg-black/40 border border-white/5 rounded-xl">
              <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{group.title}</h5>
              <ul className="space-y-1.5">
                {group.skills.map((s, sIdx) => (
                  <li key={sIdx} className="text-[10px] text-slate-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex justify-end gap-3 pt-4 border-t border-white/5 select-none">
        <button
          onClick={() => onOpenWindow("projects")}
          className="px-3.5 py-2 rounded-lg bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/10 cursor-pointer"
        >
          <TerminalIcon className="w-3.5 h-3.5" />
          View Projects Finder
        </button>
      </div>
    </div>
  );
}
