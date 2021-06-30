import React from "react";
import "./homepage.styles.scss";
const Homepage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="menu-img">
          <img
            src="https://images.unsplash.com/photo-1572467485343-d94afd55ac8c"
            alt="dairy"
          ></img>
        </div>
        <div className="menu-title">
          Dairy &nbsp; <span className="title-style"> / </span> &nbsp; Eggs
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-img">
          <img
            src="https://images.unsplash.com/photo-1575808142341-e39853744dbd"
            alt="dairy"
          ></img>
        </div>
        <div className="menu-title">
          Fruits &nbsp; <span className="title-style"> / </span> &nbsp; Veges
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-img">
          <img
            src="https://images.unsplash.com/photo-1514178255089-603d3a35b24a"
            alt="dairy"
          ></img>
        </div>
        <div className="menu-title">
          Snacks &nbsp; <span className="title-style"> / </span> &nbsp;
          Beverages
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-img">
          <img
            src="https://images.unsplash.com/photo-1605974323227-73fd2fff4adf"
            alt="dairy"
          ></img>
        </div>
        <div className="menu-title">Bakery</div>
      </div>
      <div className="menu-item">
        <div className="menu-img">
          <img
            src="https://www.superhealthykids.com/wp-content/uploads/2018/01/healthy-packages-768x768.jpg"
            alt="dairy"
          ></img>
        </div>
        <div className="menu-title">Packaged Food</div>
      </div>
    </div>
  </div>
);

export default Homepage;
