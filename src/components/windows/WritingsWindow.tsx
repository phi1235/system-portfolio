"use client";

import { useState } from "react";

type Article = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
};

const articles: Article[] = [
  {
    id: "clarifying-state",
    date: "May 20, 2026",
    title: "Designing interfaces that clarify system state",
    excerpt: "Why traditional continuous chat logs fail to build confident mental models for complex automation workflows.",
    content: [
      "Operating-system-like layouts achieve high visual clarity because they organize system density into recognizable mental bins. When orchestrating advanced automated steps, users need to immediately recognize where a process stands without wading through blocks of repetitive chat histories.",
      "By representing states via modular sub-windows, absolute status bars, and focal traffic indicators, we create a calm, high-fidelity experience that helps operators confidently audit automated flows. A structured interface builds immediate user confidence by laying bare the underlying machine constraints.",
    ],
  },
  {
    id: "operational-calmness",
    date: "April 14, 2026",
    title: "How operational products feel calm under pressure",
    excerpt: "Reducing interface clutter during telemetry fluctuations or intensive compiler tasks.",
    content: [
      "High-density system tools are prone to flashing alerts and chaotic charts that trigger designer fatigue. To construct an interface that remains calm under intense diagnostic pressure, we must filter ambient telemetry fluctuations into gradual updates.",
      "A calm system doesn't scream for focus at every cycle. Decoupling rapid state loops from high-frequency DOM repaints keeps user focus steady. Utilizing HSL color shifts instead of disruptive sound clips or red flashing bars ensures structural telemetry feels organic and controlled.",
    ],
  },
  {
    id: "structure-as-brand",
    date: "March 08, 2026",
    title: "Using structure as a branding layer",
    excerpt: "Moving beyond basic text sites toward premium interactive identities that tell a story.",
    content: [
      "Recruiters and clients view dozens of standard portfolio sites daily, usually styled with the same static grid frameworks. Creating an interactive macOS or iOS desktop environment is more than an aesthetic gimmick—it communicates your professional standard before a single line of work is audited.",
      "An interface that simulates dynamic window focus, localized terminal execution, and robust persistence represents systems-thinking and layout precision. When the portfolio environment itself is engineered as a robust operating model, structure becomes the strongest branding layer.",
    ],
  },
];

export function WritingsWindow() {
  const [selectedId, setSelectedId] = useState<string>("clarifying-state");

  const currentArticle = articles.find((a) => a.id === selectedId) || articles[0];

  return (
    <div className="flex h-[380px] divide-x divide-white/5 select-text selection:bg-emerald-500/30 selection:text-white">
      {/* Sidebar List */}
      <div className="w-[200px] p-3 space-y-1 bg-slate-950/40 flex-shrink-0 select-none overflow-y-auto">
        <span className="text-[9px] font-mono text-slate-500 block px-2 mb-2 uppercase tracking-widest">
          Writings DB
        </span>
        {articles.map((art) => {
          const isActive = art.id === selectedId;
          return (
            <button
              key={art.id}
              onClick={() => setSelectedId(art.id)}
              className={`w-full text-left p-2 rounded-lg text-xs leading-tight transition-all cursor-pointer ${
                isActive
                  ? "bg-emerald-500/10 text-emerald-400 font-medium"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"
              }`}
            >
              {art.title}
            </button>
          );
        })}
      </div>

      {/* Article Panel */}
      <div className="flex-grow p-5 overflow-y-auto space-y-4">
        <div>
          <span className="text-[10px] font-mono text-emerald-400 select-none">{currentArticle.date}</span>
          <h3 className="text-base font-bold text-white mt-1 leading-snug">{currentArticle.title}</h3>
        </div>
        <div className="space-y-3.5">
          <p className="text-[11px] font-mono italic text-slate-400 border-l-2 border-emerald-500/30 pl-2 leading-relaxed">
            {currentArticle.excerpt}
          </p>
          {currentArticle.content.map((para, idx) => (
            <p key={idx} className="text-xs text-slate-300 leading-relaxed text-justify">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
