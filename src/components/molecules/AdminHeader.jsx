"use client";
import Logo from "../atoms/Logo";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Link from "next/link";

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const profileToggle = () => {
    setProfileIsOpen(!profileIsOpen);
  };
  return (
    <div>
      <div className="grid grid-cols-2 p-5 bg-primary">
        <Logo />
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={toggleDropdown}
            className=""
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <IoIosNotificationsOutline size={28} color="white" />
          </button>

          <button
            type="button"
            onClick={profileToggle}
            className=""
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <CgProfile size={28} color="white" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {/* Dropdown items */}
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Item 1
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
            >
              Item 2
            </a>
          </div>
        </div>
      )}

      {profileIsOpen && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <Link href="">Edit profile</Link>
            <Link href="">Invite friends</Link>
            <div>
              <Link href="">Edit profile</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
