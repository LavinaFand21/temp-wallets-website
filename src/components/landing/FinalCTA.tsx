import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      className="section-padding section-divider relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #41163a 0%, #a04c96 50%, #c9bed1 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30 blur-[120px] pointer-events-none" style={{ background: "#ab86aa" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-20 blur-[100px] pointer-events-none" style={{ background: "#686379" }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center w-full relative z-10"
      >
        <h2 className="font-display text-[2.5rem] sm:text-[3rem] font-bold text-white">
          Start exploring Web3 instantly.
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          No wallet setup required.
        </p>
        <div className="mt-8">
          <a
            href="https://app.tempwallets.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#41163a] font-semibold text-base hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
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
