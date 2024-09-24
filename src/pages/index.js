import React from "react";
import ContactUsForm from "../components/ContactUsForm";
import ContactUsButton from "../components/ContactUsButton";
import Layout from "../components/layout/Layout";
import PastClients from "../components/PastClients";
import Seo from "../components/seo";
import SplitSection from "../components/SplitSection";
import SvgBusinessDiscussion from "../svg/SvgBusinessDiscussion";
import SvgGrowth from "../svg/SvgGrowth";
import SvgIdeaPresentation from "../svg/SvgIdeaPresentation";
import SvgLateGrowth from "../svg/SvgLateGrowth";
import Expertise from "../components/Expertise";

const Index = () => {
  return (
    <Layout>
      <ContactUsForm />
      <section className="flex flex-row pt-10 md:pt-20">
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-none">
            Software for Start-Up, Scale-Up & Beyond
          </h1>
          <div className="flex flex-row mt-6 items-center">
            <div className="">
              <p className="text-xl font-light">
                With 10+ years of experience, our mission is to help everyday companies
                use technology to better their business.
              </p>

              <div className="my-8">
                <ContactUsButton size="lg">Get in touch</ContactUsButton>
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
      <section id="intro" className="pb-8">
        <h2 className="text-3xl font-bold font-serif leading-none">
          What we do
        </h2>
        <p className="text-xl mt-6 font-light">
          Our approach is to use a deep understanding of each business, from its product,
          roadmap, and operations, to drive a pragmatic approach to the software
          & systems that power it.
        </p>
        <p className="text-xl mt-6 font-light">
          We work with growing tech-enabled businesses, from start-up to IPO. Our most
          recent work has largely focused on D2C e-commerce, with previous projects in
          marketplace platforms and more.
        </p>
        <p className="text-xl mt-6 font-light">
          We've brought this approach to businesses in the U.S. and the U.K, including:
        </p>
        <div className="mt-4">
          <PastClients />
        </div>
      </section>
      <section id="approach" className="mt-4 pb-8 lg:pb-0">
        <h2 className="text-3xl font-bold font-serif leading-none">
          For every stage of business
        </h2>
        <p className="text-xl mt-6 font-light">
          We work with businesses at every stage of growth, adapting our approach into three main phases:
        </p>
      </section>
      <SplitSection
        reverseOrder
        primarySlot={
          <div className="lg:pl-12 xl:pl-24">
            <h3 className="text-2xl font-bold font-serif leading-tight">
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
            <h3 className="text-2xl font-bold font-serif leading-tight">
              Scale-Up Operations
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With high-growth clients, we help put in place systems to scale
              back-of-house operations, enabling clients continue to grow
              top-line revenue with confidence they can continue to scale.
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
            <h3 className="text-2xl font-bold font-serif leading-tight">
              Late-Growth & Pre-IPO
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              We help late-growth clients demonstrate operational maturity
              through systems for reliability and auditability. We work with
              clients on data integrity across business systems tracking orders,
              revenue, and financial data, as well as on ERP integrations.
            </p>
          </div>
        }
        secondarySlot={
          <div className="w-2/3 lg:w-full mx-auto">
            <SvgLateGrowth />
          </div>
        }
      />
      <section id="services" className="my-10 lg:mt-20">
        <h2 className="text-3xl font-bold font-serif leading-none">
          Our Services
        </h2>
        <p className="text-xl my-6 font-light">
          We've built and extended systems across a wide variety of domains, including:
        </p>
        <Expertise />
      </section>
      <section className="my-4 py-20 bg-ghost-white rounded-lg text-center px-4">
        <h3 className="text-5xl font-bold font-serif">Let's talk</h3>
        <p className="mt-4 text-xl font-light">
          If you're running a growing tech-enabled company, we'd love to connect
          and hear about your journey.
        </p>
        <p className="mt-8">
          <ContactUsButton size="xl">Get Started Now</ContactUsButton>
        </p>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;

export default Index;
