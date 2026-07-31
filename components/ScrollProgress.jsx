"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top Blue Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 z-50 origin-left shadow-[0_0_12px_#2563eb]"
        style={{ scaleX }}
      />

      {/* Floating Bottom-Right Percentage Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 px-4 py-2 bg-dark-card/80 backdrop-blur-md border border-dark-border rounded-full shadow-2xl"
      >
        <span className="text-xs tracking-widest uppercase font-medium text-muted">
          Scroll to Discover
        </span>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold">
          <span>{percent}%</span>
          <ArrowDown className="w-3 h-3 text-blue-400 animate-bounce" />
        </div>
      </motion.div>
    </>
  );
}
