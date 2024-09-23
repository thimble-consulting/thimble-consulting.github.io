import React, { useRef, useEffect, useState } from 'react'
import { usePrevious } from "@uidotdev/usehooks";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useTransition, animated, useSpringRef } from '@react-spring/web'
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/Parallax/Hero.js";
import Header from "../components/layout/Header.js";
import ContactUsForm from "../components/ContactUsForm.js";

export default function Index({pageContext}) {
  const { client } = pageContext
  const PAGES = 15
  const HERO_OFFSET = 1
  let zIndexOffset = 1

  const imgProps = {
    alt: `Logo of past client company, ${client.name}`,
    ...client.logoSrc,
  }
  const parallaxRef = useRef(null);

  const subHeadings = client.sections.map(section => (
    ({ style }) => <animated.div style={{ ...style }}>{section.title}</animated.div>
  ))

  const [subHeaderNum, setSubHeaderNum] = useState(0)

  const transRef = useSpringRef()
  const transitions = useTransition(subHeaderNum, {
    ref: transRef,
    keys: null,
    ...getTransitionConfig(subHeaderNum, usePrevious(subHeaderNum))
  })

  useEffect(() => {
    transRef.start()
  }, [transRef, subHeaderNum])

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollablePages = PAGES - HERO_OFFSET // because you can't scroll past the last page
      const currentPage = getCurrentPage(parallaxRef, scrollablePages);

      // used to change the subHeaders at even intervals i.e. dummy value ignore, not for prod
      const evenSplit = scrollablePages / client.sections.length

      client.sections.forEach((section, index) => {
        if ((currentPage > (evenSplit * index))  && (currentPage < (evenSplit * (index + 1)))) {
          setSubHeaderNum(index)
        }
      });
    }
    const container = parallaxRef.current.container.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Parallax pages={PAGES} ref={parallaxRef} >
      <Header className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8" />
      <ContactUsForm />
      <Hero client={client}></Hero>
      <ParallaxLayer
        sticky={{ start: HERO_OFFSET, end: PAGES }}
        style={{
          width: "40%",
          inset: "0% 0% 0% 100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          justifySelf: 'end',
          zIndex: zIndexOffset++,
          right: 0,
        }}
      >
        <div className="mr-20 w-full">
          {logo(imgProps)}
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        style={{
          width: "full",
          height: "1rem",
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          zIndex: PAGES + 10,
        }}
        className="subHeader"
        sticky={{ start: HERO_OFFSET, end: PAGES }}>
        <div className="flex bg-gray-100 py-8 px-20 w-full uppercase text-xl font-light tracking-wider text-gray-800">
          {transitions((style, i) => {
            const Page = subHeadings[i]
            return <Page style={style} />
          })}
        </div>
      </ParallaxLayer>
      {client.sections.map(section => {
        return (
          <>
            {section.parallaxLayers.map((parallaxLayer, index) => {
              return(
                <ParallaxLayer
                  style={{
                    width: "60%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: "center",
                    zIndex: zIndexOffset++,
                  }}
                                    // sticky={{
                  //   start: parallaxLayer.parallaxParams.stickyStart,
                  //   end: parallaxLayer.parallaxParams.stickyEnd
                  // }}>

                  offset={ parallaxLayer.parallaxParams.stickyStart }>
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

const getTransitionConfig = (subHeaderNum, previousSubHeader) => {
  if (subHeaderNum > previousSubHeader) {
    return {
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
      leave: { position: 'absolute', opacity: 0, transform: 'translate3d(-100%,0,0)' },
    };
  } else if (subHeaderNum < previousSubHeader) {
    return {
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
      leave: { position: 'absolute', opacity: 0, transform: 'translate3d(100%,0,0)' },
    };
  }
};

const getCurrentPage = (parallaxRef) => {
  const containerHeight = parallaxRef.current.space
  const scrollYProgressRAW = parallaxRef.current.current / containerHeight
  const scrollYProgress = Math.round(scrollYProgressRAW * 10) / 10
  return scrollYProgress;
};
