import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="px-[16px] md:px-[64px] lg:px-[88px]">{children}</div>;
};

export default Container;
