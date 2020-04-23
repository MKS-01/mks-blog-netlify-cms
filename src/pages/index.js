import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout
        location={this.props.location}
        // title={siteTitle}
      >
        <SEO
          title="MKS-Technophile"
          keywords={[
            `MKS`,
            `mks`,
            `mks-blog`,
            `full stack developer`,
            `manish kumar singh`,
            `MKS ||  full stack developer`,
          ]}
        />

        <Container>
          <BlogContainer>
            <Link to="/blog/">Blog</Link>
          </BlogContainer>
          <AvtarContainer>
            <img
              style={{
                margin: "auto",
                height: 120,
                width: 120,
                borderRadius: 120 / 2,
              }}
              src="./mks.png"
              alt="avtar"
            />
          </AvtarContainer>

          <div>
            <h1>Full Stack Developer </h1>
            <h3>Hey, {""}I'm MKS </h3>
            <p>
              On week <s>days</s> nights I'm a developer. And on weekends,
              becomes security researcher, or if not, then you can find me
              playing GOD OF WAR 4 or DEVIL MAY CRY 5. Currently, I'm working
              with a startup Fanlytiks. Working on their mobile & web analytiks
              SDKs, mobile apps, web apps.
            </p>
          </div>

          <ProfileList>
            <ul>
              <li>
                <a href="https://twitter.com/MKS10_">
                  <img
                    style={{ margin: 0, height: 50, width: 50 }}
                    src="./twitter.png"
                    alt="Twitter Icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/MKS-01">
                  <img
                    style={{
                      margin: 0,
                      height: 50,
                      width: 50,
                    }}
                    src="./github.png"
                    alt="Github Icon"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/manish-kumar-singh-90491215b">
                  <img
                    style={{
                      margin: 0,
                      height: 50,
                      width: 50,
                    }}
                    src="./linkedin.png"
                    alt="Linkedin Icon"
                  />
                </a>
              </li>
            </ul>
          </ProfileList>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  h1 {
    font-size: 50px;
    margin-top: 20px;
  }

  h3 {
    font-size: 28px;
  }
  p {
    text-align: justify;
  }
`

const ProfileList = styled.div`
  display: flex;

  ul {
    list-style-type: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: 0;
  }
  li {
    display: inline;
    padding-right: 20px;
  }
`

const BlogContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const AvtarContainer = styled.div``