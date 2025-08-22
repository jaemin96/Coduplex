import type { ButtonHTMLAttributes } from "react";
import "@styles/scss/main.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: "medium" | "small" | "large";
  backgroundColor?: string;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? "button--primary" : "button--secondary";

  return (
    <button
      className={["button", `button--${size}`, mode, className]
        .filter(Boolean)
        .join(" ")}
      style={{ backgroundColor }}
      {...props}
    />
  );
};
