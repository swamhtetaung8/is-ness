import Image from "next/image";
import React from "react";

import Container from "@/components/is-ness/container";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import HeadingAndSubHeadingContainer from "@/components/is-ness/spacing/headingAndSubHeadingContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import SubHeading from "@/components/is-ness/text/subHeading";
import ParagraphText from "@/components/is-ness/text/paragraphText";

const MoreInformationSection = () => {
  return (
    <Container
      includePaddingBlock
      className="flex gap-[32px] md:gap-[48px] lg:gap-[72px] justify-between flex-col xl:flex-row"
      id="more-information"
    >
      <div className="flex-1 h-[670px] relative rounded-lg overflow-hidden hidden xl:block">
        <Image
          fill
          src="/more-information/more-information-image.jpg"
          alt="Image of a mother holding babe's hand"
          className="object-cover"
        ></Image>
      </div>
      <div className="relative w-full h-[400px] md:h-[540px] rounded-lg overflow-hidden block xl:hidden">
        <Image
          fill
          src="/more-information/more-information-image.jpg"
          alt="Image of a mother holding babe's hand"
          className="object-cover"
        ></Image>
      </div>
      <div className="flex-1">
        <HeadingAndParagraphContainer>
          <HeadingAndSubHeadingContainer>
            <MainHeading>A Mother&apos;s Touch, Perfected</MainHeading>
            <SubHeading>
              Your milk, handcrafted into a nourishing lotion for your little
              one
            </SubHeading>
          </HeadingAndSubHeadingContainer>
          <div className="space-y-[12px]">
            <ParagraphText>
              The most precious gift you can give to your newborn is the
              nurturing touch of nature.
            </ParagraphText>
            <ParagraphText>
              Our bespoke service allows you to transform your breast milk into
              a luxurious, all-natural lotion, perfectly crafted for your
              baby&apos;s delicate skin.
            </ParagraphText>
            <ParagraphText>
              We&apos;ll create a luxurious, natural lotion using only
              breastmilk, the finest oils and butters.
            </ParagraphText>
            <ParagraphText>
              Each jar is a perfect blend of nutrients, crafted for your
              baby&apos;s delicate skin.
            </ParagraphText>
          </div>
        </HeadingAndParagraphContainer>
      </div>
    </Container>
  );
};

export default MoreInformationSection;
