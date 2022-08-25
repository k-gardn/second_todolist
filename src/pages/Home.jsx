import React from "react";
import TodoListContainer from "../components/TodoListContainer";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import styled from "styled-components";

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
  height: max-content;
  margin: 0 auto;
  padding: 10px;
  border: 2px solid #9a6df336;
  border-radius: 5px;


`;
