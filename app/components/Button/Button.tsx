import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // Optional for buttons without links
  variant?: "primary" | "secondary"; // Optional for predefined variants
  icon?: boolean; // Option to include an icon
  className?: string; // Optional for custom class names
  onClick?: () => void; // Optional onClick handler for non-link buttons
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant,
  icon = true,
  className = "",
  onClick,
}) => {
  const baseStyle =
    "px-6 py-4 text-xl font-medium rounded-lg inline-block transition-transform"; // Removed hover scale by default
  const primaryStyle =
    "bg-primary text-primary-foreground hover:bg-primary/90";
  const secondaryStyle =
    "bg-secondary text-secondary-foreground hover:bg-secondary/90";

  const style =
    variant === "primary"
      ? primaryStyle
      : variant === "secondary"
      ? secondaryStyle
      : ""; // Empty style for custom classes

  const content = (
    <span
      className={`${baseStyle} ${style} ${className} flex items-center justify-center group`}
    >
      {children}
      {icon && (
        <span className="ml-2 inline-block transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      )}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="group">
      {content}
    </button>
  );
};

export default Button;
