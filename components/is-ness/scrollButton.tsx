import React from "react";
import { cn } from "@/lib/utils";
import NormalText from "@/components/is-ness/text/normalText";

interface ScrollButtonProps {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  href: string;
}

const ScrollButton = ({ children, variant, href }: ScrollButtonProps) => {
  return (
    <a
      href={href}
      className={cn(
        "px-6 md:px-8 py-2 transition-colors inline-block duration-300",
        {
          "bg-isness-primary text-white border border-isness-primary hover:bg-transparent hover:text-isness-primary":
            variant === "primary",
          "bg-transparent text-white border border-white hover:bg-white hover:text-black":
            variant === "secondary",
        }
      )}
      onClick={(event) => {
        event.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <p className="text-[14px] md:text-[18px]">{children}</p>
    </a>
  );
};

export default ScrollButton;
