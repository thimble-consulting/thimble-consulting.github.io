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
  const OFFSET = 1
  let relativeOffset = 1

  const imgProps = {
    alt: `Logo of past client company, ${client.name}`,
    ...client.logoSrc,
  }

  const parallax = useRef(null);

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
      const height = parallax.current.space
      const scrollablePages = PAGES - 1 // because you can't scroll past the last page
      const scrollHeight = height * scrollablePages

      const scrollTop = e.target.scrollTop
      const percentScrolled = scrollTop / scrollHeight
      const currentPage = percentScrolled * scrollablePages
      const sections = client.sections.length
      const evenSplit = scrollablePages / sections

      client.sections.forEach((section, index) => {
        if ((currentPage > (evenSplit * index))  && (currentPage < (evenSplit * (index + 1)))) {
          setSubHeaderNum(index)
        }
      });
    }
    const container = parallax.current.container.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Parallax pages={PAGES} ref={parallax}>
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

      <ParallaxLayer
        style={{
          width: "full",
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          zIndex: 20,
        }}
        className="subHeader"
        sticky={{ start: OFFSET, end: PAGES }}>
        <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
          <div className="flex-1 flex items-center">
            {transitions((style, i) => {
              const Page = subHeadings[i]
              return <Page style={style} />
            })}
          </div>
        </div>
      </ParallaxLayer>
      {client.sections.map(section => {
        relativeOffset = relativeOffset + section.parallaxLayers.length;
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
                    zIndex: relativeOffset - 1,
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
      from: { position: 'absolute', opacity: 0, transform: 'translate3d(100%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    };
  } else if (subHeaderNum < previousSubHeader) {
    return {
      enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { position: 'absolute', opacity: 0, transform: 'translate3d(-100%,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    };
  }
};
