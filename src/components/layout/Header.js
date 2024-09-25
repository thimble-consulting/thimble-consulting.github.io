import React from "react";
import { Link } from "gatsby";
import ContactUsButton from "../ContactUsButton";

const Header = ({ className = "" }) => (
  <header className="sticky top-0 bg-white shadow z-10">
    <div
      className={`${className} flex flex-col sm:flex-row justify-between items-center py-4`}
    >
      <a
        href="/#top"
        className="flex flex-grow items-center font-serif font-black italic text-thimble hover:text-thimble lowercase text-4xl"
      >
        Thimble
      </a>
      <div className="flex items-center mt-4 sm:mt-0 flex-row gap-4">
        <Link
          className="text-black hover:text-thimble"
          href="/#approach"
        >
          Approach
        </Link>
        <Link
          className="text-black hover:text-thimble"
          href="/#services"
        >
          Services
        </Link>
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
