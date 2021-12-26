import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { NAV_LINKS } from "../AppConstants";

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const handleNav = () => {
    setNavbarToggle(!navbarToggle);
  };
  return (
    <header>
      <div
        className={classNames("menu-btn", {
          close: navbarToggle,
        })}
        onClick={handleNav}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <nav
        className={classNames("menu", {
          show: navbarToggle,
        })}
      >
        <div
          className={classNames("menu-branding", {
            show: navbarToggle,
          })}
        >
          <div className="portrait"></div>
        </div>
        <ul
          className={classNames("menu-nav", {
            show: navbarToggle,
          })}
        >
          {NAV_LINKS.map(({ link, label }, index) => (
            <li
              className={classNames("nav-item", {
                show: navbarToggle,
                current: !index,
              })}
              onClick={handleNav}
            >
              <Link to={link} className="nav-link">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
