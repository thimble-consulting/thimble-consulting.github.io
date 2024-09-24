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
      <div className={`flex flex-col h-full w-1/3 pt-20 place-content-center`}>
        <div className="h-5/6 pt-20">
          {HeroImage(imgProps)}
          <div className={`font-light m-auto text-xl text-center`}>
            {client.heroText.map(paragraph => {
              return (
                <p className="mb-5">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};

const HeroImage = ({alt, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <GatsbyImage
        className="rounded-xl h-1/2 w-full"
        imgStyle={{
          objectFit: "scale-down",
        }}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <div className="rounded-xl h-1/2">
        <img className="rounded-2xl w-full" style={{ height: "100%" }} src={publicURL} alt={alt} />
      </div>
    )
  }
}

export default Hero;
