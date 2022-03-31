/** @jsxRuntime classic  */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    width: 80%;
    margin: 24px auto;
    border-radius: 8px;
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 12px 10px;
  `;

  const TitleStile = css({
    margin: "0",
    color: "#3d84a8"
  });

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

  return (
    <div css={containerStyle}>
      <p css={TitleStile}>- Emotion -</p>
      <SButton>Fight!</SButton>
    </div>
  );
};
