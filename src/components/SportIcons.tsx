import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const d: IconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ── Row 1 ── */

// Soccer/football — circle with pentagon pattern
export const FootballIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="2.5" x2="12" y2="9" />
    <line x1="12" y1="15" x2="12" y2="21.5" />
    <line x1="2.5" y1="12" x2="9" y2="12" />
    <line x1="15" y1="12" x2="21.5" y2="12" />
  </svg>
);

// Trophy
export const TrophyIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4z" />
    <path d="M7 6H4.5a1 1 0 0 0-1 1v.5A3 3 0 0 0 6.5 10.5" />
    <path d="M17 6h2.5a1 1 0 0 1 1 1v.5a3 3 0 0 1-3 3" />
  </svg>
);

// Archery — bullseye target
export const ArcheryIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2.5" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

// Running — track & field figure
export const RunningIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="14" cy="4" r="2.2" />
    <path d="M5.5 21l4-8 2.5 2 4.5-6" />
    <path d="M9.5 13l-3-3.5 5-3" />
    <path d="M18.5 21l-2-6" />
  </svg>
);

// Cycling
export const CyclingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="5.5" cy="17" r="3.8" />
    <circle cx="18.5" cy="17" r="3.8" />
    <path d="M5.5 17l4.5-8h3l2.5 4.5 3-4.5" />
    <circle cx="12" cy="5.5" r="1.8" />
  </svg>
);

// Weightlifting — barbell
export const WeightliftingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <rect x="1.5" y="9" width="3" height="6" rx="1" />
    <rect x="19.5" y="9" width="3" height="6" rx="1" />
    <rect x="4.5" y="10" width="2" height="4" rx="0.5" />
    <rect x="17.5" y="10" width="2" height="4" rx="0.5" />
    <line x1="6.5" y1="12" x2="17.5" y2="12" strokeWidth="2.2" />
  </svg>
);

// Fencing — fencer with sword
export const FencingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="7" cy="4" r="2.2" />
    <path d="M5 9l-1.5 8h2.5l1.5-4 3 2" />
    <path d="M9.5 9l11-3.5" />
    <circle cx="21" cy="5" r="1.2" />
  </svg>
);

// Basketball
export const BasketballIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5v19" />
    <path d="M2.5 12h19" />
    <path d="M4.5 5c4 3 4 8 0 14" />
    <path d="M19.5 5c-4 3-4 8 0 14" />
  </svg>
);

// Climbing — mountain peaks
export const ClimbingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M3 20l6-14 4 6 3-5 5 13" />
    <circle cx="17" cy="5" r="2" />
  </svg>
);

// Rugby — jersey/shirt shape
export const RugbyIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M6 3h12l2 4-3 1v12H7V8L4 7l2-4z" />
    <path d="M9 3v3a3 3 0 0 0 6 0V3" />
  </svg>
);

/* ── Row 2 ── */

// Swimming
export const SwimmingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="7" cy="6" r="2.2" />
    <path d="M9 7l4.5 3.5-3 2.5" />
    <path d="M2 16.5c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
    <path d="M2 20.5c1.5-1.2 3-1.2 4.5 0s3 1.2 4.5 0 3-1.2 4.5 0 3 1.2 4.5 0" />
  </svg>
);

// Tennis — racket
export const TennisIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <ellipse cx="11" cy="9" rx="6.5" ry="7.5" />
    <line x1="15" y1="15" x2="20" y2="21" strokeWidth="2.2" />
    <line x1="7" y1="4" x2="7" y2="14" />
    <line x1="15" y1="4" x2="15" y2="14" />
    <line x1="4.5" y1="7" x2="17.5" y2="7" />
    <line x1="4.5" y1="11" x2="17.5" y2="11" />
  </svg>
);

// Boxing — glove
export const BoxingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M5 10V6.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3V7h2a3 3 0 0 1 3 3v3.5a5.5 5.5 0 0 1-5.5 5.5h-3A4.5 4.5 0 0 1 5 14.5V10z" />
    <path d="M8 19v2.5" />
    <path d="M14 19v2.5" />
  </svg>
);

// Racing — flag
export const RacingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M5 2v20" />
    <path d="M5 3h13l-2.5 5L18 13H5" />
    <line x1="5" y1="8" x2="15.5" y2="8" />
    <line x1="11" y1="3" x2="11" y2="13" />
  </svg>
);

// Golf
export const GolfIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M14 20h-4" />
    <path d="M12 6v14" />
    <path d="M12 6l7 3.5-7 3.5" />
    <circle cx="6" cy="19" r="2.5" />
  </svg>
);

// Gymnastics — figure doing splits
export const GymnasticsIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="12" cy="3.5" r="2.2" />
    <path d="M12 5.7v5" />
    <path d="M5 8l7 2.7 7-2.7" />
    <path d="M8 21l4-10.3 4 10.3" />
  </svg>
);

// Winter Sports — snowflake
export const SkiingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="3.5" y1="7" x2="20.5" y2="17" />
    <line x1="3.5" y1="17" x2="20.5" y2="7" />
    <line x1="9" y1="3.5" x2="15" y2="6" />
    <line x1="9" y1="20.5" x2="15" y2="18" />
    <line x1="5" y1="9.5" x2="7" y2="14.5" />
    <line x1="17" y1="9.5" x2="19" y2="14.5" />
  </svg>
);

// Sailing — boat with waves
export const SailingIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M12 3v12" />
    <path d="M12 3L6 15h12L12 3z" />
    <path d="M2 19c2-1.5 4-1.5 6 0s4 1.5 6 0 4-1.5 6 0" />
  </svg>
);

// Volleyball
export const VolleyballIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 2.5c-3 4.5-3 10 0 19" />
    <path d="M12 2.5c3 4.5 3 10 0 19" />
    <path d="M3 8c5 2.5 13 2.5 18 0" />
    <path d="M3 16c5-2.5 13-2.5 18 0" />
  </svg>
);

// Esports — game controller
export const EsportsIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M6 9h12a4 4 0 0 1 4 4v1a3 3 0 0 1-3 3h-1.5L16 14H8l-1.5 3H5a3 3 0 0 1-3-3v-1a4 4 0 0 1 4-4z" />
    <circle cx="8" cy="11" r="1.5" />
    <line x1="15" y1="10" x2="15" y2="12.5" />
    <line x1="13.5" y1="11.25" x2="16.5" y2="11.25" />
  </svg>
);

// Speed Sports — speedometer
export const SpeedSportsIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10" />
    <path d="M12 6v2" />
    <path d="M6 12H4" />
    <path d="M7 7l1.5 1.5" />
    <path d="M12 12l5-5" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <path d="M19 15h3" />
    <path d="M18 19l2 2" />
  </svg>
);

// Fitness — heart with pulse
export const FitnessIcon = (p: IconProps) => (
  <svg {...d} {...p}>
    <path d="M12 21C7 17 2 13 2 8.5A5.5 5.5 0 0 1 12 5a5.5 5.5 0 0 1 10 3.5c0 4.5-5 8.5-10 12.5z" />
    <polyline points="4 13 9 13 10.5 10 13.5 16 15 13 20 13" />
  </svg>
);
