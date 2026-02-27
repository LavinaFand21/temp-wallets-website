import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
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
    <motion.div
      ref={ref}
      animate={controls}
      className="flex items-center justify-center py-6"
    >
      <img
        src={src}
        alt={alt}
        className="w-24 h-24 object-contain drop-shadow-lg"
        loading="lazy"
      />
    </motion.div>
  );
};

const WhySection = () => {
  return (
    <section
      className="bg-background border-t border-border/40 py-16 sm:py-24 lg:py-[140px] px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-20"
        >
          <h2 className="text-[3rem] md:text-[4rem] font-bold text-foreground font-display leading-[1.05] tracking-tight lg:text-8xl">
            Why TempWallets?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <CardContainer containerClassName="w-full">
                <CardBody
                  className="relative w-full rounded-3xl p-7 min-h-[360px] flex flex-col justify-between transition-all duration-500 ease-out group-hover:scale-[1.03]"
                  style={
                    {
                      background: r.glassBg,
                      backdropFilter: "blur(24px)",
                      WebkitBackdropFilter: "blur(24px)",
                      border: `1px solid ${r.glassBorder}`,
                      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.06)",
                    } as React.CSSProperties
                  }
                >
                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, ${r.hoverGlow}, transparent 70%)`,
                    }}
                  />

                  <CardItem translateZ={20} className="w-full relative z-10">
                    <h3 className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                      {r.title}
                    </h3>
                  </CardItem>

                  <CardItem translateZ={40} className="w-full relative z-10">
                    <AnimatedIcon src={r.icon} alt={r.title} />
                  </CardItem>

                  <CardItem translateZ={15} className="w-full relative z-10">
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {r.description}
                    </p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
