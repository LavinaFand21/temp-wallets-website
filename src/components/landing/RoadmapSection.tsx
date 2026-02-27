import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import roadmapNow from "@/assets/roadmap-now.png";
import roadmapNext from "@/assets/roadmap-next.png";
import roadmapLater from "@/assets/roadmap-later.png";

const columns = [
  {
    label: "NOW",
    sublabel: "In Progress",
    image: roadmapNow,
    items: ["Yellow integration", "Lightning Node Module", "Multi-chain expansion"],
    glassBg: "hsla(309, 36%, 44%, 0.12)",
    glassBorder: "hsla(309, 36%, 44%, 0.25)",
    glowColor: "309, 36%, 44%",
    accentDot: "hsl(309, 36%, 55%)",
    badgeBg: "hsla(309, 36%, 44%, 0.18)",
    badgeBorder: "hsla(309, 36%, 44%, 0.4)",
    badgeText: "hsl(309, 36%, 65%)",
  },
  {
    label: "NEXT",
    sublabel: "Coming Soon",
    image: roadmapNext,
    items: ["User profiles & settings", "Address book", "Android app"],
    glassBg: "hsla(187, 85%, 53%, 0.08)",
    glassBorder: "hsla(187, 85%, 53%, 0.2)",
    glowColor: "187, 85%, 53%",
    accentDot: "hsl(187, 85%, 53%)",
    badgeBg: "hsla(187, 85%, 53%, 0.14)",
    badgeBorder: "hsla(187, 85%, 53%, 0.35)",
    badgeText: "hsl(187, 85%, 60%)",
  },
  {
    label: "LATER",
    sublabel: "Planned",
    image: roadmapLater,
    items: ["Telegram Mini App", "Tip Gas Tank feature", "Analytics & dashboard upgrades"],
    glassBg: "hsla(263, 22%, 78%, 0.1)",
    glassBorder: "hsla(265, 80%, 65%, 0.2)",
    glowColor: "265, 80%, 65%",
    accentDot: "hsl(265, 80%, 65%)",
    badgeBg: "hsla(265, 80%, 65%, 0.14)",
    badgeBorder: "hsla(265, 80%, 65%, 0.35)",
    badgeText: "hsl(265, 80%, 70%)",
  },
];

/* Floating shimmer animation keyframes injected once */
const shimmerCSS = `
@keyframes roadmap-float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-6px) rotate(0.5deg); }
  66% { transform: translateY(3px) rotate(-0.5deg); }
}
@keyframes roadmap-glow-pulse {
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.75; }
}
`;

const RoadmapCard = ({
  col,
  index,
}: {
  col: (typeof columns)[0];
  index: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
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
      className="group relative rounded-3xl p-8 md:p-10 min-h-[480px] flex flex-col overflow-hidden"
      style={{
        animation: `roadmap-float ${6 + index * 1.5}s ease-in-out infinite`,
        background: col.glassBg,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${col.glassBorder}`,
        boxShadow: `0 8px 40px -12px hsla(${col.glowColor}, 0.2), inset 0 1px 0 hsla(0, 0%, 100%, 0.06)`,
        transition: "transform 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* Always-visible ambient glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl z-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, hsla(${col.glowColor}, 0.2), transparent 70%)`,
          animation: "roadmap-glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Mouse-follow spotlight */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsla(${col.glowColor}, 0.18), transparent 65%)`,
        }}
      />

      {/* 3D Icon */}
      <div className="relative z-10 mb-6">
        <motion.img
          src={col.image}
          alt={`${col.label} roadmap icon`}
          loading="lazy"
          className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
          whileHover={{ rotate: 12, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        />
      </div>

      {/* Badge */}
      <div className="relative z-10 mb-8">
        <div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[0.7rem] font-bold tracking-[0.2em] uppercase"
          style={{
            background: col.badgeBg,
            border: `1px solid ${col.badgeBorder}`,
            color: col.badgeText,
            boxShadow: `0 0 24px -6px hsla(${col.glowColor}, 0.35)`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: col.accentDot,
              boxShadow: `0 0 8px 2px hsla(${col.glowColor}, 0.6)`,
              animation: "roadmap-glow-pulse 2s ease-in-out infinite",
            }}
          />
          {col.label}
          <span className="text-[0.55rem] font-medium tracking-wider opacity-60 normal-case">
            · {col.sublabel}
          </span>
        </div>
      </div>

      {/* Items */}
      <ul className="space-y-5 relative z-10 flex-1">
        {col.items.map((item, i) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.15 + i * 0.1 }}
            className="flex items-start gap-3.5 text-lg text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
          >
            <span
              className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
              style={{
                backgroundColor: col.accentDot,
                boxShadow: `0 0 10px 2px hsla(${col.glowColor}, 0.4)`,
              }}
            />
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom gradient line */}
      <div className="relative z-10 mt-8">
        <div
          className="h-px w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${col.accentDot}, transparent)`,
            opacity: 0.5,
          }}
        />
      </div>
    </motion.div>
  );
};

const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="border-t border-border/40 py-16 sm:py-24 lg:py-[140px] px-4"
      style={{ background: "hsl(var(--hero))" }}
    >
      <style>{shimmerCSS}</style>
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold font-display leading-[1.05] tracking-tight"
            style={{ color: "hsl(var(--hero-foreground))" }}
          >
            Roadmap
          </h2>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl leading-relaxed"
            style={{ color: "hsl(var(--hero-muted))" }}
          >
            What we're building and what's coming next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) => (
            <RoadmapCard key={col.label} col={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
