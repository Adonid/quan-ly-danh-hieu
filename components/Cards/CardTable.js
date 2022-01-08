import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
// components
import BasicSelect from "components/Selects/BasicSelect";
// Convert link
import { toImageUrl } from "general/convert/convertmageUrl";
// Const
const selectUsers = [
  {label: "Tất cả", value: 1},
  {label: "Chưa nhận DH nào", value: 2},
  {label: "Đã nhận TA-2", value: 3},
  {label: "TA-4", value: 4},
]

export default function CardTable({ color, users, wins }) {
  const [userDisplay, setUserDisplay] = useState(users)

  // Khi thay doi du lieu load trang nay
  // useEffect(() => {
  //   setUserDisplay(users)
  // }, [users])
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
                <i className="fas fa-users text-blueGray-500 mr-2"></i>
                DS người dùng
              </h3>
            </div>
            <div className="relative px-4 max-w-full flex-grow flex-1">
              <div className="w-full sm:w-6/12 md:w-4/12">
                  <BasicSelect items={selectUsers} onChange={changeSelect} />
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
              {
                userDisplay.map((item, key) => (
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
                      {item.position}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.work_unit}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className={"fas fa-star mr-2 " + item.win.color}></i> {item.win.name + (item.win.level?" - Hạng "+item.win.level:"")}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className={"fas fa-star mr-2 " + wins.filter(i => i.id===(item.win.id+1))[0].color||"text-blueGray-500"}></i> {wins.filter(i => i.id===(item.win.id+1))[0].name+" "||"Đã nhận tối đa"}
                        - Hạng {wins.filter(i => i.id===(item.win.id+1))[0].level}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <Link href={"/admin/edit-user/"}>
                        <a
                          className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
                          title="Chi tiết | Chỉnh sửa"
                        >
                          <i className="fas fa-user-cog text-blueGray-400 hover:text-blueGray-500 text-sm"></i>
                        </a>
                      </Link>
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
