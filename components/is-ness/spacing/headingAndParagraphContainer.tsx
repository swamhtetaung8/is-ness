import React from "react";

const HeadingAndParagraphContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-[32px] md:space-y-[40px] lg:space-y-[56px]">
      {children}
    </div>
  );
};

export default HeadingAndParagraphContainer;
