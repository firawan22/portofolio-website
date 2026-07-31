"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Sparkles, Terminal, Code2 } from "lucide-react";
import Marquee from "@/components/Marquee";
import { portfolioData } from "@/data/portfolioData";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-dark-pure border-b border-dark-border"
    >
      {/* Background Gradient Blue Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full my-auto">
        {/* Top Signal Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-xs font-mono mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="uppercase tracking-widest font-medium">
            {portfolioData.personal.status}
          </span>
        </motion.div>

        {/* Oversized Headline with Inline Accent Video/Animation Chip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-white">
            Firawan{" "}
            <span className="inline-flex items-center align-middle mx-1 md:mx-3 px-3 py-1 md:px-5 md:py-2 rounded-2xl bg-dark-card border border-blue-500/40 text-blue-400 shadow-[0_0_30px_rgba(37,99,235,0.3)] rotate-[-1deg] hover:rotate-0 transition-transform">
              <span className="font-mono text-xs md:text-sm font-semibold tracking-wider uppercase text-blue-400 flex items-center gap-2">
                <Code2 className="w-4 h-4 md:w-5 md:h-5 text-blue-500 animate-pulse" />
                <span>Front-end</span>
              </span>
            </span>{" "}
            Luthfiy M Rafiq<span className="text-blue-500">.</span>
          </h1>

          <p className="text-muted text-base md:text-xl max-w-2xl font-light leading-relaxed pt-2">
            {portfolioData.personal.tagline}
          </p>
        </motion.div>

        {/* Hero Interactive Row: CTAs & Decorative Graphic Eye */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-8 pt-4"
        >
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Solid Electric Blue Button */}
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm tracking-wide uppercase rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.7)] transition-all flex items-center justify-center gap-3 group"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start the Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            {/* White Outlined Email Link */}
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto px-6 py-4 bg-transparent border border-white/20 hover:border-blue-500 text-white hover:text-blue-400 font-semibold text-sm rounded-full transition-all flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-mono">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted group-hover:text-blue-400 transition-colors" />
                  <span className="font-mono">{portfolioData.personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Profile Photo Badge */}
          <div className="flex items-center gap-4 bg-dark-card/60 backdrop-blur-md border border-dark-border px-5 py-3 rounded-2xl">
            <div className="relative w-12 h-12 rounded-full border-2 border-blue-500/50 bg-black overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.4)] shrink-0">
              <img
                src="/images/profile/foto-profil.png"
                alt="Firawan Luthfiy M Rafiq"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-xs space-y-0.5">
              <p className="text-white font-mono font-bold">FIRAWAN LUTHFY M RAFIQ</p>
              <p className="text-muted font-mono text-[11px]">Front-end Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-dark-border/80"
        >
          {portfolioData.personal.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-white font-mono flex items-center gap-1">
                <span>{stat.value}</span>
                <span className="text-blue-500 text-2xl">+</span>
              </div>
              <p className="text-xs uppercase tracking-wider text-muted font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Oversized Background Marquee Text */}
      <div className="mt-12 relative z-0">
        <Marquee text={portfolioData.personal.heroMarquee} repeat={3} stroke={true} />
      </div>
    </section>
  );
}
