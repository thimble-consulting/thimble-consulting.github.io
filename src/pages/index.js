import React from "react";
import Card from "../components/Card";
import PastClients from "../components/PastClients";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";
import SvgBusinessDiscussion from "../svg/SvgBusinessDiscussion";
import SvgGrowth from "../svg/SvgGrowth";
import SvgIdeaPresentation from "../svg/SvgIdeaPresentation";
import SvgLateGrowth from "../svg/SvgLateGrowth";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsButton from "../components/ContactUsButton";

const Index = () => (
  <Layout>
    <ContactUsForm />
    <section className="flex flex-row pt-10 md:pt-20 lg:pt-36">
      <div className="lg:w-1/2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-none">
          Software for Start-Up, Scale-Up & Beyond
        </h1>
        <div className="flex flex-row mt-6 items-center">
          <div className="">
            <p className="text-xl font-light">
              At Thimble, we help clients implement technology solutions that
              adapt with the evolving needs of growth.
            </p>

            <div className="my-8">
              <ContactUsButton size="lg">
                Get in touch
              </ContactUsButton>
            </div>
          </div>
          <div className="hidden sm:block md:hidden sm:w-9/12">
            <SvgIdeaPresentation />
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-9/12 md:pt-4 lg:pt-0 lg:-mt-4 lg:w-1/2">
        <SvgIdeaPresentation />
      </div>
    </section>
    <section id="approach" className="pb-8">
      <h2 className="text-3xl font-bold font-serif leading-none">
        Our Approach
      </h2>
      <p className="text-xl mt-6 font-light">
        Our team has 10+ years of experience solving complex problems for
        tech-enabled businesses, from integrating off-the-shelf services to
        maturing custom software solutions and everything in between.
      </p>
      <p className="text-xl mt-6 font-light">
        Our mission is to help the tech behind everyday companies run their
        business better.
      </p>
      <p className="text-xl mt-6 font-light">
        We root our process in a deep understanding of clients’ business roadmap
        and their product and business operations, incorporating this into a
        pragmatic approach to their software & systems.
      </p>
      <p className="text-xl mt-6 font-light">
        We bring our process onboard with clients by embedding our team within
        existing tech teams and connecting end-to-end with our clients from
        strategy to working hand-in-hand on implementation and delivery.
      </p>
    </section>
    <section id="services" className="pb-8 lg:pb-0">
      <h2 className="text-3xl font-bold font-serif leading-none">
        Our Clients
      </h2>
      <p className="text-xl mt-6 font-light">
        We work with growing tech-enabled businesses in every stage, from
        start-up to IPO. Most recently we've mostly worked in D2C e-commerce,
        but we've also worked on marketplace platforms and more. From this
        breadth of experience, we've learned that our approach adapts to three
        main phases of growth for companies:
      </p>
    </section>
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-12 xl:pl-24">
          <h3 className="text-3xl font-bold font-serif leading-tight">
            Start-Up Foundations
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With early-stage startups we focus on laying good technical
            foundations to operate well, without over-engineering. We aim for
            just enough tech to enable clients to continue working on
            product-market fit and getting to scale-up.
          </p>
        </div>
      }
      secondarySlot={
        <div className="w-2/3 lg:w-full mx-auto">
          <SvgBusinessDiscussion />
        </div>
      }
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-12 xl:pr-24">
          <h3 className="text-3xl font-bold font-serif leading-tight">
            Scale-Up Operations
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With high-growth clients, we help put in place systems to scale
            back-of-house operations, enabling clients continue to grow top-line
            revenue with confidence they can continue to scale.
          </p>
        </div>
      }
      secondarySlot={
        <div className="w-2/3 lg:w-full mx-auto">
          <SvgGrowth />
        </div>
      }
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-12 xl:pl-24">
          <h3 className="text-3xl font-bold font-serif leading-tight">
            Late-Growth & Pre-IPO
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We help late-growth clients demonstrate operational maturity through
            systems for reliability and auditability. We work with clients on
            data integrity across business systems tracking orders, revenue, and
            financial data, as well as on ERP integrations.
          </p>
        </div>
      }
      secondarySlot={
        <div className="w-2/3 lg:w-full mx-auto">
          <SvgLateGrowth />
        </div>
      }
    />
    <section id="story" className="py-10 lg:py-20 text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Custom Software Solutions
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Order Management Systems
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Scaling around Shopify & BigCommerce
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Finance & Accounting Systems
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            ERP Integrations
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Inventory Management
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Outgoing Logistics & 3PLs
          </p>
        </Card>
        <Card className="place-content-center">
          <p className="font-bold font-serif text-xl">
            Retail Partnerships & EDI
          </p>
        </Card>
        <Card className="place-content-center sm:hidden md:block lg:hidden">
          <p className="font-bold font-serif text-xl">
            DevOps - Infra-as-Code
          </p>
        </Card>
      </div>
    </section>
    <section id="past-clients" className="">
      <PastClients />
    </section>
    <section className="my-20 py-20 bg-ghost-white rounded-lg text-center px-4">
      <h3 className="text-5xl font-bold font-serif">
        Let's talk
      </h3>
      <p className="mt-4 text-xl font-light">
        If you're running a growing tech-enabled company, we'd love to connect
        and hear about your journey.
      </p>
      <p className="mt-8">
        <ContactUsButton size="xl">
          Get Started Now
        </ContactUsButton>
      </p>
    </section>
  </Layout>
);

export default Index;
