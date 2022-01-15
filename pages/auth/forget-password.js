import React from "react";
import Link from "next/link";
// Redux
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import { forgetPasswordAction } from "services/actions";
// layout for page
import Auth from "layouts/Auth.js";

function ForgetPassword({forgerPasswordCreators}) {
  const forgetPassword = e => {
    e.preventDefault()
    const email = e.target["email"].value
    forgerPasswordCreators({email})
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
                    Quên mật khẩu
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Nhập email đã đăng ký của bạn</small>
                </div>
                <form onSubmit={forgetPassword}>
                  <div className="relative w-full mb-4">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Khôi phục mật khẩu
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

ForgetPassword.layout = Auth;

const mapStateToProps = state => {
  return {
    // currentUser: state.common.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    forgerPasswordCreators: bindActionCreators(forgetPasswordAction, dispatch),
  }
}
const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(withConnect)(ForgetPassword)