import React from "react";
import Link from "next/link";
// components

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#pablo"
              >
                Quản lý DH
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-xl fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <NotificationDropdown />
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <Link href="/admin/dashboard">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    title="Chức năng"
                  >
                    <i className="text-xl text-blueGray-700 fas fa-tachometer-alt text-lg leading-lg"/>
                    <span className="lg:hidden inline-block ml-2">Chức năng</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/admin/add-user">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    title="Thêm người dùng mới"
                  >
                    <i className="text-xl text-emerald-500 fas fa-user-plus text-lg leading-lg"/>
                    <span className="lg:hidden inline-block ml-2">Thêm người dùng mới</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/admin/edit-user">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="/admin/edit-user"
                    title="Sửa người dùng"
                  >
                    <i className="text-xl text-blueGray-700 fas fa-user-edit text-lg leading-lg"/>
                    <span className="lg:hidden inline-block ml-2">Sửa người dùng</span>
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="flex-col md:flex-row list-none items-center">
              <UserDropdown />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
