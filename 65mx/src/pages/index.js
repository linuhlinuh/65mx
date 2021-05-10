import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/postCard"

// import "../utils/global.scss"
import "../utils/normalize.css"
import "../utils/css/screen.css"
import Img from "gatsby-image";
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  let postCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
            <p>
                Мы короч мотокросс школа вся хуйня предоставляем всю хуйню обращайтесь.
                065-65-65-555
            </p>
        </header>
      )}
        <article className="post-content page-template no-image">
            <div className="post-content-body">
        <figure className="kg-card kg-image-card">
            <Img
                fluid={data.artemPic.childImageSharp.fluid}
                className="kg-image"
            />
            <figcaption>Артём справа</figcaption>
        </figure>
            </div>
        </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    artemPic: file(
      relativePath: { eq: "artem.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
