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

  const move = (todo) => {
    navigate("/detail", {
      state:{
        id : todo.id,
        title: todo.title,
        content: todo.content,
      }
    })
  } 
 
 
  return (
    <StTodos>
      <div>
      <h1>진행중...</h1>
        <div>
          {todos.map((todo) => {
            if(todo.isDone === false){
              return (
                <div>
                  <h2 key={todo.id}>{todo.title}</h2> 
                  <p key={todo.id}>{todo.content}</p>
                  <button key={todo.id} onClick={() => onDeleteHandler(todo.id)}>삭제하기</button>
                  <button key={todo.id} onClick={() => onCompleteHandler(todo.id)} >{todo.isDone ? "취소" : "완료"}</button>          
                  <button onClick={()=>move(todo)}>상세보기</button>
                  {/* <Link to="/detail" >상세보기</Link> */}
                  {/* <button key={todo.id} onClick={() => {navigate("/detail")}} > 상세보기 </button> */}
              </div>
              );
            }
            else{
              return null
            }
          })}
        </div>
      </div>

      <div>
      <h1>완료🎉</h1>
        <div>
          {todos.map((todo)=> {
            if(todo.isDone === true){
              return (
                <div>
                  <h2 key={todo.id}>{todo.title}</h2> 
                  <p key={todo.id}>{todo.content}</p>
                  <button onClick={() => onDeleteHandler(todo.id)}>삭제하기</button>  
                  {/* 화살표함수를 안쓰고 함수명()을 하면 onClick과 상관없이 바로 실행된다.
                  onClick={()=>{ 함수명() }}
                  onClick={함수명}*/}
                  <button key={todo.id} onClick={() => onCompleteHandler(todo.id)} >{todo.isDone ? "취소" : "완료"}</button>          
                  <button onClick={()=>move(todo)}>상세보기</button>

                  {/* <button key={todo.id} onClick={() => {navigate("/detail")}}> 상세보기 </button> */}

              </div>
              )
            }
            else{
              return null
            }
          })}
        </div>
        </div>

    </StTodos>
  );
};

export default TodoListContainer;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;
// const StTodo = styled.div`
//   border: 1px solid #ddd;
//   width: 20%;
//   height: 100px;
//   display: flex;
//   align-items: center;
//   padding: 0 24px;
//   border-radius: 12px;
// `;