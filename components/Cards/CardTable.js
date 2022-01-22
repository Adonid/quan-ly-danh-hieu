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
  {label: "Chưa nhận danh hiệu nào", value: 2},
  {label: "HC Chiến sỹ vẻ vang - Hạng 3", value: 3},
  {label: "HC Chiến sỹ vẻ vang - Hạng 2", value: 4},
  {label: "HC Chiến sỹ vẻ vang - Hạng 1", value: 5},
  {label: "HC Quân kỳ Quyết thắng", value: 6},
  {label: "Huân chương BVTQ - Hạng 3", value: 7},
  {label: "Huân chương BVTQ - Hạng 2", value: 8},
  {label: "Huân chương BVTQ - Hạng 1", value: 9},
]

export default function CardTable({ color, users, wins }) {
  const [userDisplay, setUserDisplay] = useState(users)
  // Khi thay doi du lieu load trang nay
  useEffect(() => {
    setUserDisplay(users)
  }, [users])
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
  const changeSelect = e => {
    switch (e) {
      case "1":
        setUserDisplay([...users])
        break;
    
      case "2":
        let newUsers = users.filter(item => item.win_id === wins[0].id)
        setUserDisplay(newUsers)
        break;
    
      case "3":
        let newUsers_1 = users.filter(item => item.win_id === wins[1].id)
        setUserDisplay(newUsers_1)
        break;
    
      case "4":
        let newUsers_2 = users.filter(item => item.win_id === wins[2].id)
        setUserDisplay(newUsers_2)
        break;
    
      case "5":
        let newUsers_3 = users.filter(item => item.win_id === wins[3].id)
        setUserDisplay(newUsers_3)
        break;
    
      case "6":
        let newUsers_4 = users.filter(item => item.win_id === wins[4].id)
        setUserDisplay(newUsers_4)
        break;
    
      case "7":
        let newUsers_5 = users.filter(item => item.win_id === wins[5].id)
        setUserDisplay(newUsers_5)
        break;
    
      case "8":
        let newUsers_6 = users.filter(item => item.win_id === wins[6].id)
        setUserDisplay(newUsers_6)
        break;
    
      case "9":
        let newUsers_7 = users.filter(item => item.win_id === wins[7].id)
        setUserDisplay(newUsers_7)
        break;
    
      default:
        break;
    }
  }
  
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
          // style={{maxHeight: "5555px"}}
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
                      <Link href={"/admin/user-edit/"+item.id}>
                        <a>
                          <img
                            src={toImageUrl(item.avatar)}
                            className="h-12 w-12 bg-white rounded-full border inline-block"
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
                        </a>
                      </Link>
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
                      <i className={"fas fa-star mr-2 " + ([...wins].filter(i => i.quota > item.win.quota)[0]?[...wins].filter(i => i.quota > item.win.quota)[0].color:"text-blueGray-500")}></i> {[...wins].filter(i => i.quota > item.win.quota)[0]?[...wins].filter(i => i.quota > item.win.quota)[0].name+" ":"Đã nhận tối đa"}
                        {[...wins].filter(i => i.quota > item.win.quota)[0]?([...wins].filter(i => i.quota > item.win.quota)[0].level?"- Hạng "+[...wins].filter(i => i.quota > item.win.quota)[0].level:""):""}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                      <Link href={"/admin/user-edit/"+item.id}>
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
