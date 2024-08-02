import React from "react";
import PastClientData from "../data/client-data";
import PastClientCard from "../components/PastClientCard";

const PastClients = () => (
  <div className="">
    <h2 className="text-3xl font-bold font-serif leading-none mb-8">
      Past Partnerships
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {PastClientData.map((data, _index) => (
        <>
          <PastClientCard imageSrc={data.companyImage} imageAlt={data.imageAlt} />
        </>
      ))}
    </div>
  </div>
);

export default PastClients;
