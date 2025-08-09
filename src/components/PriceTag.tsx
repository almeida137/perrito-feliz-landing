import { cn } from "@/lib/utils";

interface PriceTagProps {
  originalPrice?: string;
  currentPrice: string;
  currency?: string;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  originalPrice,
  currentPrice,
  currency = "USD",
  className
}) => {
  return (
    <div className={cn("text-center space-y-2", className)}>
      {originalPrice && (
        <div className="text-lg text-muted-foreground line-through">
          {currency} {originalPrice}
        </div>
      )}
      <div className="text-5xl font-bold text-success animate-bounce-gentle">
        {currency} {currentPrice}
      </div>
    </div>
  );
};