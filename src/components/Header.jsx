import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

function Header({ activeMember, setActiveMember }) {
  return (
    <Container>
      <Title>에스파 팬레터함</Title>
      <Tabs
        activeMember={activeMember}
        setActiveMember={setActiveMember}
      ></Tabs>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: lightgray;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: yellow;
  flex: 1;
  display: flex;
  align-items: center;
`;

export default Header;
