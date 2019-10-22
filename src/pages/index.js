import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <article class="markdown-body entry-content p-5" itemprop="text">
<p align="center">
  <h1>
  <a href="https://www.gatsbyjs.org" rel="nofollow">
    <img alt="Gatsby" src="https://camo.githubusercontent.com/ac31ac54c2013850b0fb8a3a4926f4718a398fb3/68747470733a2f2f7777772e6761747362796a732e6f72672f6d6f6e6f6772616d2e737667" width="60" data-canonical-src="https://www.gatsbyjs.org/monogram.svg" style={{maxWidth:"100%"}}/>
  </a>
  &
  <a href="https://www.ilhamfadhil.com" rel="nofollow">
    <img alt="Gatsby" src="https://camo.githubusercontent.com/1c262d062ff2a883421b5337951ee7c1d89b55e5/68747470733a2f2f696c68616d66616468696c2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031392f30382f63726f707065642d63726f707065642d49462e706e67" width="60" data-canonical-src="https://ilhamfadhil.com/wp-content/uploads/2019/08/cropped-cropped-IF.png" style={{maxWidth:"100%",position:"absolute",paddingTop:"7px"}}/>
  </a>
  </h1>
</p>
<h1 align="center"><a id="user-content---gatsby-svg-filters-by-ilham-fadhil" class="anchor" aria-hidden="true" ></a>
  Gatsby-svg-filters by Ilham Fadhil
</h1>
<p>This project uses <a href="https://www.gatsbyjs.org/" rel="nofollow"> GatsbyJS </a> 
starter, this SVG-filters project is aimed to create reusable React components based on 
<a href="//www.w3schools.com/graphics/svg_filters_intro.aspthat" rel="nofollow"> SVG_filters</a>. Feel free to use the JS components made here.
</p>
<p><i className="fab fa-github"></i> Github code for this Project can be found in <a href="https://github.com/ilhamfadheel/gatsby-svg-filters" rel="nofollow"> Here </a> 
</p>
<h2><a id="user-content--quick-start" class="anchor" aria-hidden="true" href="#-quick-start"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Quick start</h2>
<ol>
<li>
<p>**Install NodeJS **</p>
<p><a href="https://nodejs.org/en/download/" rel="nofollow">https://nodejs.org/en/download/
</a> -&gt; Install NodeJS according to your Operating System</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c">
  <span class="pl-c">#</span> check which version you are using for Node</span>
<br/>node -v<br/>
<span class="pl-c"><span class="pl-c">#</span> check which version you are using for NPM</span>
<br/>npm -v</pre></div>
</li>
<li>
<p>**Install GatsbyJS **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c">
  <span class="pl-c">#</span> install Gatsby JS globally</span>
<br/>npm install -g gatsby-cli<br/>
<span class="pl-c"><span class="pl-c">#</span>check gatsby version</span>
<br/>gatsby -v</pre></div>
</li>
<li>
<p>**Clone this Repo **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> clone this repo</span>
<br/>git clone https://github.com/ilhamfadheel/gatsby-svg-filters</pre></div>
</li>
<li>
<p>**Run GatsbyJS locally in port 8080 **</p>
<div class="highlight highlight-source-shell"><pre><span class="pl-c"><span class="pl-c">#</span> run this command inside the folder to run locally</span>
<br/>gatsby develop</pre></div>
</li>
</ol>
</article><br/>
    <h3>
    <Link to="/page-2/">Go to Turbulence Implementation</Link>
    </h3>
  </Layout>
)

export default IndexPage
