"use client"
import React from "react";
import { usePathname } from 'next/navigation';

import Link from "next/link";
import Image from "next/image";

import Container from "@/components/is-ness/container";
import HomeLinks from "./header/home_links";
import ShopRedirectButton from "./shop_redirect_button";

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
          <ShopRedirectButton insideNavbar />
        </div>
        
      </nav>
    </Container>
  );
};

export default Header;
