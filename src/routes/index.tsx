import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { HeroBanner } from "@/components/HeroBanner";
import { SectionTitle } from "@/components/SectionTitle";
import { PlantCard } from "@/components/PlantCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { O2Section } from "@/components/O2Section";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { trendingPlants, topSellingPlants, testimonials } from "@/data/plants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Verdant — Indoor Plants Delivered to Your Door" },
      {
        name: "description",
        content:
          "Shop hand-picked, air-purifying indoor plants. Trending picks, best sellers, and an O₂ collection — delivered healthy with free delivery over $50.",
      },
      { property: "og:title", content: "Verdant — Indoor Plants Delivered to Your Door" },
      {
        property: "og:description",
        content:
          "Hand-picked, easy-care indoor plants delivered to your door. Greener homes, calmer minds.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroBanner />

        <section id="trending" className="container-px scroll-mt-24 py-16 md:py-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle
              align="left"
              eyebrow="Fresh picks"
              title="Trending plants this season"
              description="The greenery everyone's bringing home right now — styled, healthy, and ready to thrive."
            />
            <Button variant="secondary" className="shrink-0">
              View all
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trendingPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </section>

        <section
          id="top-selling"
          className="scroll-mt-24 bg-secondary/40 py-16 md:py-24"
        >
          <div className="container-px">
            <SectionTitle
              className="mb-10"
              eyebrow="Customer favorites"
              title="Top selling plants"
              description="Tried, loved, and reordered — these are the plants our community can't get enough of."
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {topSellingPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="container-px scroll-mt-24 py-16 md:py-24">
          <SectionTitle
            className="mb-10"
            eyebrow="Customer reviews"
            title="Loved by plant people everywhere"
            description="Over 12,000 happy homes growing greener with Verdant."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </section>

        <O2Section />
      </main>
      <Footer />
    </div>
  );
}
