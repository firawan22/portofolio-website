"use client";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Trophy, GitCommit, Rocket } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function RewindsSection() {
  return (
    <section id="rewinds" className="relative py-20 sm:py-28 bg-dark-pure border-b border-dark-border">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-dark-border">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 07. YEAR IN REVIEW
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Rewinds & Milestones<span className="text-blue-500">.</span>
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Annual retrospective tracking major technical breakthroughs, certifications, and project milestones.
          </p>
        </div>

        {/* Timeline Grid: 1 col on mobile, 2 on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {(portfolioData.rewinds || []).map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 bg-dark-card border border-dark-border hover:border-blue-500/60 rounded-2xl space-y-6 transition-all group hover:shadow-[0_0_30px_rgba(37,99,235,0.25)] relative overflow-hidden flex flex-col justify-between"
            >
              {/* Year Watermark */}
              <div className="absolute top-2 right-4 text-5xl sm:text-7xl font-black font-mono text-blue-600/10 group-hover:text-blue-600/20 transition-colors pointer-events-none select-none">
                {item.year}
              </div>

              {/* Blue Timestamp Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-bold shadow-[0_0_12px_rgba(37,99,235,0.3)]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>// {item.year}</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 bg-dark-surface border border-dark-border rounded-lg text-white">
                  {item.category}
                </span>
              </div>

              <div className="space-y-2 relative z-10 flex-1">
                <h3 className="text-lg sm:text-xl font-extrabold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Metric Highlight Box */}
              <div className="pt-4 border-t border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 relative z-10">
                <span className="text-[10px] sm:text-xs font-mono text-muted uppercase">Key Achievement Metric:</span>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-mono font-bold text-xs self-start sm:self-auto">
                  <Trophy className="w-3.5 h-3.5 text-blue-400" />
                  <span>{item.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
