"use client";

import { useEffect, useState } from "react";

export function BootScreen() {
  const [bootVisible, setBootVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setBootVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!bootVisible) return null;

  return (
    <section className="absolute inset-0 z-[99999] flex flex-col items-center justify-center bg-[#010204]">
      <div className="w-[120px] h-[120px] flex items-center justify-center text-white animate-pulse">
        <svg viewBox="0 0 170 170" className="w-16 h-16 fill-current">
          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.13-1.92-14.34-6.15-3.32-2.72-7.23-7.44-11.71-14.18-4.88-7.24-8.85-15.53-11.91-24.87-3.06-9.35-4.59-18.4-4.59-27.14 0-12.75 2.85-23.08 8.54-30.99 5.69-7.91 12.89-11.9 21.6-11.9 4.34 0 9.21 1.24 14.61 3.73 5.39 2.48 9.17 3.73 11.33 3.73 2.03 0 5.66-1.21 10.9-3.63 5.24-2.42 9.77-3.58 13.59-3.48 10.22.25 18.06 4.02 23.51 11.28-11.45 6.91-17.05 16.03-16.79 27.35.25 8.91 3.52 16.37 9.8 22.38 6.28 6 13.68 9.3 22.21 9.9-1.65 4.83-3.79 9.5-6.42 14.02zM119.22 35.6c0-7.88-2.73-14.88-8.18-21-5.46-6.12-12.15-9.39-20.08-9.8 0 .89-.04 1.83-.13 2.8-.09.97.02 2.09.32 3.35 1.13 6.95 4.14 13.2 9.04 18.75 4.9 5.55 11.1 9.09 18.6 10.63.26-.64.44-1.52.53-2.65.1-.12.1-.21.1-2.08z" />
        </svg>
      </div>
      <div className="w-[180px] h-[3px] bg-white/10 rounded-full overflow-hidden mt-6">
        <div className="h-full bg-slate-200 rounded-full animate-[bootProgress_1.4s_ease-out_forwards]" style={{ width: "100%" }}></div>
      </div>
    </section>
  );
}
