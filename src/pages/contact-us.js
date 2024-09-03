import React from "react";
import { FilloutFullScreenEmbed } from "@fillout/react";
import "@fillout/react/style.css";
import Layout from "../components/layout/Layout";

function App() {
  return (
    <Layout>
      <FilloutFullScreenEmbed filloutId="c5NGgaKqYfus" inheritParameters />;
    </Layout>
  )
}

export default App;
