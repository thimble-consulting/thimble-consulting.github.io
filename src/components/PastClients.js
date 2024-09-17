import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";
import { graphql, useStaticQuery, Link } from "gatsby";

const OPTIONS = { slidesToScroll: "auto", loop: true };

const ClientLogo = ({alt, slug, publicURL, childImageSharp}) => {
  if (childImageSharp) {
    return (
      <Link to={`/clients/${slug}`}>
        <GatsbyImage
          className="h-full xs:h-auto xs:w-full aspect-square rounded-2xl"
          imgStyle={{
            objectFit: "contain",
          }}
          image={childImageSharp.gatsbyImageData}
          alt={alt}
        />
      </Link>
    )
  } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
    return (
      <Link to={`/clients/${slug}`}>
        <div className="rounded-2xl overflow-hidden">
          <img className="rounded-2xl" style={{ height: "100%" }} src={publicURL} alt={alt} />
        </div>
      </Link>
    )
  }
}

const PastClient = ({ name, slug, logoSrc }) => {
  const imgProps = {
    alt: `Logo of past client company, ${name}`,
    slug: slug,
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
            slug
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

  const slides = queryData.allPastClientsJson.edges.map(({ node: { name, slug, logoSrc, } }) => (
    PastClient({ name, slug, logoSrc })
  ))

  return (
    <EmblaAutoScrollCarousel slides={slides} options={OPTIONS} />
  )
};

export default PastClients;
