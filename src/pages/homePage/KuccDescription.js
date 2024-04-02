import React from 'react'
import styled from 'styled-components'
function KuccDescription() {
  const Container = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    justify-content: center;
  `
  const ImageContainer = styled.div`
    flex: 1;
    position: relative;
  `
  const Image = styled.img`
    position: absolute;
    right: 50px;
    width: 290px;
    height: 250px;
  `
  const InfoContainer = styled.div`
    flex: 1.5;
  `
  const Title = styled.h1`
    color: #033b4a;
    font-weight: 600;
    line-height: 80px;
    font-size: 32px;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
  `
  const SubTitle = styled.h2`
    color: #00baa3;
    font-size: 18px;
    font-family: 'Urbanist', sans-serif;
  `
  const Description = styled.p`
    text-align: justify;
    font-size: 16px;
    color: #7a8a9e;
    font-family: 'Urbanist', sans-serif;
    letter-spacing: 0.8px;
    line-height: 130%;
    width: 700px;
  `
  const Button = styled.button`
    margin-top: 22px;
    font-family: 'Urbanist', sans-serif;
    border: 0 solid;
    color: white;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(0, 0, 0, 0.5);
    outline-offset: 0px;
    padding: 14.45px;
    text-shadow: none;
    background-color: #00baa3;

    font-size: 14.45px;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    &:hover {
      cursor: pointer;
      outline: 1px solid;
      background-color: black;

      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
    }
  `
  return (
    <Container id="about-us">
      <ImageContainer>
        <Image src="/kucc-logo.png" />
      </ImageContainer>

      <InfoContainer>
        <SubTitle> Since 1997, The oldest student club</SubTitle>
        <Title> Kathmandu University Computer Club</Title>
        <Description>
          KUCC is a non-profit, independent club formed by students of the Department of Computer
          Science and Engineering in the year 1997. Being registered as the first club of Kathmandu
          University with the registration number 001/1997 in the Student Welfare, KUCC has worked
          in the field of ICT for twenty years. KUCC has more than 1000 members from Department of
          Computer Science and Engineering. Kathmandu University Computer Club (KUCC) is a student
          wing of the Department of Computer Science and Engineering which was established with a
          goal to engage and aware students in the technological research and development, most
          prominently in the ICT field and at the same time provides a common platform for young and
          aspiring individuals to exhibit their ideas. Every year KUCC cooperates and organizes
          numerous competitive as well as non-competitive events like seminars, exhibitions,
          hackathon, skill development program and tutorial sessions to name a few, with an
          unwavering intention to promote, develop and encourage emerging technological advancement.
        </Description>
        <Button>CONTACT US</Button>
      </InfoContainer>
    </Container>
  )
}
export default KuccDescription
