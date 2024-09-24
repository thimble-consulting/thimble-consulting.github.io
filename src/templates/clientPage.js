import React from 'react'
import Hero from "../components/client-pages/Hero.jsx";
import Layout from "../components/layout/Layout";

export default function ClientPage({pageContext}) {
  const { client } = pageContext

  return (
    <Layout fullWidth={true}>
      <Hero client={client}></Hero>
    </Layout>
  )
}
