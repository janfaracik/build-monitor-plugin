import { CSSProperties } from "react";

function Label({ text, style = {} }: { text: string; style?: CSSProperties }) {
  return <span style={{ position: "relative", ...style }}>{text}</span>;
}

export default Label;
