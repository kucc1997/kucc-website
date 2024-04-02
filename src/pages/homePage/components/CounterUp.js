import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'
function CounterUp() {
  const [on, setOn] = useState(false)
  const Container = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #00baa3;
    opacity: 0.85;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: white;
    padding: 0px 88.45px;
  `
  const Event = styled.h3`
    font-family: 'Urbanist', sans-serif;
    font-size: 19.45px;
    font-weight: bold;
    letter-spacing: 1.45px;
    line-height: 30.45px;
  `
  const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Urbanist', sans-serif;
    font-size: 58.45px;
  `

  return (
    <ScrollTrigger
      onEnter={() => {
        setOn(true)
      }}
      onExit={() => {
        setOn(true)
      }}
    >
      <Container>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={120}
              duration={1.8}
              delay={0}
              style={{ fontFamily: 'Urbanist', fontWeight: 'bold', letterSpacing: '2.8px' }}
            />
          )}
          <Event> EVENTS</Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={10}
              duration={1.8}
              delay={0}
              style={{ fontFamily: 'Urbanist', fontWeight: 'bold', letterSpacing: '2.8px' }}
            />
          )}
          <Event> COMUNITIES</Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={500}
              duration={1.8}
              delay={0}
              style={{
                fontFamily: 'Urbanist',
                fontWeight: 'bold',
                letterSpacing: '2.8px',
              }}
            />
          )}
          <Event> WORKSHOPS</Event>
        </NumberContainer>
        <NumberContainer>
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={1000}
              duration={1.8}
              delay={0}
              style={{ fontFamily: 'Urbanist', fontWeight: 'bold', letterSpacing: '2.8px' }}
            />
          )}
          <Event> MEMBERS</Event>
        </NumberContainer>
      </Container>
    </ScrollTrigger>
  )
}
export default CounterUp
