import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services/authorize";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pb-3">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        {getUser() && (
          <li className="nav-item pr-3 pb-3">
            <Link to="/create" className="nav-link">
            Write the article
            </Link>
          </li>
        )}
        {!getUser() && (
          <li className="nav-item pr-3 pb-3">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        )}
        {getUser() && (
          <li className="nav-item ms-auto">
            <button
              type="button"
              className="nav-link text-danger"
              onClick={() => logout(() => navigate("/"))}
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
