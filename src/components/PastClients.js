import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import EmblaCarousel from "./embla/EmblaCarousel";

const OPTIONS = { slidesToScroll: "auto", loop: true };
// const SLIDE_COUNT = Images.length;
// const SLIDES = Images;

const Images = [
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

const PastClients = () => <EmblaCarousel slides={Images} options={OPTIONS} />;

export default PastClients;
