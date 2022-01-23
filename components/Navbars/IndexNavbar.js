import React, { useEffect, useState } from "react";
import Link from "next/link";
// components
import UserDropdown from "components/Dropdowns/UserDropdown";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
import DialogAddAUser from "components/ModalDialog/DialogAddAUser";


export default function Navbar({addAUser, logoutAdmin, notifying, wins, toggerAlertUser, promotionLevel}) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // Add New A User
  const addNewAUser = data => addAUser(data)
  const logout = () => logoutAdmin()
  // Cap nhat thong bao
  const [notifies, setNotifies] = useState(notifying)
  useEffect(() => {
    setNotifies(notifying)
  }, [notifying])
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
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
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
              <NotificationDropdown notifying={notifies} wins={wins} toggerAlertUser={toggerAlertUser} promotionLevel={promotionLevel}/>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link href="/admin/dashboard" as="/admin/home">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    title="Trang chính"
                  >
                    <i className="text-xl text-blueGray-700 fas fa-tachometer-alt text-lg leading-lg"/>
                    <span className="md:hidden inline-block ml-2">Trang chính</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/admin/notification" as="/admin/thong-bao-nhan-danh-hieu">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#"
                    title="Nhận danh hiệu"
                  >
                    <i className="text-xl text-blueGray-700 fas fa-bullhorn text-lg leading-lg"/>
                    <span className="md:hidden inline-block ml-2">Nhận danh hiệu</span>
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <DialogAddAUser callbackValues={addNewAUser} />
              </li>
            </ul>
            <ul className="flex-col md:flex-row list-none">
              <UserDropdown logout={logout} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
