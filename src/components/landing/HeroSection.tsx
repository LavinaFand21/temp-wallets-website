import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";

const words = ["Crypto", "Instant", "Disposable"];

const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const word = words[currentWord];

    if (!isDeleting) {
      if (displayText.length < word.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(word.slice(0, displayText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, currentWord]);

  return (
    <AuroraBackground className="min-h-[80vh] h-auto" showRadialGradient={true}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content — centered on mobile, left-aligned on desktop */}
          <div className="py-[50px] text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em]">

              <span className="block">Your First</span>
              <span className="block text-[#a167a8] font-extrabold">
                {displayText}
                <span className="inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-middle animate-[pulse_1s_steps(1)_infinite]" />
              </span>
              <span className="block">Wallet.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0">

              ​Safely interact with new dApps, test protocols, or receive crypto without exposing your primary wallet.
            
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8">

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a
                  href="#how-it-works"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Get Started
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://app.tempwallets.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm sm:text-base hover:border-foreground/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                  Launch Wallet
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-sm text-muted-foreground">

              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                100% Instant
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Multi-Chain
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                No Seed Phrase
              </span>
            </motion.div>
          </div>

          {/* Right side - subtle abstract decoration (desktop only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center">

            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-3xl border border-border/60 rotate-6" />
              <div className="absolute inset-4 rounded-3xl border border-border/40 -rotate-3" />
              <div className="absolute inset-8 rounded-3xl border border-border/30 rotate-2" />
              <div className="absolute inset-12 rounded-3xl bg-secondary/30" />
              <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-3 h-3 rounded-full bg-primary/20" />
              <div className="absolute top-1/4 right-0 translate-x-4 w-2 h-2 rounded-full bg-primary/15" />
              <div className="absolute bottom-1/4 right-0 translate-x-6 w-4 h-4 rounded-full bg-primary/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </AuroraBackground>);

};

export default HeroSection;