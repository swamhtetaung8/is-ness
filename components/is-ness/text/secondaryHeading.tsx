import React from "react";

const SecondaryHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={`text-[16px] md:text-[32px] font-Scripter ${className}`}>
      {children}
    </h3>
  );
};
export default SecondaryHeading;
