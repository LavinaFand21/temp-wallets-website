import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import step1Img from "@/assets/step-1.png";
import step2Img from "@/assets/step-2.png";
import step3Img from "@/assets/step-3.png";

const steps = [
  {
    step: "01",
    title: "Visit TempWallets",
    description: "Visit the web app on desktop or mobile. No extensions or installations required.",
    icon: step1Img,
    glassBg: "rgba(201, 190, 209, 0.15)",
    glassBorder: "rgba(171, 134, 170, 0.25)",
    hoverGlow: "rgba(201, 190, 209, 0.25)",
  },
  {
    step: "02",
    title: "Get an Instant Wallet",
    description: "A disposable wallet is created instantly for secure and isolated interactions.",
    icon: step2Img,
    glassBg: "rgba(160, 76, 150, 0.12)",
    glassBorder: "rgba(160, 76, 150, 0.22)",
    hoverGlow: "rgba(160, 76, 150, 0.2)",
  },
  {
    step: "03",
    title: "Connect or Receive Funds",
    description: "Connect to dApps, scan QR codes, or receive crypto without exposing your main wallet.",
    icon: step3Img,
    glassBg: "rgba(104, 99, 121, 0.14)",
    glassBorder: "rgba(104, 99, 121, 0.25)",
    hoverGlow: "rgba(104, 99, 121, 0.22)",
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
        scale: [1, 1.1, 1],
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} animate={controls} className="flex items-center justify-center py-4">
      <img src={src} alt={alt} className="w-28 h-28 md:w-32 md:h-32 object-contain drop-shadow-2xl" loading="lazy" />
    </motion.div>
  );
};

const StepCard = ({ step, i }: { step: typeof steps[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.15 }}
    className="group h-full p-2"
    style={{ height: "100%" }}
  >
    <div className="w-full h-full">
      <CardContainer containerClassName="w-full h-full">
        <CardBody
          className="relative w-full rounded-3xl p-6 md:p-8 flex flex-col items-center text-center justify-between transition-all duration-500 ease-out group-hover:scale-[1.03]"
          style={{
            background: step.glassBg,
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: `1px solid ${step.glassBorder}`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
            height: "100%",
            minHeight: "360px",
          } as React.CSSProperties}
        >
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ background: `radial-gradient(ellipse at 50% 0%, ${step.hoverGlow}, transparent 70%)` }}
          />
          <CardItem translateZ={20} className="w-full relative z-10">
            <span className="text-xs text-muted-foreground tracking-[0.25em] font-semibold uppercase block text-center">
              Step {step.step}
            </span>
            <h3 className="mt-3 font-display text-[1.4rem] md:text-[1.6rem] text-foreground font-bold leading-tight text-center">
              {step.title}
            </h3>
          </CardItem>
          <CardItem translateZ={40} className="w-full relative z-10">
            <IconWithAnimation src={step.icon} alt={step.title} />
          </CardItem>
          <CardItem translateZ={15} className="w-full relative z-10">
            <p className="text-foreground/80 text-sm leading-relaxed text-center">{step.description}</p>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
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
          <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Three simple steps to get your instant disposable wallet.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel with arrows */}
        <div className="block md:hidden">
          <Carousel opts={{ align: "start", loop: false, dragFree: true, watchDrag: true }} className="w-full select-none">
            <CarouselContent className="-ml-3 touch-pan-y py-2" style={{ alignItems: "stretch" }}>
              {steps.map((step, i) => (
                <CarouselItem key={step.step} className="pl-3 basis-[85%] h-[420px]">
                  <StepCard step={step} i={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-3 mt-4">
              <CarouselPrevious className="relative static translate-y-0 left-auto top-auto w-9 h-9 rounded-full border border-border/60 bg-background/80 shadow-sm hover:bg-background">
                <ChevronLeft size={16} />
              </CarouselPrevious>
              <span className="text-xs text-muted-foreground opacity-60">Swipe to explore</span>
              <CarouselNext className="relative static translate-y-0 right-auto top-auto w-9 h-9 rounded-full border border-border/60 bg-background/80 shadow-sm hover:bg-background">
                <ChevronRight size={16} />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8 py-2 px-1">
          {steps.map((step, i) => <StepCard key={step.step} step={step} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
