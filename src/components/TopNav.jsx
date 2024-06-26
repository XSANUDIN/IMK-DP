import React, { useState } from "react";
import { Link } from "react-router-dom";
import './components.css'

export const navImg = [
    {
      iconImg : "/images/u2.jpg",
      userImg : "/images/u2.jpg"
    }
];


function TopNav({ nav }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

  return (
    <>
    <nav className="bg-teal border-gray-200 dark:bg-navy">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link to="Home" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img src={navImg.iconImg} className="h-8" alt="Flowbite Logo" /> */}
          <Link to="Home"><span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DigiPrintz</span></Link>
      </Link>

      {/* User */}
      
      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* <button type="button" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
          </button> */}

        {/* Menu Dropdown */}

          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</Link>
              </li>
              <li>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</Link>
              </li>
              <li>
                <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
              </li>
            </ul>
          </div>
          <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
      </div>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
        <ul className="flex flex-col font-medium text-2md p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <Link to="Home" className="underline-animation block py-2 px-3 text-gray-300 rounded md:p-0 hover:font-bold">Home</Link>
          </li>
          <li>
            <Link to="Service" className="underline-animation block py-2 px-3 text-gray-300 rounded md:p-0 hover:font-bold">Services</Link>
          </li>
          <li>
            <Link to="Gallery" className="underline-animation block py-2 px-3 text-gray-300 rounded md:p-0 hover:font-bold">Gallery</Link>
          </li>
          <li>
            <Link to="Pesan" className="underline-animation block py-2 px-3 text-gray-300 rounded md:p-0 hover:font-bold">Pesan</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </>
  );
}

export default TopNav;
