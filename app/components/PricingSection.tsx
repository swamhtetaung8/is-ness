import Button from "@/components/is-ness/button";
import Container from "@/components/is-ness/container";
import DescriptivePanel from "@/components/is-ness/descriptivePanel";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import Image from "next/image";
import React from "react";

const PricingSection = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row">
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
                description="Your first purchase comes with a beautiful, handcrafted wooden box, personalized with your baby’s name. Inside, you'll find a special jar filled with our custom lotion, made just for your little one."
              />
              <DescriptivePanel
                heading="Returning Customers - ฿2,500 / jar"
                description="As a returning customer, you’ll receive your lotion in eco-friendly packaging, keeping it gentle on the planet while maintaining the same quality and care."
              />
              <Button variant="primary">Shop Now</Button>
            </div>
          </HeadingAndParagraphContainer>
        </Container>
      </div>
    </section>
  );
};

export default PricingSection;
