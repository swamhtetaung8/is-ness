import React from "react";
import NormalText from "./normalText";

const RoundedBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <NormalText className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-isness-primary text-isness-white p-4  md:p-5 rounded-full flex items-center justify-center">
      {children}
    </NormalText>
  );
};

export default RoundedBackground;
