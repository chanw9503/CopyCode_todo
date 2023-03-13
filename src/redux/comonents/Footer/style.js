import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #e8ffee; //배경색깔
  padding: 20px; //네 방향 안쪽 여백 20px 넣기
  display: flex; // 요소의 내부와 외부 디스플레이 유형을 설정
  justify-content: space-between; //기본축과 그리드 컨테이너의 인라인 축에 따라 콘텐
`;

const StyledAnchor = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
`;

export { StyledDiv, StyledAnchor };
