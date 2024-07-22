import React from "react";
import Card from "./Card";
import ExpertiseCard from "./ExpertiseCard";
import ExpertiseDescription from "./ExpertiseDescription";
import ExpertiseData from "../data/expertise-data";
import { useState } from "react";


function Expertise(){
  const [expertise, setExpertise] = useState();

  return(
    <section id="story" className="py-10 lg:py-20 text-center">
      <div className="carousel rounded-box h-48 space-x-4 text-wrap h-auto max-w-5xl">
        {ExpertiseData.map((data, index) => (
          <>
            <div key={index} className="carousel-item w-1/5">
              <ExpertiseCard title={data.title} setExpertise={setExpertise} />
            </div>
          </>
        ))}
      </div>

      <ExpertiseDescription expertise={expertise} />
    </section>
  );
};

export default Expertise;
