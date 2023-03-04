import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

const Navigation = () => {
  const { logout, currentUser } = useAuth();
  const [isChecked, changeCheck] = useState(false);
  const navigate = useNavigate();

  const uncheck = () => {
    changeCheck(!isChecked);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {}

    changeCheck(!isChecked);
  };

  return (
    <div className="navigation">
      <input
        onChange={uncheck}
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={isChecked}
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink onClick={uncheck} to="/" className="navigation__link">
              Home
            </NavLink>
          </li>
          {!currentUser && (
            <div>
              <li className="navigation__item">
                <NavLink
                  onClick={uncheck}
                  to="signup"
                  className="navigation__link"
                >
                  SignUp
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  onClick={uncheck}
                  to="login"
                  className="navigation__link"
                >
                  LogIn
                </NavLink>
              </li>
            </div>
          )}
          {currentUser && (
            <div>
              <li className="navigation__item">
                <NavLink
                  onClick={uncheck}
                  to="create"
                  className="navigation__link"
                >
                  Create Ad
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  onClick={uncheck}
                  to="myads"
                  className="navigation__link"
                >
                  My Ads
                </NavLink>
              </li>
              <li className="navigation__item">
                <NavLink
                  onClick={uncheck}
                  to="myprofile"
                  className="navigation__link"
                >
                  My Profile
                </NavLink>
              </li>
              <li className="navigation__item">
                <Link onClick={handleLogout} className="navigation__link">
                  LogOut
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
