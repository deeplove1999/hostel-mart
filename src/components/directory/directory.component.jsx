import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Dairy / Eggs",
          imageUrl:
            "https://images.unsplash.com/photo-1572467485343-d94afd55ac8c",
          id: 1,
          linkUrl: "dairy",
        },
        {
          title: "Fruits / Veges",
          imageUrl:
            "https://images.unsplash.com/photo-1575808142341-e39853744dbd",
          id: 2,
          linkUrl: "",
        },
        {
          title: "Snacks / Beverages",
          imageUrl:
            "https://images.unsplash.com/photo-1514178255089-603d3a35b24a",
          id: 3,
          linkUrl: "",
        },
        {
          title: "Bakery",
          imageUrl:
            "https://images.unsplash.com/photo-1605974323227-73fd2fff4adf",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Packaged Food",
          imageUrl:
            "https://www.superhealthykids.com/wp-content/uploads/2018/01/healthy-packages-768x768.jpg",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
