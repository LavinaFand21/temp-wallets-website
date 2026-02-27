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
    glassBg: "hsla(225, 50%, 6%, 0.85)",
    glassBorder: "hsla(217, 91%, 60%, 0.2)",
    glowColor: "217, 91%, 60%",
    accentDot: "hsl(217, 91%, 60%)",
    badgeBg: "hsla(217, 91%, 60%, 0.15)",
    badgeBorder: "hsla(217, 91%, 60%, 0.35)",
    badgeText: "hsl(217, 91%, 70%)",
    textColor: "hsl(220, 20%, 85%)",
    mutedText: "hsl(220, 15%, 65%)",
    isDark: true,
  },
  {
    label: "NEXT",
    sublabel: "Coming Soon",
    image: roadmapNext,
    items: ["User profiles & settings", "Address book", "Android app"],
    glassBg: "hsla(0, 0%, 100%, 0.04)",
    glassBorder: "hsla(187, 85%, 53%, 0.18)",
    glowColor: "187, 85%, 53%",
    accentDot: "hsl(187, 85%, 53%)",
    badgeBg: "hsla(187, 85%, 53%, 0.12)",
    badgeBorder: "hsla(187, 85%, 53%, 0.3)",
    badgeText: "hsl(187, 85%, 60%)",
    textColor: undefined,
    mutedText: undefined,
    isDark: false,
  },
  {
    label: "LATER",
    sublabel: "Planned",
    image: roadmapLater,
    items: ["Telegram Mini App", "Tip Gas Tank feature", "Analytics & dashboard upgrades"],
    glassBg: "hsla(0, 0%, 100%, 0.04)",
    glassBorder: "hsla(265, 80%, 65%, 0.18)",
    glowColor: "265, 80%, 65%",
    accentDot: "hsl(265, 80%, 65%)",
    badgeBg: "hsla(265, 80%, 65%, 0.12)",
    badgeBorder: "hsla(265, 80%, 65%, 0.3)",
    badgeText: "hsl(265, 80%, 70%)",
    textColor: undefined,
    mutedText: undefined,
    isDark: false,
  },
];

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
      className="group relative rounded-3xl p-8 md:p-10 min-h-[480px] flex flex-col transition-all duration-500 hover:scale-[1.02] overflow-hidden"
      style={{
        background: col.isDark
          ? col.glassBg
          : col.glassBg,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${col.glassBorder}`,
        boxShadow: col.isDark
          ? `0 8px 40px -12px hsla(${col.glowColor}, 0.25), inset 0 1px 0 hsla(0, 0%, 100%, 0.05)`
          : "0 4px 30px rgba(0, 0, 0, 0.06), inset 0 1px 0 hsla(0, 0%, 100%, 0.6)",
      }}
    >
      {/* Spotlight follow glow */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, hsla(${col.glowColor}, 0.15), transparent 65%)`,
        }}
      />

      {/* Top glow accent */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, hsla(${col.glowColor}, 0.25), transparent 70%)`,
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

      {/* Modern Badge */}
      <div className="relative z-10 mb-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold tracking-[0.18em] uppercase"
          style={{
            background: col.badgeBg,
            border: `1px solid ${col.badgeBorder}`,
            color: col.badgeText,
            boxShadow: `0 0 20px -6px hsla(${col.glowColor}, 0.3)`,
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: col.accentDot }}
          />
          {col.label}
          <span className="text-[0.6rem] font-medium tracking-wider opacity-70 normal-case">
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
            className="flex items-start gap-3.5 transition-colors duration-300 text-lg"
            style={{
              color: col.isDark ? col.mutedText : undefined,
            }}
          >
            <span
              className="mt-2 w-2 h-2 rounded-full flex-shrink-0 transition-all duration-500 group-hover:shadow-[0_0_10px_3px]"
              style={{
                backgroundColor: col.accentDot,
              }}
            />
            <span className={col.isDark
              ? "group-hover:text-white/90 transition-colors duration-300"
              : "text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
            }>
              {item}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* Bottom decorative line */}
      <div className="relative z-10 mt-8">
        <div
          className="h-px w-full opacity-30 group-hover:opacity-70 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${col.accentDot}, transparent)`,
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
      className="bg-background border-t border-border/40 py-16 sm:py-24 lg:py-[140px] px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20"
        >
          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            Roadmap
          </h2>
          <p className="mt-6 text-muted-foreground text-xl md:text-2xl max-w-2xl leading-relaxed">
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
