import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { link } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Sprite = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ilham_sprite.png" }) {
        childImageSharp {
          fixed (width: 70, height: 70){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
  <Link to="/">
      <Img fixed={data.placeholderImage.childImageSharp.fixed} />
  </Link>
  )
}

export default Sprite
