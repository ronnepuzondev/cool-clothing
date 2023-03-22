import { Link, Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CoolLogo } from "../../assets/coolclothing_adobe_express.svg";
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)
  // console.log(currentUser)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CoolLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
                      <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <div>
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Navigation;
