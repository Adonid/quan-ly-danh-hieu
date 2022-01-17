import React, {Fragment } from "react";
import { Popover, Transition } from '@headlessui/react'

const NotificationDropdown = ({notifying}) => {
  console.log(notifying)
  return (
    <Popover className="relative">
      <Popover.Button
        className="text-gray-500 text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <i className="text-xl far fa-bell"></i>
        {
          notifying.length ?
          <sup className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-100 bg-red-500 last:mr-0 mr-1">
            {notifying.length}
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
            <div className="relative grid gap-6 sm:gap-8 sm:p-8" style={{maxHeight:"455px", overflowY:"scroll"}}>
              {
                notifying.length?
                <table className="min-w-full divide-y divide-gray-100">
                  <tbody className="divide-y divide-gray-100">
                    {
                      notifying.map((user, key) => (
                        <tr key={key}>
                          <td className="px-6 py-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12">
                                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                              </div>
                              <div className="pl-3">
                                <div className="font-medium">
                                  <span className="text-sm text-blueGray-900">{user.name}</span>
                                  <span className="text-xs text-blueGray-500"> đã đến hạn nhận danh hiệu </span>
                                </div>
                                <div className="text-sm pt-0.5">
                                  <span className="text-blueGray-700 font-medium">Tinh anh 2</span>
                                </div>
                                <footer className="flex items-center justify-start text-xs text-blueGray-500">
                                  <cite className="pb-2">5 giờ trước</cite>
                                  <div>
                                    <button 
                                      className="px-2 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                                      type="button"
                                      title="Ẩn thông báo người dùng này"
                                    >
                                      <i className="fas fa-eye text-blueGray-400 hover:text-blueGray-500 text-xs"></i>
                                    </button>
                                    <button 
                                      className="px-2 py-2 outline-none focus:outline-none mb-1 ease-linear transition-all duration-150" 
                                      type="button"
                                      title="Trao tặng"
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
