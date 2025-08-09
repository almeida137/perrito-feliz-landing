import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ConversionSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "testimonial" | "offer";
}

export const ConversionSection: React.FC<ConversionSectionProps> = ({
  children,
  className,
  variant = "default"
}) => {
  const baseClasses = "py-12 px-4 animate-fade-in-up";
  
  const variants = {
    default: "",
    highlight: "bg-gradient-primary text-primary-foreground",
    testimonial: "bg-muted/50",
    offer: "bg-gradient-cta text-accent-foreground shadow-cta relative overflow-hidden"
  };

  if (variant === "offer") {
    return (
      <section className={cn(baseClasses, variants[variant], className)}>
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
        <div className="container max-w-4xl mx-auto relative z-10">
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={cn(baseClasses, variants[variant], className)}>
      <div className="container max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};