import React from "react";

const MainHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`text-[24px] md:text-[36px] font-DreamAvenue text-isness-primary ${className}`}
    >
      {children}
    </h2>
  );
};

export default MainHeading;
