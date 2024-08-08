import React from "react";
import EmblaAutoScrollCarousel from "./embla/EmblaAutoScrollCarousel";
import Card from "../components/Card";
const OPTIONS = { slidesToScroll: "auto", loop: true };

const SLIDES = [
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Custom Software Solutions
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Order Management Systems
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Scaling around Shopify & BigCommerce
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Finance & Accounting Systems
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      ERP Integrations
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Inventory Management
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Outgoing Logistics & 3PLs
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      Retail Partnerships & EDI
    </p>
  </Card>,
  <Card className="place-content-center h-full w-full object-contain">
    <p className="font-bold font-serif text-xl">
      DevOps - Infra-as-Code
    </p>
  </Card>,
];

const Expertise = () => (
  <div className="gap-4 object-contain overflow-hidden drop-shadow-lg">
    <EmblaAutoScrollCarousel slides={SLIDES} options={OPTIONS} />
  </div>
);

export default Expertise;
