import * as React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ client }) => {
  const imgProps = {
    alt: `Logo of past client company, ${client.name}`,
    ...client.logoSrc,
  }

  return (
    <ParallaxLayer
      offset={0}
      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      }}
      className={`initialPage ${client.slug}`}
    >
      <div className={`flex flex-col w-1/3`}>
        {HeroImage(imgProps)}

        <p className={`font-light m-auto text-xl text-center`}>
          {client.heroText}
        </p>
      </div>
    </ParallaxLayer>
  );
};

const HeroImage = ({alt, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <GatsbyImage
        className="rounded-xl"
        imgStyle={{
          objectFit: "scale-down",
        }}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <div className="rounded-xl">
        <img className="rounded-2xl" style={{ height: "100%" }} src={publicURL} alt={alt} />
      </div>
    )
  }
}

export default Hero;
