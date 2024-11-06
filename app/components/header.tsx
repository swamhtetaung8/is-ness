"use-client";
import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Header = () => {
  return (
    <Container>
      <nav className="font-Scripter py-[24px] relative flex items-center justify-between">
        {/* Links Section */}
        <div className="flex items-center gap-[24px] md:gap-[48px] flex-1">
          <Link
            href="/"
            className="underline hover:text-isness-primary transition-colors duration-200 text-[16px] md:text-[18px]"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="underline hover:text-isness-primary transition-colors duration-200 text-[16px] md:text-[18px]"
          >
            Shop
          </Link>
        </div>

        {/* Logo */}
        <Link
          href="/"
          className="w-[48px] h-[48px] md:w-[80px] md:h-[80px] relative"
        >
          <Image src="/logo.svg" fill alt="Logo of the company" />
        </Link>

        {/* Hamburger Menu */}
        <div className="flex-1 flex justify-end">
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
                  <div className="text-center font-Scripter text-[16px] md:text-[24px] space-y-2">
                    <p>your milk, their comfort</p>
                    <p>EST 2024</p>
                  </div>
                  <Container>
                    <div className="flex justify-between items-center mt-5 md:mt-10 flex-col md:flex-row">
                      <p>A:Yen Akat Sathorn, Bangkok 10120</p>
                      <p>T:+66 971739617</p>
                      <Link
                        href="https://www.instagram.com/1theisness/"
                        target="_blank"
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        Instagram
                      </Link>
                      <Link
                        href=""
                        target="_blank"
                        className="hover:text-black transition-all duration-200 hover:underline"
                      >
                        Line
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
