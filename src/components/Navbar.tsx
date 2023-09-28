import argentBankLogo from "../assets/argentBankLogo.png";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deconnectUser, selectUser } from "../stores/User.stores";
// import { useState } from "react";

export const Navbar = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(deconnectUser());
  };
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
          {userData.firstName == "" ? (
            <Link className="main-nav-item" to="/sign_in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          ) : (
            <>
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle"></i>
                {userData.firstName}
              </Link>
              <Link
                className="main-nav-item"
                to="/sign_in"
                onClick={() => handleLogout()}
              >
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
};
