import React from 'react'
import styled from 'styled-components'
import ActivityCard from './ActivityCard'

function Activities() {
  const Container = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
  `

  const Title = styled.h1`
    color: #033b4a;
    font-weight: 600;
    line-height: 80px;
    font-size: 32px;
    font-weight: bold;
    font-family: 'Urbanist', sans-serif;
    margin-bottom:55.45px ;
  `
  const SubTitle = styled.h2`
    color: #00baa3;
    font-size: 18px;
    font-family: 'Urbanist', sans-serif;
  `
  const ActivitiesCard = styled.div`
    display: flex;
    flex-direction: row;
  `
  return (
    <Container>
      <SubTitle>What we do</SubTitle>
      <Title> Activities We Are Actively Doing</Title>
      <ActivitiesCard>
        <ActivityCard
          title="IT Meet"
          description=" “IT MEET” is an ICT event organized by KUCC and DoCSE to encourage interaction between students from various institutions of Nepal and youths from various walks of life."
        />
        <ActivityCard
          title="Software Freedom Day"
          description=" Software Freedom Day (SFD) is an annual worldwide celebration of Free Software. SFD is a public education effort with the aim of increasing awareness of Free Software and its virtues, and encouraging its use."
        />
        <ActivityCard
          title="Workshops"
          description=" Kathmandu University Computer Club conducts regular monthly and weekly workshops through different communities formed under KUCC."
        />
      </ActivitiesCard>
    </Container>
  )
}
export default Activities
