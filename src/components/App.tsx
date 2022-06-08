import React, { ChangeEvent, useState } from "react";

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
    <div>
      <label htmlFor="input" style={{ fontSize: 44, color: "rosybrown" }}>
        Check if working!
      </label>
      <input id="input" type="text" value={text} onChange={handleChange} />
      <p style={{ fontSize: 34, color }}>{text}</p>
    </div>
  );
}
