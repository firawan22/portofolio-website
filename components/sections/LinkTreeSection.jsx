"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  FileText,
  Calendar,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function LinkTreeSection() {
  const iconMap = {
    Github: Github,
    Linkedin: Linkedin,
    Twitter: Twitter,
    Mail: Mail,
    FileText: FileText,
    Calendar: Calendar,
  };

  return (
    <section id="linktree" className="relative py-28 bg-dark border-b border-dark-border">
      {/* Radial Blue Aura Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-12 text-center">
        {/* Profile Avatar with Blue Glow Ring */}
        <div className="space-y-4 flex flex-col items-center">
          <div className="relative group">
            {/* Animated Blue Aura Glow Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 blur-lg opacity-80 group-hover:opacity-100 transition-opacity animate-pulse-slow" />

            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-black bg-dark-card overflow-hidden flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-blue-900 to-black flex items-center justify-center font-extrabold text-3xl font-mono text-white shadow-inner">
                AR
              </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-blue-600 border-2 border-black flex items-center justify-center text-white shadow-lg">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>

          {/* Name & Tagline */}
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              <span>{portfolioData.personal.name}</span>
              <span className="text-blue-500 font-extrabold">.</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
              {portfolioData.personal.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Available for Client Builds & Advisory</span>
            </div>
          </div>
        </div>

        {/* Stacked White Buttons with Blue Hover State */}
        <div className="space-y-4">
          {(portfolioData.linksTree || []).map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ArrowUpRight;
            return (
              <motion.a
                key={idx}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="group w-full p-4 md:p-5 bg-dark-card hover:bg-blue-600 border border-dark-border hover:border-blue-400 rounded-2xl transition-all duration-300 flex items-center justify-between shadow-xl hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-dark-surface group-hover:bg-black/30 border border-dark-border group-hover:border-white/20 flex items-center justify-center text-blue-400 group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-white transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-muted group-hover:text-blue-100 transition-colors line-clamp-1">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-dark-surface group-hover:bg-white/20 flex items-center justify-center text-muted group-hover:text-white transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
