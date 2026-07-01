import { useState } from "react";
import { Leaf, Send, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "./Button";

const LINK_GROUPS = [
  {
    title: "Shop",
    links: ["Trending plants", "Top selling", "O₂ plants", "Pots & planters", "Gift cards"],
  },
  {
    title: "Company",
    links: ["About us", "Sustainability", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["Care guide", "Shipping", "Returns", "FAQs", "Track order"],
  },
];

const SOCIALS = [
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-2 text-foreground">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Verdant
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Greener homes, calmer minds. We deliver healthy, hand-picked plants
              and everything you need to help them thrive.
            </p>
            <form
              className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email) setDone(true);
              }}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="h-11 flex-1 rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit" aria-label="Subscribe to newsletter">
                <Send className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
            {done && (
              <p className="text-sm font-medium text-primary">
                Thanks! You&apos;re on the list. 🌿
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Verdant. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
