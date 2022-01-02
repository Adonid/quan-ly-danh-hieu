import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { createPopper } from '@popperjs/core';
// components
import BasicSelect from "components/Selects/BasicSelect";
// Const
const selectNotifies  = [
  {label: "Tất cả", value: 1},
  {label: "Mới nhất", value: 2},
  {label: "Cũ nhất", value: 3},
  {label: "Đang thông báo", value: 4},
  {label: "Đang tắt thông báo", value: 5},
]

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
  // Scroll table
  const [countLoading, setCountLoading] = useState(0)
  const myRef = createRef()
  const indexLoad = 207
  const onScroll = () => {
    const scrollT = myRef.current.scrollTop
    const countToBottom = scrollT / indexLoad
    if(scrollT % indexLoad === 0 && scrollT !== 0 && countToBottom > countLoading){
      console.log("Trigger event Loading data", "Number Loading: " + (countToBottom+1))
      setCountLoading(countToBottom)
    }
  }
  // Loc
  const changeSelect = e => console.log(e)

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
                <i className="fas fa-bullhorn mr-2"></i>
                Thông báo nhận danh hiệu
              </h3>
            </div>
            <div className="relative px-4 max-w-full flex-grow flex-1">
              <div className="w-full sm:w-6/12 md:w-4/12">
                  <BasicSelect color="dark" items={selectNotifies } onChange={changeSelect} />
                </div>
            </div>
          </div>
        </div>
        <div 
          className="block w-full overflow-x-auto"
          style={{maxHeight: "555px"}}
          ref={myRef}
          onScroll={onScroll}
        >
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
                  Danh hiệu được nhận
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Đến hạn nhận
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
                  <i className="fas fa-star text-emerald-500 mr-2"></i> Nhân viên
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-lightBlue-500 mr-2"></i> Trưởng nhóm
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Đã quá hạn 3 tuần
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Ẩn thông báo người dùng này"
                  >
                    <i className="fas fa-eye text-blueGray-200 text-sm"></i>
                  </button>
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Trao tặng"
                  >
                    <i className="fas fa-angle-double-up text-blueGray-200 text-sm"></i>
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
                  <i className="fas fa-star text-red-500 mr-2"></i> Quản lý
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-orange-500 mr-2"></i> Trưởng Phòng
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Đã quá hạn 2 ngày
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Hiện thông báo cho người dùng này"
                  >
                    <i className="fas fa-eye text-blueGray-500 text-sm"></i>
                  </button>
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Trao tặng"
                  >
                    <i className="fas fa-angle-double-up text-blueGray-200 text-sm"></i>
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
                  <i className="fas fa-star text-orange-500 mr-2"></i> Trưởng phòng NS
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-star text-purple-600 mr-2"></i> Giám đốc
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Hôm nay
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Ẩn thông báo người dùng này"
                  >
                    <i className="fas fa-eye text-blueGray-200 text-sm"></i>
                  </button>
                  <button 
                    className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                    type="button"
                    title="Trao tặng"
                  >
                    <i className="fas fa-angle-double-up text-blueGray-200 text-sm"></i>
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
