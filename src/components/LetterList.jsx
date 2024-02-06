import styled from "styled-components";
import LetterCard from "./LetterCard";
import { useContext } from "react";
import { LetterContext } from "context/LetterContext";
import { MemberContext } from "context/MemberContext";

function LetterList() {
  const { activeMember } = useContext(MemberContext);
  const { letters } = useContext(LetterContext);
  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );
  return (
    <ListWrapper>
      {filteredLetters.length === 0 ? (
        <p>
          {activeMember}에게 남겨진 팬레터가 없습니다. 첫 번째 팬레터의 주인공이
          되보세요!
        </p>
      ) : (
        filteredLetters.map((letter) => (
          <LetterCard key={letter.id} letter={letter} />
        ))
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: black;
  gap: 20px;
  width: 500px;
  border-radius: 12px;
  padding: 12px;
  color: white;
`;

export default LetterList;
