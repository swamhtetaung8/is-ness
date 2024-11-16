import React from "react";
import Container from "@/components/is-ness/container";
import MainHeading from "./text/mainHeading";
import { Mail, MapPinned, Phone } from "lucide-react";
import NormalText from "./text/normalText";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Container
      includePaddingBlock
      className="bg-white divide-y-[1px] divide-isness-primary/40"
    >
      <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-items-stretch gap-y-[32px] pb-4 lg:pb-8">
        <div className="md:space-y-[32px] space-y-[16px]">
          <MainHeading>Contact</MainHeading>
          <div className="space-y-[8px]">
            <div className="flex items-center gap-2">
              <Phone />
              <NormalText>+66 971739617</NormalText>
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <a href="mailto:iloveisness@gmail.com">
                <NormalText>iloveisness@gmail.com</NormalText>
              </a>
            </div>
          </div>
        </div>

        <div className="md:space-y-[32px] space-y-[16px]">
          <MainHeading>Socials</MainHeading>
          <div className="space-y-[8px]">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/svgs/instagram.svg"
                  fill
                  alt="icon of instagram app"
                ></Image>
              </div>
              <a
                href="https://www.instagram.com/1theisness/"
                target="_blank"
                className="underline hover:text-isness-primary transition-colors duration-200"
              >
                <NormalText>@isness</NormalText>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/svgs/line.svg"
                  fill
                  alt="icon of line messaging app"
                ></Image>
              </div>
              <a
                href=""
                className="underline hover:text-isness-primary transition-colors duration-200"
              >
                <NormalText>@isness</NormalText>
              </a>{" "}
            </div>
          </div>
        </div>

        <div className="md:space-y-[32px] space-y-[16px]">
          <MainHeading>Location</MainHeading>
          <div className="space-y-[8px]">
            <div className="flex items-center gap-2">
              <MapPinned />
              <NormalText>Yen Akat Sathorn, Bangkok 10120 Thailand</NormalText>
            </div>
          </div>
        </div>
      </div>
      <NormalText className="pt-4 lg:pt-8">
        Copyright©2024 is~ness. All rights reserved.
      </NormalText>
    </Container>
  );
};

export default Footer;
