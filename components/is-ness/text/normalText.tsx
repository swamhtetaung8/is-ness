import React from "react";

const NormalText = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={`text-[14px] md:text-[18px] ${className} font-Scripter`}>
      {children}
    </p>
  );
};

export default NormalText;
