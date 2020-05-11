import styled from 'styled-components';
import { mainColor } from '../Colors';

const innerWidth = '80%';

interface QuizButtonProps {
  isNext: boolean;
}

export const QuizWrapper = styled.div`
  padding-top: 42px;
  padding-bottom: 30px;
  margin: 0 auto;
`;

export const QuizContentWrapper = styled.div`
  width: ${innerWidth};
  margin: 0 auto;
`;

export const QuizButtonWrapper = styled.div`
  display: flex;
  width: ${innerWidth};
  justify-content: space-between;
  margin: auto;
  margin-top: 30px;
`;

export const QuizButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: QuizButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: QuizButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: QuizButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`;

export const QuizLoadingWrapper = styled.div`
  padding: 30px 0 70px 0;
`

export const QuizLoading = styled.div`
  border-radius: 50%;
  width: 1.5em;
  height: 1.5em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: load7 1.8s infinite ease-in-out;
  animation: load7 1.8s infinite ease-in-out;
  color: ${mainColor};
  font-size: 6px;
  margin: 0px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
    left: -2.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  &:after {
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
    content: "";
    position: absolute;
    top: 0;
    left: 2.5em;
  }

  @-webkit-keyframes load7 {
      0%,
      80%,
      100% {
        box-shadow: 0 2.5em 0 -1.3em;
      }
      40% {
        box-shadow: 0 2.5em 0 0;
      }
  }
  @keyframes load7 {
      0%,
      80%,
      100% {
        box-shadow: 0 2.5em 0 -1.3em;
      }
      40% {
        box-shadow: 0 2.5em 0 0;
      }
  }
`