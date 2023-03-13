import React from 'react';
import { StlyedHeader, StyledP } from './style';

/**
 * 컴포넌트 개요 : 앱 전체에서 Header의 역할을 하는 영역
 * 2023.03.13 : 최초작성
 */

function Header() {
  return (
    <StlyedHeader>
      <StyledP>Sparta Coding Club</StyledP>
      <StyledP>TODO APP</StyledP>
    </StlyedHeader>
  );
}

export default Header;
