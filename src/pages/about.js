import React from 'react';
import styled from 'styled-components';
import '../layouts/index.css';
import { Link } from "gatsby"

const Banner = styled.div`
    background-image: url('https://instagram.fmkc1-1.fna.fbcdn.net/vp/701a149670b7b970cc1a23a913309d32/5C1D11DD/t51.2885-15/e35/39744954_2166224113638619_6891290484019298304_n.jpg');
    background-position: center center;
`;

const Container = styled.div`

`;

const Content = styled.p`
  padding-top: 30px;
`;


const AboutPage = () => (
  <div>
    <Container className="container">
      <Banner className="page-banner">
        <h1>About</h1>
      </Banner>
      <Content>
        Hola, I'm Sara Inés Calderón is mobile app developer (iOS & Android via React Native), community leader and writer based in Austin, Texas.
I work as a lead mobile developer, and have worked on several music-related apps you can download <Link to="http://musx.com/">musx</Link> here, I've also worked on <Link to="https://www.thetriblnetwork.com/">Tribl</Link> and currently work at 
        <Link to="http://www.artistory.net/"> Artistory</Link>.
      </Content>
      <hr />
      <Content>
        My favorite part of my job is building supportive and collaborative teams and mentoring folks. My work in Austin with Women Who Code Austin has focused on promoting diversity in technology, including co-founding the Austin Diversity Hackathon. I enjoy learning about fermentation with kombucha & pickling, nail art and learning about native plants and their medicinal properties.
      </Content>
    </Container>
  </div>
);

export default AboutPage;