import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  MdGroup,
  MdLogout,
  MdOutlineFilterVintage,
  MdOutlineQuestionMark,
  MdPieChart,
} from "react-icons/md";

const AsideMenu = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [activeLink] = useState(window.location.pathname);

  return (
    <aside
      id="sidebar"
      className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
      aria-label="Sidebar"
    >
      <div className="custom--bg relative flex-1 flex flex-col min-h-0 border-r pt-0">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="custom--bg flex-1 px-3 divide-y space-y-1">
            <ul className="space-y-2 pb-2">
              <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 dark:bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </li>
              <li>
                <Link
                  to="/home"
                  className={`custom--link rounded-lg flex items-center p-2 ${
                    activeLink === "/home" &&
                    "text-gray-900 bg-gray-200 dark:bg-gray-600 dark:text-white"
                  }`}
                >
                  <MdPieChart className="w-6 h-6 custom--svg" />
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className={`custom--link rounded-lg flex items-center p-2 ${
                    activeLink === "/user" &&
                    "text-gray-900 bg-gray-200 dark:bg-gray-600 dark:text-white"
                  }`}
                >
                  <MdGroup className="w-6 h-6 custom--svg" />
                  <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                  <span className="custom--badge">4</span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="custom--link rounded-lg flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 custom--svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Kanban</span>
                  <span className="custom--badge">Pro</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  className="custom--link rounded-lg flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 custom--svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                    <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Inbox</span>
                  <span className="custom--badge">Pro</span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="custom--link rounded-lg flex items-center p-2"
                >
                  <svg
                    className="w-6 h-6 custom--svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
            </ul>
            <div className="space-y-2 pt-2">
              <Link
                to="/faq"
                className={`custom--link rounded-lg flex items-center p-2 ${
                  activeLink === "/faq" &&
                  "text-gray-900 bg-gray-200 dark:bg-gray-600 dark:text-white"
                }`}
              >
                <MdOutlineQuestionMark className="w-6 h-6 custom--svg" />

                <span className="ml-3 flex-1 whitespace-nowrap">FAQ's</span>
              </Link>
              <Link
                to="/components"
                className={`custom--link rounded-lg flex items-center p-2 ${
                  activeLink === "/components" &&
                  "text-gray-900 bg-gray-200 dark:bg-gray-600 dark:text-white"
                }`}
              >
                <MdOutlineFilterVintage className="w-6 h-6 custom--svg" />
                <span className="ml-3 flex-1 whitespace-nowrap">
                  Components
                </span>
              </Link>
              <button
                onClick={() => [signOut(), navigate("/")]}
                className="custom--link rounded-lg flex items-center p-2 text-left w-full"
              >
                <MdLogout className="w-6 h-6 custom--svg" />
                <span className="ml-3 flex-1 whitespace-nowrap">Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
