import Container from "@/components/is-ness/container";
import NormalText from "@/components/is-ness/text/normalText";
import Image from "next/image";
import React from "react";

const QuoteSection = () => {
  return (
    <Container
      includePaddingBlock
      className="relative min-h-[660px] flex items-stretch"
    >
      <Image
        fill
        src="/quote/background-image.jpg"
        alt="Image of the product with black overlay"
        className="z-0 object-cover"
      />
      <div className="text-isness-white w-full relative flex items-center justify-center">
        <h1 className="text-[32px] [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)] justify-self-center lg:leading-[72px] md:text-[48px] lg:text-[64px] font-DreamAvenue text-center ">
          “This jar represents <br />
          a singular blend of <br />
          your existence, <br />
          your creativity, <br />
          your is~ness .”
        </h1>
      </div>
      <Container
        className="text-end absolute bottom-0 text-isness-white right-0"
        includePaddingBlock
      >
        <NormalText>K Jeff</NormalText>
        <NormalText>Founder</NormalText>
      </Container>
    </Container>
  );
};

export default QuoteSection;
