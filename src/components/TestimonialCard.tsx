import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  content,
  author,
  className
}) => {
  return (
    <Card className={cn("shadow-card hover:shadow-lg transition-shadow duration-300", className)}>
      <CardContent className="p-6">
        <blockquote className="text-lg italic text-foreground/90 mb-4">
          "{content}"
        </blockquote>
        <cite className="text-sm font-semibold text-primary">
          – {author}
        </cite>
      </CardContent>
    </Card>
  );
};