import React from "react";
import ExpertiseData from "../data/expertise-data";

function findDescription(ExpertiseData, expertise){
  if(expertise == null) {
    return;
  } else {
    return (ExpertiseData.find((data) => data.title == expertise ).description);
  }
}

const ExpertiseDescription = ({expertise}) =>
  <>
    <div className="place-content-center mt-10">
      <p className="font-bold font-serif text-xl content-center">
        {findDescription(ExpertiseData, expertise)}
      </p>
    </div>
  </>;

export default ExpertiseDescription;
