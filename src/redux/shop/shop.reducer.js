import Shop_Data from "./shop.data";

const INITIAL_STATE = {
  categories: Shop_Data,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default shopReducer;
