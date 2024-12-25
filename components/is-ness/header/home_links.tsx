'use client'

import React, { useState } from 'react'
import ScrollButton from '../scrollButton'
import { Menu, XIcon } from 'lucide-react'
import Image from 'next/image'
import SubHeading from '../text/subHeading'

const homeLinks = [
  {
    id: 1,
    name: 'Home',
    scrollTo: '#home'
  },
  {
    id: 2,
    name: 'About',
    scrollTo: '#more-information'
  },
  {
    id: 3,
    name: 'Ingredients',
    scrollTo: '#ingredients'
  },
  {
    id: 4,
    name: 'Pricing',
    scrollTo: '#pricing'
  },
  {
    id: 5,
    name: 'Contact',
    scrollTo: '#contact'
  },
]

const HomeLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Desktop View */}
      <div className="items-center gap-[32px] flex-1 hidden lg:flex">
        {homeLinks.map(homeLink => (
          <ScrollButton
            variant="normal"
            key={homeLink.id}
            href={homeLink.scrollTo}
          >
            {homeLink.name}
          </ScrollButton>
        ))}
      </div>

      {/* Mobile View */}
      <div className="items-center gap-[32px] flex-1 block lg:hidden">
        <Menu onClick={toggleMenu} />
      </div>

      {/* Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-isness-white z-50 flex flex-col items-center justify-center gap-8">
          <div className="w-[48px] h-[48px] absolute left-8 top-8">
            <Image src="/logo.svg" fill alt="Logo of the company" />
          </div>
          <button
            onClick={toggleMenu}
            className="absolute top-8 right-8 text-xl font-bold"
          >
            <XIcon size={32}/>
          </button>
          {homeLinks.map(homeLink => (
            <ScrollButton
              variant="normal"
              key={homeLink.id}
              href={homeLink.scrollTo}
              onClick={toggleMenu}
            >
              {homeLink.name}
            </ScrollButton>
          ))}

          <div className="absolute bottom-8">
            <h1 className="text-[24px] md:text-[32px] text-center font-DreamAvenue font-normal">
                      is~ness
            </h1>
            <div className="text-center font-Scripter space-y-2">
              <SubHeading>your milk, their comfort</SubHeading>
              <SubHeading>EST 2024</SubHeading>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default HomeLinks
