import React from "react"
import { graphql } from "gatsby"
// import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        {/* <Container> */}
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        {/* </Container> */}
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   min-height: 100vh;

//   h1 {
//     font-size: 50px;
//     margin-top: 20px;
//   }

//   h3 {
//     font-size: 28px;
//   }
//   p {
//     text-align: justify;
//   }
// `
