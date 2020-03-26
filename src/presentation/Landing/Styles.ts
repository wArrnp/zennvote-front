import styled from 'styled-components'

export const LandingHeader = styled.div`
  width: 418px;
  margin: auto;
  padding: 60px 0;
`

export const LandingTitle = styled.h2`
  margin: 0;
  font-size: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  padding-bottom: 10px;
  color: #333;
`

export const LandingSubTitle = styled.h2`
  margin: 0;
  color: #333;
  font-size: 30px;
  font-weight: bold;
`

export const LandingDescription = styled.p`
  margin: 0 auto;
  width: 418px;
  line-height: 24px;
  color: #333;
`

export const LandingNextButton = styled.button`
  display: block;
  width: 418px;
  height: 50px;
  margin: 0 auto;
  margin-top: 120px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  
  &:focus {
    outline: none;
    border: none;
  }
`