import React from "react";
import TodoListContainer from "./components/TodoListContainer";
import Header from "./components/Header";
import AddForm from "./components/AddForm";

import styled from "styled-components";

const App = () => {
  return (
    <StContainer>
      <Header/>
      <AddForm />
      <TodoListContainer />
    </StContainer>
  );
};

export default App;

const StContainer = styled.section` //section은 보통 제목 같은 요소
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
