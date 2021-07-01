import React from "react";
import Shop_Data from "./shop.data";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import "./shop.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: Shop_Data,
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <div className="ShopPage">
        {categories.map(({ id, ...otherCategoryProps }) => (
          <CategoryPreview key={id} {...otherCategoryProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
