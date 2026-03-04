import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import featureIcon1 from "@/assets/feature-icon-1.png";
import featureIcon2 from "@/assets/feature-icon-2.png";
import featureIcon3 from "@/assets/feature-icon-3.png";
import featureIcon4 from "@/assets/feature-icon-4.png";

const features = [
  {
    title: "Instant Temporary Wallets",
    description: "Create disposable wallets instantly without installation or seed phrases.",
    icon: featureIcon1,
    glassBg: "rgba(201, 190, 209, 0.15)",
    glassBorder: "rgba(171, 134, 170, 0.25)",
    hoverGlow: "rgba(201, 190, 209, 0.25)",
  },
  {
    title: "Multi-Chain Support",
    description: "Works across major EVM and non-EVM networks out of the box.",
    icon: featureIcon2,
    glassBg: "rgba(160, 76, 150, 0.12)",
    glassBorder: "rgba(160, 76, 150, 0.22)",
    hoverGlow: "rgba(160, 76, 150, 0.2)",
  },
  {
    title: "Connect to DApps",
    description: "Scan QR or use WalletConnect to interact with any decentralized app.",
    icon: featureIcon3,
    glassBg: "rgba(104, 99, 121, 0.14)",
    glassBorder: "rgba(104, 99, 121, 0.25)",
    hoverGlow: "rgba(104, 99, 121, 0.22)",
  },
  {
    title: "Gasless Transactions",
    description: "Execute transactions without worrying about gas setup or native tokens.",
    icon: featureIcon4,
    glassBg: "rgba(65, 22, 58, 0.15)",
    glassBorder: "rgba(65, 22, 58, 0.3)",
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

const FeatureCard = ({ f, i }: { f: typeof features[0]; i: number }) => (
  <motion.div
    key={f.title}
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
          background: f.glassBg,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: `1px solid ${f.glassBorder}`,
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.06)",
          minHeight: 280,
        } as React.CSSProperties}
      >
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%, ${f.hoverGlow}, transparent 70%)` }}
        />
        <CardItem translateZ={20} className="w-full relative z-10">
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight">{f.title}</h3>
        </CardItem>
        <CardItem translateZ={40} className="w-full relative z-10">
          <AnimatedIcon src={f.icon} alt={f.title} />
        </CardItem>
        <CardItem translateZ={15} className="w-full relative z-10">
          <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
        </CardItem>
      </CardBody>
    </CardContainer>
  </motion.div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-14"
        >
          <h2 className="text-[2.5rem] md:text-[4rem] font-bold text-foreground font-display leading-[1.05] tracking-tight lg:text-8xl">
            TempWallets
          </h2>
          <p className="mt-3 text-muted-foreground text-lg md:text-2xl max-w-2xl leading-relaxed">
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden overflow-hidden">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-3">
              {features.map((f, i) => (
                <CarouselItem key={f.title} className="pl-3 basis-[85%]">
                  <FeatureCard f={f} i={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">Swipe to explore →</p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => <FeatureCard key={f.title} f={f} i={i} />)}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
