import React from "react";

const SubHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`text-[16px] md:text-[24px] font-Scripter text-isness-darkGrey ${className}`}
    >
      {children}
    </h2>
  );
};

export default SubHeading;
