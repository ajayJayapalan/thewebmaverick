"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

import { motion } from "motion/react";

interface HeroProps {
  onExploreTools: () => void;
  onViewCollections: () => void;
}

export function Hero() {
  const handleExploreTools = () => {
    const toolsSection = document.getElementById("tools");
    if (toolsSection) {
      const yOffset = -100; // offset in pixels (negative = scroll higher)
      const y =
        toolsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full blur-2xl" />
        </motion.div>
      </div>

      {/* Floating CSS shapes */}
      <motion.div
        className="absolute top-32 left-[10%] text-primary/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
          <rect width="60" height="60" rx="12" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-48 right-[15%] text-secondary/30"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor">
          <circle cx="25" cy="25" r="25" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[20%] text-primary/20"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
          <polygon points="20,0 40,40 0,40" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
        >
          <Sparkles className="h-4 w-4" />
          <span>Completely Free CSS Tools for Designers & Developers</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight"
        >
          Play CSS Effects
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            with The CSS Maverick
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Free tools to design colors, gradients, and shadows with precision. Be
          the Maverick of CSS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={handleExploreTools}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
          >
            Explore Tools
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
