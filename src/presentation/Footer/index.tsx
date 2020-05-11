import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.p`
  width: 100%;
  padding-bottom:20px;
  text-align : center;
  font-weight: 500;
  color: #848484;
`;

const Footer = () => {
  return (
    <FooterWrapper>ⓒ xxshiftxx & gtobio11. All Rights Reserved.</FooterWrapper>
  );
};

export default Footer;