"use client";

import { Flame } from "lucide-react";

export function LabWindow() {
  const sandboxes = [
    {
      type: "React Flow",
      title: "Orchestrator Visualizer",
      description: "A dynamic, node-based flowchart simulator designed to trace automated agent execution steps and conditional pathways.",
      badge: "STABLE",
      badgeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    },
    {
      type: "Go / WASM",
      title: "In-Browser KV Store",
      description: "An isolated, low-latency transaction registry engine compiled to WebAssembly, powering fast key-value transactions client-side.",
      badge: "EXPERIMENTAL",
      badgeColor: "text-blue-400 border-blue-500/20 bg-blue-500/5",
    },
    {
      type: "SSE Server",
      title: "Diagnostic Data Stream",
      description: "A server-sent event receiver tracking system telemetry, rendering real-time graphs and telemetry feeds without polling.",
      badge: "WIP",
      badgeColor: "text-amber-400 border-amber-500/20 bg-amber-500/5",
    },
  ];

  return (
    <div className="flex flex-col h-[400px] select-text selection:bg-rose-500/30 selection:text-white">
      {/* Mock Browser URL Bar */}
      <div className="h-9 bg-slate-950 border-b border-white/5 flex items-center px-4 gap-2 text-xs select-none flex-shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 bg-white/5 border border-white/5 rounded-md px-3 py-0.5 text-[10px] font-mono text-slate-400 text-center select-all cursor-text max-w-md mx-auto">
          https://phi.system/modules/lab
        </div>
      </div>

      {/* Safari Page Content */}
      <div className="flex-grow p-6 overflow-y-auto space-y-6">
        <div className="flex items-center gap-2 select-none">
          <Flame className="w-5 h-5 text-emerald-400 animate-pulse" />
          <h3 className="text-sm font-bold text-white">Staged prototypes & sandboxes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sandboxes.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.01] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-slate-500 block uppercase select-none">{item.type}</span>
                <h4 className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-4 flex items-center">
                <span
                  className={`text-[8px] font-mono border px-1.5 py-0.5 rounded tracking-wide select-none ${item.badgeColor}`}
                >
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
