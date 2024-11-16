import React from "react";

const SecondaryHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`text-[18px] md:text-[28px] font-Scripter ${className}`}>
      {children}
    </h3>
  );
};
export default SecondaryHeading;
