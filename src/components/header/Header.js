import React from "react";

import img from "../../assets/img.jpg";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <img className="img" src={img} alt="" />
      <h1 className="title">HangMan</h1>
      <h2 className="subtitle">Find the hidden word</h2>
    </header>
  );
};

export default Header;
