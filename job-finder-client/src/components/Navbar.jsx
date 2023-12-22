import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { path: "/", title: "Start a Search" },
    { path: "/my-jobs", title: "My Jobs" },
    { path: "/salary", title: "Salary Estinate" },
    { path: "/Post-job", title: "Post a Job" },
  ];
  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-black font-serif"
        >
          Job<span className="text-blue md:mt-5">Portal</span>
        </a>

        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* sign an dlogin button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/log-in" className="py-2 px-5 border rounded">
            Login In{" "}
          </Link>
          <Link
            to="/sign-up"
            className="bg-blue text-white py-2 px-5 border rounded"
          >
            Sign Up{" "}
          </Link>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block ">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-7 h-6 text-primary" />
            ) : (
              <FaBars className="w-7 h-5 text-primary" />
            )}
          </button>
        </div>
      </nav>
      {/* nav item for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}` }>
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col">
            {navItems.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1 ">
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {title}
                </NavLink>
              </li>
            ))}
            <li className="text-white py-1"><Link to="/log-in" >
            Login In{" "}
          </Link></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
