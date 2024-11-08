import React from "react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-[16px] md:text-[24px] font-Scripter text-isness-darkGrey">
      {children}
    </h2>
  );
};

export default SubHeading;
