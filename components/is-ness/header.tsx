"use client"
import React from "react";
import { usePathname } from 'next/navigation';

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/is-ness/container";
import NormalText from "@/components/is-ness/text/normalText";
import HomeLinks from "./header/home_links";

const Header = () => {
  const pathName = usePathname();

  return (
    <Container>
      <nav id="home" className="font-Scripter py-[12px] relative flex items-center justify-between">
        {/* Links Section */}
        { pathName ==='/' && (
          <HomeLinks/>
        )}
        {/* Logo */}
        <Link href="/" className="w-[48px] h-[48px] relative">
          <Image src="/logo.svg" fill alt="Logo of the company" />
        </Link>

        {/* Hamburger Menu */}
        <div className="flex-1 flex justify-end">
          <a
            href="https://line.me/R/ti/p/@674uogcn?from=page&accountId=674uogcn"
            target="_blank"
            className="hover:text-isness-primary hover:underline transition-colors duration-200"
          >
            <NormalText>Shop</NormalText>
          </a>
        </div>
        
      </nav>
    </Container>
  );
};

export default Header;
