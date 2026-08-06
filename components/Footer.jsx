"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-dark-pure text-white pt-16 pb-12 overflow-hidden">
      {/* Electric Blue Divider Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_15px_#2563eb]" />

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-dark-border">
          {/* Col 1: Brand & Status */}
          <div className="md:col-span-2 space-y-4">
            <Link href="#home" className="inline-flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-mono font-bold text-sm shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                FL
              </div>
              <span className="font-bold tracking-tight text-xl text-white">
                FIRAWAN RAFIQ<span className="text-blue-500 font-extrabold ml-0.5">.</span>
              </span>
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Web Developer Enthusiast & AI Tooling Enthusiast • D3 Teknik Informatika Universitas Amikom Yogyakarta.
            </p>

            {/* Live Clock Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-border text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Yogyakarta Local Time: {time || "05:00:00 PM WIB"}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-blue-400 font-mono">
              // Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              {["Home", "About", "Projects", "Certifications", "Rewinds", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-blue-400 font-mono">
              // Social Signals
            </h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/firawan22", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/firawan-luthfiy-m-rafiq-017b7b386/", label: "LinkedIn" },
                { icon: Mail, href: `mailto:${portfolioData.personal.email}`, label: "Email" },
              ].map((s, idx) => (
                <a
                  key={idx}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-muted hover:text-white hover:border-blue-500 hover:bg-blue-600/20 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-muted pt-2">
              Terbuka untuk kolaborasi proyek web & pengembangan aplikasi.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Firawan Luthfiy M Rafiq. All rights reserved.</p>

          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-blue-500 fill-blue-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-dark-card border border-dark-border flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600/30 transition-all">
              <ArrowUp className="w-3.5 h-3.5 text-blue-400 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
