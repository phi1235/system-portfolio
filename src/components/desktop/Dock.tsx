"use client";

import { User, FolderGit2, Terminal as TerminalIcon, Settings, Compass, BookOpen, Mail } from "lucide-react";
import { WindowId, WindowInstance } from "@/config/portfolio";
import { useState } from "react";

type DockProps = {
  windows: Record<WindowId, WindowInstance>;
  onOpenWindow: (id: WindowId) => void;
};

export function Dock({ windows, onOpenWindow }: DockProps) {
  const [bouncingIcon, setBouncingIcon] = useState<WindowId | null>(null);

  const handleClick = (id: WindowId) => {
    setBouncingIcon(id);
    onOpenWindow(id);
    setTimeout(() => {
      setBouncingIcon(null);
    }, 800); // 800ms duration for macOS-like double bounce
  };

  const dockItems: { id: WindowId; label: string; icon: React.ReactNode; bg: string; text: string }[] = [
    {
      id: "about",
      label: "About Me",
      icon: <User className="w-5 h-5" />,
      bg: "from-emerald-500/20 to-blue-500/10",
      text: "text-emerald-400",
    },
    {
      id: "projects",
      label: "Projects Finder",
      icon: <FolderGit2 className="w-5 h-5" />,
      bg: "from-teal-500/20 to-emerald-500/10",
      text: "text-teal-400",
    },
    {
      id: "terminal",
      label: "zsh Terminal",
      icon: <TerminalIcon className="w-5 h-5" />,
      bg: "bg-slate-800",
      text: "text-blue-400",
    },
    {
      id: "systems",
      label: "Settings",
      icon: <Settings className="w-5 h-5" />,
      bg: "from-indigo-500/20 to-purple-500/10",
      text: "text-indigo-400",
    },
    {
      id: "lab",
      label: "Safari Lab",
      icon: <Compass className="w-5 h-5" />,
      bg: "from-rose-500/20 to-orange-500/10",
      text: "text-rose-400",
    },
    {
      id: "writings",
      label: "Notes Writings",
      icon: <BookOpen className="w-5 h-5" />,
      bg: "from-amber-500/20 to-yellow-500/10",
      text: "text-amber-400",
    },
    {
      id: "contact",
      label: "Mail Contact",
      icon: <Mail className="w-5 h-5" />,
      bg: "from-blue-500/20 to-cyan-500/10",
      text: "text-blue-400",
    },
  ];

  return (
    <footer className="absolute bottom-4 inset-x-0 h-16 flex justify-center z-50 pointer-events-auto">
      <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 px-4 py-2 rounded-[22px] flex items-center gap-4 shadow-2xl shadow-black/80">
        {dockItems.map((item) => {
          const win = windows[item.id];
          const isOpen = win?.isOpen && !win?.isMinimized;
          const isBouncing = bouncingIcon === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.bg} border border-white/5 hover:scale-110 flex items-center justify-center relative group transition-transform duration-200 cursor-pointer ${
                isBouncing ? "animate-[bounce_0.4s_infinite]" : ""
              }`}
            >
              <span className={`${item.text}`}>{item.icon}</span>

              {/* Tooltip */}
              <span className="absolute -top-10 bg-slate-900/90 border border-white/5 text-[10px] text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
                {item.label}
              </span>

              {/* Active Indicator Dot */}
              {isOpen && <span className="absolute bottom-1 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#10b981]" />}
            </button>
          );
        })}
      </div>
    </footer>
  );
}
