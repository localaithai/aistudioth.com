import { type CSSProperties, useEffect, useRef, useState } from "react";

type MeterProps = {
  segments: number;
  lit: number;
  tone?: "ink" | "deck";
  size?: "sm" | "md";
  over?: boolean;
  className?: string;
};

export function Meter({
  segments,
  lit,
  tone = "ink",
  size = "sm",
  over = false,
  className = "",
}: MeterProps) {
  const root = useRef<HTMLSpanElement>(null);
  const [live, setLive] = useState(false);
  const level = Math.min(Math.max(lit, 0), segments);

  useEffect(() => {
    const node = root.current;
    if (!node || lit <= 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        setLive(true);
      },
      { threshold: 0.6 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [lit]);

  const litColor =
    tone === "deck"
      ? over
        ? "bg-clip"
        : "bg-deck-ink"
      : over
        ? "bg-brand"
        : "bg-ink";
  const offColor = tone === "deck" ? "bg-deck-line" : "bg-meter-off";
  const height = size === "md" ? "h-4" : "h-3";

  return (
    <span
      ref={root}
      aria-hidden="true"
      data-live={live ? "" : undefined}
      className={`group/meter flex gap-[3px] ${className}`}
    >
      {Array.from({ length: segments }, (_, cell) => cell).map((cell) => (
        <span
          key={cell}
          style={{ "--i": cell } as CSSProperties}
          className={`flex-1 rounded-[1px] ${height} ${
            cell < level
              ? `${litColor} motion-safe:group-data-live/meter:animate-meter-rise`
              : offColor
          }`}
        />
      ))}
    </span>
  );
}
