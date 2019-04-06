import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const Banner = styled.div`
    background-image: url('https://c1.staticflickr.com/6/5696/22344392878_eff85b5527_c.jpg');
    background-position: center center;
`;

const Container = styled.div`

`;

const Content = styled.p`
  padding-top: 30px;
`;

const Italic = styled.p`
  padding-top: 30px;
  font-style: italic;
`;

const WomenWhoCode = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>Women Who Code</h1>
      </Banner>
      <Content>
        Diversity and inclusion in tech is important to me, and to building good products. I've worked with Women Who Code in Austin since 2015 and currently serve on the Women Who Code board.
          <Italic>
            Image via <Link
                to="https://www.flickr.com/photos/wocintechchat/"
                style={{
                  color: '#000000',
                }}
              >WOCinTechChat.</Link>
          </Italic>
      </Content>
    </Container>
  </div>
)

export default WomenWhoCode