import React from "react";
import { Link, useLocation } from "react-router-dom";

// contexts
import { useAuth } from "host/useAuth";

// mocks
import { sidebarLinks } from "../mocks";

const Sidebar = () => {
  const location = useLocation();
  const { user, signOutUser } = useAuth();

  return (
    <div className="w-full h-full px-4 py-2 text-center bg-gray-900">
      <div className=" text-gray-100 ">
        <div className="flex flex-col items-start justify-start p-2.5 mt-1 gap-2">
          <h1 className="font-bold text-3xl text-blue-500">Productive</h1>
          <p className="text-base">{user?.name}</p>
        </div>
        <div className="my-8 bg-gray-600 h-[1px]"></div>
      </div>

      <div className="flex flex-col justify-between items-start">
        <div className="w-full">
          {sidebarLinks.map((link) => (
            <Link to={link.link}>
              <div
                className={`mt-3 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white ${
                  location.pathname === link.link && "bg-blue-600"
                }`}
              >
                <span className=" ml-4 text-gray-200 font-bold">
                  {link.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="w-full mt-14 py-4 flex rounded-md duration-300 cursor-pointer hover:bg-blue-600 text-white"
          onClick={signOutUser}
        >
          <span className=" ml-4 text-gray-200 font-bold">Sair</span>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };
