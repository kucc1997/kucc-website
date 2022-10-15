import React from 'react'
import styled from 'styled-components'
function Articles() {
  const Container = styled.div`
    width: 100%;
    height: 74vh;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    justify-content: center;
    align-items: center;
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
    text-align: center;
  `
  const SubTitle = styled.h2`
    color: #00baa3;
    font-size: 18px;
    font-family: 'Urbanist', sans-serif;
    text-align: center;
  `
  const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
  `

  return (
    <Container>
      <InfoContainer>
        <SubTitle> KUCC Journal</SubTitle>
        <Title> Recent Articles</Title>
      </InfoContainer>
      <ArticleContainer></ArticleContainer>
    </Container>
  )
}
export default Articles
