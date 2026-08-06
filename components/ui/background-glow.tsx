"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]"
        animate={{
          x: [0, 120, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="fixed bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
        animate={{
          x: [0, -120, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />
    </>
  );
}