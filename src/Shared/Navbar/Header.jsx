import React, { useContext, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import UserContext from "../../Contexts/Context";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, singoutUser } = useContext(UserContext);


  const handleLogOut = () => {
    singoutUser()
        .then()
        .catch();
}
  const li = (
    <>
      <li>
        <Link
          to=""
          aria-label="Our product"
          title="Our product"
          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/blog"
          aria-label="About us"
          title="About us"
          className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
        >
          Blog
        </Link>
      </li>
      {user ? (
        <>
          <li>
            <Link
              to="/orders"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            >
              Oders
            </Link>
          </li>
          <li>
            <button
              className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
              onClick={handleLogOut}
            >
              Sing Out
            </button>
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {li}
            </ul>
          </div>
          <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} alt="" className="h-14" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{li}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to=""
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-red-500 text-white   hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Sign up"
            title="Sign up"
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
