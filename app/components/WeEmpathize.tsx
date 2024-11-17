import Container from "@/components/is-ness/container";
import MainHeading from "@/components/is-ness/text/mainHeading";
import ParagraphText from "@/components/is-ness/text/paragraphText";
import Image from "next/image";
import React from "react";

const WeEmpathize = () => {
  return (
    <Container
      includePaddingBlock
      className="relative w-full min-h-[600px] lg:min-h-[800px] xl:min-h-screen flex items-end"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 z-10"></div>
      <Image
        src="/we-care/background-image.jpg"
        fill
        alt="image of a mom breast feeding her child"
        className="object-cover"
      ></Image>
      <div className="relative w-full xl:w-2/5 p-[24px] lg:p-[32px] bg-white z-20 space-y-[8px]">
        <MainHeading className="tracking-wider">We Empathize</MainHeading>
        <ParagraphText>
          We deeply understand the care, effort, and love that goes into
          expressing and preserving your breast milk. It&apos;s not just
          milk—it&apos;s a labor of love, a connection to your baby, and a
          precious resource.
        </ParagraphText>
      </div>
    </Container>
  );
};

export default WeEmpathize;
