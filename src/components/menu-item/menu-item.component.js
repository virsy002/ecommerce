import React from "react";
import "./menu-item.component.scss";

function MenuItem({ title, imageUrl, size }) {
  console.log(size);
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle"></span>
      </div>
    </div>
  );
}

export default MenuItem;
