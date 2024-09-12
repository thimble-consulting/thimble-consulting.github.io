import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import * as styles from '../../styles/styles.module.css'
import { StaticImage } from "gatsby-plugin-image";
import SubHeader from "../../components/Parallax/SubHeader";
import Hero from "../../components/Parallax/Hero";
import Header from "../../components/layout/Header.js";
import ContactUsForm from "../../components/ContactUsForm.js";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

export default function Index() {
  const commonWidthClasses = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

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

  return (
    <Parallax pages={10}>
      <Header className={commonWidthClasses} />
      <ContactUsForm />



      {/* <SubHeader
        subHeader={"Challenges"}
        stickyStart={1}
        StickyEnd={4.1}
        zIndex={100}
      /> */}

      <ParallaxLayer id='sub-header'
        style={{
          width: "full",
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          zIndex: 100,
        }}
        sticky={{ start: 1, end: 4.1 }}>
        <div className="flex bg-gray-100 py-8 px-8 gap-4 align-middle w-full mb-52">
          <div className="flex-1 flex items-center">
            <p className="text-gray-400 text-lg text-center">
              Challenges
            </p>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer id="1st-text-lhs"
        style={{
          width: "60%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
          textAlign: "center",
        }}
        sticky={{ start: 1.5, end: 2.5 }}
        >
        <p className={`mx-20 ${styles.slideText}`}>
          Thimble connected with Walden in late 2019, at a time when lengthening
          development cycles were leading Walden to feel unable to evolve the
          product offerings and core experience available its customers.
        </p>
      </ParallaxLayer>

      <ParallaxLayer id="2nd text lhs"
        style={{
          width: "60%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: "center",
          zIndex: 50,
        }}
        sticky={{ start: 3.11, end: 4.11 }}>
        <div className={`flex flex-col justify-around gap-10 mx-20`}>
          <div className={`${styles.slideText}`}>
            Thimble helped Walden overcome this slowdown by standardizing and simplifying
            its technology footprint. We helped assess their tech challenges and charted
            out how the business could adapt to run on a standard e-comm platform.
            We successfully worked through this migration, partnering with stakeholders
            to adapt the necessary parts of the business’ operations and member experience.
          </div>
          <p className={`${styles.slideText}`}>
            Leveraging these change, we then worked with Walden to explore new
            product experiences for members, opening up new revenue streams while
            helping onboard industry-standard practices for testing, landing page
            optimization, data warehousing and dev ops.
          </p>
        </div>
      </ParallaxLayer>

      <ParallaxLayer id="sticky walden logo rhs"
        sticky={{ start: 1, end: 4.11 }}
        style={{
          width: "40%",
          inset: "0% 0% 0% 100%",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          justifySelf: 'end',
          zIndex: 60,
          right: 0,
        }}
        >
        <StaticImage
          className="rounded-xl mr-10"
          imgStyle={{
            objectFit: "scale-down",
          }}
          src="../../images/client-logos/walden.svg"
          alt="Walden Local"
        />
      </ParallaxLayer>
    </Parallax>
  )
}
