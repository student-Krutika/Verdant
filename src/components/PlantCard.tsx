import { ShoppingBag, Star } from "lucide-react";
import { Button } from "./Button";

export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  badge?: string;
}

interface PlantCardProps {
  plant: Plant;
}

export function PlantCard({ plant }: PlantCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
      <div className="relative overflow-hidden bg-cream">
        {plant.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
            {plant.badge}
          </span>
        )}
        <img
          src={plant.image}
          alt={plant.name}
          width={800}
          height={800}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {plant.name}
          </h3>
          {plant.rating != null && (
            <span className="flex shrink-0 items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              {plant.rating.toFixed(1)}
            </span>
          )}
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {plant.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-primary">
            ${plant.price.toFixed(2)}
          </span>
          <Button size="sm" aria-label={`Add ${plant.name} to cart`}>
            <ShoppingBag className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
