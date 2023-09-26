"use client";
import Sidebar from "@/components/molecules/Sidebar";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { UserContext } from "@/UserContext";

const UserDetails = () => {
  const [text, setText] = useState("");
  const data = [
    {
      email: "lorelmines@gmail.com",
      subscription: "Historical",
    },
    {
      email: "rebeccayork@gmail.com",
      subscription: "Sci-fi",
    },
    {
      email: "lorraleehides@yahoo.com",
      subscription: "Romance",
    },
  ];
  return (
    <div>
      <UserContext.Provider value="">
        <div className="grid grid-cols-[auto_1fr]">
          <Sidebar />

          <div className="p-5">
            {/* Filter search  and general search*/}
            <div className="grid grid-cols-2 gap-10">
              <div className="flex items-center w-fit justify-between  p-2 bg-white/70 border-2 focus-within:border-red-400 rounded-md">
                {/* <BiTimeFive size={24}/> */}
                <select
                  // onChange={(event) => setGenre(event.target.value)}
                  name="books"
                  className="appearance-none border-none w-20"
                >
                  <optgroup className="px-3">
                    <option selected disabled>
                      Sort By
                    </option>
                    <option value="lastDay">registered in the last day</option>
                    <option value="lastSeven">
                      registered in the last 7 days
                    </option>
                    <option value="lastMonth">
                      registered in thelast month
                    </option>
                    <option value="lastYear">
                      registered in the last year
                    </option>
                  </optgroup>
                </select>
                <IoIosArrowDown size={24} />
              </div>
              {/* <div>
              <Input
                type="search"
                inputMode=""
                placeholder="Quick search"
                // onChange={(event) => setBookTitle(event.target.value)}
              />
            </div> */}
              <div className="">
                <form className="w-full max-w-md border-none">
                  <div className="relative flex items-center  bg-white/70 border-2 focus-within:border-red-400 rounded-sm">
                    <input
                      type="text"
                      placeholder="Quick search"
                      className="w-full  py-2 pr-3 pl-10 rounded-2xl"
                    />
                    <BsSearch
                      size={20}
                      color=""
                      className="absolute ml-3 pointer-events-none"
                    />
                  </div>
                </form>
              </div>
            </div>

            {/* tabel structure */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-lg scroll_bar_hide my-5">
              <table className="w-full text-left text-gray-500 rounded-md">
                <thead className="text-xs text-gray-700 uppercase bg-sage">
                  <tr>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Subscription</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                  {data.map((cell, i) => (
                    <tr key={i} className="bg-white border-b hover:bg-sage">
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {cell.email}
                      </td>
                      <td className="px-6 py-4">{cell.subscription}</td>
                      {/* <td className="px-6 py-4">{cell.genre}</td> */}
                      <td className="px-6 py-4 ">
                        <div className="flex gap-3">
                          <Link
                            href=""
                            className="font-medium hover:text-blue-600"
                          >
                            Disable
                          </Link>
                          <Link
                            href=""
                            className="font-medium hover:text-red-600"
                          >
                            Delete
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <nav className="flex items-center justify-between p-5">
                <span className="text-sm font-normal text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">1-10</span> of{" "}
                  <span className="font-semibold text-gray-900">1000</span>
                </span>
                <ul className="inline-flex -space-x-px text-sm h-8">
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-sage hover:text-gray-700"
                    >
                      Previous
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sage hover:text-gray-700"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sage hover:text-gray-700"
                    >
                      2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sage hover:text-gray-700"
                    >
                      3
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sage hover:text-gray-700"
                    >
                      4
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-sage hover:text-gray-700"
                    >
                      5
                    </Link>
                  </li>
                  <li>
                    <Link
                      href=""
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-sage hover:text-gray-700"
                    >
                      Next
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
};

export default UserDetails;
