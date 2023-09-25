import argentBankLogo from "../assets/argentBankLogo.png";
import { Link, Outlet, useLocation } from "react-router-dom";
// import { useState } from "react";

export const Navbar = () => {
  const location = useLocation().pathname
  console.log(location)
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="main_nav_logo"
          />
          <h1 className="sr-only">Argent bank</h1>
        </Link>
        <div>
          {
            location !== "/sign_in" || location !== "/" ?
              
          }
          <Link className="main-nav-item" to="/sign_in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
