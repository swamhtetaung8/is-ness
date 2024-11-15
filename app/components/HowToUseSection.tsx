import Card from "@/components/is-ness/card";
import Container from "@/components/is-ness/container";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import React from "react";

const howToUseSteps = [
  {
    id: 1,
    image: "/how-to-use/refrigerator.png",
    mainText: "Refrigerate",
    description:
      "Keep the lotion in the fridge to preserve its purity and effectiveness, just like you carefully store your breast milk.",
  },
  {
    id: 2,
    image: "/how-to-use/check.png",
    mainText: "When ready to use",
    description:
      "Scoop a small amount into the center of your hands and hold after 5 seconds gently rub them together to bring the lotion to body temperature.",
  },
  {
    id: 3,
    image: "/how-to-use/rub-lotion.png",
    mainText: "Tenderly massage",
    description:
      "This process not only enhances absorption but also delivers the nurturing benefits of your own breast milk, helping to maintain optimal hydration, reinforce the skin barrier, and support overall skin health.",
  },
];

const HowToUseSection = () => {
  return (
    <Container includePaddingBlock>
      <HeadingAndParagraphContainer>
        <MainHeading>How To Use Your Breast Milk Lotion</MainHeading>
        <div className="grid xl:grid-cols-3 gap-[32px] lg:gap-[64px] md:grid-cols-2 grid-cols-1">
          {howToUseSteps.map((howToUseStep) => (
            <Card {...howToUseStep} key={howToUseStep.id} />
          ))}
        </div>
      </HeadingAndParagraphContainer>
    </Container>
  );
};

export default HowToUseSection;
