import { NavLink, Link } from "react-router-dom";
import Navbar from "./NavbarMap";
import Auth from "../../utils/auth";

export default function Nav() {
  return (
    <Navbar
      links={[
        <NavLink key={1} className="nav-link" to="/">
          Home
        </NavLink>,

        Auth.loggedIn() ? (
          <>
            <NavLink key={2} className="nav-link" to="/about">
              About
            </NavLink>
            <Link key={3} onClick={Auth.logout} className="nav-link" to="/">
              Logout
            </Link>
          </>
        ) : (
          <>
            <NavLink key={4} className="nav-link" to="/results">
              Results
            </NavLink>
            <NavLink key={5} className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink key={6} className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink key={7} className="nav-link" to="/signup">
              Signup
            </NavLink>
          </>
        ),
      ]}
    />
  );
}
