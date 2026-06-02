"use client";

import { User, FolderGit2, Terminal as TerminalIcon, Settings, BookOpen, Mail } from "lucide-react";
import { WindowId } from "@/config/portfolio";

type DesktopIconsProps = {
  onOpenWindow: (id: WindowId) => void;
};

export function DesktopIcons({ onOpenWindow }: DesktopIconsProps) {
  const icons: { id: WindowId; label: string; icon: React.ReactNode; gradient: string; activeColor: string }[] = [
    {
      id: "about",
      label: "About Phi",
      icon: <User className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300" />,
      gradient: "from-emerald-500/20 to-blue-500/10",
      activeColor: "group-hover:border-emerald-500/40",
    },
    {
      id: "projects",
      label: "Projects",
      icon: <FolderGit2 className="w-5 h-5 text-teal-400 group-hover:text-teal-300" />,
      gradient: "from-teal-500/20 to-emerald-500/10",
      activeColor: "group-hover:border-emerald-500/40",
    },
    {
      id: "terminal",
      label: "Terminal",
      icon: <TerminalIcon className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />,
      gradient: "from-slate-800 to-slate-900",
      activeColor: "group-hover:border-blue-500/40",
    },
    {
      id: "systems",
      label: "System Config",
      icon: <Settings className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />,
      gradient: "from-indigo-500/20 to-purple-500/10",
      activeColor: "group-hover:border-indigo-500/40",
    },
    {
      id: "writings",
      label: "Notes Writings",
      icon: <BookOpen className="w-5 h-5 text-amber-400 group-hover:text-amber-300" />,
      gradient: "from-amber-500/20 to-rose-500/10",
      activeColor: "group-hover:border-amber-500/40",
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />,
      gradient: "from-blue-500/20 to-cyan-500/10",
      activeColor: "group-hover:border-blue-500/40",
    },
  ];

  return (
    <div className="flex flex-col gap-6 pt-4 items-end justify-start pointer-events-auto">
      {icons.map((item) => (
        <button
          key={item.id}
          onClick={() => onOpenWindow(item.id)}
          className="flex flex-col items-center gap-1.5 w-16 group cursor-pointer"
        >
          <div
            className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${item.gradient} border border-white/10 flex items-center justify-center shadow-md shadow-black/30 group-hover:scale-105 ${item.activeColor} transition-all duration-200`}
          >
            {item.icon}
          </div>
          <span className="text-[10px] text-slate-300 font-medium text-center tracking-wide group-hover:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
