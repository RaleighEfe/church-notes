"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiBookshelf } from "react-icons/gi";
import { PiFolderUserLight } from "react-icons/pi";
import { BsBookmarkDash } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { BiLogOut, BiNews } from "react-icons/bi";
import { IoMdBook } from "react-icons/io";
import clsx from "clsx";
import Logo from "../atoms/Logo";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="h-full">
        <div
          className={`bg-gray-900 text-white h-screen w-64 ${
            isOpen ? "translate-x-0" : "-translate-x-64"
          } fixed top-0 left-0 transition-transform duration-300 ease-in-out`}
        >
          <button className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
            <span className="sr-only">Open sidebar</span>
            {isOpen ? <RxHamburgerMenu /> : <div></div>}
          </button>
        </div>

        <aside className="relative w-72 h-full ">
          <div className="h-full px-3 py-4 overflow-y-auto bg-adminBg bg-cover">
            <ul className="space-y-2 text-2xl">
              <li>
                <Link
                  href="/admin-dashboard/add-book"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <IoMdBook />
                  <span className="ml-3">Add Book</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-dashboard/all-books"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <GiBookshelf />
                  <span className="ml-3">All Books</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-dashboard/user-details"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <PiFolderUserLight />
                  <span className="ml-3">User Details</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-dashboard/user-details"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <BsBookmarkDash />
                  <span className="ml-3">Book Category</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin-dashboard/news"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <BiNews />
                  <span className="ml-3">News/Postings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-dashboard/settings"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <SlSettings />
                  <span className="ml-3">Settings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin-dashboard/log-out"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <BiLogOut />
                  <span className="ml-3">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <div></div>
      {/* transition-transform -translate-x-full sm:translate-x-0 */}
      {/* <div className="bg-adminBg w-fit pl-5 pr-20 h-full p-3 bg-cover"> */}
      {/* <form className="w-full max-w-md mb-6">
          <div className="relative flex items-center border border-gray-500 rounded-xl text-gray-400 focus-within:text-gray-600">
            <input
              type="search"
              placeholder="Quick search"
              className="w-full py-2 pr-3 pl-10 border-none"
            />
            <BsSearch
              size={20}
              color=""
              className="absolute ml-3 pointer-events-none"
            />
          </div>
        </form> */}
      {/* <div className=" text-gray-700 grid grid-rows_[min-content] gap-6">
          <Logo />
          <hr className="text-white border-2"></hr>
          <Link
            href="/admin-dashboard/add-book"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            Add Book
          </Link>
          <Link
            href="/admin-dashboard/all-books"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            All Books
          </Link>
          <Link
            href="/admin-dashboard/user-details"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            User Details
          </Link>
          <Link
            href="/admin-dashboard/category"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <PiFolderUserLight />
            Category
          </Link>
          <Link
            href="/admin-dashboard/news"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <PiFolderUserLight />
            News/Postings
          </Link>
          <Link
            href="/admin-dashboard/settings"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <SlSettings />
            Settings
          </Link>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
