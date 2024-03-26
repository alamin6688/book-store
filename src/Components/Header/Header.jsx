import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  const links = (
    <>
      <li className="text-[18px]">
          <NavLink to="/">
          Home
          </NavLink>
      </li>
      <li className="text-[18px]">
        <NavLink to="/listedBooks">
          Listed Books
        </NavLink>
      </li>
      <li className="text-[18px]">
        <NavLink to="/pagesToRead">
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 mt-4 mb-12 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn pl-0 btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl pl-0 md:text-3xl font-bold">Book Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-green-400 mr-3 text-white hover:bg-green-600">
            Sign In
          </a>
          <a className="btn bg-blue-400 text-white hover:bg-blue-600">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
