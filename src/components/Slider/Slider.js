import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 45px;
  height: 45px;
  background-color: #00baa3;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
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
const Wrapper = styled.div`
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  display: flex;
  background-color: whitesmoke;
`
const Image = styled.img``
const InfoContainer = styled.div`
  position: relative;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  font-size: 45.45px;
  font-family: 'Urbanist', sans-serif;
  color: black;
`
const Description = styled.p`
  margin: 28.45px 0px;
  font-size: 22px;
  color: black;
  font-weight: bold;
  font-family: 'Urbanist', sans-serif;
  letter-spacing: 3.45px;
`
const Button = styled.button`
  font-family: 'Urbanist', sans-serif;
  border: 0 solid;
  color: black;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(0, 0, 0, 0.5);
  outline-offset: 0px;
  padding: 14.45px;
  text-shadow: none;
  background-color: transparent;
  font-size: 18.45px;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    cursor: pointer;
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 0.3px 0.3px 0.6px #427388;
  }
`

const Slider = () => {
  const ItemsToBeInSlide = [
    {
      id: 1,
      img: 'https://kucc.ku.edu.np/wp-content/uploads/2022/07/board.jpg',
      title: 'KUCC BOARD 2021-22',
      description: '',
    },
    {
      id: 2,
      img: 'https://kucc.ku.edu.np/wp-content/uploads/2021/03/group.jpg',
      title: 'KUCC BOARD 2020-21',
      description: '',
    },
    {
      id: 3,
      img: 'https://kucc.ku.edu.np/wp-content/uploads/2020/10/IMG_20190915_105933-1-scaled.jpg',
      title: 'KUCC BOARD 2019-20',
      description: '',
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
  function handleClick() {
    console.log('Show description ')
  }
  return (
    <Container>
      <Arrow setDirection="left" onClick={() => OnClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {ItemsToBeInSlide.map((itemSlide) => (
          <Slide key={itemSlide.id}>
            <Image src={itemSlide.img} />
            <InfoContainer>
              <Title>{itemSlide.title}</Title>
              <Description>{itemSlide.description}</Description>
              <Button onClick={handleClick}>GET DETAILS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow setDirection="right" onClick={() => OnClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
