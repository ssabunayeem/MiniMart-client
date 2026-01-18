"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Simplified variants - just fade in/out
const variants = {
  hidden: { opacity: 0, y: 0 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

export default function AnimationWrapper({ children, className = "" }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: "linear", duration: 0.3 }}
      className={`flex flex-col flex-1 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// Fade in up animation for sections
export const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// Stagger container
export const StaggerContainer = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: delay,
        },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FadeInItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
