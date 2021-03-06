import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
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

// const Title = styled.a`

// `;

const Excerpt = styled.p`
  margin: 0;
`;

const Banner = styled.div`
    background-image: url('https://c1.staticflickr.com/2/1594/25772154926_2c3b0dd2cf_n.jpg');
    background-position: center center;
`;

const Intro = styled.p`
  padding-top: 30px;
`;

const Italic = styled.p`
  padding-top: 30px;
  font-style: italic;
`;

const White = styled.h1`
  font-color: '#ffffff';
  color: '#ffffff';
`;

const Information = props => (
  <ArticleWrapper>
    <Description>
      <a href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</a>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </ArticleWrapper>
);

export default () => (
  <Container className="container">
    <Banner className="page-banner">
      <h1 className="white-title">Tercera & Freelance</h1>
    </Banner>
    <Intro>
      Through my company Tercera I work on custom websites / web apps, WordPress sites, and mobile apps.

      <Italic>
        Image via <Link
            to="https://www.flickr.com/photos/wocintechchat/"
            style={{
              color: '#000000',
            }}
          >WOCinTechChat.</Link>
      </Italic>
    </Intro>
   </Container>
);