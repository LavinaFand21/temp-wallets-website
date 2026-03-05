import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import whyIcon1 from "@/assets/why-icon-1.png";
import whyIcon2 from "@/assets/why-icon-2.png";
import whyIcon3 from "@/assets/why-icon-3.png";
import whyIcon4 from "@/assets/why-icon-4.png";

const reasons = [
  {
    icon: whyIcon1,
    title: "Try DApps Safely",
    description: "Explore new projects without exposing your primary wallet.",
    glassBg: "rgba(201, 190, 209, 0.08)",
    glassBorder: "rgba(171, 134, 170, 0.2)",
    hoverGlow: "rgba(201, 190, 209, 0.25)",
  },
  {
    icon: whyIcon2,
    title: "Low Commitment",
    description: "No seed phrase setup. No password friction.",
    glassBg: "rgba(160, 76, 150, 0.06)",
    glassBorder: "rgba(160, 76, 150, 0.18)",
    hoverGlow: "rgba(160, 76, 150, 0.2)",
  },
  {
    icon: whyIcon3,
    title: "Perfect for Explorers",
    description: "Test chains, hunt airdrops, experiment freely.",
    glassBg: "rgba(104, 99, 121, 0.08)",
    glassBorder: "rgba(104, 99, 121, 0.2)",
    hoverGlow: "rgba(104, 99, 121, 0.22)",
  },
  {
    icon: whyIcon4,
    title: "Ideal for Payments",
    description: "Receive funds without sharing your main address.",
    glassBg: "rgba(65, 22, 58, 0.08)",
    glassBorder: "rgba(65, 22, 58, 0.25)",
    hoverGlow: "rgba(65, 22, 58, 0.25)",
  },
];

const AnimatedIcon = ({ src, alt }: { src: string; alt: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        y: [0, -12, 0],
        rotate: [0, 6, -6, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 2, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} animate={controls} className="flex items-center justify-center py-4">
      <img src={src} alt={alt} className="w-20 h-20 object-contain drop-shadow-lg" loading="lazy" />
    </motion.div>
  );
};

const WhyCard = ({ r, i }: { r: typeof reasons[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    className="group h-full"
  >
    <CardContainer containerClassName="w-full h-full">
      <CardBody
        className="relative w-full rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 ease-out group-hover:scale-[1.03] h-full"
        style={{
          background: r.glassBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${r.glassBorder}`,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.06)",
          minHeight: 280,
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${r.hoverGlow}, transparent 70%)` }}
        />
        <CardItem translateZ={20} className="w-full relative z-10">
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">{r.title}</h3>
        </CardItem>
        <CardItem translateZ={40} className="w-full relative z-10">
          <AnimatedIcon src={r.icon} alt={r.title} />
        </CardItem>
        <CardItem translateZ={15} className="w-full relative z-10">
          <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
        </CardItem>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const WhySection = () => {
  return (
    <section className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-14"
        >
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-foreground font-display leading-[1.05] tracking-tight lg:text-8xl">
            Why TempWallets?
          </h2>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden overflow-hidden touch-pan-y">
          <Carousel opts={{ align: "start", loop: false, dragFree: false, watchDrag: true }} className="w-full select-none">
            <CarouselContent className="-ml-3">
              {reasons.map((r, i) => (
                <CarouselItem key={r.title} className="pl-3 basis-[85%]">
                  <WhyCard r={r} i={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">Swipe to explore →</p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => <WhyCard key={r.title} r={r} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
