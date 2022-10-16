import React from 'react'
import styled from 'styled-components'
import Card from './CommunityCard'
import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
const Container = styled.div`
  height: 70vh;
  background-color: rgba(0, 186, 163, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: #00baa3;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0px 55.45px;
  justify-content: center;
  left: ${(props) => props.setDirection === 'left' && '14.5px'};
  right: ${(props) => props.setDirection === 'right' && '14.5px'};
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }
  opacity: 0.75;
  z-index: 2;
`
const Title = styled.h1`
  color: #033b4a;
  font-weight: 600;
  line-height: 80px;
  font-size: 32px;
  font-weight: bold;
  font-family: 'Urbanist', sans-serif;
  margin-bottom: 14.45px;
`
const SubTitle = styled.h2`
  margin-top: 28.45px;
  color: #00baa3;
  font-size: 18px;
  font-family: 'Urbanist', sans-serif;
`
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -16.5}vw);
`
const WrapperContainer = styled.div`
  overflow:hidden ;
`

function CommunitiesActive() {
  const ItemsToBeInSlide = [
    {
      id: 1,
      img: './kucc-logo.png',
      title: 'JavaScript Community',
    },
    {
      id: 2,
      img: './kucc-logo.png',
      title: 'Documentation Community',
    },
    {
      id: 3,
      img: './kucc-logo.png',
      title: 'Game Community',
    },
    {
      id: 4,
      img: './kucc-logo.png',
      title: 'Cyber Community',
    },
  ]
  const [slideIndex, setSlideIndex] = useState(0)
  const OnClick = (SlideDirection) => {
    if (SlideDirection === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : ItemsToBeInSlide.length - 1)
    } else {
      setSlideIndex(slideIndex < ItemsToBeInSlide.length - 1 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <SubTitle> Kathmandu University Open Source Community</SubTitle>
      <Title> Communities Active At KUCC</Title>
      <CardContainer>
        <Arrow setDirection="left" onClick={() => OnClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
        <WrapperContainer>
          <Wrapper slideIndex={slideIndex}>
            {ItemsToBeInSlide.map((itemSlide) => {
              return (
                <>
                  <Card key={itemSlide.id} img={itemSlide.img} title={itemSlide.title} />
                </>
              )
            })}
          </Wrapper>
        </WrapperContainer>
        <Arrow setDirection="right" onClick={() => OnClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      </CardContainer>
    </Container>
  )
}
export default CommunitiesActive
