import styled, { keyframes } from 'styled-components'
import NextImg from '../../assets/image/up-chevron.png';
import NextHoverImg from '../../assets/image/up-chevron-white.png';

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
  margin-bottom: 150px;
`

const nextButtonKeyframes = keyframes`
  0%, 28%, 56%, 100% {
    right: 30px;
  }
  14%, 42% {
    right: 20px;
  }
`

export const LandingNextButton = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  animation: ${nextButtonKeyframes} 1.5s 0s infinite;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #333;
  background-color: #fafafa;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0px 2px 5px 0 rgba(0,0,0,0.6);
  
  background-image: url(${NextImg});
  background-size: 30px 30px;
  background-position: 55% 50%;
  background-repeat: no-repeat;
  transition: box-shadow 0.5s ease;
  
  &:hover {
    background-color: #333;
    background-image: url(${NextHoverImg});
    border-color: #333;
    box-shadow: none;
  }

  &:focus {
    outline: none;
  }
`
