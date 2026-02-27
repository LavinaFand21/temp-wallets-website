import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-foreground section-divider">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center w-full"
      >
        <h2 className="font-display text-[2.5rem] sm:text-[3rem] font-bold text-background">
          Start exploring Web3 instantly.
        </h2>
        <p className="mt-4 text-background/60 text-lg">
          No wallet setup required.
        </p>
        <div className="mt-8">
          <a
            href="https://app.tempwallets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background text-foreground font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Launch TempWallet
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
