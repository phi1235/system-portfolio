"use client";

import { useEffect, useState } from "react";
import { User, FolderGit2, BookOpen, Mail, Compass, X, Wifi, Battery, AlertCircle } from "lucide-react";
import { ThemeId, themes } from "@/config/portfolio";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { WritingsWindow } from "@/components/windows/WritingsWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { LabWindow } from "@/components/windows/LabWindow";
import { StickyNote } from "@/components/desktop/Widgets/StickyNote";

type MobileDashboardProps = {
  activeTheme: ThemeId;
  setActiveTheme: (theme: ThemeId) => void;
};

export function MobileDashboard({ activeTheme, setActiveTheme }: MobileDashboardProps) {
  const [mobileTime, setMobileTime] = useState("");
  const [activeWindow, setActiveWindow] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setMobileTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  const openApp = (appId: string) => {
    setActiveWindow(appId);
  };

  const closeApp = () => {
    setActiveWindow(null);
  };

  const apps = [
    {
      id: "about",
      label: "About Phi",
      icon: <User className="w-6 h-6 text-emerald-400" />,
      bg: "from-emerald-500/20 to-blue-500/10",
      border: "border-emerald-500/20",
    },
    {
      id: "projects",
      label: "Projects Finder",
      icon: <FolderGit2 className="w-6 h-6 text-teal-400" />,
      bg: "from-teal-500/20 to-emerald-500/10",
      border: "border-teal-500/20",
    },
    {
      id: "writings",
      label: "Notes Writings",
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      bg: "from-amber-500/20 to-rose-500/10",
      border: "border-amber-500/20",
    },
    {
      id: "contact",
      label: "Mail Contact",
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      bg: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/20",
    },
    {
      id: "lab",
      label: "Safari Lab",
      icon: <Compass className="w-6 h-6 text-rose-400" />,
      bg: "from-rose-500/20 to-orange-500/10",
      border: "border-rose-500/20",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col p-4 z-10 selection:bg-emerald-500/30 selection:text-white">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-[10%] left-[-20%] w-[80%] h-[40%] rounded-full ${themes[activeTheme].bgGlows[0]} blur-[100px] opacity-40`}
        />
        <div
          className={`absolute bottom-[10%] right-[-20%] w-[80%] h-[40%] rounded-full ${themes[activeTheme].bgGlows[1]} blur-[100px] opacity-40`}
        />
      </div>

      {/* Simulated Mobile Status bar */}
      <header className="relative z-10 flex justify-between items-center text-[10px] font-bold text-slate-300 font-mono py-1 select-none">
        <span>{mobileTime}</span>
        <div className="flex items-center gap-1.5">
          <span className="flex items-center">
            <span className="w-1 h-2 bg-slate-400 rounded-sm mr-[1px] inline-block" />
            <span className="w-1 h-3 bg-slate-400 rounded-sm mr-[1px] inline-block" />
            <span className="w-1 h-4 bg-emerald-400 rounded-sm inline-block" />
          </span>
          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
          <span className="flex items-center gap-0.5">
            <Battery className="w-4 h-4 text-emerald-500" />
            <span>100%</span>
          </span>
        </div>
      </header>

      {/* Hero Welcome banner */}
      <section className="relative z-10 mt-6 mb-6 flex flex-col space-y-1 select-none">
        <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">MOBILE PORTAL</span>
        <h1 className="text-2xl font-bold tracking-tight text-white leading-snug">Nguyen Phi</h1>
        <p className="text-[11px] text-slate-400 max-w-sm">
          Software Engineer specializing in AI interfaces, fullstack pipelines, and automated test recorders.
        </p>
      </section>

      {/* Dynamic wallpaper quick toggle for Mobile */}
      <section className="relative z-10 bg-black/40 border border-white/5 p-3 rounded-2xl mb-6 select-none">
        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block mb-2">Wallpaper Themes</span>
        <div className="flex gap-2 justify-between">
          {(Object.keys(themes) as ThemeId[]).map((themeId) => {
            const isActive = activeTheme === themeId;
            return (
              <button
                key={themeId}
                onClick={() => setActiveTheme(themeId)}
                className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold text-center cursor-pointer transition-all ${
                  isActive
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-400"
                    : "bg-white/[0.01] border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                {themes[themeId].name.split(" ")[0]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Mobile Widgets: Persistence sticky note */}
      <section className="relative z-10 mb-6 flex justify-center">
        <StickyNote />
      </section>

      {/* Main Grid App Launcher */}
      <section className="relative z-10 flex-grow grid grid-cols-2 gap-4 pb-12 select-none">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => openApp(app.id)}
            className={`p-4 rounded-2xl border ${app.border} bg-gradient-to-tr ${app.bg} flex flex-col justify-between items-start h-[110px] shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-all cursor-pointer`}
          >
            <div className="p-2 rounded-xl bg-black/30 border border-white/5">{app.icon}</div>
            <span className="text-xs font-bold text-slate-200 tracking-wide">{app.label}</span>
          </button>
        ))}

        {/* Terminal Alert (tells mobile users about terminal accessibility) */}
        <div className="col-span-2 p-3 bg-indigo-950/20 border border-indigo-500/10 rounded-2xl flex gap-3 items-center">
          <AlertCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
          <p className="text-[10px] text-slate-400 leading-normal">
            For advanced console workflows and typing interactive scripts, open this portfolio on a Desktop viewport to access the zsh terminal!
          </p>
        </div>
      </section>

      {/* Interactive Mobile Window Content overlay */}
      {activeWindow && (
        <div className="fixed inset-0 bg-[#080a10] z-[99999] flex flex-col animate-[fadeIn_0.2s_ease-out] overflow-hidden">
          {/* Mobile Overlay Header */}
          <div className="h-12 bg-slate-900 border-b border-white/5 flex items-center justify-between px-4 select-none flex-shrink-0">
            <span className="text-xs font-mono font-bold text-slate-300">
              {activeWindow === "about" && "About Phi"}
              {activeWindow === "projects" && "Finder — Projects"}
              {activeWindow === "writings" && "Notes Writings"}
              {activeWindow === "contact" && "Mail Gate"}
              {activeWindow === "lab" && "Safari Lab"}
            </span>
            <button
              onClick={closeApp}
              className="p-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-slate-400 hover:text-white" />
            </button>
          </div>

          {/* Mobile Overlay Body (Wrappers with custom paddings/scorlling) */}
          <div className="flex-1 overflow-y-auto pb-8 bg-slate-950/30">
            {activeWindow === "about" && <AboutWindow onOpenWindow={openApp} />}
            {activeWindow === "projects" && <ProjectsWindow onOpenWindow={openApp} />}
            {activeWindow === "writings" && <WritingsWindow />}
            {activeWindow === "contact" && <ContactWindow />}
            {activeWindow === "lab" && <LabWindow />}
          </div>
        </div>
      )}
    </div>
  );
}
