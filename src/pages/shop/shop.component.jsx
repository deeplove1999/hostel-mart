import React from "react";
import "./shop.styles.scss";
import CategoryOverview from "../../components/category-overview/category-overview.component";
import { Route } from "react-router-dom";
import CategoryPage from "../category/category.component";

const ShopPage = ({ match }) => (
  <div className="ShopPage">
    <Route exact path={`${match.path}`} component={CategoryOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

export default ShopPage;
