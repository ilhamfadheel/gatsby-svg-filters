import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Turbulence from "../components/turbulence"
import "../components/turbulence.css"
import { Link } from "gatsby"
import Sprite from "../images/sprite"

const TurbulencePage = () => (
  <Layout>
    <SEO title="Turbulence" />
    <article>
      <p align="center">
      <Link to="/" >
        <Sprite/>
      </Link>
        <h1>Turbulence Effect Implementation</h1>
      </p>
      <p align="left">Below is example of SVG Turbulence Effect:</p>
    </article>
    <Turbulence/>
  </Layout>
)
export default TurbulencePage
