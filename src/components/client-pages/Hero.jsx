import * as React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = ({ client }) => {
  const imgProps = {
    alt: `Logo of past client company, ${client.name}`,
    ...client.logoSrc,
  }

  return (
    <div className={`flex flex-col min-h-dvh w-full justify-center items-center hero-${client.slug}`}>
      <div className="flex flex-col items-center w-full">
        {HeroImage(imgProps)}
        <div className={`font-light m-auto mb-20 sm:text-xl text-center px-8 md:px-0 md:w-3/4 lg:w-1/2 2xl:w-1/3 `}>
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
  );
};

const HeroImage = ({alt, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <GatsbyImage
        className="w-full md:w-1/2 lg:w-1/3 mx-auto"
        imgStyle={{
          objectFit: "scale-down",
        }}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <img className="w-full sm:w-1/2 lg:w-1/3 mx-auto" src={publicURL} alt={alt} />
    )
  }
}

export default Hero;
