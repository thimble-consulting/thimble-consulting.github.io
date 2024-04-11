import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import CustomerCard from "../components/CustomerCard";
import LabelText from "../components/LabelText";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";
import StatsBox from "../components/StatsBox";
import customerData from "../data/customer-data";
import HeroImage from "../svg/HeroImage";
import SvgCharts from "../svg/SvgCharts";

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Scale, Adapt, Evolve
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            At Thimble, we help clients implement adaptable technology solutions
            that meet the evolving needs of growing businesses.
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="story" className="py-10 lg:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
          What we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Custom Software Solutions
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Order Management Systems
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Scaling around Shopify & BigCommerce
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Finance & Accounting Retrofits?
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              ERP Integrations
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Inventory Management Systems
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Outgoing Logistics - 3PL Integrations
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Retail Partnerships - EDI Integrations
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              DevOps - Infra-as-Code
            </p>
          </Card>
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Much more!
            </p>
          </Card>
        </div>
      </div>
    </section>
    <section id="story" className="py-10 lg:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
          Trusted By
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="place-content-center">
          </Card>
        </div>
      </div>
    </section>
    <section id="story" className="py-10 lg:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-4">
          Another Section
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="place-content-center">
            <p className="font-semibold text-xl">
              Retail Partnerships - EDI Integrations
            </p>
            <p className="mt-4">
              An enim nullam tempor gravida donec enim ipsum blandit porta justo
              integer odio velna vitae auctor integer.
            </p>
          </Card>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Market Analysis
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how
            your company stacks against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Design And Plan Your Business Growth Steps
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search
            for opportunities that are in reach
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Search For Performance Optimization
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an
            action plan that your company needs to follow
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">
          Our customers get results
        </LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-10 lg:py-20">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">
          What customers are saying
        </LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
        fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
