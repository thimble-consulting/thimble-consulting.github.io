import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import * as styles from '../styles/styles.module.css'
import { StaticImage } from "gatsby-plugin-image";
import Hero from "../components/Parallax/Hero.js";
import Header from "../components/layout/Header.js";
import ContactUsForm from "../components/ContactUsForm.js";

export default function Index({pageContext}) {
  const { client } = pageContext
  let offset = 1

  return (
    <Parallax pages={15}>
      <Header className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8" />
      <ContactUsForm />
      <Hero client={client}></Hero>
      {client.sections.map(section => {
        return (
          <>
            <ParallaxLayer
              style={{
                width: "full",
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'center',
                zIndex: 100,
              }}
              sticky={{ start: offset, end: (offset + section.parallaxLayers.length) }}>
              <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
                <div className="flex-1 flex items-center">
                  <p className="text-gray-400 text-lg text-center">
                    {section.title}
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {section.parallaxLayers.map((parallaxLayer, index) => {
              offset++;
              return(
                <ParallaxLayer
                  style={{
                    width: "60%",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: "center",
                    zIndex: 50,
                  }}
                  sticky={{ start: (offset -1) , end: offset }}>
                  <div className={`flex flex-col justify-around gap-10 mx-20`}>
                    {parallaxLayer.map(paragraph => {
                      return(
                        <div className={`${styles.slideText}`}>
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
