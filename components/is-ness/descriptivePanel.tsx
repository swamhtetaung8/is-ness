import React from "react";
import NormalText from "./text/normalText";
import RoundedBackground from "./text/roundedBackground";
import SecondaryHeading from "./text/secondaryHeading";

interface DescriptivePanelProps {
  includeStep?: boolean;
  stepNumber?: string | number;
  heading: string;
  description: string;
}

const DescriptivePanel = ({
  includeStep,
  stepNumber,
  heading,
  description,
}: DescriptivePanelProps) => (
  <div className="space-y-[16px]">
    {includeStep && (
      <div className="flex items-center gap-[8px] md:gap-[16px]">
        <RoundedBackground>{stepNumber}</RoundedBackground>
        <SecondaryHeading>{heading}</SecondaryHeading>
      </div>
    )}

    {!includeStep && <SecondaryHeading>{heading}</SecondaryHeading>}

    <NormalText>{description}</NormalText>
  </div>
);

export default DescriptivePanel;
