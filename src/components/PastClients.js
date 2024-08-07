import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";
import { graphql, useStaticQuery } from "gatsby";

const OPTIONS = { slidesToScroll: "auto", loop: true };

const ClientLogo = ({alt, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <GatsbyImage
        className="h-full xs:h-auto xs:w-full aspect-square rounded-2xl"
        imgStyle={{
          objectFit: "contain",
        }}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <div class="rounded-2xl overflow-hidden">
        <img class="rounded-2xl" style={{ height: "100%" }} src={publicURL} alt={alt} />
      </div>
    )
  }
}

const PastClient = ({ name, logoSrc }) => {
  const imgProps = {
    alt: name,
    ...logoSrc,
  }

  return (
    <div className="h-full xs:h-auto xs:w-full aspect-square overflow-hidden drop-shadow-lg">
      { ClientLogo(imgProps) }
    </div>
  )
}

const PastClients = () => {
  const queryData = useStaticQuery(graphql`
    query PastClients {
      allPastClientsJson {
        edges {
          node {
            name
            logoSrc {
              id
              publicURL
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const slides = queryData.allPastClientsJson.edges.map(({ node: { name, logoSrc } }) => (
    PastClient({ name, logoSrc })
  ))

  return (
    <EmblaAutoScrollCarousel slides={slides} options={OPTIONS} viewPortClassName="lg:overflow-hidden" />
  )
};

export default PastClients;
