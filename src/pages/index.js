import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from "react";
import * as React from "react"

builder.init("464eac5a0492435cb67f71783742bba3");

const IndexPage = () => {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect( () => {
    async function fetchContent() {
      const content = await builder.get('page', {
        url: window.location.pathname
      }).promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, []);
  // if no page is found, return a 404 page
  if (notFound && !isPreviewingInBuilder) {
    return <div>Not Found 404 Error</div>
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
    </>
  );
}

export default IndexPage

export const Head = () => <title>Thimble Consulting</title>
