import * as React from "react";
import Layout from "../components/layout/Layout";
import { Link } from "gatsby";

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="my-8 py-20 bg-ghost-white rounded-lg text-center px-4">
        <h1 className="text-5xl font-bold font-serif mb-4">Page not found</h1>
        <p>
          Whoops! We couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development"
            ? (
              <>
                <br />
                Try creating a page in{" "}
                <code style={codeStyles}>src/pages/</code>.
                <br />
              </>
            )
            : null}
          <br />
          <Link to="/">here's our homepage</Link>
        </p>
      </section>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
