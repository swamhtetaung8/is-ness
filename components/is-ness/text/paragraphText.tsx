import React from "react";

const ParagraphText = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-[16px] md:text-[24px] font-Scripter">{children}</p>;
};

export default ParagraphText;
