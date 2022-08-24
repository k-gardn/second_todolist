import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { useDispatch/**, useSelector**/ } from "react-redux";
// import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const DetailTodo = () => {

    // const { todos } = useSelector((state) => state.todos);
    
    const navigate = useNavigate();
    const location = useLocation();

    const id = location.state.id;
    const title = location.state.title;
    const content = location.state.content;

    return(
        <StDetail>
            <div>
            <div>ID : {id}</div>
            <button onClick={() => {navigate("/")}}>이전으로</button>
            <h2 >{title}</h2> 
            <p>{content}</p>
        
            </div>
                
            
        </StDetail>
    );
};
export default DetailTodo;

const StDetail = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  /* text-align: center; */
`; 

