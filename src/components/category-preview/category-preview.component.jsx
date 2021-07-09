import React from "react";
import "./category-preview.styles.scss";
import CategoryItem from "../category-item/category-item.component";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, items, match, routeName }) => (
  <div className="category-preview">
    <Link className="title" to={`${match.url}/${routeName}`}>
      {title.toUpperCase()}
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CategoryPreview);
