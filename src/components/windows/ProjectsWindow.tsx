"use client";

import { useState } from "react";
import { Folder, Compass, FileText, X, ExternalLink } from "lucide-react";
import { Project, projects, WindowId } from "@/config/portfolio";

type ProjectsWindowProps = {
  onOpenWindow: (id: WindowId) => void;
};

export function ProjectsWindow({ onOpenWindow }: ProjectsWindowProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex h-[420px] divide-x divide-white/5 select-text selection:bg-emerald-500/30 selection:text-white">
      {/* Sidebar Folder list */}
      <div className="w-[180px] p-3 space-y-1.5 flex-shrink-0 bg-slate-950/40 select-none">
        <span className="text-[9px] font-mono text-slate-500 tracking-wider block px-2 mb-2">FAVORITES</span>
        <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-xs text-emerald-400 bg-emerald-500/10 font-medium cursor-pointer">
          <Folder className="w-4 h-4 text-emerald-400" />
          All Projects
        </button>
        <button
          onClick={() => onOpenWindow("lab")}
          className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-xs text-slate-400 hover:text-slate-200 hover:bg-white/[0.02] cursor-pointer"
        >
          <Compass className="w-4 h-4 text-slate-500" />
          Lab Sandboxes
        </button>
      </div>

      {/* Folder content area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              className={`p-4 rounded-xl border transition-all cursor-pointer group flex flex-col justify-between h-[160px] ${
                selectedProject?.id === p.id
                  ? "bg-emerald-500/10 border-emerald-500/40"
                  : "bg-white/[0.01] border-white/5 hover:border-emerald-500/20"
              }`}
            >
              <div>
                <div className="flex justify-between items-start">
                  <FileText className="w-7 h-7 text-teal-400 group-hover:scale-105 transition-transform" />
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{p.type}</span>
                </div>
                <h4 className="text-xs font-bold text-white mt-2 group-hover:text-emerald-400 transition-colors">
                  {p.name}
                </h4>
                <p className="text-[11px] text-slate-400 leading-snug line-clamp-2 mt-1">{p.summary}</p>
              </div>
              <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mt-2">
                <span>{p.status}</span>
                <span className="text-emerald-500">{p.metric}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail overlay panel for selected project */}
        {selectedProject && (
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4 animate-[fadeIn_0.2s_ease-out]">
            <div className="flex justify-between items-center pb-2 border-b border-white/5 select-none">
              <div>
                <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">
                  {selectedProject.type}
                </span>
                <h3 className="text-sm font-bold text-white">{selectedProject.name}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 text-slate-500 hover:text-white rounded hover:bg-white/5 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">The Challenge</h4>
                <p className="text-slate-300 leading-normal text-[11px]">{selectedProject.challenge}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Architecture</h4>
                <p className="text-slate-300 leading-normal text-[11px]">{selectedProject.architecture}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-3 border-t border-white/5">
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Outcome & Decisions</h4>
                <p className="text-slate-300 leading-normal text-[11px]">{selectedProject.outcome}</p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Tech Stack</h4>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedProject.stack.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-mono bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-slate-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            {(selectedProject.github || selectedProject.link) && (
              <div className="flex justify-end gap-3 pt-3 border-t border-white/5 select-none">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-[10px] font-bold hover:bg-white/5 transition-all text-slate-300 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-white mr-0.5" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 text-slate-950 font-bold text-[10px] hover:bg-emerald-400 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Preview
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
