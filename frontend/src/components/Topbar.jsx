import "../componentStyles/Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      
      {/* Left message */}
      <div className="topbar-left">
        <p>Free Shipping for standard order over $100</p>
      </div>

      {/* Right links */}
      <div className="topbar-right">
        <ul>
          <li><a href="#">Help & FAQs</a></li>
          <li><a href="#">EN</a></li>
          <li><a href="#">USD</a></li>
          <li><Link to="/register">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>

    </div>
  );
};

export default Topbar;