import React from "react";
import "./category-overview.styles.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CategoryPreview from "../category-preview/category-preview.component";
import { selectCategoriesForPreview } from "../../redux/shop/shop.selectors";

const CategoryOverview = ({ categories }) => (
  <div className="category-overview">
    {categories.map(({ id, ...otherCategoryProps }) => (
      <CategoryPreview key={id} {...otherCategoryProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesForPreview,
});

export default connect(mapStateToProps)(CategoryOverview);
