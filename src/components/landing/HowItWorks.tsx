import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import step1Img from "@/assets/step-1.png";
import step2Img from "@/assets/step-2.png";
import step3Img from "@/assets/step-3.png";

const steps = [
  {
    step: "01",
    title: "Visit TempWallets",
    description: "Open the web app on desktop or mobile — no downloads or extensions needed.",
    icon: step1Img,
    glassBg: "rgba(201, 190, 209, 0.15)",
    glassBorder: "rgba(171, 134, 170, 0.25)",
  },
  {
    step: "02",
    title: "Get an Instant Wallet",
    description: "A temporary wallet is generated in seconds — zero setup required.",
    icon: step2Img,
    glassBg: "rgba(160, 76, 150, 0.12)",
    glassBorder: "rgba(160, 76, 150, 0.22)",
  },
  {
    step: "03",
    title: "Connect or Receive Funds",
    description: "Connect to DApps via WalletConnect/QR or share the address safely.",
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
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} className="my-5 flex justify-center w-full" animate={controls}>
      <img src={src} alt={alt} className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl" />
    </motion.div>
  );
};

const StepCard = ({ step, i }: { step: typeof steps[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.15 }}
    className="group rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] h-full"
    style={{
      background: step.glassBg,
      backdropFilter: "blur(24px)",
      WebkitBackdropFilter: "blur(24px)",
      border: `1px solid ${step.glassBorder}`,
      minHeight: 300,
    }}
  >
    <div>
      <span className="text-xs text-muted-foreground tracking-[0.25em] font-semibold uppercase">
        Step {step.step}
      </span>
      <h3 className="mt-3 font-display text-[1.5rem] md:text-[1.75rem] text-foreground font-bold leading-tight">
        {step.title}
      </h3>
    </div>
    <IconWithAnimation src={step.icon} alt={step.title} />
    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
  </motion.div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            Three simple steps to get your instant disposable wallet.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden overflow-hidden">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-3">
              {steps.map((step, i) => (
                <CarouselItem key={step.step} className="pl-3 basis-[85%]">
                  <StepCard step={step} i={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">Swipe to explore →</p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => <StepCard key={step.step} step={step} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
