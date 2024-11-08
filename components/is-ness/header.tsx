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
import TextNormal from "@/components/is-ness/text/textNormal";
import HeadingTwo from "@/components/is-ness/text/headingTwo";

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
            <TextNormal>Home</TextNormal>
          </Link>
          <Link
            href="/shop"
            className="underline hover:text-isness-primary transition-colors duration-200"
          >
            <TextNormal>Shop</TextNormal>
          </Link>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] relative"
        >
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
                    <p>
                      <HeadingTwo>your milk, their comfort</HeadingTwo>
                    </p>
                    <p>
                      <HeadingTwo>EST 2024</HeadingTwo>
                    </p>
                  </div>
                  <Container>
                    <div className="flex justify-between items-center mt-5 md:mt-10 flex-col md:flex-row font-Scripter">
                      <TextNormal>A:Yen Akat Sathorn, Bangkok 10120</TextNormal>
                      <TextNormal>T:+66 971739617</TextNormal>
                      <Link
                        href="https://www.instagram.com/1theisness/"
                        target="_blank"
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        <TextNormal>Instagram</TextNormal>
                      </Link>
                      <Link
                        href=""
                        target="_blank"
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        <TextNormal>Line</TextNormal>
                      </Link>
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
