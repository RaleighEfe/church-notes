"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiBookshelf, GiBookmark } from "react-icons/gi";
import { PiFolderUserLight } from "react-icons/pi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import { IoMdBook } from "react-icons/io";
import Logo from "../atoms/Logo";

const Sidebar = () => {
  return (
    <div className="">
      <div></div>
      <div className="bg-adminBg w-fit pl-5 pr-20 h-full p-3 bg-cover">
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
        <div className="text-xl lg:text-2xl text-gray-700 grid grid-rows_[min-content] gap-6">
          <Logo />
          <hr className="text-white border-2"></hr>
          <Link
            href="/admin-dashboard/add-book"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <IoMdBook />
            Add Book
          </Link>
          <Link
            href="/admin-dashboard/all-books"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <GiBookshelf />
            All Books
          </Link>
          <Link
            href="/admin-dashboard/user-details"
            className="flex gap-1 hover:bg-sage p-3 rounded-md"
          >
            <PiFolderUserLight />
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
