import styled from "styled-components";

export const StyledComponent = () => {
  return (
    <>
      <SContainer>
        <STitle>- Styled Component -</STitle>
        <SButton>Fight!</SButton>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  width: 80%;
  margin: 24px auto;
  border-radius: 8px;
  border: 1px solid blue;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 10px;
`;

const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;

const SButton = styled.button`
  border: none;
  color: #fff;
  background-color: #abedd8;
  border-radius: 8px;
  padding: 8px;
  &:hover {
    transition: 2s;
    color: #333;
    background-color: #46cdcf;
    cursor: pointer;
  }
`;
