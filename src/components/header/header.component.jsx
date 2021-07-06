import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="brand" to="/">
      Hostel <span className="brand-span">Mart</span>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  // we here get data from root reducer of particular reducer
  currentUser: state.user.currentUser, // this we get as a prop to be passed to header component via connect h.o.function
});

export default connect(mapStateToProps)(Header);
