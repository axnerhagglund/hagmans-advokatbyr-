interface HighlightTextProps {
  children: React.ReactNode;
  color?: "yellow" | "orange";
  className?: string;
}

export default function HighlightText({
  children,
  color = "yellow",
  className = "",
}: HighlightTextProps) {
  const bg = color === "yellow" ? "#ffeb3b" : "#c9521a";
  const fg = color === "orange" ? "#ffffff" : "inherit";

  return (
    <mark
      style={{ backgroundColor: bg, color: fg }}
      className={`px-1 py-0.5 rounded-none not-italic ${className}`}
    >
      {children}
    </mark>
  );
}
