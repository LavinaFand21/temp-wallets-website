import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent } from "react";
import { cn } from "@/lib/utils";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#000000",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag">) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      className={cn(
        "group/spotlight relative rounded-2xl border border-border bg-card p-10",
        className
      )}
      onMouseMove={handleMouseMove}
      style={{
        background: useMotionTemplate`
          radial-gradient(
            ${radius}px circle at ${mouseX}px ${mouseY}px,
            ${color}08,
            transparent 80%
          )
        `,
        backgroundColor: "hsl(var(--card))",
      }}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(circle 350px at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.08), transparent 80%)`,
        }}
      />
      {children}
    </motion.div>
  );
};
