import React from "react";
// import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch/**, useSelector**/ } from "react-redux";
// import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";

const DetailTodo = () => {

    // const { todos } = useSelector((state) => state.todos);
    
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const id = location.state.id;
    const title = location.state.title;
    const content = location.state.content;

    return(
        <StDetail>
            <div>
                <StIdcontainer>
                    <div>ID : {id}</div>
                    <StBackbtn onClick={() => {navigate("/")}}>이전으로</StBackbtn>
                </StIdcontainer>
            <h2 >{title}</h2> 
            <p>{content}</p>
        
            </div>
                
            
        </StDetail>
    );
};
export default DetailTodo;

const StDetail = styled.div`
  max-width: 500px;
  min-width: 300px;
  margin: 10% auto;
  padding: 20px 30px;
    border : 3px solid #8FCBDE;
    border-radius: 10px;

  /* display: flex; */
  float:center;
  gap: 12px;
  flex-wrap: wrap;
  /* text-align: center; */
`; 

const StIdcontainer = styled.div`
     /* font-size: 1em; */
    display: flex;
    justify-content: space-between;
`;

const StBackbtn = styled.button`
  border: 1px solid white;
  font-size: 1em;
    background-color: white;
    border-radius: 10px;
    padding: auto;
    cursor: pointer;
    text-decoration: underline;
    color :  #2f0327;
    opacity : 0.7;

`;
