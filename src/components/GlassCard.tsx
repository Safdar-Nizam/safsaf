import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const GlassCard = ({ children, className, hover = true, delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -6, scale: 1.01 } : {}}
      className={cn(
        "glass rounded-xl p-6 transition-all duration-500",
        hover && "hover:gold-border hover:glow-primary hover:bg-card cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
