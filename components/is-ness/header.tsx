"use-client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Container from "@/components/is-ness/container";
import SubHeading from "@/components/is-ness/text/subHeading";
import NormalText from "@/components/is-ness/text/normalText";

const Header = () => {
  return (
    <Container>
      <nav className="font-Scripter py-[16px] relative flex items-center justify-between">
        {/* Links Section */}
        <div className="flex items-center gap-[24px] md:gap-[48px] flex-1">
          <Link
            href="/"
            className="underline hover:text-isness-primary transition-colors duration-200"
          >
            <NormalText>Home</NormalText>
          </Link>
          <a
            href=""
            className="underline hover:text-isness-primary transition-colors duration-200"
          >
            <NormalText>Shop</NormalText>
          </a>
        </div>

        {/* Logo */}
        <Link href="/" className="w-[48px] h-[48px] relative">
          <Image src="/logo.svg" fill alt="Logo of the company" />
        </Link>

        {/* Hamburger Menu */}
        <div className="flex-1 flex justify-end">
          {/* Drawer box */}
          <Drawer>
            <DrawerTrigger asChild>
              <Menu className="cursor-pointer" />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>
                  <h1 className="text-[24px] md:text-[32px] text-center font-DreamAvenue font-normal">
                    is~ness
                  </h1>
                </DrawerTitle>
                <DrawerDescription>
                  <div className="text-center font-Scripter space-y-2">
                    <SubHeading>your milk, their comfort</SubHeading>
                    <SubHeading>EST 2024</SubHeading>
                  </div>
                  <Container>
                    <div className="flex justify-between items-center mt-5 md:mt-10 flex-col md:flex-row font-Scripter">
                      <NormalText>A:Yen Akat Sathorn, Bangkok 10120</NormalText>
                      <NormalText>T:+66 971739617</NormalText>
                      <Link
                        href="https://www.instagram.com/1theisness/"
                        target="_blank"
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        <NormalText>Instagram</NormalText>
                      </Link>
                      <a
                        href=""
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        <NormalText>Line</NormalText>
                      </a>
                    </div>
                  </Container>
                </DrawerDescription>
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </Container>
  );
};

export default Header;
