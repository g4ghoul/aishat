import { cn } from "@/lib/utils";

interface CardHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHover({ children, className }: CardHoverProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card border border-border/50 p-6 md:p-8",
      "transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1",
      className
    )}>
      <div className="relative z-10">{children}</div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
