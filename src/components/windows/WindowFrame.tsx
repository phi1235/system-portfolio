"use client";

import React, { useRef } from "react";
import { WindowId } from "@/config/portfolio";

type WindowFrameProps = {
  id: WindowId;
  title: string;
  isMaximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  isFocused: boolean;
  onFocus: () => void;
  onClose: () => void;
  onMinimize: () => void;
  onToggleMaximize: () => void;
  onDragUpdate: (id: WindowId, x: number, y: number) => void;
  children: React.ReactNode;
};

export function WindowFrame({
  id,
  title,
  isMaximized,
  zIndex,
  x,
  y,
  isFocused,
  onFocus,
  onClose,
  onMinimize,
  onToggleMaximize,
  onDragUpdate,
  children,
}: WindowFrameProps) {
  const dragOffset = useRef({ x: 0, y: 0 });

  const startDrag = (e: React.MouseEvent) => {
    onFocus();
    if (isMaximized) return;

    dragOffset.current = {
      x: e.clientX - x,
      y: e.clientY - y,
    };

    const onDrag = (moveEvent: MouseEvent) => {
      const nextX = Math.max(10, Math.min(window.innerWidth - 120, moveEvent.clientX - dragOffset.current.x));
      const nextY = Math.max(30, Math.min(window.innerHeight - 80, moveEvent.clientY - dragOffset.current.y));
      onDragUpdate(id, nextX, nextY);
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  return (
    <div
      onClick={onFocus}
      style={{
        top: isMaximized ? "24px" : `${y}px`,
        left: isMaximized ? "0" : `${x}px`,
        width: isMaximized ? "100%" : "auto",
        height: isMaximized ? "calc(100vh - 24px - 80px)" : "auto",
        zIndex: zIndex,
      }}
      className={`absolute flex flex-col rounded-xl overflow-hidden pointer-events-auto transition-shadow duration-300 macos-window border border-white/5 animate-[fadeIn_0.2s_ease-out] ${
        isFocused ? "macos-window-focused" : ""
      }`}
    >
      {/* Window Header / Traffic Lights */}
      <div
        onMouseDown={startDrag}
        className="h-10 border-b border-white/5 bg-slate-900/40 flex items-center justify-between px-4 cursor-grab active:cursor-grabbing select-none flex-shrink-0"
      >
        <div className="flex items-center gap-2 group/lights">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-rose-500 hover:scale-110 flex items-center justify-center text-[8px] text-rose-950 font-bold transition-transform cursor-pointer"
          >
            <span className="opacity-0 group-hover/lights:opacity-100">×</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-amber-500 hover:scale-110 flex items-center justify-center text-[8px] text-amber-950 font-bold transition-transform cursor-pointer"
          >
            <span className="opacity-0 group-hover/lights:opacity-100">-</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:scale-110 flex items-center justify-center text-[7px] text-emerald-950 font-bold transition-transform cursor-pointer"
          >
            <span className="opacity-0 group-hover/lights:opacity-100">+</span>
          </button>
        </div>

        <span className="text-[11px] font-mono font-medium tracking-wide text-slate-300 select-none">
          {title}
        </span>

        <div className="w-12"></div> {/* Balance spacer */}
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-y-auto max-h-[75vh] w-[320px] md:w-[650px] lg:w-[750px] bg-[#080a10]">
        {children}
      </div>
    </div>
  );
}
