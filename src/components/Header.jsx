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
    align-items: center; //div안에서 글자가 중앙에 수직방향으로 중앙에 위치함.
    border: 1px solid white;
    background-color: #501bbb21;
    border-radius: 5px;

    display: flex; //위아래로 있던 두 개의 p태그가 양옆으로 바뀜.
    height: 50px;
    justify-content: space-between; // 없으면 둘 사이가 붙어버림.
    padding: 0 20px;
`;