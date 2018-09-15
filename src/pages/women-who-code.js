import React from 'react'
import Link from 'gatsby-link'
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


const WomenWhoCode = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>Women Who Code & Anita Borg</h1>
      </Banner>
      <Content>
        Diversity and inclusion in tech is important to me, and to building good products. I've worked with Women Who Code in Austin since 2015, currently serve on the Women Who Code board and work with Anita Borg in Austin. Image via <Link
            to="https://www.flickr.com/photos/wocintechchat/"
            style={{
              color: '#000000',
            }}
          >WOCinTechChat.</Link>
      </Content>
    </Container>
  </div>
)

export default WomenWhoCode