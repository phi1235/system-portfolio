"use client";

import { useEffect, useRef, useState } from "react";
import { WindowId } from "@/config/portfolio";

type TerminalWindowProps = {
  onOpenWindow: (id: WindowId) => void;
};

export function TerminalWindow({ onOpenWindow }: TerminalWindowProps) {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Phi System OS v1.5 (zsh)",
    "Type 'help' to view available commands.",
    "",
  ]);
  const [terminalInput, setTerminalInput] = useState("");
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const args = cmd.split(" ");
    const primaryCmd = args[0];

    let response: string[] = [];

    switch (primaryCmd) {
      case "help":
        response = [
          `phi@macos-portfolio: Available Commands`,
          `-------------------------------------------`,
          `  ls              List active system directory contents`,
          `  cat [file]      Print content of a text module`,
          `  clear           Clear the screen`,
          `  neofetch        Display system and builder information`,
          `  open [app]      Launch a workspace application`,
          `                  App list: about, projects, settings, lab, writings, contact`,
          `  whoami          Display active user metadata`,
        ];
        break;
      case "ls":
        response = [
          `total 4096`,
          `-rw-r--r--   1 phi  staff    256 May 20  about.md`,
          `-rw-r--r--   1 phi  staff   1024 May 20  projects.json`,
          `-rw-r--r--   1 phi  staff    512 May 20  system-integrity.txt`,
          `drwxr-xr-x   3 phi  staff    128 May 20  sandboxes/`,
          `-rw-r--r--   1 phi  staff    110 May 20  writings.db`,
        ];
        break;
      case "cat":
        if (args[1] === "about.md") {
          response = [
            `# About Nguyen Phi`,
            `------------------`,
            `A software engineer specializing in operational engineering, AI integrations,`,
            `and state-driven automation tools. I build modular systems under intense pressure.`,
          ];
        } else if (args[1] === "projects.json") {
          response = [
            `[`,
            `  { "id": "autotest-ai-recorder", "type": "Automation System" },`,
            `  { "id": "ai-chat-workspace", "type": "Fullstack Platform" },`,
            `  { "id": "premium-bank-portal", "type": "UI / FinTech Shell" }`,
            `]`,
            `Tip: Type 'open projects' to launch Finder UI.`,
          ];
        } else if (args[1] === "system-integrity.txt") {
          response = [
            `INTEGRITY LOGS: ALL STABLE`,
            `CPU FOCUS: Autotest element-specific track, next cache queues`,
            `COMPILER: Safe types, responsive breakpoints.`,
          ];
        } else if (args[1] === "writings.db") {
          response = [
            `1. Designing interfaces that clarify system state (May 2026)`,
            `2. How operational products should feel calm under pressure (Apr 2026)`,
            `3. Using structure as a branding layer (Mar 2026)`,
          ];
        } else if (!args[1]) {
          response = ["cat: usage: cat [file_name]"];
        } else {
          response = [`cat: ${args[1]}: File not found.`];
        }
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "whoami":
        response = [
          `USER: Guest Explorer`,
          `BUILDER: Nguyen Phi — Software Engineer`,
          `SESSION: Secure Web Socket Connection`,
          `ACCESS: Interactive Developer Terminal`,
        ];
        break;
      case "open":
        const target = args[1];
        let appKey: WindowId | null = null;
        if (target === "about") appKey = "about";
        else if (target === "projects" || target === "finder") appKey = "projects";
        else if (target === "settings" || target === "systems") appKey = "systems";
        else if (target === "lab" || target === "safari") appKey = "lab";
        else if (target === "writings" || target === "notes") appKey = "writings";
        else if (target === "contact" || target === "mail") appKey = "contact";

        if (appKey) {
          onOpenWindow(appKey);
          response = [`Opening application window: ${target}`];
        } else if (!target) {
          response = ["open: please specify an app ID (e.g. 'open projects')"];
        } else {
          response = [`open: app '${target}' not found in active system.`];
        }
        break;
      case "neofetch":
        response = [
          `               ,xX0Xk.          phi@macos-portfolio`,
          `            .d0KKKKKKK0x.       -------------------`,
          `          .o0KKKKKKKKKKKK0d.    OS: Phi System OS Sonoma v1.5`,
          `        .l0KKKKKKKKKKKKKKKKK0l. Kernel: Next.js 15.5 React compiled static`,
          `       .cOKKKKKKKKKKKKKKKKKKK0o Uptime: 42 mins`,
          `      .xKKKKKKKKKKKKKKKKKKKKKKK Shell: zsh (interactive console)`,
          `     .oKKKKKKKKKKKKKKKKKKKKKKK0 Resolution: Responsive Breakpoints`,
          `     ,OKKKKKKKKKKKKKKKKKKKKKKKK CPU: Full Stack Logic Core`,
          `     ;0KKKKKKKKKKKKKKKKKKKKKKKX GPU: WebGL & Tailwind v4 shaders`,
          `     .OKKKKKKKKKKKKKKKKKKKKKKKK Memory: Rust/TypeScript (Compile Safe)`,
          `      .xKKKKKKKKKKKKKKKKKKKKKK0 Theme: Dynamic Mesh Gradient Dark`,
          `       .lKKKKKKKKKKKKKKKKKKKK0' `,
        ];
        break;
      default:
        response = [`zsh: command not found: ${primaryCmd}`];
    }

    setTerminalHistory((prev) => [...prev, `phi@macos-portfolio ~ % ${terminalInput}`, ...response, ""]);
    setTerminalInput("");
  };

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  return (
    <div className="p-4 bg-black/90 font-mono text-[11px] h-[340px] flex flex-col justify-between rounded-b-xl border-t border-white/5 select-text selection:bg-blue-500/30 selection:text-white">
      <div ref={terminalBodyRef} className="flex-1 overflow-y-auto space-y-1.5 pr-2 custom-scrollbar">
        {terminalHistory.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed text-slate-300">
            {line}
          </div>
        ))}
      </div>

      <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 border-t border-white/5 pt-3 mt-3 select-none">
        <span className="text-emerald-400 font-bold">phi@macos-portfolio ~ %</span>
        <input
          type="text"
          value={terminalInput}
          onChange={(e) => setTerminalInput(e.target.value)}
          className="flex-grow bg-transparent border-0 outline-none text-slate-200"
          placeholder="help, ls, neofetch, open..."
          autoFocus
        />
      </form>
    </div>
  );
}
