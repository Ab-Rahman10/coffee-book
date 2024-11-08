import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:w-11/12 md:mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-xl w-28 z-[1] mt-3 p-2 shadow"
          >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Coffees">Coffees</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </div>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Coffee Book
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <div className="menu menu-horizontal px-1 gap-6 font-semibold">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Coffees">Coffees</NavLink>
          <NavLink to="/Dashboard">Dashboard</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
