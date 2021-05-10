import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="unordered">
            <strong>
              <strong>Мы предоставляем</strong>
            </strong>
          </h3>
          <ul>
            <li>Учим</li>
            <li>Даем мотик</li>
            <li>Даем экипчик</li>
            <li>Подвозим на трассу</li>
          </ul>

          <h2 id="lists">Тренеры</h2>
          <h3 id="unordered">
            <strong>
              <strong>Артём</strong>
            </strong>
          </h3>
          <p>Победитель и призёр всей хуйни. зоебись ездит и все такое можно понаписывать конешно</p>
          <figure className="kg-card kg-image-card">
            <Img
                fluid={data.artemPic.childImageSharp.fluid}
                className="kg-image"
            />
            <figcaption>Артём</figcaption>
          </figure>
          <h3 id="unordered">
            <strong>
              <strong>Настя</strong>
            </strong>
          </h3>
          <p>Тоже победитель и призёр всей хуйни</p>
          <figure className="kg-card kg-image-card">
            <Img
                fluid={data.nastyaPic.childImageSharp.fluid}
                className="kg-image"
            />
            <figcaption>Настя</figcaption>
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
      }
    }
     artemPic: file(
      relativePath: { eq: "artemAbout.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
     nastyaPic: file(
      relativePath: { eq: "nastyaAbout.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
