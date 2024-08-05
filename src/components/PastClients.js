import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";

const OPTIONS = { slidesToScroll: "auto", loop: true };

const SLIDES = [
  <div className="bg-walden-green rounded-2xl overflow-hidden drop-shadow-lg p-8">
    <StaticImage
      className="w-full"
      imgStyle={{
        objectFit: "scale-down",
      }}
      src="../images/client-logos/walden.svg"
      alt="Walden Local"
    />
  </div>,
  <div className="bg-white rounded-2xl overflow-hidden drop-shadow-lg p-4">
    <StaticImage
      className="w-full"
      imgStyle={{
        objectFit: "scale-down",
      }}
      src="../images/client-logos/glossier.svg"
      alt="Glossier"
    />
  </div>,
  <div className="rounded-2xl overflow-hidden drop-shadow-lg">
    <StaticImage
      className="w-full"
      imgStyle={{
        objectFit: "scale-down",
      }}
      src="../images/client-logos/casper-logo.png"
      alt="Casper"
    />
  </div>,
  <div className="rounded-2xl overflow-hidden drop-shadow-lg">
    <StaticImage
      className="w-full"
      imgStyle={{
        objectFit: "scale-down",
      }}
      src="../images/client-logos/florence-logo.png"
      alt="Florence"
    />
  </div>,
  <div className="rounded-2xl overflow-hidden drop-shadow-lg">
    <StaticImage
      className="w-full"
      imgStyle={{
        objectFit: "scale-down",
      }}
      src="../images/client-logos/felcana-logo.png"
      alt="Felcana"
    />
  </div>,
];

const PastClients = () => (
  <EmblaAutoScrollCarousel slides={SLIDES} options={OPTIONS} viewPortClassName="lg:overflow-hidden" />
);

export default PastClients;
