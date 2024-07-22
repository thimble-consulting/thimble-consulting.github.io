import React from "react";
import Card from "./Card";

const ExpertiseCard = ({ title, setExpertise }) => (
  <>
    <Card
      className="place-content-center"
      onClick={() => { setExpertise(title)}}
      >
      <p className="font-bold font-serif text-xl content-center">{title}</p>
    </Card>
  </>
);

export default ExpertiseCard;
