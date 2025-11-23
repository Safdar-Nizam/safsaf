import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "primary" | "secondary" | "muted";
  className?: string;
}

export const TechBadge = ({ name, variant = "primary", className }: TechBadgeProps) => {
  const variants = {
    primary: "bg-primary/5 text-primary border-primary/40 hover:bg-primary/15 hover:border-primary/60",
    secondary: "bg-secondary/8 text-secondary-foreground border-secondary/30 hover:bg-secondary/15",
    muted: "bg-muted/60 text-muted-foreground border-border/40 hover:bg-muted/80",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {name}
    </motion.span>
  );
};
