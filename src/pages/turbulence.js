import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Turbulence from "../components/turbulence"
import "../components/turbulence.css"
import { Link } from "gatsby"

const TurbulencePage = () => (
  <Layout>
    <SEO title="Turbulence" />
    <article>
      <p align="center">
      <Link to="/" >
          <img alt="Gatsby" style={{margin: 0,borderRadius: 50,borderStyle: `solid`}} src="https://ilhamfadhil.com/wp-content/uploads/2019/08/cropped-cropped-IF.png" width="60" />
      </Link>
        <h1>Turbulence Effect Implementation</h1>
      </p>
      <p align="left">Below is example of SVG Turbulence Effect:</p>
    </article>
    <Turbulence/>
  </Layout>
)
export default TurbulencePage
