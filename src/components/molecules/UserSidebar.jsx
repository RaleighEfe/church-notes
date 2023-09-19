import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";

const UserSidebar = () => {
  return (
    <div>
      <div className="h-full">
        <button className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
          <span className="sr-only">Open sidebar</span>
          <RxHamburgerMenu />
        </button>
        <aside className="relative w-72 h-full">
          <div className="h-full px-3 py-4 overflow-y-auto bg-adminBg bg-cover">
            <ul className="space-y-2 font-medium text-lg">
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <CgProfile />
                  <span className="ml-3">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <CgProfile />
                  <span className="ml-3">Library</span>
                </Link>
              </li>
              {/* <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <CgProfile />
                  <span className="ml-3">Order History</span>
                </Link>
              </li> */}

              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <CgProfile />
                  <span className="ml-3">Setting</span>
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-sage"
                >
                  <CgProfile />
                  <span className="ml-3">Log out</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default UserSidebar;
