import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

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
      <Content >
      Sara Inés Calderón is mobile app developer, community leader and writer based in Austin, Texas. In her first career she worked as a newspaper reporter across several cities in Texas, before transitioning to digital media and eventually software. As the lead mobile developer of Austin music startup, musx, Sara Inés most enjoys building a team and collaborating with them to learn, grow and create something special. Her work the past few years with Women Who Code Austin has focused on promoting diversity in technology, including co-founding the Austin Diversity Hackathon, and she currently serves on the Women Who Code Advisory Board. She enjoys yoga, nail art and trying out recipes she finds on Pinterest while waiting for apps to compile.
      </Content>
    </Container>
  </div>
)

export default AboutPage