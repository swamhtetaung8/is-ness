import React from "react";

const HeadingTwo = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-[16px] md:text-[24px]">{children}</h2>;
};

export default HeadingTwo;
