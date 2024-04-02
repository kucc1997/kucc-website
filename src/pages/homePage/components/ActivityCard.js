import React from 'react'
import styled from 'styled-components'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
function ActivityCard(props) {
  const Card = styled.div`
    display: flex;
    flex-direction: column;
    height: 250px;
    width: 230px;
    padding: 12px;
    margin: 10px;
    margin: 0px 40px;
    :hover {
      cursor: pointer;
      border-radius: 10%;
      transform: scale(1.05);
      transition: 0.25s ease-in-out;
      box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3),
        0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    }
  `
  const Title = styled.h3`
    color: #033b4a;
    font-weight: 600;
    line-height: 80px;
    font-size: 18.45px;
    letter-spacing: 0.8px;
    font-weight: 800;
    font-family: 'Urbanist', sans-serif;
    text-align: center;
  `

  const Description = styled.p`
    font-size: 14px;
    font-family: 'Urbanist', sans-serif;
    text-align: justify;
    color: #7a8a9e;
  `
  function Icon() {
    if (props.title === 'IT Meet') {
      return <MonetizationOnIcon sx={{ fontSize: '35.45px', color: '#00baa3', margin: '0 auto' }} />
    } else if (props.title === 'Software Freedom Day') {
      return (
        <VolunteerActivismIcon sx={{ fontSize: '35.45px', color: '#00baa3', margin: '0 auto' }} />
      )
    } else {
      return <TravelExploreIcon sx={{ fontSize: '35.45px', color: '#00baa3', margin: '0 auto' }} />
    }
  }
  return (
    <Card>
      {Icon()}
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Card>
  )
}
export default ActivityCard
