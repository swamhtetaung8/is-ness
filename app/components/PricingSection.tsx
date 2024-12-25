import AnchorTag from "@/components/is-ness/anchor_tag";
import Container from "@/components/is-ness/container";
import DescriptivePanel from "@/components/is-ness/descriptivePanel";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import Image from "next/image";
import React from "react";

const PricingSection = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row" id="pricing">
      <div className="flex-1 h-[670px] w-full relative hidden xl:block">
        <Image
          fill
          src="/pricing/product-image.jpg"
          alt="Image of the product being held by both mother and child"
          className="object-cover"
        ></Image>
      </div>
      <div className="relative w-full h-[400px] md:h-[540px] overflow-hidden block xl:hidden">
        <Image
          fill
          src="/pricing/product-image.jpg"
          alt="Image of the product being held by both mother and child"
          className="object-cover"
        ></Image>
      </div>
      <div className="flex-1">
        <Container includePaddingBlock>
          <HeadingAndParagraphContainer>
            <MainHeading>Pricing</MainHeading>
            <div className="space-y-[32px]">
              <DescriptivePanel
                heading="New Customers - ฿3,000 / jar"
                description="Your first purchase comes with a special eco-friendly box which contains a jar filled with our custom lotion, made just for your little one."
              />
              <DescriptivePanel
                heading="Returning Customers - ฿2,500 / jar"
                description="As a returning customer, you'll enjoy an exclusive discount on our custom lotion. A little thank-you for being part of our family and trusting us to care for your little one."
              />
              <AnchorTag
                href="https://line.me/R/ti/p/@674uogcn?from=page&accountId=674uogcn"
                target
                variant="primary"
              >
                Shop Now
              </AnchorTag>{" "}
            </div>
          </HeadingAndParagraphContainer>
        </Container>
      </div>
    </section>
  );
};

export default PricingSection;
