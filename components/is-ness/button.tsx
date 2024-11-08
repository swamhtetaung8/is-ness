import React from "react";
import { cn } from "@/lib/utils";
import NormalText from "@/components/is-ness/text/normalText";

interface ButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
}

const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button
      className={cn("px-6 md:px-8 py-2 transition-colors duration-300", {
        "bg-isness-primary text-white border border-isness-primary hover:bg-transparent hover:text-isness-primary":
          variant === "primary",
        "bg-transparent text-white border border-white hover:bg-white hover:text-black":
          variant === "secondary",
      })}
    >
      <NormalText>{children}</NormalText>
    </button>
  );
};

export default Button;
