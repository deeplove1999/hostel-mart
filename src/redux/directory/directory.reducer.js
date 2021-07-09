const INTIAL_STATE = {
  sections: [
    {
      title: "Dairy / Eggs",
      imageUrl: "https://images.unsplash.com/photo-1572467485343-d94afd55ac8c",
      id: 1,
      linkUrl: "shop/dairy",
    },
    {
      title: "Fruits / Veges",
      imageUrl: "https://images.unsplash.com/photo-1575808142341-e39853744dbd",
      id: 2,
      linkUrl: "shop/fruits",
    },
    {
      title: "Snacks / Beverages",
      imageUrl: "https://images.unsplash.com/photo-1514178255089-603d3a35b24a",
      id: 3,
      linkUrl: "shop/snacks",
    },
    {
      title: "Bakery",
      imageUrl: "https://images.unsplash.com/photo-1605974323227-73fd2fff4adf",
      id: 4,
      linkUrl: "shop/bakery",
    },
    {
      title: "Packaged Food",
      imageUrl:
        "https://www.superhealthykids.com/wp-content/uploads/2018/01/healthy-packages-768x768.jpg",
      id: 5,
      linkUrl: "shop/packagedfood",
    },
  ],
};

const directoryReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
