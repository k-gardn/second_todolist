import React from "react";
import styled from "styled-components";

function Header() {
    return (
      <Title>
        <p>My Todo List</p>
        <p>REACT</p>
      </Title>
    )
}
export default Header


const Title = styled.div`
        align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
`;