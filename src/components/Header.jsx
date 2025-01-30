import React, { useState } from "react";
import { LOGO_URL } from "../utils/url";
import { Link } from "react-router"; 

const Header = () => {
  const [BtnName, setBtnName] = useState("Login");

  const loginHandler = () => {
    BtnName === "Login" ? setBtnName("Log Out") : setBtnName("Login");
  };

  return (
    <div className="nav_bar flex justify-between items-center p-4 bg-swiggy-gradient rounded-sm shadow-xl">
      {/* Logo Section */}
      <div className="nav_logo w-28">
        <img id="logo" src={LOGO_URL} alt="logo" className="w-full" />
      </div>

      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white">
          <u>Food Panda: Food delivered timely</u>⏳
        </h2>
      </div>

      {/* Navigation Section */}
      <div className="nav_button-container flex items-center space-x-6">
        <ul className="flex list-none space-x-6 text-white text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-swiggyYellow transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-swiggyYellow transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-swiggyYellow transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-swiggyYellow transition-colors duration-200"
            >
              Cart
            </Link>
          </li>
        </ul>

        {/* Login/Logout Button */}
        <button
          className="bg-swiggyOrange text-white text-sm py-2 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 w-24"
          id="login-btn"
          onClick={loginHandler}
        >
          {BtnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
