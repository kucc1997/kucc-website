import React from 'react'
import styled from 'styled-components'
function PresidentSection() {
  const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    justify-content: center;
    background-color: rgba(0, 186, 163, 0.13);
  `
  const Image = styled.img`
    width: 355.45px;
    height: 450px;
  `
  const InfoContainer = styled.div`
    margin-right: 40px;
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `
  const Title = styled.h1`
    color: #033b4a;
    line-height: 80px;
    font-size: 48.45px;
    letter-spacing: 0.4px;
    word-spacing: 1px;
    font-family: 'Urbanist', sans-serif;
  `

  const Description = styled.p`
    text-align: justify;
    font-size: 16px;
    color: #7a8a9e;
    font-family: 'Urbanist', sans-serif;
    letter-spacing: 0.8px;
    line-height: 130%;
  `
  return (
    <Container>
      <InfoContainer>
        <Title>
          Our <b>President</b>
        </Title>
        <Description>
          Welcome to Kathmandu University Computer Club. Our heartfelt goal is to provide a platform
          for students to advance their technical and soft skills, grow their confidence, and bridge
          the gap between academia and industry. KUCC fulfills its mission by conducting several
          events, talk shows, hackathons, workshops, and much more bringing together everyone under
          the same roof. We are proud to have a community of talented students, alumni, faculty,
          staff, and friends who care about this club like no other. This is what makes our
          community diverse and inclusive. Let’s all strive to live up to our motto “KUCC for all
          since 1997”.
        </Description>
        <Title
          style={{ fontSize: '18px', letterSpacing: '0', lineHeight: '40px', marginTop: '40px' }}
        >
          <b>Sagar Uprety</b>
        </Title>
        <Title
          style={{
            fontSize: '16px',
            letterSpacing: '0',
            margin: '0',
            lineHeight: '20px',
            color: '#7a8a9e',
          }}
        >
          President
        </Title>
      </InfoContainer>
      <ImageContainer>
        <Image src="https://kucc.ku.edu.np/wp-content/uploads/2021/03/su-1152x1536.jpg" />
      </ImageContainer>
    </Container>
  )
}
export default PresidentSection
