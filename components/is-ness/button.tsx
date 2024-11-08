import React from "react";
import { cn } from "@/lib/utils";
import TextNormal from "@/components/is-ness/text/textNormal";

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
      <TextNormal>{children}</TextNormal>
    </button>
  );
};

export default Button;
