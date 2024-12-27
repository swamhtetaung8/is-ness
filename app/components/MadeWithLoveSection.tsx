import Card from "@/components/is-ness/card";
import Container from "@/components/is-ness/container";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import { HandHeart, Leaf, Recycle } from "lucide-react";
import React from "react";

const madeWithLoveSteps = [
  {
    id: 1,
    image: "/made-with-love/nourishing-with-nature.jpg",
    mainText: (
      <span className="flex items-center xl:gap-4 flex-col xl:flex-row">
        <span>Nourishing with Nature</span> <Leaf className="w-6 h-6" />
      </span>
    ),
    description:
      "Crafted from pure natural oils, it complements mother's milk, gently nourishing and protecting your baby’s delicate skin.",
  },
  {
    id: 2,
    image: "/made-with-love/eco-friendly.jpg",
    mainText: (
      <span className="flex items-center xl:gap-4 flex-col xl:flex-row">
        <span>Eco-Friendly Packaging</span> <Recycle className="w-6 h-6" />
      </span>
    ),
    description:
      "Because we love our planet, all orders come in eco-friendly packaging, designed with care for the earth and for you.",
  },
  {
    id: 3,
    image: "/made-with-love/more-than-just-a-product.jpg",
    mainText: (
      <span className="flex items-center xl:gap-4 flex-col xl:flex-row">
        <span>More than just a product</span> <HandHeart className="w-6 h-6" />
      </span>
    ),
    description:
      "With every drop, you give your baby the best of yourself, blended with nature’s finest ingredients. Because only you know what’s best for your little one.",
  },
];

const MadeWithLoveSection = () => {
  return (
    <Container includePaddingBlock className="bg-white">
      <HeadingAndParagraphContainer>
        <MainHeading className="text-center">
          Made With Love For Your Newborn
        </MainHeading>
        <div className="grid xl:grid-cols-3 gap-[32px] lg:gap-[64px] md:grid-cols-2 grid-cols-1">
          {madeWithLoveSteps.map((madeWithLoveStep) => (
            <Card {...madeWithLoveStep} key={madeWithLoveStep.id} />
          ))}
        </div>
      </HeadingAndParagraphContainer>
    </Container>
  );
};

export default MadeWithLoveSection;
