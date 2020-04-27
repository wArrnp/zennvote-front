import styled,  { createGlobalStyle } from 'styled-components';

interface ContentWrapperProps {
  enableSearch: boolean
}

interface SeachWrapperProps {
  enableSearch: boolean
}

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #fafafa;
`;

export const ContentWrapper = styled.div`
  padding-top: 40px;
  padding-right: ${(props:ContentWrapperProps) => props.enableSearch ? "20%": "0"};
  transition: padding-right 0.5s;
  margin-bottom: 120px;
`;

export const ContentInnerWrapper = styled.div`
  width: 940px;
  min-height: 200px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 2px 3px 0 rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding-bottom: 30px;
`;

export const SmallHeader = styled.div`
  padding: 20px 30px;
  box-shadow: 0px 5px 3px -3px rgba(0, 0, 0, 0.08);
  text-align: center;
  color: #777;
`;

export const SearchWrapper = styled.div`
  z-index: 2;
  display: inline-block;
  position: fixed;
  width: 20%;
  height: 100vh;
  right: ${(props:SeachWrapperProps) => props.enableSearch ? "0": "-20%"};
  transition: right 0.5s;
  top: 0;
  background-color: white;
`

export const SearchToggleButton = styled.button`
  position: absolute;
  top: 25px;
  left: -50px;
  width: 50px;
  height: 55px;
  background: pink;
  border: none;
  outline: none;

  &:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-bottom: 25px solid pink;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 25px solid pink;
  }
`

export const SearchToggleButtonImg = styled.img`
  width: 30px;
  height: auto;
`