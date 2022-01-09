import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { createPopper } from '@popperjs/core';
// components
import BasicSelect from "components/Selects/BasicSelect";
import DialogConfirm from "components/ModalDialog/DialogConfirm.js";
import ToolTip from "components/ToolTip/ToolTip";
// Convert link
import { toImageUrl } from "general/convert/convertmageUrl";
import { outOfDateRelative, outOfDateDetail } from "general/convert/convertTime";
// Const
const selectNotifies  = [
  {label: "Tất cả", value: 1},
  {label: "Mới nhất", value: 2},
  {label: "Cũ nhất", value: 3},
  {label: "Đang thông báo", value: 4},
  {label: "Đang tắt thông báo", value: 5},
]

export default function CardTable({ color, notification, wins }) {
  const [notifies, setNotifies] = useState(notification)
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
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
        <div className="rounded-t mb-0 px-4 py-4 border-0">
          <div className="flex flex-wrap">
            <div className="relative px-4 py-3 max-w-full">
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
              {
                notifies.map((item, key) => (
                  <tr key={key}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <img
                        src={toImageUrl(item.avatar)}
                        className="h-12 w-12 bg-white rounded-full border"
                        alt={item.name}
                      ></img>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          +(color === "light" ? "text-blueGray-600" : "text-white")
                        }
                      >
                        {item.name}
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className={"fas fa-star mr-2 " + item.win.color}></i> {item.win.name + (item.win.level?" - Hạng "+item.win.level:"")}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className={"fas fa-star mr-2 " + wins.filter(i => i.id===(item.win.id+1))[0].color||"text-blueGray-500"}></i> {wins.filter(i => i.id===(item.win.id+1))[0].name+" "||"Đã nhận tối đa"}
                        - Hạng {wins.filter(i => i.id===(item.win.id+1))[0].level}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <ToolTip 
                        content={
                          <span className="cursor-pointer">
                            {outOfDateRelative(item.birthday, wins.filter(i => i.id===(item.win.id+1))[0].quota)}
                          </span>
                        }
                        contentToolTip={
                          <div
                            className="bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                          >
                            {outOfDateDetail(item.birthday, wins.filter(i => i.id===(item.win.id+1))[0].quota)?"Từ "+outOfDateDetail(item.birthday, wins.filter(i => i.id===(item.win.id+1))[0].quota)+" đến hôm nay":"Chưa đủ thời gian nhận"}
                          </div>
                        }
                      />
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <button 
                        className="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                        type="button"
                        title="Ẩn thông báo người dùng này"
                      >
                        <i className="fas fa-eye text-blueGray-300 text-sm"></i>
                      </button>
                      <DialogConfirm 
                        type="success"
                        action={console.log("Action!")}
                        iconClass="fas fa-angle-double-up text-blueGray-300 text-sm"
                        title="Trao tặng danh hiệu"
                        des="Bạn có muốn tặng danh hiệu đã tới niên hạn nhận cho người dùng này?"
                        classButton="bg-blueGray-300 active:bg-blueGray-200 px-2 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                      />
                    </td>
                  </tr>
                ))
                
              }
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
