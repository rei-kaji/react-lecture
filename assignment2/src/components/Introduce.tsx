import React from "react";

type Props = { title: string; body: string };

function Introduce({ title, body }: Props) {
  return (
    <div className="intro">
      <h2 className="intro-title">{title}</h2>
      <p className="intro-body">{body}</p>
    </div>
  );
}

export default Introduce;
