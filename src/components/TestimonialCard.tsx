import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card md:p-7">
      <div className="flex items-center gap-1" aria-label={`Rated ${testimonial.rating} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={
              i < testimonial.rating
                ? "h-4 w-4 fill-accent text-accent"
                : "h-4 w-4 text-border"
            }
          />
        ))}
      </div>
      <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 border-t border-border pt-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          width={48}
          height={48}
          loading="lazy"
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </figcaption>
    </figure>
  );
}
