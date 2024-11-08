import React from "react";

const MainHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-[24px] md:text-[36px] font-DreamAvenue text-isness-primary">
      {children}
    </h2>
  );
};

export default MainHeading;
