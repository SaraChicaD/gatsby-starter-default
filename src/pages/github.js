import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const Container = styled.div`

`;

const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
  text-align: center;
  margin: 0 auto;
`;

const Title = styled.a`

`;

const Excerpt = styled.p`
  margin: 0;
`;

const Banner = styled.div`
    background-image: url('https://octodex.github.com/images/octocat-de-los-muertos.jpg');
    background-position: center center;
`;

const Intro = styled.p`
  padding-top: 30px;
`;

const Information = props => (
  <ArticleWrapper>
    <Description>
      <a href={props.link} target="_blank">{props.title}</a>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </ArticleWrapper>
);

export default () => (
  <Container className="container">
    <Banner className="page-banner">
      <h1>Github</h1>
    </Banner>
    <Intro>
      I’ve contributed to open source projects a hackathons over the past few years, check out my <Link
            to="https://github.com/sarachicad"
            style={{
              color: '#000000',
            }}
          >Github.</Link>
    </Intro>
  </Container>
);