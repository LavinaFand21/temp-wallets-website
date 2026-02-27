import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import step1Img from "@/assets/step-1.png";
import step2Img from "@/assets/step-2.png";
import step3Img from "@/assets/step-3.png";

const steps = [
  {
    step: "01",
    title: "Visit TempWallets",
    description:
      "Open the web app on desktop or mobile — no downloads or extensions needed.",
    icon: step1Img,
    glassBg: "rgba(201, 190, 209, 0.15)",
    glassBorder: "rgba(171, 134, 170, 0.25)",
  },
  {
    step: "02",
    title: "Get an Instant Wallet",
    description:
      "A temporary wallet is generated in seconds — zero setup required.",
    icon: step2Img,
    glassBg: "rgba(160, 76, 150, 0.12)",
    glassBorder: "rgba(160, 76, 150, 0.22)",
  },
  {
    step: "03",
    title: "Connect or Receive Funds",
    description:
      "Connect to DApps via WalletConnect/QR or share the address safely.",
    icon: step3Img,
    glassBg: "rgba(104, 99, 121, 0.14)",
    glassBorder: "rgba(104, 99, 121, 0.25)",
  },
];

const IconWithAnimation = ({ src, alt }: { src: string; alt: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: [0, -12, 0],
        rotate: [0, 4, -4, 0],
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="my-8 flex justify-center w-full"
      animate={controls}
    >
      <img
        src={src}
        alt={alt}
        className="w-36 h-36 md:w-40 md:h-40 object-contain drop-shadow-2xl"
      />
    </motion.div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="bg-background border-t border-border/40 py-16 sm:py-24 lg:py-[140px] px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-24"
        >
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            How It Works
          </h2>
          <p className="mt-6 text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Three simple steps to get your instant disposable wallet.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-3xl p-8 md:p-10 min-h-[480px] flex flex-col justify-between transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: step.glassBg,
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: `1px solid ${step.glassBorder}`,
              }}
            >
              <div>
                <span className="text-xs text-muted-foreground tracking-[0.25em] font-semibold uppercase">
                  Step {step.step}
                </span>
                <h3 className="mt-5 font-display text-[1.75rem] md:text-[2rem] text-foreground font-bold leading-tight">
                  {step.title}
                </h3>
              </div>

              <IconWithAnimation src={step.icon} alt={step.title} />

              <p className="text-muted-foreground text-lg leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
