import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";
import { graphql, useStaticQuery, Link } from "gatsby";

const OPTIONS = { slidesToScroll: "auto", loop: true };

const ClientLogo = ({alt, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <GatsbyImage
        className="h-full xs:h-auto xs:w-full aspect-square"
        imgStyle={{
          objectFit: "contain",
        }}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <div className="overflow-hidden h-full">
        <img style={{ height: "100%" }} src={publicURL} alt={alt} />
      </div>
    )
  }
}

const PastClient = ({ name, logoSrc, slug, live }) => {
  const imgProps = {
    alt: `Logo of past client company, ${name}`,
    ...logoSrc,
  }

  return (
    <div className="h-full xs:h-auto xs:w-full aspect-square overflow-hidden drop-shadow-lg rounded-2xl bg-white">
      {live ? (
        <Link to={`/clients/${slug}`}>
          { ClientLogo(imgProps) }
        </Link>
      ) : (
        ClientLogo(imgProps)
      )}

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
            slug
            live
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

  const slides = queryData.allPastClientsJson.edges.map(({ node: { name, logoSrc, slug, live } }) => (
    PastClient({ name, logoSrc, slug, live })
  ))

  return (
    <EmblaAutoScrollCarousel slides={slides} options={OPTIONS} />
  )
};

export default PastClients;
