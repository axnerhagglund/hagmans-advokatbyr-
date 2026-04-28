import Link from "next/link";

interface BrutalistButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "yellow";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[#ff5722] text-white border border-[#cc3d13] shadow-sm hover:bg-[#e84d1c] hover:shadow-none transition-colors",
  secondary:
    "bg-[#0a0a0a] text-white border border-[#0a0a0a] shadow-sm hover:bg-[#222] transition-colors",
  outline:
    "bg-white text-[#0a0a0a] border border-[#0a0a0a] hover:bg-[#f7f7f5] transition-colors",
  yellow:
    "bg-[#ffeb3b] text-[#0a0a0a] border border-[#0a0a0a] shadow-sm hover:bg-[#f5e032] transition-colors",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm font-semibold",
  md: "px-6 py-3 text-base font-semibold",
  lg: "px-8 py-4 text-lg font-semibold",
};

export default function BrutalistButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: BrutalistButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-100 active:shadow-none active:translate-x-1 active:translate-y-1 ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
