import React from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";

export default function ResetPassword() {
  const resetPassword = e => {
    e.preventDefault()
    const password = e.target["password"].value
    const codeVerify = e.target["codeVerify"].value
    console.log(password, codeVerify)
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-xl font-bold">
                    Thay đổi mật khẩu
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={resetPassword}>
                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Mật khẩu
                    </label>
                    <input
                      id="password"
                      type="password"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="vd: AaBbCc@123"
                      pattern="[A-Za-z0-9_ ! @ # $ % ^ *]{6,32}$"
                      title="Mật khẩu từ 6-32 ký tự và một số ký tự đặc biệt như ! @ # $ % ^ * "
                    />
                  </div>
                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="codeVerify"
                    >
                      Mã xác minh
                    </label>
                    <input
                      id="codeVerify"
                      type="text"
                      required
                      pattern="[0-9]{6}"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="vd: 123456"
                      title="Mã xác minh gồm 6 chữ số!"
                    />
                  </div>
                  <div className="text-blueGray-400 text-left my-3 font-normal text-sm">
                    <small>Dùng mã xác minh gồm 6 chữ số nhận được trong email để thay đổi mật khẩu.</small>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Đổi mật khẩu
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <Link href="/auth/login" >
                  <a
                    href="#"
                    className="text-blueGray-200"
                  >
                    <small>Đăng nhập</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ResetPassword.layout = Auth;
