import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo-01.png";
import { HiShoppingCart, HiSearch } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDashboard from "../User/UserDashboard";
import { loadUser } from "../features/user/userSlice";
import "../componentStyles/Navbar.css";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadUser());
    }
  }, [dispatch, isAuthenticated]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim()) {
      navigate(`/shop?keyword=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate(`/shop`);
    }

    setSearchQuery("");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          {/* Menu */}
          <ul className="navbar-nav mx-auto nav-links">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="nav-icons">
            {/* Search */}
            <form
              className={`search-form ${isSearchOpen ? "active" : ""}`}
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button type="button" onClick={toggleSearch}>
                <HiSearch />
              </button>
            </form>

            {/* Cart */}
            <Link to="/cart" className="cart-icon">
              <HiShoppingCart />

              <span className="cart-badge">{cartItems.length}</span>
            </Link>

            {/* User */}
            {isAuthenticated && <UserDashboard user={user} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
