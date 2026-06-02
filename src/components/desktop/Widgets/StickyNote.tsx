"use client";

import { useEffect, useState } from "react";

const DEFAULT_STICKY_TEXT =
  "Welcome to Phi System!\n\nThis is an interactive macOS Sonoma developer workspace.\n\n- Click & Drag any window\n- Run commands in Terminal zsh\n- Swap dynamic wallpapers on the top right bar!\n\nDouble-click here to write your notes.";

export function StickyNote() {
  const [stickyText, setStickyText] = useState(DEFAULT_STICKY_TEXT);

  useEffect(() => {
    const saved = localStorage.getItem("phi_system_sticky_text");
    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setStickyText(saved);
    }
  }, []);

  const handleChange = (text: string) => {
    setStickyText(text);
    localStorage.setItem("phi_system_sticky_text", text);
  };

  return (
    <div className="w-[220px] h-[180px] rounded-[24px] bg-yellow-400/10 border border-yellow-400/20 shadow-md backdrop-blur-xl flex flex-col justify-between p-4 relative group/sticky pointer-events-auto">
      <div className="flex justify-between items-center pb-2 border-b border-yellow-400/10 select-none">
        <span className="text-[8px] font-mono text-yellow-400/60 uppercase tracking-widest">Sticky Note</span>
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
      </div>
      <textarea
        value={stickyText}
        onChange={(e) => handleChange(e.target.value)}
        className="flex-1 bg-transparent border-0 outline-none text-[11px] text-yellow-100/90 leading-relaxed resize-none mt-2 pr-1 font-sans selection:bg-yellow-400/30"
        placeholder="Type your sticky note..."
      />
      <div className="text-[8px] font-mono text-yellow-400/30 text-right select-none">Sonoma Widget</div>
    </div>
  );
}
