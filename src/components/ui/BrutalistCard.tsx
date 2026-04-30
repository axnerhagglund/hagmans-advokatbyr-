interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "none" | "orange" | "yellow" | "black";
  hoverable?: boolean;
  onClick?: () => void;
}

const accentBorder: Record<string, string> = {
  none: "",
  orange: "border-t-4 border-t-[#c9521a]",
  yellow: "border-t-4 border-t-[#ffeb3b]",
  black: "border-t-4 border-t-[#0a0a0a]",
};

export default function BrutalistCard({
  children,
  className = "",
  accent = "none",
  hoverable = true,
  onClick,
}: BrutalistCardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white border border-[#d8d4cc] shadow-[2px_2px_0_#0a0a0a]
        ${accentBorder[accent]}
        ${
          hoverable
            ? "transition-all duration-150 hover:shadow-[3px_3px_0_#0a0a0a] hover:-translate-x-px hover:-translate-y-px cursor-pointer"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}
