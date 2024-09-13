import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import * as styles from '../styles/styles.module.css'
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/Parallax/Hero.js";
import Header from "../components/layout/Header.js";
import ContactUsForm from "../components/ContactUsForm.js";

export default function Index({pageContext}) {
  const { client } = pageContext
  let offset = 1

  const imgProps = {
    alt: `Logo of past client company, ${client.name}`,
    ...client.logoSrc,
  }

  const logo = ({ alt, publicURL, childImageSharp }) => {
    if (childImageSharp) {
      return (
        <GatsbyImage
          className="rounded-xl w-full"
          imgStyle={{
            objectFit: "scale-down",
          }}
          image={childImageSharp.gatsbyImageData}
          alt={alt}
        />
      )
    } else { // then it's an svg, see https://github.com/gatsbyjs/gatsby/issues/10297#issuecomment-464834529
      return (
        <div className="rounded-xl w-full">
          <img className="rounded-2xl" style={{ height: "100%" }} src={publicURL} alt={alt} />
        </div>
      )
    }
  }

  return (
    <Parallax pages={15}>
      <Header className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8" />
      <ContactUsForm />
      <Hero client={client}></Hero>
      {client.sections.map(section => {
        offset = offset + section.parallaxLayers.length;
        return (
          <>
            <ParallaxLayer
              style={{
                width: "full",
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                zIndex: offset,
              }}
              className={`${styles.subHeader}`}
              sticky={{ start: (offset - section.parallaxLayers.length), end: offset }}>
              <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
                <div className="flex-1 flex items-center">
                  <p className="text-gray-400 text-lg text-center">
                    {section.title}
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              sticky={{ start: (offset - section.parallaxLayers.length), end: offset }}
              style={{
                width: "40%",
                inset: "0% 0% 0% 100%",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                justifySelf: 'end',
                zIndex: offset,
                right: 0,
              }}
            >
              {logo(imgProps)}
            </ParallaxLayer>

            {section.parallaxLayers.map((parallaxLayer, index) => {
              return(
                <ParallaxLayer
                  style={{
                    width: "60%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: "center",
                    zIndex: offset - 1,
                  }}
                  sticky={{
                    start: parallaxLayer.parallaxParams.stickyStart,
                    end: parallaxLayer.parallaxParams.stickyEnd
                  }}>
                  <div className={`flex flex-col justify-around gap-10 mx-20`}>
                    {parallaxLayer.content.map((paragraph, index) => {
                      index++;
                      return(
                        <div
                          style={{
                            zIndex: index,
                          }}
                          className={`${styles.slideText}`}>
                          {paragraph}
                        </div>
                      )
                    })}
                  </div>
                </ParallaxLayer>
              )
            })}
          </>

        )
      })}
    </Parallax>
  )
}
