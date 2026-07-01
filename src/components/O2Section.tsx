import { Wind, Moon, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import o2Img from "@/assets/o2-feature.jpg";

const BENEFITS = [
  { Icon: Wind, title: "Cleaner air", text: "Filters common indoor toxins all day." },
  { Icon: Moon, title: "Better sleep", text: "Releases oxygen through the night." },
  { Icon: Sparkles, title: "Low effort", text: "Thrives with just weekly watering." },
];

export function O2Section() {
  return (
    <section id="o2-plants" className="container-px scroll-mt-24 py-16 md:py-24">
      <div className="overflow-hidden rounded-[2.5rem] border border-border bg-primary text-primary-foreground">
        <div className="grid items-center gap-0 lg:grid-cols-2">
          <div className="relative order-2 h-full lg:order-1">
            <img
              src={o2Img}
              alt="Areca palm by a window"
              width={1104}
              height={1104}
              loading="lazy"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
          <div className="order-1 flex flex-col items-start gap-6 p-8 md:p-12 lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]">
              O₂ Collection
            </span>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Breathe easier with air-purifying plants
            </h2>
            <p className="max-w-md text-base leading-relaxed text-primary-foreground/80">
              Our O₂ collection is hand-selected for maximum air purification.
              The Areca Palm tops the list — lush, pet-friendly, and proven to
              boost humidity and oxygen in your home.
            </p>
            <ul className="grid w-full gap-4 sm:grid-cols-3">
              {BENEFITS.map(({ Icon, title, text }) => (
                <li
                  key={title}
                  className="rounded-2xl bg-primary-foreground/10 p-4"
                >
                  <Icon className="h-5 w-5" />
                  <p className="mt-2 text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs text-primary-foreground/75">{text}</p>
                </li>
              ))}
            </ul>
            <Button variant="accent" size="lg">
              Shop O₂ plants
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
