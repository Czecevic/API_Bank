import argentBankLogo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
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
        <Link className="main-nav-item" to="/sign_in">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
};
