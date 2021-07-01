import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl, match }) => (
  <div className="menu-item">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="menu-img"
    />
    <div className="menu-title">
      <Link className="title-link" to={`${match.url}${linkUrl}`}>
        {title}
      </Link>
    </div>
  </div>
);

export default withRouter(MenuItem);
