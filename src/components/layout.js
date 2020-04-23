import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { rhythm, scale } from "../utils/typography"

const GlobalStyle = createGlobalStyle`
  body {
    background-color:#121212;
    color:#FAFAFA;
  };
  p {
    color:#bdbdbd;
  }
  a{
  color: #388e3c;
  }
  
  
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            color: "#388e3c",
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <GlobalStyle />
        <Container title={title}>
          {title ? <header>{header}</header> : <div />}

          <main>{children}</main>
        </Container>

        <Footer>
          Made With{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>
          &nbsp;By MKS © {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  /* display: flex; */
  flex-direction: column;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${props =>
    props.title ? `${rhythm(1.5)} ${rhythm(3 / 4)}` : `0 ${rhythm(3 / 4)}`};
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export default Layout
