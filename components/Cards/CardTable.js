import React from "react";
import PropTypes from "prop-types";
import { createPopper } from '@popperjs/core';

// components
export default function CardTable({ color }) {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  }
  // Filter
  const actionFilter = e => {
    e.preventDefault()
    dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
  }
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex">
            <div className="relative px-4 max-w-full">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                <i className="fas fa-users text-blueGray-500 mr-2"></i>
                DS người dùng
              </h3>
            </div>
            <div className="relative px-4 max-w-full flex-grow flex-1">
              <div className="w-full sm:w-6/12 md:w-4/12">
                  <div className="relative inline-flex align-middle w-full">
                    <button
                      className="text-blueGray-400 font-bold text-xs px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blueGray-200 active:bg-blueGray-300 ease-linear transition-all duration-150"
                      type="button"
                      ref={btnDropdownRef}
                      onClick={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover()
                      }}
                    >
                      <i className="fas fa-filter text-blueGray-400 mr-1"></i>
                      Lọc
                    </button>
                    <div
                      ref={popoverDropdownRef}
                      className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "bg-blueGray-200 text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
                      }
                    >
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Đã nhận DH
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Đã nhận TA 2
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Đã nhận TA 3
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Đã nhận TA 4
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Đã nhận TA 5
                      </a>
                      <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Chưa nhận DH nào
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Chưa nhận TA 2
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Chưa nhận TA 3
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Chưa nhận TA 4
                      </a>
                      <a
                        href="#p"
                        className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-blueGray-500"
                        onClick={actionFilter}
                      >
                        Chưa nhận TA 5
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Người dùng
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Chức danh
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Nơi làm việc
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Danh hiệu hiện tại
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Danh hiệu tiếp theo
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/bootstrap.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Phan Trọng Dũng
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  NV Thiết kế Đồ họa
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Phòng Kỹ thuật
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-emerald-500 mr-2"></i> Nhân viên
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-lightBlue-500 mr-2"></i> Trưởng nhóm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Chi tiết"
                  >
                    <i className="fas fa-user-cog text-blueGray-500 text-sm"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/angular.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Nguyễn Thúy Hằng
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  QL Nhân sự ngoài
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Phòng nhân sự
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-red-500 mr-2"></i> Quản lý
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-orange-500 mr-2"></i> Trưởng Phòng
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Chi tiết"
                  >
                    <i className="fas fa-user-cog text-blueGray-500 text-sm"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src="/img/sketch.jpg"
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{" "}
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    Minh Đăng Quang
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Trưởng phòng
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  CTy AB
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-orange-500 mr-2"></i> Trưởng phòng NS
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-purple-600 mr-2"></i> Giám đốc
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Chi tiết"
                  >
                    <i className="fas fa-user-cog text-blueGray-500 text-sm"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
