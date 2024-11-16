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
    <div className="space-y-[24px] flex flex-col items-center xl:items-start">
      <div
        className={`${imageClass} overflow-hidden w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] relative`}
      >
        <Image
          src={image}
          alt={`${mainText} Icon`}
          fill
          className="object-contain object-center xl:object-left"
        />
      </div>
      <div className="space-y-[8px]">
        <SecondaryHeading className="text-center xl:text-left">
          {mainText}
        </SecondaryHeading>
        <NormalText>{description}</NormalText>
      </div>
    </div>
  );
};

export default Card;
