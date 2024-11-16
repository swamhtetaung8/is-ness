"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import SubHeading from "@/components/is-ness/text/subHeading";
import NormalText from "@/components/is-ness/text/normalText";

interface IngredientItemProps {
  ingredient: {
    id: number;
    name: string;
    image: string;
    explanation: string;
  };
}

const IngredientItem = ({ ingredient }: IngredientItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="xl:hidden">
        <HoverCard open={isOpen} openDelay={0.5} closeDelay={0.5}>
          <HoverCardTrigger onClick={toggleOpen}>
            <div
              className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg cursor-pointer relative group"
              ref={cardRef}
            >
              <div
                className={`opacity-0 pointer-events-none transition-all duration-500 bg-black absolute top-0 left-0 w-full h-full z-20 ${
                  isOpen && "opacity-20"
                }`}
              ></div>
              <Image
                fill
                src={ingredient.image}
                alt={`Image of ${ingredient.name}`}
                className={`transition-transform duration-700 ${
                  isOpen && "scale-105"
                }`}
              ></Image>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto lg:max-w-[300px] max-w-[200px]">
            <div className="text-left">
              <SubHeading className="capitalize text-center">
                {ingredient.name}
              </SubHeading>
              <NormalText>{ingredient.explanation}</NormalText>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="hidden xl:block">
        <HoverCard openDelay={0.5} closeDelay={0.5}>
          <HoverCardTrigger>
            <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] rounded-lg overflow-hidden shadow-lg cursor-pointer relative group">
              <div className="group-hover:opacity-20 opacity-0 pointer-events-none transition-all duration-500 bg-black absolute top-0 left-0 w-full h-full z-20"></div>
              <Image
                fill
                src={ingredient.image}
                alt={`Image of ${ingredient.name}`}
                className="group-hover:scale-105 transition-transform duration-700"
              ></Image>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-auto lg:max-w-[300px] max-w-[200px]">
            <div className="text-left">
              <SubHeading className="capitalize text-center">
                {ingredient.name}
              </SubHeading>
              <NormalText>{ingredient.explanation}</NormalText>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </>
  );
};

export default IngredientItem;
