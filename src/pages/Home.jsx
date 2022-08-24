import React from "react";
import TodoListContainer from "../components/TodoListContainer";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import styled from "styled-components";
// import Router from "./shared/Router"

// import {Routes, Route} from "react-router-dom";
// import DetailTodo from "../components/DetailTodo";

const Home = () => {
  return (
    
    <StContainer>
      {/* <Router /> */}
      <Header/>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default Home;

const StContainer = styled.section` //section은 보통 제목 같은 요소
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
