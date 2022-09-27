import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth.context";

const Navbar = () => {
  const { state, authLogout } = useContext(AuthContext);

  return (
    <header className="text-gray-600 body-font">
      <div className="container justify-between mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to={-1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-neutral-700 font-medium">SBSC</span>
        </NavLink>

        {state.token && (
          <button
            onClick={() => {
              authLogout();
            }}
            className="inline-flex items-center text-white bg-gray-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-800 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
