"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Terminal,
  Globe,
  Heart,
  ChevronRight,
  Code,
} from "lucide-react";
import Marquee from "@/components/Marquee";
import { portfolioData } from "@/data/portfolioData";

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState("01");

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-dark border-b border-dark-border">
      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-dark-border">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 01. WHO I AM
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              About Me<span className="text-blue-500">.</span>
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Mengembangkan antarmuka web interaktif, responsif, dan user-friendly berbasis Laravel & NestJS.
          </p>
        </div>

        {/* Bio & Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Profile Photo Card (4 cols on desktop, full width stacked on mobile) */}
          <div className="lg:col-span-4 relative group">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="relative w-full h-72 sm:h-80 lg:h-full min-h-[280px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-blue-500/40 bg-dark-card shadow-2xl">
              <img
                src={portfolioData.personal.profilePhoto}
                alt={portfolioData.personal.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-blue-500/30 font-mono text-xs text-white z-10">
                <p className="font-bold text-blue-400">{portfolioData.personal.name}</p>
                <p className="text-[11px] text-muted">{portfolioData.personal.title}</p>
              </div>
            </div>
          </div>

          {/* Bio Text (8 cols on desktop, stacked below photo on mobile) */}
          <div className="lg:col-span-8 flex flex-col justify-between p-6 sm:p-8 bg-dark-card border border-dark-border rounded-2xl space-y-6 shadow-xl">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white font-medium leading-relaxed">
                Halo! Saya <span className="text-blue-400 font-semibold">{portfolioData.personal.name}</span>, seorang Web Developer Enthusiast dan AI Tooling Enthusiast yang menempuh studi D3 Teknik Informatika di Universitas Amikom Yogyakarta.
              </p>
              <p className="text-muted leading-relaxed text-sm sm:text-base">
                {portfolioData.personal.bio}
              </p>
            </div>

            {/* Personal Interests & Languages */}
            <div className="pt-4 border-t border-dark-border/80 flex flex-col sm:flex-row sm:items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase">
                  <Heart className="w-4 h-4 text-blue-500" />
                  <span>Focus & Interest</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(portfolioData.personal.interests || []).map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-dark-surface border border-dark-border rounded-lg text-xs font-mono text-white"
                    >
                      #{interest}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase">
                  <Globe className="w-4 h-4 text-blue-500" />
                  <span>Languages</span>
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-muted">
                  {(portfolioData.personal.languages || []).map((lang, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-300 font-mono">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Showcase: Responsive Grid */}
        <div className="space-y-6 sm:space-y-8 pt-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 02. TECHNICAL SKILLS
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Skills & Tech Stack<span className="text-blue-500">.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Numbered Skill Items */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {(portfolioData.skills || []).map((skill) => {
                const isActive = activeSkill === skill.id;
                return (
                  <button
                    key={skill.id}
                    onClick={() => setActiveSkill(skill.id)}
                    className={`w-full text-left p-4 sm:p-6 rounded-2xl border transition-all flex items-center justify-between group ${
                      isActive
                        ? "bg-dark-card border-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.25)]"
                        : "bg-dark-surface/50 border-dark-border hover:border-blue-500/40 hover:bg-dark-card"
                    }`}
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <span className="text-xl sm:text-2xl md:text-3xl font-mono font-black text-blue-500">
                        {skill.id}
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                          {skill.category}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-muted font-mono">{skill.highlight}</p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isActive ? "text-blue-400 translate-x-1" : "text-muted opacity-40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active Skill Detail Card */}
            <div className="lg:col-span-7">
              {(portfolioData.skills || []).map((skill) => {
                if (skill.id !== activeSkill) return null;
                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="h-full p-6 sm:p-8 bg-dark-card border border-blue-500/40 rounded-2xl flex flex-col justify-between space-y-6 shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-6 sm:p-8 text-6xl sm:text-8xl font-black font-mono text-blue-600/10 pointer-events-none select-none">
                      {skill.id}
                    </div>

                    <div className="space-y-4 relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>CATEGORY // {skill.category}</span>
                      </div>

                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        {skill.description}
                      </p>

                      <div className="pt-4 space-y-2">
                        <div className="text-xs font-mono text-white/70 uppercase tracking-wider">
                          Tech Stack & Tools:
                        </div>
                        <div className="flex flex-wrap gap-2 sm:gap-2.5">
                          {(skill.techs || []).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600/15 border border-blue-500/40 rounded-xl text-xs font-mono font-semibold text-blue-300 shadow-[0_0_12px_rgba(37,99,235,0.2)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-6 sm:space-y-8 pt-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 03. EDUCATION
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Pendidikan Utama<span className="text-blue-500">.</span>
            </h3>
          </div>

          <div className="space-y-6">
            {(portfolioData.education || []).map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-dark-card border border-dark-border hover:border-blue-500/50 rounded-2xl transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold text-white">{edu.institution}</h4>
                        <p className="text-xs sm:text-sm text-blue-400 font-mono">{edu.degree}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs text-muted">
                    <span className="px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-semibold inline-block">
                      {edu.duration}
                    </span>
                    <p className="mt-2 text-white font-semibold">{edu.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competition / Achievement */}
        <div className="space-y-6 sm:space-y-8 pt-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 04. COMPETITION & ACHIEVEMENT
            </div>
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
              Competition / Achievement<span className="text-blue-500">.</span>
            </h3>
          </div>

          <div className="relative border-l-2 border-blue-600/40 ml-3 sm:ml-4 md:ml-6 space-y-8 sm:space-y-12 pl-4 sm:pl-6 md:pl-10">
            {(portfolioData.achievements || []).map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Glowing Blue Dot Marker */}
                <div className="absolute -left-[21px] sm:-left-[31px] md:-left-[47px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-black border-2 border-blue-500 group-hover:bg-blue-500 shadow-[0_0_15px_#2563eb] transition-all" />

                <div className="p-6 sm:p-8 bg-dark-card border border-dark-border hover:border-blue-500/60 rounded-2xl transition-all space-y-6 shadow-xl">
                  {/* Proof Image Banner at top of competition card */}
                  {item.image && (
                    <div className="relative w-full h-40 sm:h-48 md:h-64 rounded-xl overflow-hidden border border-dark-border group-hover:border-blue-500/50 transition-colors">
                      <img
                        src={item.image}
                        alt={item.role}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-40 pointer-events-none" />
                    </div>
                  )}

                  {/* Achievement Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-dark-border pb-4 sm:pb-6">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-mono font-black text-xs text-blue-400 shrink-0">
                        <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white">{item.role}</h4>
                        <p className="text-xs sm:text-sm font-semibold text-blue-400">
                          {item.company} •{" "}
                          <span className="text-muted font-normal">{item.type}</span>
                        </p>
                      </div>
                    </div>
                    <div className="font-mono text-xs space-y-1 text-left sm:text-right">
                      <div className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 inline-block font-semibold">
                        {item.duration}
                      </div>
                      <p className="text-muted text-[11px]">{item.location}</p>
                    </div>
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-muted">
                    {(item.bullets || []).map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 sm:gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech / Competency Pills */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-dark-border/60">
                    {(item.techStack || []).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-dark-surface border border-dark-border rounded-lg text-xs font-mono text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Repeating Motto Banner Section */}
      <div className="mt-16 sm:mt-24 pt-6 sm:pt-8 pb-4 bg-dark-pure border-t border-b border-blue-500/20 overflow-hidden w-full">
        <Marquee text={portfolioData.personal.motto} repeat={4} stroke={false} />
      </div>
    </section>
  );
}
