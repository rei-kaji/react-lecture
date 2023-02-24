import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <div className="header-contents">
        <h1>Laura Smith</h1>
        <h4>Frontend Developer</h4>
        <a href="#">laurasmith.website</a>
      </div>
    </header>
  );
}

export default Header;
