import Container from "@/components/is-ness/container";
import DescriptivePanel from "@/components/is-ness/descriptivePanel";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import Image from "next/image";
import React from "react";

const SafeAndSimpleDeliveryProcessSection = () => {
  return (
    <section className="flex bg-white flex-col xl:flex-row">
      <div className="flex-1">
        <Container includePaddingBlock>
          <HeadingAndParagraphContainer>
            <MainHeading>Safe and Simple Delivery Process</MainHeading>
            <div className="space-y-[32px]">
              <DescriptivePanel
                includeStep
                stepNumber="1"
                heading="Prepare Your Milk"
                description="Carefully package your frozen breast milk, and we’ll arrange a doorstep pickup. We handle every step with care to maintain its purity and quality."
              />
              <DescriptivePanel
                includeStep
                stepNumber="2"
                heading="Our Custom Crafting"
                description="Once received, we blend your breast milk with nutrient-rich natural oils and butters to create your custom lotion."
              />
              <DescriptivePanel
                includeStep
                stepNumber="3"
                heading="Free Delivery"
                description="In just five days, your lotion is shipped back to you, free of charge and ready to use. Please keep it refrigerated to preserve its natural goodness and effectiveness."
              />
            </div>
          </HeadingAndParagraphContainer>
        </Container>
      </div>
      <div className="flex-1 h-[670px] w-full relative hidden xl:block">
        <Image
          fill
          src="/safe-and-simple-delivery-process/product-image.jpg"
          alt="Image of the product being held by both mother and child"
          className="object-cover"
        ></Image>
      </div>
      <div className="relative w-full h-[400px] md:h-[540px] overflow-hidden block xl:hidden">
        <Image
          fill
          src="/safe-and-simple-delivery-process/product-image.jpg"
          alt="Image of the product being held by both mother and child"
          className="object-cover"
        ></Image>
      </div>
    </section>
  );
};

export default SafeAndSimpleDeliveryProcessSection;
