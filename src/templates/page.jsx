import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent, builder } from '@builder.io/react';

builder.init("464eac5a0492435cb67f71783742bba3");

// Your template populates your Gatsby pages with your Builder page content.
function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.page?.[0]?.content;

  return <BuilderComponent name="page" content={page} />;
}

export default PageTemplate;

// pageQuery is a GraphQL query that
// fetches each page's content from Builder.
// Your content is rendered within the
// PageTemplate using BuilderComponent, provided by Builder's SDK.
export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      page(target: { urlPath: $path }) {
        content
      }
    }
  }
`;
