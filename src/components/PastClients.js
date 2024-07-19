import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PastClients = () => (
  <div className="">
    <h2 className="text-3xl font-bold font-serif leading-none mb-8">
      Past Partnerships
    </h2>
    <div className="carousel rounded-box h-48">
      <div className="carousel-item w-1/3 bg-walden-green">
        <StaticImage
          className="w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../images/client-logos/walden.svg"
          alt="Walden Local"
        />
      </div>
      <div className="carousel-item w-1/3">
        <StaticImage
          className="w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../images/client-logos/glossier.svg"
          alt="Glossier"
        />
      </div>
      <div className="carousel-item w-1/3">
        <StaticImage
          className="w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../images/client-logos/casper-logo.png"
          alt="Casper"
        />
      </div>
      <div className="carousel-item w-1/3">
        <StaticImage
          className="w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../images/client-logos/florence-logo.png"
          alt="Florence"
        />
      </div>
      <div className="carousel-item w-1/3">
        <StaticImage
          className="w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../images/client-logos/felcana-logo.png"
          alt="Felcana"
        />
      </div>
    </div>
  </div>
);

export default PastClients;
