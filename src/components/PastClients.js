import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";

const OPTIONS = { slidesToScroll: "auto", loop: true };

const SLIDES = [
  <StaticImage
    className="w-full bg-walden-green"
    imgStyle={{
      objectFit: "scale-down",
    }}
    src="../images/client-logos/walden.svg"
    alt="Walden Local"
  />,
  <StaticImage
    className="w-full"
    imgStyle={{
      objectFit: "scale-down",
    }}
    src="../images/client-logos/glossier.svg"
    alt="Glossier"
  />,
  <StaticImage
    className="w-full"
    imgStyle={{
      objectFit: "scale-down",
    }}
    src="../images/client-logos/casper-logo.png"
    alt="Casper"
  />,
  <StaticImage
    className="w-full"
    imgStyle={{
      objectFit: "scale-down",
    }}
    src="../images/client-logos/florence-logo.png"
    alt="Florence"
  />,
  <StaticImage
    className="w-full"
    imgStyle={{
      objectFit: "scale-down",
    }}
    src="../images/client-logos/felcana-logo.png"
    alt="Felcana"
  />,
];

const PastClients = () => (
  <EmblaAutoScrollCarousel slides={SLIDES} options={OPTIONS} />
);

export default PastClients;
