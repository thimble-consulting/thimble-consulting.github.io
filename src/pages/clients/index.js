import * as React from "react"
import Layout from "../../../src/components/layout/Layout";
import { Link } from "gatsby"

export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col text-center">
        <Link to="/clients/walden">Walden</Link>
        <Link to="/clients/casper">Casper</Link>
        <Link to="/clients/florence">Florence</Link>
        <Link to="/clients/felcana">Felcana</Link>
        <Link to="/clients/glossier">Glossier</Link>
      </div>
    </Layout>
  )
}
