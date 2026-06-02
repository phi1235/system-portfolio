"use client";

import { Mail, FileDown } from "lucide-react";

export function ContactWindow() {
  return (
    <div className="p-6 space-y-6 select-text selection:bg-blue-500/30 selection:text-white">
      <div className="text-center space-y-2 select-none">
        <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          CONTACT DIRECTORY
        </span>
        <h3 className="text-lg font-bold text-white leading-tight">Let&apos;s build modular systems together.</h3>
        <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
          I am open to full-time engineering positions, technical partnerships, automation tooling collaborations, and building state-driven developer environments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
        {/* Contact Links */}
        <div className="space-y-3 flex flex-col justify-center">
          <a
            href="mailto:nguyenphi.dev@gmail.com"
            className="py-3 px-4 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer select-none"
          >
            <Mail className="w-4 h-4" />
            Initialize email connection
          </a>

          <div className="grid grid-cols-2 gap-3 select-none">
            <a
              href="https://github.com/nguyen-phi"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.01] text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white mr-1.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nguyen-phi"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 px-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.01] text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-blue-400 mr-1.5" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Resume Card */}
        <div className="p-4 rounded-xl border border-white/5 bg-slate-950/40 space-y-3 flex flex-col justify-between hover:border-white/10 transition-all">
          <div className="space-y-1">
            <div className="flex items-center justify-between select-none">
              <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider">RESUME SHEET</span>
              <span className="text-[8px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1 rounded font-mono">PDF</span>
            </div>
            <h4 className="text-xs font-bold text-white">Nguyen-Phi-Resume.pdf</h4>
            <p className="text-[10px] text-slate-400 leading-normal">
              A comprehensive technical resume compiling my automated testing expertise, fullstack background, and core tooling highlights.
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume asset download simulated. Connect your resume file here!");
            }}
            className="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-[10px] font-bold text-slate-300 hover:text-white transition-all flex items-center justify-center gap-1.5 select-none cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
