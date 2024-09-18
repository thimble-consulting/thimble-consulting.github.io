import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import { useScroll, animated, useSpring } from '@react-spring/web'
import { GatsbyImage } from "gatsby-plugin-image";
import Hero from "../components/Parallax/Hero.js";
import Header from "../components/layout/Header.js";
import ContactUsForm from "../components/ContactUsForm.js";

const Test = () => {
  const parallax = useRef(null)
  const [rotate, setRotate] = useState(0)
  const PAGES = 3

  useEffect(() => {
    const handleScroll = (e) => {
      const height = parallax.current.space
      const scrollablePages = PAGES - 1 // because you can't scroll past the last page
      const scrollHeight = height * scrollablePages

      const scrollTop = e.target.scrollTop
      const percentScrolled = scrollTop / scrollHeight
      const currentPage = Math.floor(percentScrolled * scrollablePages)
      const currentPageScrollTop = scrollTop - (height * (currentPage))
      const currentPagePercent = currentPageScrollTop / height

      // because the ParallaxLayer below has an `offset` of `0`
      if (currentPage === 0) {
        setRotate(currentPagePercent)
      }

      if (percentScrolled > 0.5) {
        textApi.start({ y: '0' })
      } else {
        textApi.start({ y: '100%' })
      }
      if (percentScrolled > 0.5) {
        textApi2.start({ y: '100%' })
      } else {
        textApi2.start({ y: '0' })
      }

    }

    const container = parallax.current.container.current
    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }))

  const [textStyles2, textApi2] = useSpring(() => ({
    y: '0%',
  }))


  return (
    <div>
      {/* <div
        style={{ transform: `rotate(${rotate * 360}deg)` }}
        className='fixed'
      >Look at me spin</div> */}

    <Parallax ref={parallax} pages={PAGES}>
      <ParallaxLayer
        sticky={{ start: 0, end: 15 }}>

        <animated.div
          className="dot">
          <h1 className="title">
            <span>
              <animated.span style={textStyles2}>Starting!</animated.span>
            </span>
            <span>
              <animated.span style={textStyles}>Switch!</animated.span>
            </span>
          </h1>
        </animated.div>
        <div style={{ opacity: rotate }}>
          Look at me fade
        </div>
      </ParallaxLayer>
    </Parallax>
    </div>
  )
}


export default Test;
