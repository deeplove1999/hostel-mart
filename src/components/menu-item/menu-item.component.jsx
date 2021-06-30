import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => (
  <div className="menu-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-img"
    />
    <div className="menu-title">{title}</div>
  </div>
);

export default MenuItem;
