import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useScroll, animated, useSpring } from '@react-spring/web'
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

  // config 1 - throws param 1 not of type 'Element'
  const parallaxRef = useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  const { scrollYProgress } = useScroll({
    container: parallaxRef
  })

  // config 2 - works, will jump to page index
  // const [parallaxRef, setParallaxRef] = useState(null);

  // const handleButtonClick = (pageIndex) => {
  //   if (parallaxRef) {
  //     parallaxRef.scrollTo(pageIndex);
  //   }
  // };


  return (
    // config 2
    // <Parallax pages={15} ref={setParallaxRef}>
    // {/* config 1 */}
    <Parallax pages={15} ref={parallaxRef}>
      <Header className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8" />
      <ContactUsForm />
      <Hero client={client}></Hero>
      <ParallaxLayer
        sticky={{ start: 1, end: 15 }}
        style={{
          width: "40%",
          inset: "0% 0% 0% 100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          justifySelf: 'end',
          zIndex: 10,
          right: 0,
        }}
      >
        {logo(imgProps)}
      </ParallaxLayer>
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
              className="subHeader"
              sticky={{ start: (offset - section.parallaxLayers.length), end: offset }}>
              <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
                <div className="flex-1 flex items-center">
                    {section.title}
                    {/* config 2 */}
                    {/* <button onClick={() => handleButtonClick(7)}>Go to Page 8</button> */}
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


            {/* config 1 */}
              <animated.div
                className="dot"
                style={{
                  clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
                }}>
                <h1 className="title">
                  <span>
                    <animated.span style={textStyles}>Aha!</animated.span>
                  </span>
                  <span>
                    <animated.span style={textStyles}>You found me!</animated.span>
                  </span>
                </h1>
              </animated.div>
            {/* config 1 */}

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
                          className="slideText">
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
