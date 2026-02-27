import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { Check, Zap, Clock } from "lucide-react";

const columns = [
{
  label: "NOW",
  icon: Zap,
  items: ["Yellow integration", "Lightning Node Module", "Multi-chain expansion"],
  glassBg: "rgba(201, 190, 209, 0.1)",
  glassBorder: "rgba(171, 134, 170, 0.22)",
  glowColor: "217, 91%, 60%",
  accentDot: "hsl(217, 91%, 60%)"
},
{
  label: "NEXT",
  icon: Clock,
  items: ["User profiles & settings", "Address book", "Android app"],
  glassBg: "rgba(160, 76, 150, 0.08)",
  glassBorder: "rgba(160, 76, 150, 0.2)",
  glowColor: "187, 85%, 53%",
  accentDot: "hsl(187, 85%, 53%)"
},
{
  label: "LATER",
  icon: Check,
  items: ["Telegram Mini App", "Tip Gas Tank feature", "Analytics & dashboard upgrades"],
  glassBg: "rgba(104, 99, 121, 0.1)",
  glassBorder: "rgba(104, 99, 121, 0.22)",
  glowColor: "265, 80%, 65%",
  accentDot: "hsl(265, 80%, 65%)"
}];


const RoadmapCard = ({
  col,
  index



}: {col: (typeof columns)[0];index: number;}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = col.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      className="group relative rounded-3xl p-8 md:p-10 min-h-[420px] flex flex-col justify-between transition-all duration-500 hover:scale-[1.03]"
      style={{
        background: col.glassBg,
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        border: `1px solid ${col.glassBorder}`,
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.06)"
      }}>

      {/* Spotlight follow glow */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, hsla(${col.glowColor}, 0.12), transparent 70%)`
        }} />


      {/* Top glow accent */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 0%, hsla(${col.glowColor}, 0.2), transparent 70%)`
        }} />


      {/* Badge + icon */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.15em] uppercase"
            style={{
              background: `hsla(${col.glowColor}, 0.12)`,
              border: `1px solid hsla(${col.glowColor}, 0.25)`,
              color: col.accentDot
            }}>

            <Icon className="w-3.5 h-3.5" />
            {col.label}
          </div>
        </div>
      </div>

      {/* Items */}
      <ul className="space-y-4 relative z-10 flex-1">
        {col.items.map((item, i) =>
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.15 + i * 0.1 }}
          className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 text-lg">

            <span
            className="mt-2 w-2 h-2 rounded-full flex-shrink-0 transition-shadow duration-500 group-hover:shadow-[0_0_8px_2px]"
            style={{
              backgroundColor: col.accentDot,
              boxShadow: "none"
            }} />

            {item}
          </motion.li>
        )}
      </ul>

      {/* Bottom decorative line */}
      <div className="relative z-10 mt-8">
        <div
          className="h-px w-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${col.accentDot}, transparent)`
          }} />

      </div>
    </motion.div>);

};

const RoadmapSection = () => {
  return (
    <section
      id="roadmap"
      className="bg-background border-t border-border/40 py-16 sm:py-24 lg:py-[140px] px-4">

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-20">

          <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-foreground font-display leading-[1.05] tracking-tight">
            Roadmap
          </h2>
          <p className="mt-6 text-muted-foreground text-xl md:text-2xl max-w-2xl leading-relaxed">What we're building  and what's coming next.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {columns.map((col, i) =>
          <RoadmapCard key={col.label} col={col} index={i} />
          )}
        </div>
      </div>
    </section>);

};

export default RoadmapSection;