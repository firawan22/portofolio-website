"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Fullstack Web App",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#2563eb", "#3b82f6", "#ffffff"],
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-dark-pure border-b border-dark-border">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold">
            // 08. INITIATE COLLABORATION
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1]">
            Ready to start the project<span className="text-blue-500">?</span>
          </h2>
          <p className="text-muted text-sm sm:text-base md:text-xl font-light leading-relaxed">
            Have an upcoming digital product, brand redesign, or fullstack application? Send a line below or reach out directly.
          </p>
        </div>

        {/* Contact Form & Direct Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Form Side (7 Cols on Desktop, Full Width on Mobile) */}
          <div className="lg:col-span-7 bg-dark-card border border-dark-border p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl space-y-6">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 sm:py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto shadow-[0_0_30px_#2563eb]">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Message Transmitted!</h3>
                <p className="text-muted text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. I will review your request and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-dark-surface border border-dark-border hover:border-blue-500 text-white font-mono text-xs rounded-lg transition-colors min-h-[44px]"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-muted tracking-wider">
                      Your Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 bg-dark-surface border border-dark-border focus:border-blue-500 rounded-xl text-white placeholder-muted/50 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-sans min-h-[44px]"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono text-muted tracking-wider">
                      Email Address <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 sm:py-3.5 bg-dark-surface border border-dark-border focus:border-blue-500 rounded-xl text-white placeholder-muted/50 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-sans min-h-[44px]"
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono text-muted tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-dark-surface border border-dark-border focus:border-blue-500 rounded-xl text-white text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-sans min-h-[44px]"
                  >
                    <option value="Fullstack Web App">Fullstack Web App (Next.js / Laravel)</option>
                    <option value="Frontend Architecture">Frontend Architecture & Design Tokens</option>
                    <option value="API Development">API Microservices & Backend Integration</option>
                    <option value="Consulting & Audit">Performance Audit & Code Review</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono text-muted tracking-wider">
                    Message Details <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly describe your project scope, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 sm:py-3.5 bg-dark-surface border border-dark-border focus:border-blue-500 rounded-xl text-white placeholder-muted/50 text-base sm:text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all font-sans resize-none"
                  />
                </div>

                {/* Submit Button: Minimum 48px touch target */}
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider font-mono rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_45px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center gap-2 group min-h-[48px]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start the Project</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Contact Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Email Direct Box */}
            <div className="p-6 sm:p-8 bg-dark-card border border-dark-border rounded-2xl space-y-4 relative overflow-hidden">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)] shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted">
                  Direct Email Contact
                </h4>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-blue-400 transition-colors underline underline-offset-4 decoration-blue-500/50 hover:decoration-blue-500 font-mono block mt-1 break-all"
                >
                  {portfolioData.personal.email}
                </a>
              </div>

              <button
                onClick={copyEmail}
                className="w-full py-3 bg-dark-surface border border-dark-border hover:border-blue-500 text-xs font-mono font-medium text-white rounded-lg transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Media Row */}
            <div className="p-6 sm:p-8 bg-dark-card border border-dark-border rounded-2xl space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                // Social Media & Networks
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/firawan-luthfiy-m-rafiq-017b7b386/" },
                  { icon: Github, name: "GitHub", href: "https://github.com/firawan22" },
                  { icon: Instagram, name: "Instagram (@firawanluth)", href: "https://instagram.com/firawanluth" },
                  { icon: Mail, name: "Email Direct", href: "mailto:firawanrafik@gmail.com" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-dark-surface border border-dark-border text-white hover:text-blue-400 hover:border-blue-500 hover:bg-blue-600/10 transition-all flex items-center gap-2.5 text-xs font-mono font-medium group min-h-[44px]"
                  >
                    <s.icon className="w-4 h-4 text-white group-hover:text-blue-400 transition-colors shrink-0" />
                    <span className="truncate">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
