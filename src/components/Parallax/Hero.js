import * as React from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from '../../styles/styles.module.css';
import { graphql, useStaticQuery } from "gatsby";

const Hero = ({ clientName }) => {
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

  const clientInfo = queryData.allPastClientsJson.edges.find(client => client.node.name === clientName)

  const imgProps = {
    alt: `Logo of past client company, ${clientInfo.node.name}`,
    ...clientInfo.node.logoSrc,
  }

  return (
    <ParallaxLayer
      offset={0}
      style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#183028',
      }}
      className={`${styles.initialPage}`}
    >
      <div className={`flex flex-col w-1/3`}>
        {HeroImage(imgProps)}

        <p className={`text-white font-light m-auto text-xl text-center`}>
          Walden Local Meat works directly with small-acreage farmers throughout
          the North-East, providing locally-grown, sustainable, humanely-raised
          meat to families via their subscription share program.
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
