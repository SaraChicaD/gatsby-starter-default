import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import '../layouts/index.css'

const Banner = styled.div`
    background-image: url('http://c1.staticflickr.com/2/1892/29646876857_a070ed595a_h.jpg');
    background-position: center center;
`;

const Container = styled.div`

`;

const Content = styled.p`
  padding-top: 30px;
`;


const MediumPage = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>Medium</h1>
      </Banner>
      <Content>
        I write about tech things on <Link
            to="https://dev.to/sarachicad"
            style={{
              color: '#000000',
            }}
          >Dev.to,</Link> check them out here!
      </Content>
    </Container>
  </div>
)

export default MediumPage