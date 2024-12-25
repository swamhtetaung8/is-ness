import React from "react";
import { cn } from "@/lib/utils";

interface ScrollButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "normal";
  href: string;
  onClick?: () => void;
}

const ScrollButton = ({ children, variant, href, onClick }: ScrollButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "py-2 transition-colors inline-block duration-300",
        {
          "px-6 md:px-8 bg-isness-primary text-white border border-isness-primary hover:bg-transparent hover:text-isness-primary":
            variant === "primary",
          "px-6 md:px-8 bg-transparent text-white border border-white hover:bg-white hover:text-black":
            variant === "secondary",
          "":
          variant === "normal",
        }
      )}
      onClick={(event) => {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        if (onClick) {
          onClick();
        }
      }}
    >
      <p className="text-[14px] md:text-[18px]">{children}</p>
    </a>
  );
};

export default ScrollButton;
