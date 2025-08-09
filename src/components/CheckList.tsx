import { cn } from "@/lib/utils";

interface CheckListProps {
  items: string[];
  className?: string;
  variant?: "default" | "success" | "highlight";
}

export const CheckList: React.FC<CheckListProps> = ({
  items,
  className,
  variant = "default"
}) => {
  const variants = {
    default: "text-foreground",
    success: "text-success",
    highlight: "text-primary font-medium"
  };

  return (
    <ul className={cn("space-y-3 text-left max-w-2xl mx-auto", className)}>
      {items.map((item, index) => (
        <li key={index} className={cn("flex items-start gap-3", variants[variant])}>
          <span className="flex-shrink-0 w-6 h-6 bg-success text-success-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
            ✓
          </span>
          <span className="text-lg leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
};