import { motion } from "framer-motion";
import { Github, ArrowRight, Star, GitFork } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section
      id="contribute"
      className="w-full bg-white border-t border-[#E5E5E5] border-b border-[#E5E5E5]"
      aria-labelledby="opensource-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-10 lg:mb-16">

          <h2
            id="opensource-heading"
            className="text-[2.25rem] sm:text-[3rem] font-bold text-black leading-[1.08] tracking-[-0.02em] lg:text-6xl font-sans">
            Built in the Open
          </h2>
          {/* Description always visible */}
          <p className="mt-5 max-w-2xl leading-relaxed text-base text-secondary-foreground">
            ​TempWallets is developed transparently with community collaboration.   
Developers, students, and Web3 builders are welcome to contribute, experiment, and improve the ecosystem.
          
          
          
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Stats + CTAs — desktop only for stats/heading/description */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col">

            {/* Repo identity */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                <Github size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-medium uppercase tracking-widest mb-0.5">
                  Open Source
                </p>
                <a
                  href="https://github.com/tempwallets"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TempWallets GitHub repository"
                  className="text-base font-bold text-black hover:underline">
                  tempwallets / core
                </a>
              </div>
            </div>

            {/* Open source line — desktop only */}
            <p className="hidden md:block leading-relaxed mb-10 max-w-sm text-secondary-foreground text-base">
              TempWallets is now open source and happy to built collaboratively with developers and the Web3 community.
            
            </p>

            {/* CTA — desktop only */}
            <div className="hidden md:flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/tempwallets"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View TempWallets repository on GitHub"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-base hover:border-foreground/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">
                View Repository
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right: Code terminal */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="group flex flex-col gap-4">

            <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
              {/* Terminal top bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-neutral-900 border-b border-neutral-700">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-neutral-400 font-mono">
                  tempwallets / core — bash
                </span>
              </div>

              {/* Terminal body */}
              <div className="bg-neutral-950 px-6 py-7 font-mono text-sm leading-7">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 select-none">$</span>
                  <span className="text-neutral-200">git clone https://github.com/tempwallets/core</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 select-none">$</span>
                  <span className="text-neutral-200">cd core &amp;&amp; npm install</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 select-none">$</span>
                  <span className="text-neutral-200">npm run dev</span>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-green-400">✓</span> Ready in 1.2s
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-green-400">✓</span> Wallet engine initialized
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-green-400">✓</span> Multi-chain modules loaded
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400">
                    <span className="text-green-400">✓</span> WalletConnect bridge active
                  </div>
                </div>
                <div className="mt-5 text-neutral-200">
                  &gt; Temporary wallet ready 🚀
                </div>
              </div>

              {/* Repo stats footer bar */}
              <div className="flex items-center justify-between px-5 py-3 bg-neutral-900 border-t border-neutral-700">
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                    TypeScript
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star size={11} className="text-neutral-400" />
                    1.2k
                  </span>
                  <span className="flex items-center gap-1.5">
                    <GitFork size={11} className="text-neutral-400" />
                    300
                  </span>
                </div>
                <span className="text-xs text-neutral-500">MIT License</span>
              </div>
            </div>
            {/* Mobile: view repo button below the terminal card */}
            <div className="block md:hidden mt-4">
              <a
                href="https://github.com/tempwallets"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:border-foreground/40 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                View Repository
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default OpenSourceSection;