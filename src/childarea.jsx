import React from "react";
import { memo } from "react";

export const ChildArea = memo((props) => {
  const { showFlg, onClickClose } = props;

  const style = {
    width: "100%",
    background: "khaki",
    height: "100px",
    padding: "50px 0"
  };

  return (
    <>
      {showFlg ? (
        <div style={style}>
          <p>個コーポんねんと</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
