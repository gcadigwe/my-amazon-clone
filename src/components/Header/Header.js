import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { auth } from "../../firebase/firebase";

function Header() {
  const history = useHistory();
  const { basket } = useSelector((state) => ({ ...state }));

  const handleAuth = () => {
    if (basket.user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <img
        onClick={() => history.push("/")}
        className="header__logo"
        alt="amazon logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!basket.user && "/login"} onClick={handleAuth}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>

            <span className="header__optionLineTwo">
              {basket.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>

          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>

          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__shoppingBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket && basket.basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
