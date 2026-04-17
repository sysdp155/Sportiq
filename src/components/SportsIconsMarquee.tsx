import {
  FootballIcon,
  TrophyIcon,
  ArcheryIcon,
  RunningIcon,
  CyclingIcon,
  WeightliftingIcon,
  FencingIcon,
  ClimbingIcon,
  RugbyIcon,
  SwimmingIcon,
  BoxingIcon,
  RacingIcon,
  GymnasticsIcon,
  SkiingIcon,
  SailingIcon,
  BasketballIcon,
  TennisIcon,
  GolfIcon,
  EsportsIcon,
  VolleyballIcon,
} from "./SportIcons";
import { ComponentType, SVGProps } from "react";

type SportItem = { icon: ComponentType<SVGProps<SVGSVGElement>>; label: string };

const row1: SportItem[] = [
  { icon: FootballIcon, label: "Football" },
  { icon: TrophyIcon, label: "Championship" },
  { icon: ArcheryIcon, label: "Archery" },
  { icon: RunningIcon, label: "Track & Field" },
  { icon: CyclingIcon, label: "Cycling" },
  { icon: WeightliftingIcon, label: "Weightlifting" },
  { icon: FencingIcon, label: "Fencing" },
  { icon: BasketballIcon, label: "Basketball" },
  { icon: ClimbingIcon, label: "Climbing" },
  { icon: RugbyIcon, label: "Rugby" },
];

const row2: SportItem[] = [
  { icon: SwimmingIcon, label: "Swimming" },
  { icon: TennisIcon, label: "Tennis" },
  { icon: BoxingIcon, label: "Boxing" },
  { icon: RacingIcon, label: "Racing" },
  { icon: GolfIcon, label: "Golf" },
  { icon: GymnasticsIcon, label: "Gymnastics" },
  { icon: SkiingIcon, label: "Winter Sports" },
  { icon: SailingIcon, label: "Sailing" },
  { icon: VolleyballIcon, label: "Volleyball" },
  { icon: EsportsIcon, label: "Esports" },
];

function MarqueeRow({
  items,
  direction,
}: {
  items: SportItem[];
  direction: "left" | "right";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex gap-8 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm shrink-0"
          >
            <item.icon className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SportsIconsMarquee() {
  return (
    <section className="py-10 bg-background/50 overflow-hidden space-y-4">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  );
}
