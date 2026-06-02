"use client";

import { useEffect, useState } from "react";

export function AnalogClock() {
  const [clockTime, setClockTime] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClockTime(new Date());
    const timer = setInterval(() => setClockTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!clockTime) {
    return (
      <div className="w-[150px] h-[150px] rounded-[32px] bg-slate-900/15 border border-white/5 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-3 relative select-none">
        <span className="text-[8px] font-mono text-slate-500 tracking-wider mb-1 uppercase">SONOMA CLOCK</span>
        <div className="w-24 h-24 rounded-full border border-white/10 relative bg-black/25 flex items-center justify-center" />
      </div>
    );
  }

  const hours = clockTime.getHours();
  const minutes = clockTime.getMinutes();
  const seconds = clockTime.getSeconds();

  const hourAngle = (hours % 12) * 30 + minutes * 0.5;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const secondAngle = seconds * 6;

  return (
    <div className="w-[150px] h-[150px] rounded-[32px] bg-slate-900/15 border border-white/5 shadow-lg backdrop-blur-xl flex flex-col items-center justify-center p-3 relative select-none pointer-events-auto">
      <span className="text-[8px] font-mono text-slate-500 tracking-wider mb-1 uppercase">SONOMA CLOCK</span>
      <div className="w-24 h-24 rounded-full border border-white/10 relative bg-black/25 flex items-center justify-center">
        {/* Clock Numbers / Markings */}
        <div className="absolute top-1 text-[8px] font-mono text-slate-600">12</div>
        <div className="absolute bottom-1 text-[8px] font-mono text-slate-600">6</div>
        <div className="absolute left-1.5 text-[8px] font-mono text-slate-600">9</div>
        <div className="absolute right-1.5 text-[8px] font-mono text-slate-600">3</div>

        {/* Clock Hands Container (Perfect center pivot) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Hour Hand */}
          <div
            style={{
              transform: `rotate(${hourAngle}deg)`,
              transformOrigin: "bottom center",
            }}
            className="absolute w-1 h-7 bg-slate-200 rounded-full bottom-[50%] left-[calc(50%-2px)] origin-bottom transition-transform duration-500"
          />
          {/* Minute Hand */}
          <div
            style={{
              transform: `rotate(${minuteAngle}deg)`,
              transformOrigin: "bottom center",
            }}
            className="absolute w-0.5 h-10 bg-slate-400 rounded-full bottom-[50%] left-[calc(50%-1px)] origin-bottom transition-transform duration-500"
          />
          {/* Second Hand */}
          <div
            style={{
              transform: `rotate(${secondAngle}deg)`,
              transformOrigin: "bottom center",
            }}
            className="absolute w-[1px] h-[11px] bg-emerald-400 bottom-[50%] left-[50%] origin-bottom"
          />
          {/* Center Pivot Dot */}
          <div className="absolute w-2 h-2 rounded-full bg-emerald-400 border border-slate-900 z-10 shadow-[0_0_6px_#10b981]" />
        </div>
      </div>
    </div>
  );
}
