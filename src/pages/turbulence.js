import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Turbulence from "../components/turbulence"
import "../components/turbulence.css"
import { Link } from "gatsby"
import Sprite from "../images/sprite"
import Sea from "../images/sea"
import Seamap from "../images/sea-map"

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
      <p>
      The &lt;feTurbulence&gt; SVG filter primitive creates an image using the Perlin turbulence function. 
      It allows the synthesis of artificial textures like clouds or marble. 
      The resulting image will fill the entire filter primitive subregion.
      <br/>
      The two images shown below are used to make up for the Turbulence Implementation.
      </p>
      <div align="center">
          <div style={{width: `100%`, maxWidth: `634px`}} >
            <Sea/>
            <p align="center">
             Sea.jpg
            </p>
          </div>
          <div style={{width: `100%`, maxWidth: `634px`}}>
            <Seamap/>
            <p align="center">
                Sea-map.png
            </p>
          </div>
      </div>
    <p align="left">SVG Turbulence in effect:</p>
    <Turbulence/>
    <p align="center">
          The effect is viewed better in Desktop View <i class="fas fa-desktop"></i>
    </p>
    <div>
        <h4>
        <Link 
        to="/"
        style={{
            color: `#0366d6`,
        }}
        >
        <i className="fas fa-arrow-right"> </i>
        {` `}
        Go to Home</Link>
        </h4>
    </div>
    </article>
  </Layout>
)
export default TurbulencePage
