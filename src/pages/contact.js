import React from 'react'
import styled from "styled-components"
import '../layouts/index.css'

const Banner = styled.div`
    background-image: url('https://instagram.fmkc1-1.fna.fbcdn.net/vp/479ad46223506ba5bcb9a45fbee87577/5C3A0677/t51.2885-15/e35/22277953_179597432611264_2428521779292012544_n.jpg');
    background-position: center center;
`;

const Container = styled.div`

`;

const Content = styled.p`
  padding-top: 30px;
`;


const ContactPage = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>Contact</h1>
      </Banner>
      <Content>
        I love meeting new folks, feel free to reach out on &nbsp;
        <a href="https://twitter.com/SaraChicaD">
          Twitter
        </a> or &nbsp;
        <a href="https://www.linkedin.com/in/sarainescalderon/">
          LinkedIn
        </a>.
      </Content>
    </Container>
  </div>
);

export default ContactPage