export default function WorldMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Simplified world map paths — continents as dot grid */}
      <g opacity="0.7" stroke="currentColor" strokeWidth="0" fill="currentColor">
        {/* North America */}
        {generateDots(120, 80, 320, 250, [
          [1,1,0,0,1,1,1,1,0,0],
          [1,1,1,1,1,1,1,1,1,0],
          [0,1,1,1,1,1,1,1,1,1],
          [0,0,1,1,1,1,1,1,1,0],
          [0,0,0,1,1,1,1,1,0,0],
          [0,0,0,0,1,1,1,0,0,0],
          [0,0,0,0,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0],
        ])}
        {/* South America */}
        {generateDots(280, 310, 180, 260, [
          [0,0,1,1,1,0],
          [0,1,1,1,1,1],
          [0,1,1,1,1,1],
          [1,1,1,1,1,0],
          [0,1,1,1,1,0],
          [0,1,1,1,0,0],
          [0,0,1,1,0,0],
          [0,0,1,0,0,0],
        ])}
        {/* Europe */}
        {generateDots(500, 60, 200, 200, [
          [0,0,1,0,1,1,1],
          [0,1,1,1,1,1,1],
          [1,1,1,1,1,1,0],
          [0,1,1,1,1,0,0],
          [0,0,1,1,0,0,0],
          [0,0,1,0,0,0,0],
        ])}
        {/* Africa */}
        {generateDots(500, 220, 200, 300, [
          [0,1,1,1,1,1,0],
          [1,1,1,1,1,1,0],
          [1,1,1,1,1,1,1],
          [0,1,1,1,1,1,0],
          [0,1,1,1,1,0,0],
          [0,0,1,1,1,0,0],
          [0,0,1,1,0,0,0],
          [0,0,0,1,0,0,0],
        ])}
        {/* Asia */}
        {generateDots(650, 50, 400, 280, [
          [0,0,0,0,0,1,1,1,1,1,1,1,0],
          [0,0,1,1,1,1,1,1,1,1,1,1,1],
          [1,1,1,1,1,1,1,1,1,1,1,0,0],
          [0,1,1,1,1,1,1,1,1,1,0,0,0],
          [0,0,1,1,1,1,1,1,1,0,0,0,0],
          [0,0,0,1,1,1,1,0,0,0,0,0,0],
          [0,0,0,0,1,1,1,1,0,0,0,0,0],
          [0,0,0,0,0,1,1,0,0,0,0,0,0],
        ])}
        {/* Australia */}
        {generateDots(870, 380, 180, 140, [
          [0,0,1,1,1,1],
          [0,1,1,1,1,1],
          [1,1,1,1,1,0],
          [0,1,1,1,0,0],
          [0,0,1,0,0,0],
        ])}
      </g>
      {/* Accent glow dots for office locations */}
      <g>
        {[
          { cx: 540, cy: 120, label: "Stockholm" },
          { cx: 560, cy: 150, label: "Berlin" },
          { cx: 520, cy: 140, label: "London" },
          { cx: 250, cy: 160, label: "New York" },
          { cx: 900, cy: 200, label: "Tokyo" },
          { cx: 850, cy: 420, label: "Sydney" },
        ].map((loc) => (
          <g key={loc.label}>
            <circle cx={loc.cx} cy={loc.cy} r="6" fill="hsl(168 80% 42%)" opacity="0.3">
              <animate attributeName="r" values="6;10;6" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx={loc.cx} cy={loc.cy} r="3" fill="hsl(168 80% 42%)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

function generateDots(
  startX: number,
  startY: number,
  width: number,
  height: number,
  grid: number[][]
): JSX.Element[] {
  const dots: JSX.Element[] = [];
  const rows = grid.length;
  const cols = Math.max(...grid.map((r) => r.length));
  const gapX = width / cols;
  const gapY = height / rows;

  grid.forEach((row, iy) => {
    row.forEach((val, ix) => {
      if (val) {
        dots.push(
          <circle
            key={`${startX}-${iy}-${ix}`}
            cx={startX + ix * gapX + gapX / 2}
            cy={startY + iy * gapY + gapY / 2}
            r="3.5"
          />
        );
      }
    });
  });
  return dots;
}
