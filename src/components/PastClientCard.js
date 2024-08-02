import React from "react";
import Card from "../components/Card";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

const PastClientCard = ({ imageSrc, imageAlt }) => (
  <>
  <Card className="place-content-center">
    <GatsbyImage
      image={imageSrc}
      alt={imageAlt}
    />
  </Card>
  {/* <Card className="place-content-center">
    <StaticImage
      src="../images/client-logos/walden.svg"
      alt="Walden Local"
    />
  </Card>
  <Card className="place-content-center">
    <StaticImage
      src="../images/client-logos/glossier.svg"
      alt="Glossier"
    />
  </Card>
  <Card className="place-content-center">
    <StaticImage
      src="../images/client-logos/casper-logo.png"
      alt="Casper"
    />
  </Card>
  <Card className="place-content-center">
    <StaticImage
      src="../images/client-logos/florence-logo.png"
      alt="Florence"
    />
  </Card>
  <Card className="place-content-center">
    <StaticImage
      src="../images/client-logos/felcana-logo.png"
      alt="Felcana"
    />
  </Card> */}
  </>
);

export default PastClientCard;
