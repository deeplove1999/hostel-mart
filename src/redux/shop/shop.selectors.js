import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const selectShop = state => state.shop;

export const selectCategories = createSelector(
  [selectShop],
  shop => shop.categories
);

export const selectCategoriesForPreview = createSelector(
  [selectCategories],
  categories => Object.keys(categories).map(key => categories[key])
);

export const selectCategory = memoize(categoryUrlParam =>
  createSelector([selectCategories], categories => categories[categoryUrlParam])
);
