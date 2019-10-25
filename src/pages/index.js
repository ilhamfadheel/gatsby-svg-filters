import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Sprite from "../images/sprite"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article class="markdown-body entry-content p-5" itemprop="text">
<p align="center" style={{marginBottom: "0"}}>
  <Sprite/>
</p>
<h1 align="center"><a id="user-content---gatsby-svg-filters-by-ilham-fadhil" aria-hidden="true" ></a>
  gatsby-svg-filters by Ilham Fadhil
</h1>
<p>This Project uses <a href="//www.gatsbyjs.org/" rel="nofollow"> GatsbyJS </a> 
starter, an open source framework based on ReactJS and is aimed to implement &nbsp;
<a href="//www.w3schools.com/graphics/svg_filters_intro.asp" rel="nofollow">SVG_filters</a>, which are used to add special effects to SVG graphics.
</p>
<p> Github repo for this Project can be found here: &nbsp;
  <a href="//github.com/ilhamfadheel/gatsby-svg-filters">
    <i className="fab fa-github" style={{color: `black`}}></i>//github.com/ilhamfadheel/gatsby-svg-filters
  </a>
</p>
<h2><a id="user-content--quick-start" aria-hidden="true" href="#-quick-start">
  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
    <path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
      </path></svg></a>
      <g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">
  🚀</g-emoji> Quick start</h2>
<ol>
<li>
<p>**Install NodeJS **</p>
<p><a href="https://nodejs.org/en/download/" rel="nofollow">https://nodejs.org/en/download/
</a> -&gt; You need to install NodeJS first before running this app.</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c">
  <span class="pl-c">#</span> check Node version</span>
<br/>$node -v<br/>
<span class="pl-c"><span class="pl-c">#</span> check NPM version</span>
<br/>$npm -v</pre></div>
</li>
<li>
<p>**Install GatsbyJS **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c">
  <span class="pl-c">#</span> install GatsbyJS globally</span>
<br/>$npm install -g gatsby-cli<br/>
<span class="pl-c"><span class="pl-c">#</span>check GatsbyJS version</span>
<br/>$gatsby -v</pre></div>
</li>
<li>
<p>**Clone this Repo **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> clone this repo</span>
<br/>$git clone https://github.com/ilhamfadheel/gatsby-svg-filters</pre></div>
</li>
<li>
<p>**Run GatsbyJS locally in port 8080 **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> run this command inside the folder to run locally</span>
<br/>$gatsby develop</pre></div>
</li>
</ol>
</article><br/>
    <h4>
    <Link 
      to="/turbulence"
      style={{
        color: `#0366d6`,
      }}
    >
      <i className="fas fa-arrow-right"> </i>
      {` `}
      Go to Turbulence Effect Implementation</Link>
    </h4>
  </Layout>
)

export default IndexPage
