import Image from "next/image";
import SecondaryHeading from "./text/secondaryHeading";
import NormalText from "./text/normalText";

interface CardProps {
  image: string;
  mainText: React.ReactNode; // Allows text and icon as children
  description: string;
}

const Card = ({ image, mainText, description }: CardProps) => {
  const isPng = image.endsWith(".png");
  const imageClass = isPng ? "" : "rounded-lg";

  return (
    <div className="space-y-[24px] flex flex-col items-center text-center lg:items-start lg:text-left">
      <div
        className={`${imageClass} w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] relative`}
      >
        <Image
          src={image}
          alt={`${mainText} Icon`}
          fill
          className="object-contain object-center lg:object-left"
        />
      </div>
      <div className="space-y-[8px]">
        <SecondaryHeading>{mainText}</SecondaryHeading>
        <NormalText>{description}</NormalText>
      </div>
    </div>
  );
};

export default Card;
