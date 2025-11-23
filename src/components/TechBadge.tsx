import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "primary" | "secondary" | "muted";
  className?: string;
}

export const TechBadge = ({ name, variant = "primary", className }: TechBadgeProps) => {
  const variants = {
    primary: "bg-primary/10 text-primary border-primary/30 hover:bg-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20",
    muted: "bg-muted/50 text-muted-foreground border-border/50 hover:bg-muted",
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-medium border transition-all",
        variants[variant],
        className
      )}
    >
      {name}
    </motion.span>
  );
};
