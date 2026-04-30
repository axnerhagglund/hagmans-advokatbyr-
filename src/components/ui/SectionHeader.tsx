interface SectionHeaderProps {
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} mb-10 ${className}`}>
      {tag && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#c9521a] mb-4 border border-[#c9521a] px-3 py-1">
          {tag}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0a] leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[#6b6b6b] text-lg leading-relaxed ${
            align === "center" ? "max-w-2xl" : "max-w-xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
