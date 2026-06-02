"use client";

import { Settings } from "lucide-react";
import { ThemeId, themes } from "@/config/portfolio";

type SystemsWindowProps = {
  activeMode: "viewer" | "builder";
  activeTheme: ThemeId;
  setActiveTheme: (theme: ThemeId) => void;
  cpuUsage: number;
  memoryUsage: number;
};

export function SystemsWindow({
  activeMode,
  activeTheme,
  setActiveTheme,
  cpuUsage,
  memoryUsage,
}: SystemsWindowProps) {
  return (
    <div className="p-6 space-y-6 select-text selection:bg-indigo-500/30 selection:text-white">
      <div className="flex items-center gap-4 pb-4 border-b border-white/5 select-none">
        <Settings className="w-10 h-10 text-indigo-400" />
        <div>
          <h3 className="text-base font-bold text-white">System Diagnostics</h3>
          <p className="text-xs text-slate-500">Telemetry settings, architecture details and build pipelines.</p>
        </div>
      </div>

      {/* Active Mode telemetry */}
      <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block select-none">
            ENVIRONMENT TELEMETRY
          </span>
          <div className="flex items-center gap-2 mt-2 select-none">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                activeMode === "viewer" ? "bg-emerald-500" : "bg-blue-500"
              } animate-ping`}
            ></span>
            <strong className="text-sm text-white capitalize">{activeMode} Mode active</strong>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
            {activeMode === "viewer"
              ? "Optimized for client visibility and aesthetic clarity. Showing clean layout systems."
              : "Detailed compile-time choices, performance constraints, and database decisions are visible."}
          </p>
        </div>

        <div className="space-y-3 font-mono text-[10px]">
          <div>
            <div className="flex justify-between mb-1 select-none">
              <span className="text-slate-500">COMPILER LOAD (CPU)</span>
              <span className="text-white">{cpuUsage}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${cpuUsage}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 select-none">
              <span className="text-slate-500">MEMORY CONSUMPTION</span>
              <span className="text-white">{memoryUsage}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 transition-all duration-500"
                style={{ width: `${memoryUsage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Wallpaper Selector */}
      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-3 select-none">
          DESKTOP WALLPAPER CONFIGURATION
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 select-none">
          {(Object.keys(themes) as ThemeId[]).map((themeId) => {
            const isActive = activeTheme === themeId;
            return (
              <button
                key={themeId}
                onClick={() => setActiveTheme(themeId)}
                className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                    : "bg-white/[0.01] border-white/5 hover:border-white/10 text-slate-400 hover:text-slate-200"
                }`}
              >
                <span className="text-[10px] font-mono block text-slate-500">Theme</span>
                <strong className="text-xs block mt-1">{themes[themeId].name}</strong>
              </button>
            );
          })}
        </div>
      </div>

      {/* Core Values grid */}
      <div className="p-4 rounded-xl border border-white/5 bg-slate-950">
        <span className="text-[9px] font-mono text-slate-500 uppercase block mb-3 select-none">
          SYSTEM PREFERENCES & CORE VALUES
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center select-none">
          <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg">
            <span className="text-[9px] text-slate-500 block">Performance</span>
            <strong className="text-xs text-white block mt-1">Lightweight build</strong>
          </div>
          <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg">
            <span className="text-[9px] text-slate-500 block">Elegance</span>
            <strong className="text-xs text-emerald-400 block mt-1">Calm UX patterns</strong>
          </div>
          <div className="p-3 bg-white/[0.01] border border-white/5 rounded-lg">
            <span className="text-[9px] text-slate-500 block">Integrity</span>
            <strong className="text-xs text-blue-400 block mt-1">Type Safety</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
