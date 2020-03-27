import styled from 'styled-components';

interface EmailInputButtonProps {
  isNext: boolean
}

export const EmailInputWrapper = styled.div`
  width: 670px;
  padding-top: 36px;
  padding-bottom: 30px;
  margin: 0 auto;
`

export const EmailInputTitle = styled.p`
  margin: 0;
  color: #333;
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 20px;
`
export const EmailInputDescription = styled.p`
  margin-top: 0;
  margin-bottom: 30px;
  color: #bdbdbd;
  font-size: 16px;
`

export const EmailInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 25px;
  font-size: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  out-line:none;
  background-color: white;
  box-sizing: border-box;
`

export const EmailInputButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const EmailInputButton = styled.button`
  width: 48%;
  height: 50px;
  cursor: pointer;
  background-color: ${(props: EmailInputButtonProps) => props.isNext ? "#333": "white"};
  color: ${(props: EmailInputButtonProps) => props.isNext ? 'white': "#333"};
  border: ${(props: EmailInputButtonProps) => props.isNext ? 'none': '1px solid #333'};
  font-size: 16px;
`