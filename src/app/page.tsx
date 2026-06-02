"use client";

import { useEffect, useState } from "react";
import { initialWindows, ThemeId, WindowId, WindowInstance } from "@/config/portfolio";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Custom effects
import { BootScreen } from "@/components/effects/BootScreen";
import { Starfield } from "@/components/effects/Starfield";

// Desktop components
import { MenuBar } from "@/components/desktop/MenuBar";
import { DesktopIcons } from "@/components/desktop/DesktopIcons";
import { Dock } from "@/components/desktop/Dock";
import { AnalogClock } from "@/components/desktop/Widgets/AnalogClock";
import { StickyNote } from "@/components/desktop/Widgets/StickyNote";

// Mobile fallback
import { MobileDashboard } from "@/components/mobile/MobileDashboard";

// Window containers & contents
import { WindowFrame } from "@/components/windows/WindowFrame";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { TerminalWindow } from "@/components/windows/TerminalWindow";
import { SystemsWindow } from "@/components/windows/SystemsWindow";
import { LabWindow } from "@/components/windows/LabWindow";
import { WritingsWindow } from "@/components/windows/WritingsWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Shared Global States
  const [activeMode, setActiveMode] = useState<"viewer" | "builder">("viewer");
  const [activeTheme, setActiveTheme] = useState<ThemeId>("space");
  const [topZIndex, setTopZIndex] = useState(11);
  const [windows, setWindows] = useState<Record<WindowId, WindowInstance>>(() => initialWindows(10));

  // Telemetry fluctuation simulator
  const [cpuUsage, setCpuUsage] = useState(14);
  const [memoryUsage, setMemoryUsage] = useState(58);

  useEffect(() => {
    const timer = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return Math.max(5, Math.min(prev + delta, 95));
      });
      setMemoryUsage((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.max(50, Math.min(prev + delta, 78));
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Reset viewport hash and scroll coordinates on initialization
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  // Focus Window (raises z-index stack layer and brings window forward)
  const focusWindow = (id: WindowId) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: true, isMinimized: false, zIndex: nextZ },
    }));
  };

  const closeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isOpen: false },
    }));
  };

  const minimizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMinimized: true },
    }));
  };

  const toggleMaximizeWindow = (id: WindowId) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], isMaximized: !prev[id].isMaximized },
    }));
  };

  const handleDragUpdate = (id: WindowId, nextX: number, nextY: number) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], x: nextX, y: nextY },
    }));
  };

  // If Mobile Viewport detected, dynamically route rendering to mobile dashboard fallback layout
  if (isMobile) {
    return <MobileDashboard activeTheme={activeTheme} setActiveTheme={setActiveTheme} />;
  }

  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans select-none selection:bg-blue-500/30 selection:text-white">
      {/* Boot Splash Loader */}
      <BootScreen />

      {/* Dynamic Background Mesh Shaders & 3D starfield particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/10 blur-[130px] animate-[pulse_10s_infinite]`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-950/15 blur-[120px] animate-[pulse_12s_infinite]`} />
        <div className={`absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full bg-emerald-950/5 blur-[100px] animate-[pulse_8s_infinite]`} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <Starfield activeTheme={activeTheme} />
      </div>

      {/* macOS Sonoma Top Menu Bar */}
      <MenuBar
        activeMode={activeMode}
        setActiveMode={setActiveMode}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        onOpenWindow={focusWindow}
      />

      {/* Desktop Shell Grid Area */}
      <section className="absolute inset-0 pt-12 pb-20 px-6 z-10 grid grid-cols-2 gap-4 pointer-events-none">
        {/* Left column: widgets */}
        <div className="flex flex-col gap-6 pt-4 items-start justify-start">
          <AnalogClock />
          <StickyNote />
        </div>

        {/* Right column: Desktop shortcuts grid */}
        <DesktopIcons onOpenWindow={focusWindow} />
      </section>

      {/* Windows Manager Render Shell Layer */}
      <section className="absolute inset-0 pt-6 pb-20 pointer-events-none z-20">
        {Object.values(windows).map((win) => {
          if (!win.isOpen || win.isMinimized) return null;
          const isFocused = win.zIndex === topZIndex;

          return (
            <WindowFrame
              key={win.id}
              id={win.id}
              title={win.title}
              isMaximized={win.isMaximized}
              zIndex={win.zIndex}
              x={win.x}
              y={win.y}
              isFocused={isFocused}
              onFocus={() => focusWindow(win.id)}
              onClose={() => closeWindow(win.id)}
              onMinimize={() => minimizeWindow(win.id)}
              onToggleMaximize={() => toggleMaximizeWindow(win.id)}
              onDragUpdate={handleDragUpdate}
            >
              {win.id === "about" && <AboutWindow onOpenWindow={focusWindow} />}
              {win.id === "projects" && <ProjectsWindow onOpenWindow={focusWindow} />}
              {win.id === "terminal" && <TerminalWindow onOpenWindow={focusWindow} />}
              {win.id === "systems" && (
                <SystemsWindow
                  activeMode={activeMode}
                  activeTheme={activeTheme}
                  setActiveTheme={setActiveTheme}
                  cpuUsage={cpuUsage}
                  memoryUsage={memoryUsage}
                />
              )}
              {win.id === "lab" && <LabWindow />}
              {win.id === "writings" && <WritingsWindow />}
              {win.id === "contact" && <ContactWindow />}
            </WindowFrame>
          );
        })}
      </section>

      {/* Classic macOS Dock */}
      <Dock windows={windows} onOpenWindow={focusWindow} />
    </main>
  );
}
