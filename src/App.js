import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./childarea";
import { CssModules } from "./components/cssModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponent } from "./components/StyledComponent";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [showFlg, setShowFlg] = useState(true);

  const onChange = (e) => setText(e.target.value);

  const onClickShow = () => setShowFlg(!showFlg);
  const onClickClose = useCallback(() => setShowFlg(false), [showFlg]);

  return (
    <div className="App">
      <input value={text} onChange={onChange} />
      <br />
      <button onClick={onClickShow}>表示</button>
      <ChildArea showFlg={showFlg} onClickClose={onClickClose} />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponent />
      <Emotion />
    </div>
  );
}
