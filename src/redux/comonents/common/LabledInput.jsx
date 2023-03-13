import React from 'react';
import styled from 'styled-components';

function LabledInput({ id, label, placeholder, value, onChange }) {
  return (
    <>
      <Styledlabel htmlFor={id}>{label}</Styledlabel>
      <StyledInput id={id} placeholder={placeholder} value={value} onChange={onChange} />
    </>
  );
}

export default LabledInput;

const StyledInput = styled.input`
  height: 30px;
  width: 230px;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;
`;

//label : input의 이름을 적는 태그.
//label->htmlFor 메서드 : input 태그의 아이디나 네임을 적어 input과 연결
//이렇게 하면 사용자가 label을 클릭할 때 해당 input 요소가 포커스되도록 할 수 있다.
// 따라서 'htmlFor'는 input 요소와 묶어 사용될 때 가독성과 접근성을 향상시키는데 도움이 된다.

const Styledlabel = styled.label`
  margin-right: 10px;
  font-weight: 700;
`;
