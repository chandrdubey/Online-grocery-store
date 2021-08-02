import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <nav className="navbar  navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Grocery
        </Link>
        <ul className="navbar-nav float-">
          <div className="nav-items cart">
            <Link className="nav-link" to="/cart">
              {props.cart.length}
              <i className="bi bi-cart-fill"></i>Cart
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  );
};
const mapStateToProps = ({ cart }) => {
  return {
    cart,
  };
};
export default connect(mapStateToProps)(Navbar);
