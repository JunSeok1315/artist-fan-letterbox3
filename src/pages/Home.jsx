import AddForm from "components/AddForm";
import Header from "components/Header";
import LetterList from "components/LetterList";
import React, { useState } from "react";
import styled from "styled-components";

function Home({ letters, setLetters }) {
  const [activeMember, setActiveMember] = useState("카리나");
  return (
    <Container>
      <Header
        activeMember={activeMember}
        setActiveMember={setActiveMember}
      ></Header>
      <AddForm setLetters={setLetters}></AddForm>
      <LetterList letters={letters} activeMember={activeMember}></LetterList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
