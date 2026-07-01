import { Leaf, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import heroImg from "@/assets/hero.jpg";

export function HeroBanner() {
  return (
    <section id="home" className="container-px pt-10 md:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-secondary-foreground">
            <Leaf className="h-3.5 w-3.5" /> Bring nature home
          </span>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Grow a greener,{" "}
            <span className="text-primary">calmer</span> living space.
          </h1>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hand-picked indoor plants delivered to your door — easy to care for,
            air-purifying, and styled to make every room feel alive.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg">
              Shop plants
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary">
              Care guide
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" /> Free delivery over $50
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> 30-day plant promise
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-secondary/60 blur-2xl" />
          <img
            src={heroImg}
            alt="Monstera in a bright living room"
            width={1280}
            height={1280}
            fetchPriority="high"
            className="aspect-square w-full rounded-[2.5rem] object-cover shadow-card"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-background/90 px-4 py-3 shadow-soft backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">500+ varieties</p>
              <p className="text-xs text-muted-foreground">Curated for every home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
