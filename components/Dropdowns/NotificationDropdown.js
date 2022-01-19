import React, {Fragment, useEffect, useState } from "react";
import { Popover, Transition } from '@headlessui/react'
// Components
import ToolTip from "components/ToolTip/ToolTip";
// Convert time
import { outOfDateRelative, outOfDateDetail } from "general/convert/convertTime";
// Convert link
import { toImageUrl } from "general/convert/convertmageUrl";

const NotificationDropdown = ({notifying, wins, toggerAlertUser, promotionLevel}) => {
  // Show/hiden
  const [notifies, setNotifies] = useState(notifying)
  const toggerAlert = data => {
    // To Action!
    toggerAlertUser(data)
  }
  // Cap nhat thong bao
  useEffect(() => {
    const newNotifies = [...notifying].filter(item => (item.show_report && item.to_quota))
    setNotifies(newNotifies)
  }, [notifying])
  return (
    <Popover className="relative">
      <Popover.Button
        className="text-gray-500 text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <i className="text-xl far fa-bell"></i>
        {
          notifies.length ?
          <sup className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-100 bg-red-500 last:mr-0 mr-1 min-w-fit">
            {notifies.length}
          </sup>
          :
          null
        }
          
        <span className="lg:hidden inline-block ml-2 text-xs uppercase font-bold">Thông báo</span>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
          <div className="rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <h3 className="text-lg px-6 py-2 leading-6 font-bold text-gray-900">Thông báo</h3>
            <div className={"grid gap-6 sm:gap-8 sm:p-8 mb-3 "+(notifies.length?"relative":"")} style={{maxHeight:"455px", overflowY:"scroll"}}>
              {
                notifies.length?
                <table className="min-w-full divide-y divide-gray-100">
                  <tbody className="divide-y divide-gray-100">
                    {
                      notifies.map((user, key) => (
                        <tr key={key}>
                          <td className="px-6 py-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12">
                                <img className="h-12 w-12 rounded-full" src={toImageUrl(user.avatar)} alt={user.name} />
                              </div>
                              <div className="pl-3">
                                <div className="font-medium">
                                  <span className="text-md text-blueGray-900">{user.name}</span>
                                  <span className="text-xs text-blueGray-500"> đã đến hạn nhận danh hiệu </span>
                                </div>
                                <div className="text-sm pt-0.5">
                                  <span className="text-blueGray-700 font-medium">
                                  <i className={"fas fa-star mr-2 " + ([...wins].filter(i => i.quota > user.win.quota)[0].color||"text-blueGray-500")}></i> {[...wins].filter(i => i.quota > user.win.quota)[0].name+" "||"Đã nhận tối đa"}
                                  {[...wins].filter(i => i.quota > (user.win.quota))[0]?([...wins].filter(i => i.quota > (user.win.quota))[0].level?"- Hạng "+[...wins].filter(i => i.quota > (user.win.quota))[0].level:""):""}
                                  </span>
                                </div>
                                <footer className="flex items-center justify-start text-xs text-blueGray-500 mb-1">
                                  <ToolTip 
                                    content={
                                        <cite className="cursor-pointer">
                                          {outOfDateRelative(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)}
                                        </cite>
                                    }
                                    contentToolTip={
                                      <div
                                        className="bg-blueGray-600 border-0 mr-3 block z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                                      >
                                        {outOfDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)?"Từ "+outOfDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)+" đến hôm nay":"Chưa đủ thời gian nhận"}
                                      </div>
                                    }
                                  />
                                  <div>
                                    <button 
                                      className="px-2 py-2 outline-none focus:outline-none ease-linear transition-all duration-150" 
                                      type="button"
                                      title={user.show_report?"Ẩn thông báo người dùng này":"Hiển thị thông báo người dùng này"}
                                      onClick={() => toggerAlert({id:user.id, show_report: !user.show_report})}
                                    >
                                      <i className="fas fa-eye text-blueGray-400 hover:text-blueGray-500 text-xs"></i>
                                    </button>
                                    <button 
                                      className="px-2 py-2 outline-none focus:outline-none ease-linear transition-all duration-150" 
                                      type="button"
                                      title="Trao tặng"
                                      onClick={() => promotionLevel({id: user.id, win_id: user.win_id, birthday: user.birthday})}
                                    >
                                      <i className="fas fa-angle-double-up text-blueGray-400 hover:text-blueGray-500 text-xs"></i>
                                    </button>
                                  </div>
                                </footer>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
                :
                <span className="text-sm font-italic text-blueGray-500">Không có thông báo</span>
              }
                
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default NotificationDropdown;
