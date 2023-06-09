import React, { useState } from 'react';
import HeightBox from '../common/HeightBox';
import LabledInput from '../common/LabledInput';
import RightMarginbox from '../common/RightMarginbox';
import { StyledDiv, FlexDiv, StyledButton } from './style';
import useInput from '../../../hook/useInput';
import { useDispatch, useSelector } from 'react-redux';

/**
 * 컴포넌트 개요 : Todo 메인 페이지에서 제목과 내용을 입력하는 영역
 * 2023.03.13
 *
 * @returns Input 컴포넌트
 */

function Input() {
  //input의 변경을 감지하는 custom hook 함수
  const [title, onChangeTitleHandler] = useInput();
  const [contents, onChangeContetnHandler] = useInput();
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  //에러 메시지 발생 함수
  const getErrorMsg = (errorCode, params) => {
    switch (errorCode) {
      case '01':
        return alert(
          `[필수 입력 값 검증 실패 안내]\n\n제목과 내용은 모두 입력돼야 합니다. 입력값을 확인해주세요.\n입력된 값(제목 : '${params.title}', 내용 : '${params.contents}')`
        );
      case '02':
        return alert(
          `[내용 중복 안내]\n\n입력하신 제목('${params.title}')및 내용('${params.contents}')과 일치하는 TODO는 이미 TODO LIST에 등록되어 있습니다.\n기 등록한 TODO ITEM의 수정을 원하시면 해당 아이템의 [상세보기]-[수정]을 이용해주세요.`
        );
      default:
        return `시스템 내부 오류가 발생하였습니다. 고객센터로 연락주세요.`;
    }
  };

  //form 태그 내부에서의 submit이 실행된 경우 호출되는 함수
  const handlerSubmitButtonClick = (event) => {
    //submit의 고유 기능인, 새로고침(refresh)을 막아주는 역할
    event.preventDefault();

    // 제목과 내용이 모두 존재해야만 정상처리(하나라도 없는 경우 오류 발생)
    // "01" : 필수 입력값 검증 실패 안내
    if (!title || !contents) {
      return getErrorMsg('01', { title, contents });
    }

    // 이미 존재하는 todo 항목이면 오류
    const validationArr = todos.filter(
      (item) => item.title === title && item.contents === contents
    );

    // "02" : 내용 중복 안내
    if (validationArr.length > 0) {
      return getErrorMsg('02', { title, contents });
    }
  };

  return (
    <StyledDiv>
      <form onSubmit={handlerSubmitButtonClick}>
        <FlexDiv>
          <RightMarginbox margin={10}>
            <LabledInput
              id="title"
              label="제목"
              placeholder="제목을 입력해주세요."
              onChange={onChangeTitleHandler}
              value={title}
            />
            <HeightBox height={10} />
            <LabledInput
              id="contents"
              label="내용"
              placeholder="내용을 입력해주세요."
              onChange={onChangeContetnHandler}
              value={contents}
            />
          </RightMarginbox>
          <StyledButton type="submit">제출</StyledButton>
        </FlexDiv>
      </form>
    </StyledDiv>
  );
}

export default Input;
