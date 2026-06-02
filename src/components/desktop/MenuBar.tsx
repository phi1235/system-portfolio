"use client";

import { useEffect, useState } from "react";
import { Wifi, Volume2, Battery } from "lucide-react";
import { ThemeId, WindowId } from "@/config/portfolio";

type MenuBarProps = {
  activeMode: "viewer" | "builder";
  setActiveMode: (mode: "viewer" | "builder") => void;
  activeTheme: ThemeId;
  setActiveTheme: (theme: ThemeId) => void;
  onOpenWindow: (id: WindowId) => void;
};

export function MenuBar({
  activeMode,
  setActiveMode,
  activeTheme,
  setActiveTheme,
  onOpenWindow,
}: MenuBarProps) {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 h-6 bg-slate-950/60 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 text-xs font-medium text-slate-300 z-[9999] select-none">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onOpenWindow("about")}
          className="font-semibold text-white hover:text-emerald-400 transition-colors"
        >
           Phi System
        </button>
        <button onClick={() => onOpenWindow("projects")} className="hover:text-white transition-colors">
          Finder
        </button>
        <button onClick={() => onOpenWindow("terminal")} className="hover:text-white transition-colors">
          Terminal
        </button>
        <button onClick={() => onOpenWindow("systems")} className="hover:text-white transition-colors">
          Settings
        </button>
        <button onClick={() => onOpenWindow("writings")} className="hover:text-white transition-colors">
          Notes
        </button>
      </div>

      <div className="flex items-center gap-4 text-[11px]">
        {/* Quick Environment Selector */}
        <div className="flex bg-black/40 p-0.5 rounded-md border border-white/5 mr-2">
          <button
            onClick={() => setActiveMode("viewer")}
            className={`px-2 py-0.5 rounded-sm transition-all cursor-pointer ${
              activeMode === "viewer"
                ? "bg-emerald-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Viewer
          </button>
          <button
            onClick={() => setActiveMode("builder")}
            className={`px-2 py-0.5 rounded-sm transition-all cursor-pointer ${
              activeMode === "builder"
                ? "bg-blue-500 text-white font-bold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Builder
          </button>
        </div>

        {/* Quick Dynamic Wallpaper Changer */}
        <div className="flex items-center gap-1 bg-black/40 px-1.5 py-0.5 rounded-md border border-white/5 mr-1">
          <button
            onClick={() => setActiveTheme("space")}
            title="Deep Space"
            className={`w-2.5 h-2.5 rounded-full bg-emerald-500 transition-all cursor-pointer ${
              activeTheme === "space" ? "scale-125 ring-1 ring-white" : "opacity-60 hover:opacity-100"
            }`}
          />
          <button
            onClick={() => setActiveTheme("sunset")}
            title="Sunset Purple"
            className={`w-2.5 h-2.5 rounded-full bg-rose-500 transition-all cursor-pointer ${
              activeTheme === "sunset" ? "scale-125 ring-1 ring-white" : "opacity-60 hover:opacity-100"
            }`}
          />
          <button
            onClick={() => setActiveTheme("forest")}
            title="Aurora Forest"
            className={`w-2.5 h-2.5 rounded-full bg-teal-400 transition-all cursor-pointer ${
              activeTheme === "forest" ? "scale-125 ring-1 ring-white" : "opacity-60 hover:opacity-100"
            }`}
          />
          <button
            onClick={() => setActiveTheme("cyber")}
            title="Cyberpunk Neon"
            className={`w-2.5 h-2.5 rounded-full bg-fuchsia-500 transition-all cursor-pointer ${
              activeTheme === "cyber" ? "scale-125 ring-1 ring-white" : "opacity-60 hover:opacity-100"
            }`}
          />
        </div>

        <span className="flex items-center gap-1">
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
        </span>
        <span className="flex items-center gap-1">
          <Volume2 className="w-3.5 h-3.5 text-slate-400" />
        </span>
        <span className="flex items-center gap-1 text-[10px]">
          <Battery className="w-4 h-4 text-emerald-500" /> 100%
        </span>
        <span className="font-mono tracking-wider text-slate-200">{currentTime}</span>
      </div>
    </header>
  );
}
