import React, { useState, useRef } from "react";
import { useDispatch/**, useSelector**/ } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const AddForm = () => {
  
  const [title, setTitle] = useState("");
  const [content, setContent] =useState("");
  // const [id, setId] =useState("");

  // const [isDone, setIsDone] =useState("");

  // const todos = useSelector((state) => state.todos.todos); //todos모듈의 todos 객체
  const dispatch = useDispatch();
  const nextId = useRef(3)

  const onSubmitHandler = (e) => {
    e.preventDefault(); //form의 기능 중 submit을 하면 자동으로 페이지를 리랜더링하는데 이걸 하면 정보가 다 날아가기 때문에 이를 방지
    if (title === "" || content === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({   //'todo를 추가해라'라는 명령(액션객체)을 리듀서(todos)로 보낸다.
        id: nextId.current, // id = 3
        title: title,
        content: content,
        isDone: false,
      },)  
           //payload를 객체의 형태로 보냄.
    );
    nextId.current++ 
    setTitle("") //추가하기 누른 후 iput안을 빈칸으로 만든다.
    setContent("")
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>제목</label>
         {/* 인풋창을 빈칸으로 두고 submit을 했을 시 id가 모두 0으로 출력되어 삭제/업데이트 시 한꺼번에 이벤트가 일어나는 오류 발생 */}
      {/* 유저가 인풋창에 값을 필수로 넣고 진행할 수 있게 required 속성 추가 */}
        <StInput
          type="text"
          value={title} // value값을 넣어주는 이유는 setTitle을사용해서 title 값이 바뀌었을 때  input에 있는 값이 바뀌게 하려면 value={title}과 같이 넣어주는 것이 중요. '추가하기' 후에 초기화 할때 필요하다.
          onChange={(e) => {
            setTitle(e.target.value); //입력한 값으로 title 값을 바꿔줌.
          }}
          required
        />
        <label>내용</label>
        <StInput
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          required
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;