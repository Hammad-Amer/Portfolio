import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all duration-300 text-sm";

  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/25",
    outline:
      "border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400",
    ghost:
      "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const classes = `${base} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
