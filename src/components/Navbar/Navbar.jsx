import { NavLink, Link } from "react-router-dom";
const Navbar = ()=> {
    return (
        <nav className="navbar  navbar-light bg-light ">
        <div className="container">
          <Link className="navbar-brand" to ="/">
            Grocery
          </Link>
          <ul className="navbar-nav float-">
            <div className="nav-items cart">
              <Link className="nav-link" to="/cart">
              cart
              </Link>
            </div>
            </ul>
              </div>
            </nav>
    )
}
export default  Navbar;