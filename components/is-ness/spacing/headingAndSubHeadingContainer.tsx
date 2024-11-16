import React from "react";

const HeadingAndSubHeadingContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="space-y-[8px]">{children}</div>;
};

export default HeadingAndSubHeadingContainer;
