import React from "react";
import EmblaCarousel from "./embla/EmblaCarousel";
import ExpertiseCard from "../components/ExpertiseCard";
import { graphql, useStaticQuery } from "gatsby";
const OPTIONS = { slidesToScroll: "auto", loop: false };

const Expertise = () => {
  const queryData = useStaticQuery(graphql`
    query ExpertiseAreas {
      allExpertiseAreasJson {
        edges {
          node {
            title
            detail
            blurb
          }
        }
      }
    }
  `)

  let slides = queryData.allExpertiseAreasJson.edges.map(({ node: { title, detail, blurb } }) => (
    ExpertiseCard({ title, detail, blurb })
  ))

  return (
    <div className="gap-4 object-contain">
      <EmblaCarousel slides={slides} options={OPTIONS} />
    </div>
  )
};

export default Expertise;
