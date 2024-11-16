import Container from "@/components/is-ness/container";
import SubHeading from "@/components/is-ness/text/subHeading";
import React from "react";

const IsNessSection = () => {
  return (
    <Container className="text-center py-4">
      <h1 className="text-[24px] md:text-[32px] text-center font-DreamAvenue font-normal">
        is~ness
      </h1>
      <div className="text-center font-Scripter">
        <SubHeading>your milk, their comfort</SubHeading>
        <SubHeading>EST 2024</SubHeading>
      </div>
    </Container>
  );
};

export default IsNessSection;
