import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatBoxProps {
  number: string;
  label: string;
  sublabel?: string;
}

export function StatBox({ number, label, sublabel }: StatBoxProps) {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl text-center">
      <div className="text-5xl font-bold text-accent mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        {number}
      </div>
      <div className="text-lg font-semibold mb-1">{label}</div>
      {sublabel && <div className="text-sm opacity-75">{sublabel}</div>}
    </div>
  );
}

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  badge?: string;
}

export function ProductCard({ image, title, description, badge }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent overflow-hidden">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {badge}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}

interface IconFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor?: string;
}

export function IconFeature({ icon: Icon, title, description, iconColor = "text-accent" }: IconFeatureProps) {
  return (
    <div className="text-center space-y-3">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
        <Icon size={32} className={iconColor} />
      </div>
      <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
        {title}
      </h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
          {year}
        </div>
      </div>
      <div className="flex-1 pb-8">
        <h3 className="text-xl font-bold mb-2 text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
