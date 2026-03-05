import { motion } from "framer-motion";
import { Github, ArrowRight, Star, GitFork, Users } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section
      id="contribute"
      className="w-full bg-white border-t border-[#E5E5E5] border-b border-[#E5E5E5]"
      aria-labelledby="opensource-heading">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 lg:mb-20">

          <h2
            id="opensource-heading"
            className="font-display text-[2.25rem] sm:text-[3rem] font-bold text-black leading-[1.08] tracking-[-0.02em] lg:text-7xl">

            Built in the Open
          </h2>
          <p className="hidden md:block mt-5 text-lg text-neutral-600 max-w-2xl leading-relaxed">
            TempWallets is developed transparently with community collaboration.
            Developers and students are welcome to contribute and improve the
            ecosystem.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Stats + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
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

            {/* Stats row */}
            <div className="hidden md:flex flex-wrap gap-5 mb-10">
              {[
              { icon: Star, label: "Stars", value: "1.2k" },
              { icon: GitFork, label: "Forks", value: "300" },
              { icon: Users, label: "Contributors", value: "45" }].
              map(({ icon: Icon, label, value }) =>
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-neutral-200 bg-neutral-50">

                  <Icon size={14} className="text-black" />
                  <span className="text-sm font-semibold text-black">{value}</span>
                  <span className="text-sm text-neutral-500">{label}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <h3 className="hidden md:block text-2xl font-bold text-black mb-4 leading-snug">
              Open Source on GitHub
            </h3>
            <p className="hidden md:block text-base text-neutral-600 leading-relaxed mb-10 max-w-md">
              Fully open-source and auditable. Join our community, review the
              code, submit PRs, or fork and build your own wallet experience on
              top of TempWallets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 md:mt-0 mt-0">
              








              <a
                href="https://github.com/tempwallets"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View TempWallets repository on GitHub"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-base hover:border-foreground/40 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm">

                View Repository
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right: Code terminal mockup — on mobile, view repo button goes below */}
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

              {/* Mobile: view repo button inside terminal section */}
              <div className="block md:hidden px-5 py-3 bg-neutral-900 border-t border-neutral-700">
                <a
                  href="https://github.com/tempwallets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full border border-neutral-600 text-neutral-200 font-semibold text-sm hover:border-neutral-400 hover:text-white transition-all duration-300">
                  View Repository
                  <ArrowRight size={14} />
                </a>
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
          </motion.div>
        </div>
      </div>
    </section>);

};

export default OpenSourceSection;