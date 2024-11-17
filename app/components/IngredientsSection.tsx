import React from "react";

import Container from "@/components/is-ness/container";
import HeadingAndParagraphContainer from "@/components/is-ness/spacing/headingAndParagraphContainer";
import HeadingAndSubHeadingContainer from "@/components/is-ness/spacing/headingAndSubHeadingContainer";
import MainHeading from "@/components/is-ness/text/mainHeading";
import SubHeading from "@/components/is-ness/text/subHeading";
import IngredientItem from "./IngredientItem";
import Image from "next/image";

const ingredients = [
  {
    id: 1,
    name: "shea butter",
    image: "/ingredients/shea-butter.jpg",
    explanation:
      "A vitamin A & E rich shea butter,  coupled with the nutrient-packed breast milk, offers a potent solution for a baby’s delicate skin. This mix delivers deep hydration, improves elasticity, and ensures a smooth, healthy appearance.",
  },
  {
    id: 2,
    name: "breast milk",
    image: "/ingredients/breast-milk.jpg",
    explanation:
      "Mother's breast milk containing natural vitamins for your little one.",
  },
  {
    id: 3,
    name: "cocoa butter",
    image: "/ingredients/coconut-butter.jpg",
    explanation:
      "Enriched with essential fatty acids, works synergistically with the nutrients from breast milk to deeply nourish each layer of a baby’s brand-new skin. This combination provides intensive hydration, enhances skin elasticity",
  },
  {
    id: 4,
    name: "coconut oil",
    image: "/ingredients/coconut-oil.jpg",
    explanation:
      "Naturally carries antibacterial and anti-fungal properties. It's deeply hydrating, helping to prevent diaper rash and keep the baby's skin soft and supple.",
  },
  {
    id: 5,
    name: "final product",
    image: "/ingredients/final-product.jpg",
    explanation: "Final product full with natural vitamins and nutrients.",
  },
  {
    id: 6,
    name: "argan oil",
    image: "/ingredients/argan-oil.jpg",
    explanation:
      "This oil is  packed with vitamin E and essential fatty acids. It helps nourish the skin, providing a protective barrier against dryness while also promoting healing.",
  },
  {
    id: 7,
    name: "olive oil",
    image: "/ingredients/olive-oil.jpg",
    explanation:
      "Protects and moisturizes you baby’s skin using its natural antioxidants and vitamin E, in addition soothe’s  dry or irritated areas and support healthy skin regeneration.",
  },
  {
    id: 8,
    name: "tamanu oil",
    image: "/ingredients/tamanu-oil.jpg",
    explanation:
      "This oil contains particular antioxidants that help protect baby’s skin from environmental stressors and maintain overall skin health and it’s also known for its ability to promote the formation of healthy new tissue.",
  },
  {
    id: 9,
    name: "jojoba oil",
    image: "/ingredients/jojoba-oil.jpg",
    explanation:
      "Rich in vitamins E & B, making it excellent for moisturizing and protecting delicate baby skin. It mimics the skin's natural oils, helping to maintain balance and soothe irritation.",
  },
];

const IngredientsSection = () => {
  return (
    <Container
      includePaddingBlock
      className="flex justify-center items-center bg-white text-center relative"
    >
      <HeadingAndParagraphContainer>
        <HeadingAndSubHeadingContainer>
          <MainHeading>Ingredients</MainHeading>
          <SubHeading>Nature’s Purest Care for Your Baby</SubHeading>
        </HeadingAndSubHeadingContainer>
        <div className="grid grid-cols-3 md:gap-x-[64px] lg:gap-x-[80px] gap-x-[32px] gap-y-[32px]">
          {ingredients.map((ingredient) => (
            <IngredientItem key={ingredient.id} ingredient={ingredient} />
          ))}
        </div>
      </HeadingAndParagraphContainer>

      <div className="absolute right-3 lg:w-[160px] lg:h-[160px] lg:bottom-2 top-2 lg:top-auto w-[80px] h-[80px] -rotate-12">
        <Image
          fill
          src="/ingredients/natural-product.png"
          alt="A picture saying natural product"
        ></Image>
      </div>
    </Container>
  );
};

export default IngredientsSection;
