import React from 'react';
import styled from 'styled-components';

function RightMarginbox({ margin, children }) {
  return <StyledDiv margin={margin}>{children}</StyledDiv>;
}

export default RightMarginbox;

const StyledDiv = styled.div`
  margin-right: ${(props) => props.margin}px;
`;
