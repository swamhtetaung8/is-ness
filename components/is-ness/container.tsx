import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  includePaddingBlock?: boolean;
  className?: string;
  id?: string;
}

const Container = ({
  children,
  includePaddingBlock = false,
  className = "",
  id,
}: ContainerProps) => {
  return (
    <div
      id={id}
      className={`px-[32px] md:px-[64px] lg:px-[88px] ${
        includePaddingBlock ? "py-[24px] md:py-[54px] lg:py-[72px]" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
