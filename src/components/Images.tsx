import React from "react";
import cartoon from "../assets/cartoon.jpg";
import eagle from "../assets/eagle.svg";

export default function Images(): JSX.Element {
  return (
    <div className="images">
      <img src={eagle} alt="eagle" />
      <img src={cartoon} alt="cartoon" />
    </div>
  );
}
