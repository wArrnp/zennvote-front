import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.p`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding-bottom:53px;
  text-align : center;
  font-weight: 500;
  color: #848484;
`;

const Footer = () => {
  return (
    <FooterWrapper>ⓒ xxshiftxx. All Rights Reserved.</FooterWrapper>
  );
};

export default Footer;