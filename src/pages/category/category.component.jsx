import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../redux/shop/shop.selectors";
import "./category.styles.scss";

import CategoryItem from "../../components/category-item/category-item.component";

const CategoryPage = ({ category }) => {
  const { title, items } = category;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryPage);
