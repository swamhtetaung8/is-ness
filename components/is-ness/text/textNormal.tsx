import React from "react";

const TextNormal = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[14px] md:text-[18px]">{children}</p>;
};

export default TextNormal;
