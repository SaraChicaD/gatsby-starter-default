import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
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
        I write things on         <Link
            to="https://medium.com/@SaraChicaD"
            style={{
              color: '#000000',
            }}
          >Medium,</Link> check them out here!
      </Content>
    </Container>
  </div>
)

export default MediumPage