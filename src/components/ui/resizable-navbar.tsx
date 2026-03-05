"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 50);
  });

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(20px)",
        boxShadow: visible
          ? "0 4px 30px rgba(160, 76, 150, 0.08), 0 0 0 1px rgba(201, 190, 209, 0.12)"
          : "none",
        width: visible ? "min(760px, 92%)" : "100%",
        y: visible ? 12 : 0,
        borderRadius: visible ? "9999px" : "0px",
        background: visible
          ? "rgba(255, 255, 255, 0.72)"
          : "rgba(255, 255, 255, 0.3)",
        paddingTop: visible ? "8px" : "18px",
        paddingBottom: visible ? "8px" : "18px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: visible ? "rgba(201, 190, 209, 0.25)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 40 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-6 lg:flex",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-foreground/70 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-sm text-foreground/70 hover:text-foreground transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 rounded-full bg-foreground/5"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

// Mobile navbar: inline items, no dropdown, glassmorphism, shrink on scroll
export const MobileNav = ({
  children,
  className,
  visible,
}: {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(20px)",
        boxShadow: visible
          ? "0 4px 30px rgba(160, 76, 150, 0.08), 0 0 0 1px rgba(201, 190, 209, 0.15)"
          : "none",
        width: visible ? "94%" : "100%",
        y: visible ? 8 : 0,
        borderRadius: visible ? "20px" : "0px",
        background: visible
          ? "rgba(255, 255, 255, 0.82)"
          : "rgba(255, 255, 255, 0.55)",
        paddingTop: visible ? "10px" : "22px",
        paddingBottom: visible ? "10px" : "14px",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: visible ? "rgba(201, 190, 209, 0.25)" : "transparent",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 40 }}
      className={cn(
        "relative z-50 mx-auto flex w-full flex-col lg:hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavbarLogo = ({
  src,
  alt,
  label,
  href = "#",
}: {
  src: string;
  alt: string;
  label: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className="relative z-[60] flex items-center gap-2 text-foreground font-display font-bold text-lg"
    >
      <img src={src} alt={alt} className="h-8 w-auto" />
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & Record<string, any>) => {
  const variantStyles = {
    primary:
      "px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center",
    secondary:
      "px-5 py-2 rounded-full bg-transparent text-foreground text-sm font-semibold cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center",
    dark: "px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center",
    gradient:
      "px-5 py-2 rounded-full bg-foreground text-background text-sm font-semibold cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 inline-block text-center",
  };

  const Component = Tag as any;

  return (
    <Component
      href={href}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
