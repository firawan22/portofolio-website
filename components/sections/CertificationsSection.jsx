"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28 bg-dark border-b border-dark-border">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-dark-border">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 06. VERIFIED CREDENTIALS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Certifications & Badges<span className="text-blue-500">.</span>
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Industry-recognized certifications from Hacktiv8, IBM, Dicoding, and RevoU in AI Development, Web Development, and Software Engineering.
          </p>
        </div>

        {/* Certificate Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative bg-dark-card border border-dark-border hover:border-blue-500/80 rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
            >
              {/* Blue Accent Top Frame Indicator */}
              <div className="absolute top-0 left-6 sm:left-8 right-6 sm:right-8 h-[2px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0_0_10px_#3b82f6]" />

              <div className="space-y-4 sm:space-y-5">
                {/* Certificate Image Preview */}
                {cert.image && (
                  <div className="relative h-40 sm:h-44 w-full rounded-xl overflow-hidden border border-dark-border group-hover:border-blue-500/50 transition-colors">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>
                )}

                {/* Top Badge Row */}
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-[0_0_15px_rgba(37,99,235,0.2)] shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-dark-surface border border-dark-border text-blue-400">
                    {cert.badgeType}
                  </span>
                </div>

                {/* Certificate Title & Org */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted font-mono">{cert.issuer}</p>
                </div>
              </div>

              {/* Certificate Footer Details */}
              <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-dark-border flex items-center justify-between font-mono text-xs">
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase text-muted">Issued Date</span>
                  <p className="text-white font-semibold text-xs sm:text-sm">{cert.date}</p>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white transition-all flex items-center gap-1.5 font-sans font-medium text-xs min-h-[38px]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
