import * as React from "react"
import Layout from "../../../src/components/layout/Layout";
import { Parallax } from 'react-scroll-parallax';


export default function Index() {
  return (
    <Layout>
      <div id="overview" className="py-20">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-none">
          Walden Local Meat
        </h1>
        <div className="">
          <p className="text-md mt-6 font-light">
            Walden Local Meat is New England and New York's leading brand of sustainable, locally-raised meat. The company works directly with small-acreage farmers throughout the North-East, providing locally-grown, sustainable, humanely-raised meat to families via their subscription share program.
          </p>
          <p className="text-md mt-6 font-light">
            Thimble connected with Walden in late 2019, at a time when lengthening development cycles were leading Walden to feel unable to evolve the product offerings and core experience available its customers.
          </p>
          <p className="text-md mt-6 font-light">
            Thimble helped Walden overcome this slowdown by standardizing and simplifying its technology footprint. We helped assess their tech challenges and charted out how the business could adapt to run on a standard e-comm platform. We successfully worked through this migration, partnering with stakeholders to adapt the necessary parts of the business' operations and member experience.
          </p>
          <p className="text-md mt-6 font-light">
            Leveraging these change, we then worked with Walden to explore new product experiences for members, opening up new revenue streams while helping onboard industry-standard practices for testing, landing page optimization, data warehousing and dev ops.
          </p>
        </div>
      </div>
      <Parallax speed={-10}>
        <div id="slowdown" className="">
          <h2 className="text-3xl font-bold font-serif leading-none">
            Overcoming the Slowdown
          </h2>
          <div className="">
            <p className="text-md mt-6 font-light">
              It was clear to Walden's leadership and tech teams that technology challenges were preventing the business from evolving in the direction they wanted to go toward. With a supply chain starting directly with its farmers, to processing & flash-freezing its meats, to running its own warehouse and delivery fleet, it was less clear internally whether the technology challenges just reflected complexities inherent to the business, or if there was a better approach.
            </p>
            <p className="text-md mt-6 font-light">
              Thimble's initial engagement was to dive directly into this question and help assess these options. We onboarded into the current custom tech solutions and built up to a detailed understanding of Walden's unique and complex operations. We laid out ways to enable simpler, more standard architectures and the key parts of the company's product experience and operation that would be needed to enable these standardizations.
            </p>
            <p className="text-md mt-6 font-light">
              From this, we laid out two main approaches to simplifying to the business: starting on the operations side, or starting with the e-commerce side. It was decided to opt for the e-comm first approach, on a headless BigCommerce architecture. This featured a main Walden-managed service running alongside BigCommerce, to support a few unique parts of Walden's product and operations structure that were necessary to retain.
            </p>
            <p className="text-md mt-6 font-light">
              Walden was successfully migrated to this new architecture in October, 2021.
            </p>
          </div>
        </div>
      </Parallax>

      <Parallax speed={-10}>
        <div id="pastures" className="">
          <h2 className="text-3xl font-bold font-serif leading-none">
            New Pastures
          </h2>
          <div className="">
            <p className="text-md mt-6 font-light">
              With the new platform in place, we helped Walden start to flex the ability to test out new product offerings and revenue streams. We enabled Walden to allow for à la carte orders and offer holiday order experiences multiple times per year, in parallel to the base subscription. This was a significant win for the business to enable efforts to drive incremental revenue. Previously, the business could only offer one holiday order, Thanksgiving, once per year, in place of a subscription order, and had no other incremental purchase capabilities. Walden leveraged this flexibility and ultimately started running 4 holiday orders per year, in addition to growing its à la carte order revenue.
            </p>
            <p className="text-md mt-6 font-light">
              Having built in foundations for their new setup to be adaptable to change, we helped Walden experiment with changes to their core subscription product. We enabled Walden to have the offer certain meats like lamb as an upsell to customers, and later offer seafood in their core subscription. We also helped Walden offer sign-up discounts & promotions, shift to a structure where it could offer any product in its catalog via a subscription, and deliver a complete rebranding of the customer-facing site.
            </p>
            <p className="text-md mt-6 font-light">
              On the operations & customer experience side, we helped Walden continue to simplify by expanding and adapting the tools for these teams to be self-service. This included tools for areas like order management and delivery planning, with one example being a tool to plan for weather-based delivery delays.
            </p>
            <p className="text-md mt-6 font-light">
              In parallel, we introduced new tooling and infrastructure to help Walden modernize its marketing and analytics departments. We introduced their first A/B testing frameworks and new product analytics tools to enable Walden to take a data-driven approach to conversion optimization and landing page improvements. We helped Walden introduce a central data warehouse to its systems and adopt new tools for extracting and organizing their analytics.
            </p>
          </div>
        </div>
      </Parallax>
    </Layout>
  )
}
