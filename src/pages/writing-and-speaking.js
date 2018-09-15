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
    background-image: url('https://pbs.twimg.com/media/DiFEm0jUEAEgZo0.jpg:large');
    background-position: center center;
`;

const Intro = styled.p`
  padding-top: 30px;
`;

const Article = props => (
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
      <h1>Writing & Speaking</h1>
    </Banner>
    <Intro>
      In addition to being a software developer, I've written for publications and often am invited to do speaking engaements.
      <br /><br />
      <a href="https://www.linkedin.com/in/sarainescalderon/">For the list of my public speaking, click here and scroll to the "Public Speaking" section.</a>
      <br /><br />
      <a href="https://techcrunch.com/author/sara-in-s-calder-n/">TechCrunch</a>
      <br /><br />
      <a href="https://motherboard.vice.com/en_us/article/qkv5xq/can-learning-to-code-delay-alzheimers">Vice</a>
    </Intro>
  </Container>
);