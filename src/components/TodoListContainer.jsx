import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; 
import { deleteTodo } from "../redux/modules/todos";
import { toggleTodo } from "../redux/modules/todos";
import styled from "styled-components";


const TodoListContainer = () => {

  const { todos } = useSelector((state) => state.todos); //모든 state를 불러오는데 나는 todos 모듈만 불러오겠다. 그 안에 todos 배열이 있음.
  
  const dispatch = useDispatch();
  // const params = useParams();
  const navigate = useNavigate();
  

  const onDeleteHandler = (id) => {
    dispatch( deleteTodo(id)); //todo.id를 payload로 보냄.
  };

  const onCompleteHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const move_to_detail = (todo) => {
    navigate(`/detail/${todo.id}`, {
      state:{
        id : todo.id,
        title: todo.title,
        content: todo.content,
      }
    })
  } 
 
 
  return (
    <StTodos>
      <StTodoContainer1>
      <h1>진행중...🕗</h1>
        <StTodo>
          {todos.map((todo) => {
            if(todo.isDone === false){
              return (
                <StEachTodo>
                  <STDetailBtn onClick={()=>move_to_detail(todo)}>상세보기</STDetailBtn>
                  <h2 key={todo.id}>{todo.title}</h2> 
                  <p key={todo.id}>{todo.content}</p>
                  <StBtnContainer>
                    <STButton key={todo.id} onClick={() => onDeleteHandler(todo.id)}>삭제하기</STButton>
                    <STButton key={todo.id} onClick={() => onCompleteHandler(todo.id)} >{todo.isDone ? "취소" : "완료"}</STButton>
                  </StBtnContainer>
                            
                  {/* <Link to="/detail" >상세보기</Link> */}
                  {/* <STButton key={todo.id} onClick={() => {navigate("/detail")}} > 상세보기 </STButton> */}
              </StEachTodo>
              );
            }
            else{
              return null
            }
          })}
        </StTodo>
      </StTodoContainer1>

      <StTodoContainer2>
      <h1>완료...🎉</h1>
        <StTodo>
          {todos.map((todo)=> {
            if(todo.isDone === true){
              return (
                <StEachTodo>
                  <STDetailBtn onClick={()=>move_to_detail(todo)}>상세보기</STDetailBtn>
                  <h2 key={todo.id}>{todo.title}</h2> 
                  <p key={todo.id}>{todo.content}</p>
                  <StBtnContainer>
                    <STButton onClick={() => onDeleteHandler(todo.id)}>삭제하기</STButton>  
                    {/* 화살표함수를 안쓰고 함수명()을 하면 onClick과 상관없이 바로 실행된다.
                    onClick={()=>{ 함수명() }}
                    onClick={함수명}*/}
                    <STButton key={todo.id} onClick={() => onCompleteHandler(todo.id)} >{todo.isDone ? "취소" : "완료"}</STButton> 
                  </StBtnContainer>
                           

                  {/* <STButton key={todo.id} onClick={() => {navigate("/detail")}}> 상세보기 </STButton> */}

              </StEachTodo>
              )
            }
            else{
              return null
            }
          })}
        </StTodo>
        </StTodoContainer2>

    </StTodos>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: auto;
  border: 1px solid white;
  /* justify-content: space-between; */
  margin : 0 auto;

`;

const StTodo = styled.div`
  /* border: 5px solid #f22b954f; */
  /* width: 100%; */
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 12px;
  margin: auto;
  padding: auto;
`;

const StTodoContainer1 = styled.div`
  border: 1px solid white;
  width: 45%;
  margin: 0 auto auto 0;
  padding: auto;
  /* display: grid; */
  
  /* flex-wrap: wrap; */
  /* width:80%; */

`;
const StTodoContainer2 = styled.div`
  border: 1px solid white;
  width: 45%;

  margin: 0 auto auto 0;
  padding: auto;
  /* display: grid; */
  display: inline-block;
  /* flex-wrap: wrap; */
  /* width:80%; */

`;

const StEachTodo = styled.div`
  border: 4px solid #cf8bd981;
  border-radius: 12px;
  overflow-y : auto;
  display : grid;
  width:220px;
  height:220px;
  margin: 10px;
  padding: 10px;
  
`;

const STDetailBtn = styled.button`
    border: 1px solid white;
    background-color: white;
    border-radius: 10px;
    padding: auto;
    cursor: pointer;
    text-decoration: underline;
    color :  #2f0327;
    opacity : 0.7;

`;
const StBtnContainer = styled.div`
  
`;

const STButton = styled.button`
    /* display: flex; */
    border: 1px solid whitesmoke;
    background-color: #d3337362;
    border-radius: 10px;
    padding: auto;
    cursor: pointer;
    /* color :  #c54cc5; */
    opacity : 0.7;
    margin: 2%;
    padding: 5px;
    width:90px;
    position: relative;
    bottom:1px

`;