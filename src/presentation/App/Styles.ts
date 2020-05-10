import styled, { createGlobalStyle } from "styled-components";
import { mainColor } from "../Colors";

interface ContentWrapperProps {
  enableSearch: boolean;
}

interface SeachWrapperProps {
  enableSearch: boolean;
}

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "S-CoreDream";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "S-CoreDream";
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff')
      format("woff");
    font-weight: bold;
    font-style: normal;
  }


  * {
    font-family: 'S-CoreDream', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  padding-top: 40px;
  padding-right: ${(props: ContentWrapperProps) =>
    props.enableSearch ? "20%" : "0"};
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
  right: ${(props: SeachWrapperProps) => (props.enableSearch ? "0" : "-20%")};
  transition: right 0.5s;
  top: 0;
  background-color: white;
`;

export const SearchToggleButton = styled.button`
  position: absolute;
  top: 25px;
  left: -50px;
  width: 50px;
  height: 55px;
  background: ${mainColor};
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
    border-bottom: 25px solid ${mainColor};
  }

  &:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-top: 25px solid ${mainColor};
  }
`;

export const SearchToggleButtonImg = styled.img`
  width: 30px;
  height: auto;
`;

export const SnackbarCloseButton = styled.span`
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  margin-right: 4px;
  padding: 4px 10px;
  border-radius: 4px;
  &:hover {
    background: #00000040;
  }
`
