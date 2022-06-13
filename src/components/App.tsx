import React, { ChangeEvent, useState } from "react";
import Images from "./Images";

export default function App(): JSX.Element {
  const colors = ["red", "yellow", "orange", "pink", "green"];
  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];
  const [text, setText] = useState("");
  const [color, setColor] = useState(getRandomColor());

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setText(target.value);
    setColor(getRandomColor());
  };
  return (
    <div className="app">
      <label htmlFor="input">Check if working!</label>
      <input id="input" type="text" value={text} onChange={handleChange} />
      <p style={{ color }}>{text}</p>
      <Images />
    </div>
  );
}
