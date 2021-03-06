import React from "react";
import "./menu-item.component.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  // console.log(match);
  console.log(linkUrl);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => {
        history.push(`${match.url}${linkUrl}`);
      }}
    >
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

export default withRouter(MenuItem);
