import React from "react";
import SvgLinkedIn from "../../svg/SvgLinkedIn";
import SvgGithub from "../../svg/SvgGithub";

const Footer = ({ className = "" }) => (
  <footer className={className}>
    <div className="flex bg-gray-100 rounded-lg py-8 px-8 gap-4 align-middle">
      <div className="flex-1 flex items-center">
        <p className="text-gray-400 text-sm md:text-md">
          Thimble Consulting is the trading name of JBT Consulting Limited.
          Registered in England (Co. No. 10889061)
        </p>
      </div>
      <div className="w-96 flex flex-row items-center gap-4 flex-row-reverse">
        <a href="https://www.linkedin.com/company/thimble-consulting/">
          <SvgLinkedIn />
        </a>
        <a href="https://github.com/thimble-consulting">
          <SvgGithub />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
