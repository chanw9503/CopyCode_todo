import React from 'react';
import { StyledDiv, StyledAnchor } from './style';

function Footer() {
  return (
    <StyledDiv>
      <StyledAnchor>개인정보방침</StyledAnchor>
      <StyledAnchor>서비스 이용약관</StyledAnchor>
      <StyledAnchor>환불 규정</StyledAnchor>
      <StyledAnchor>고객센터</StyledAnchor>
    </StyledDiv>
  );
}

export default Footer;
