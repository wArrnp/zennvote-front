import styled from 'styled-components';

export const AppWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #fafafa;
`;

export const ContentWrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 120px;
`

export const ContentInnerWrapper = styled.div`
  width: 940px;
  min-height: 200px;
  background-color: white;
  margin: 0 auto;
  position: relative;
  box-shadow: 0px 2px 3px 0 rgba(0,0,0,0.08);
  padding-bottom: 30px;
`

export const CancelButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  transform: translate(50%, -50%);
  border-radius: 50%;
  border: none;
  box-shadow: 0px 2px 3px 0 rgba(0,0,0,0.08);
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export const CancelImg = styled.img`
  width: 13px;
  height: 13px;
`