import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ContactUsButton from "../ContactUsButton";

const Header = () => (
  <header className="sticky top-0 bg-white shadow z-10 px-4">
    <div className="flex flex-col sm:flex-row justify-between items-center mx-auto max-w-6xl py-4">
      <a
        href="/"
        className="flex flex-grow items-center font-serif font-black italic text-thimble hover:text-thimble lowercase text-4xl"
      >
        Thimble
      </a>
      <div className="flex items-center mt-4 sm:mt-0 flex-row gap-4">
        <AnchorLink
          className="text-black hover:text-thimble"
          href="#approach"
        >
          Approach
        </AnchorLink>
        <AnchorLink
          className="text-black hover:text-thimble"
          href="#services"
        >
          Services
        </AnchorLink>
        <div className="hidden md:block">
          <ContactUsButton className="text-sm">
            Contact Us
          </ContactUsButton>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
