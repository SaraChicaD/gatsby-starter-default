import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"
import ReactDOM from 'react-dom'
import '../layouts/index.css'

const FlipSection = styled.div`

`;

const Container = styled.div`

`;

const Front = styled.div`

`;

const Back = styled.div`

`;

const Card = styled.div`

`;

const CardName = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Excerpt = styled.p`
  vertical-align: middle;
`;

const Flipper = props => (
  <Container className="flip-container">
    <Card className="flipper">
      <Front className="front"
        style={{
          backgroundImage: `url(${props.avatar})`,
          backgroundPosition: 'center center',
        }}
      >
        <span><CardName>{props.username}</CardName></span>
      </Front>
      <a href={props.link}>
        <Back className="back">
          <Excerpt>{props.back_text}</Excerpt>
        </Back>
      </a>
    </Card>
  </Container>
);

export default () => (
  <FlipSection className="flip-section">
    <row>
      <Flipper
        username="About"
        avatar="https://instagram.fmkc1-1.fna.fbcdn.net/vp/701a149670b7b970cc1a23a913309d32/5C1D11DD/t51.2885-15/e35/39744954_2166224113638619_6891290484019298304_n.jpg"
        front_text="Twitter"
        back_text="Who is this Sara Inés person?"
        link="/about/"/>           
      <Flipper
        username="Twitter"
        avatar="https://c1.staticflickr.com/4/3482/3219092961_d3fa7fd935_b.jpg"
        front_text="Twitter"
        back_text="I'm often on Twitter sharing things."
        link="https://twitter.com/sarachicad"/>
      <Flipper
        username="Women Who Code & Anita Borg"
        avatar="https://c1.staticflickr.com/6/5696/22344392878_eff85b5527_c.jpg"
        front_text="Twitter"
        back_text="Check out my work in diversity and inclusion."
        link="/women-who-code/"/>
      <Flipper
        username="Writing and Speaking"
        avatar="https://pbs.twimg.com/media/DiFEm0jUEAEgZo0.jpg:large"
        front_text="Writing and Speaking"
        back_text="I code — but also write and speak."
        link="/writing-and-speaking/"/>      
      <Flipper
        username="Medium"
        avatar="http://c1.staticflickr.com/2/1853/29647008257_8180f5111f_z.jpg"
        front_text="Twitter"
        back_text="I write in depth pieces about tech on Medium."
        link="https://medium.com/@SaraChicaD"/>
      <Flipper
        username="LinkedIn"
        avatar="https://instagram.fmkc1-1.fna.fbcdn.net/vp/767326e48f983b35389f73eae90f590a/5C2FA677/t51.2885-15/e35/36854388_268296100420437_5474248187428470784_n.jpg"
        front_text="Twitter"
        back_text="All the professional stuff."
        link="https://www.linkedin.com/in/sarainescalderon"/>      
      <Flipper
        username="Freelance"
        avatar="https://c1.staticflickr.com/2/1594/25772154926_2c3b0dd2cf_n.jpg"
        front_text="Twitter"
        back_text="I do all the things!"
        link="/freelance/"/>
      <Flipper
        username="Github"
        avatar="https://octodex.github.com/images/octocat-de-los-muertos.jpg"
        front_text="Twitter"
        back_text="I've written code, some of it open source."
        link="/github/"/>
        <Flipper
        username="Contact"
        avatar="https://instagram.fmkc1-1.fna.fbcdn.net/vp/479ad46223506ba5bcb9a45fbee87577/5C3A0677/t51.2885-15/e35/22277953_179597432611264_2428521779292012544_n.jpg"
        front_text="Twitter"
        back_text="I enjoy meeting new folks!"
        link="/contact/"/>
    </row>
  </FlipSection>
);