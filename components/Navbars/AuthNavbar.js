import React from "react";
import Link from "next/link";
// components

export default function Navbar({color, login}) {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className={"text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "+(color?"text-grayBlue-400":"text-white")}
                href="#"
              >
                Quản lý DH
              </a>
            </Link>
          </div>
          {
            login &&
            <div className="relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/auth/login">
              <a
                className={"hover:text-blueGray-200 px-3 py-4 lg:py-2 flex items-center text-xs font-bold "+(color?"text-grayBlue-400":"text-white")}
                href="#"
                title="Đăng nhập"
              >
                <span className="inline-block mr-2">Đăng nhập</span>
                <i className="text-xl fas fa-sign-in-alt text-lg leading-lg"/>
              </a>
            </Link>
          </div>
          }
        </div>
      </nav>
    </>
  );
}
