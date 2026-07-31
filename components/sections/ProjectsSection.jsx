"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X, Sparkles, Code2, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Fullstack", "Frontend", "Backend Framework", "Databases"];

  const filteredProjects = filter === "All"
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-28 bg-dark-pure border-b border-dark-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        {/* Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-dark-border">
          <div>
            <div className="text-xs uppercase tracking-widest text-blue-400 font-mono font-semibold mb-2">
              // 05. FEATURED PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
              Projects & Engineering<span className="text-blue-500">.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  filter === cat
                    ? "bg-blue-600 text-white font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    : "bg-dark-card border border-dark-border text-muted hover:text-white hover:border-blue-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-dark-card border border-dark-border hover:border-blue-500/80 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(37,99,235,0.25)]"
            >
              {/* Thumbnail Container with Real Image */}
              <div
                className={`relative h-56 bg-gradient-to-br ${project.thumbnailColor} p-6 flex flex-col justify-between overflow-hidden border-b border-dark-border`}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-black/40 to-transparent pointer-events-none" />

                {/* Tech Tags in Blue Pills */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-blue-500/40 rounded-full text-[11px] font-mono font-medium text-blue-300 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project Title Badge */}
                <div className="relative z-10 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-blue-400 font-bold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {/* Hover Action Overlay: Blue Glow + "View Details" */}
                <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold font-mono tracking-wider uppercase rounded-full shadow-[0_0_20px_#2563eb] flex items-center gap-2"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-muted text-sm leading-relaxed line-clamp-3">
                  {project.shortDesc}
                </p>

                {/* Links Footer */}
                <div className="pt-4 border-t border-dark-border flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-blue-400 hover:text-white transition-colors flex items-center gap-1 group/link"
                  >
                    <span>Architecture & Metrics</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-colors"
                      title="View Code on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-blue-400 transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-dark-card border border-blue-500/50 rounded-2xl shadow-2xl overflow-hidden z-10 my-8"
            >
              {/* Modal Header */}
              <div
                className={`p-8 bg-gradient-to-br ${selectedProject.thumbnailColor} border-b border-dark-border relative space-y-4`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/50 hover:bg-blue-600 text-white transition-colors border border-white/10"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-500/40 text-blue-300 font-mono text-xs">
                  <span>{selectedProject.category}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-extrabold text-white">
                  {selectedProject.name}
                </h3>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
                    // Overview & Features
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
                    // Tech Stack Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/40 rounded-lg text-xs font-mono text-blue-300 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics & Performance Stats */}
                {selectedProject.stats && (
                  <div className="p-4 bg-dark-surface border border-dark-border rounded-xl grid grid-cols-2 gap-4">
                    {Object.entries(selectedProject.stats).map(([k, v]) => (
                      <div key={k} className="space-y-0.5">
                        <span className="text-[10px] uppercase font-mono text-muted tracking-wider">
                          {k}
                        </span>
                        <p className="text-lg font-mono font-bold text-white">{v}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Footer CTAs */}
              <div className="p-6 bg-dark-surface border-t border-dark-border flex items-center justify-between gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-dark-card border border-dark-border hover:border-white text-white text-xs font-mono font-semibold rounded-lg transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>

                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold rounded-lg transition-all shadow-[0_0_20px_#2563eb] flex items-center gap-2"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
