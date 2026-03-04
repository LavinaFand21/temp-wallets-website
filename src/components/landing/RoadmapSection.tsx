import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import roadmapNow from "@/assets/roadmap-now.png";
import roadmapNext from "@/assets/roadmap-next.png";
import roadmapLater from "@/assets/roadmap-later.png";

const columns = [
  {
    label: "NOW",
    sublabel: "In Progress",
    image: roadmapNow,
    items: ["Yellow integration", "Lightning Node Module", "Multi-chain expansion"],
    glassBg: "hsla(296, 30%, 82%, 0.12)",
    glassBorder: "hsla(296, 52%, 46%, 0.25)",
    glowColor: "296, 52%, 46%",
    accentDot: "#a04c96",
    badgeBg: "hsla(296, 52%, 46%, 0.18)",
    badgeBorder: "hsla(296, 52%, 46%, 0.4)",
    badgeText: "#a04c96",
  },
  {
    label: "NEXT",
    sublabel: "Coming Soon",
    image: roadmapNext,
    items: ["User profiles & settings", "Address book", "Android app"],
    glassBg: "hsla(257, 13%, 44%, 0.08)",
    glassBorder: "hsla(257, 13%, 44%, 0.2)",
    glowColor: "257, 13%, 44%",
    accentDot: "#686379",
    badgeBg: "hsla(257, 13%, 44%, 0.14)",
    badgeBorder: "hsla(257, 13%, 44%, 0.35)",
    badgeText: "#686379",
  },
  {
    label: "LATER",
    sublabel: "Planned",
    image: roadmapLater,
    items: ["Telegram Mini App", "Tip Gas Tank feature", "Analytics & dashboard upgrades"],
    glassBg: "hsla(302, 20%, 67%, 0.08)",
    glassBorder: "hsla(302, 20%, 67%, 0.2)",
    glowColor: "302, 20%, 67%",
    accentDot: "#ab86aa",
    badgeBg: "hsla(302, 20%, 67%, 0.14)",
    badgeBorder: "hsla(302, 20%, 67%, 0.35)",
    badgeText: "#ab86aa",
  },
];

const RoadmapCard = ({ col, index }: { col: (typeof columns)[0]; index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl p-6 md:p-8 flex flex-col transition-all duration-500 hover:scale-[1.02] overflow-hidden h-full"
      style={{
        background: col.glassBg,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${col.glassBorder}`,
        boxShadow: `0 8px 40px -12px hsla(${col.glowColor}, 0.15), inset 0 1px 0 hsla(0, 0%, 100%, 0.5)`,
        minHeight: 320,
      }}
    >
      {/* Floating ambient glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl z-0"
        animate={{
          background: [
            `radial-gradient(ellipse 60% 40% at 20% 30%, hsla(${col.glowColor}, 0.12), transparent 70%)`,
            `radial-gradient(ellipse 60% 40% at 80% 70%, hsla(${col.glowColor}, 0.12), transparent 70%)`,
            `radial-gradient(ellipse 60% 40% at 50% 20%, hsla(${col.glowColor}, 0.12), transparent 70%)`,
            `radial-gradient(ellipse 60% 40% at 20% 30%, hsla(${col.glowColor}, 0.12), transparent 70%)`,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Cursor spotlight */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsla(${col.glowColor}, 0.18), transparent 65%)`,
        }}
      />

      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px z-10"
        style={{ background: `linear-gradient(90deg, transparent, ${col.accentDot}44, transparent)` }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-4">
        <motion.img
          src={col.image}
          alt={`${col.label} roadmap icon`}
          loading="lazy"
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-5">
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-bold tracking-[0.18em] uppercase"
          style={{
            background: col.badgeBg,
            border: `1px solid ${col.badgeBorder}`,
            color: col.badgeText,
            boxShadow: `0 0 24px -8px hsla(${col.glowColor}, 0.3)`,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: col.accentDot }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          {col.label}
          <span className="text-[0.6rem] font-medium tracking-wider opacity-60 normal-case">· {col.sublabel}</span>
        </motion.div>
      </div>

      {/* Items */}
      <ul className="space-y-3 relative z-10 flex-1">
        {col.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.15 + i * 0.1 }}
            className="flex items-start gap-3 text-base text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
          >
            <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: col.accentDot }} />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom line */}
      <div className="relative z-10 mt-5">
        <div
          className="h-px w-full opacity-30 group-hover:opacity-70 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${col.accentDot}, transparent)` }}
        />
      </div>
    </motion.div>
  );
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="bg-background border-t border-border/40 py-12 sm:py-20 lg:py-[100px] px-4">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-16"
        >
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            Roadmap
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-2xl max-w-2xl leading-relaxed">
            What we're building and what's coming next.
          </p>
        </motion.div>

        {/* Mobile: swipeable carousel */}
        <div className="block md:hidden">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            <CarouselContent className="-ml-3">
              {columns.map((col, i) => (
                <CarouselItem key={col.label} className="pl-3 basis-[85%]">
                  <RoadmapCard col={col} index={i} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <p className="text-center text-xs text-muted-foreground mt-3 opacity-60">Swipe to explore →</p>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) => <RoadmapCard key={col.label} col={col} index={i} />)}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
