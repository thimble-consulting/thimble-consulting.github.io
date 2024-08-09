import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel";
import Card from "../components/Card";
import { graphql, useStaticQuery } from "gatsby";
const OPTIONS = { slidesToScroll: "auto", loop: false };

const ExpertiseCard = ({ title }) => {
  return (
    <Card className="place-content-center h-full w-full object-contain">
      <p className="font-bold font-serif text-xl">
        { title }
      </p>
    </Card>
  )
}

const Expertise = () => {
  const queryData = useStaticQuery(graphql`
    query ExpertiseAreas {
      allExpertiseAreasJson {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  const slides = queryData.allExpertiseAreasJson.edges.map(({ node: { title } }) => (
    ExpertiseCard({ title })
  ))

  return (
    <div className="gap-4 object-contain drop-shadow-lg">
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  )
};

export default Expertise;
