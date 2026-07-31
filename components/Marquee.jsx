"use client";
import { motion } from "framer-motion";

export default function Marquee({
  text = "FULLSTACK DEVELOPER • CREATIVE CODE • ",
  repeat = 4,
  reverse = false,
  className = "",
  stroke = false,
}) {
  const content = Array(repeat).fill(text).join(" ");

  return (
    <div className="relative w-full overflow-hidden whitespace-nowrap py-3 select-none">
      <motion.div
        className={`inline-block ${className}`}
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      >
        <span
          className={`text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight ${
            stroke
              ? "text-stroke-white opacity-20 hover:opacity-40 transition-opacity"
              : "text-white opacity-10"
          }`}
        >
          {content}
        </span>
        <span
          className={`text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight ${
            stroke
              ? "text-stroke-white opacity-20 hover:opacity-40 transition-opacity"
              : "text-white opacity-10"
          }`}
        >
          {content}
        </span>
      </motion.div>
    </div>
  );
}
