import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const listItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/allspots">Tourist Spots</NavLink>
      </li>
      <li>
        <NavLink to="/addspots">Add Tourist Spots</NavLink>
      </li>
      <li>
        <NavLink to="/mylist">My List</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-xl">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listItems}
          </ul>
        </div>
        <img
          src="https://i.ibb.co/3Ck1PVz/weblogo.png"
          className="h-10 w-10"
          alt=""
        />
        <a className="btn btn-ghost text-xl">Explore Asia</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{listItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="text-5xl mr-4">
          <input
            type="checkbox"
            onChange={handleTheme}
            className="toggle flex items-center theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
        </div>
        {user ? (
          <div className="flex gap-3">
            <a className="my-anchor-element">
              <img
                alt="Tailwind CSS Navbar component"
                className="w-12 h-12 rounded-full"
                src={
                  user?.photoURL ||
                  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </a>

            <Tooltip
              anchorSelect=".my-anchor-element"
              place="top"
              className="bg-purple p-4"
            >
              {user.displayName}
            </Tooltip>
            <button className="btn btn-secondary" onClick={handleSignOut}>
              Sign Out{" "}
            </button>
          </div>
        ) : (
          <div className=" flex gap-1">
            <Link to="/signin" className="btn btn-secondary">
              Login{" "}
            </Link>

            <Link to="signup" className="btn btn-accent">
              Register{" "}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
