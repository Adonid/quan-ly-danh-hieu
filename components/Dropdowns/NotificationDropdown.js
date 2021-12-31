import React, {Fragment } from "react";
import { createPopper } from "@popperjs/core";
import { Popover, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const NotificationDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
    

    <Popover className="relative">
        <>
          <Popover.Button
            className="text-gray-500 text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <i className="text-xl far fa-bell"></i>
            <sup className="text-xs font-semibold inline-block py-1 px-2 rounded-full text-blueGray-100 bg-red-500 last:mr-0 mr-1">
              12
            </sup>
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
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white sm:gap-8 sm:p-8" style={{maxHeight:"455px", overflowY:"scroll"}}>
                  <table className="min-w-full divide-y divide-gray-100">
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Nguyễn Mai Ánh Linh</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 2</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>5 giờ trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Đinh Tiến Quốc</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 3</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>1 giờ trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Lâm Chấn Huy</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 5</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>8 giờ trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Nguyễn Mai Linh</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 2</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>2 ngày trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Đinh Tiến Quốc</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 3</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>1 ngày trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Lâm Chấn Huy</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 5</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>3 ngày trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Nguyễn Mai Linh</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 2</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>20 giờ trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Đinh Tiến Quốc</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 3</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>15 giờ trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12">
                              <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                            </div>
                            <div className="pl-3">
                              <div className="font-medium">
                                <span className="text-sm text-blueGray-900">Lâm Chấn Huy</span>
                                <span className="text-xs text-blueGray-500"> đến hạn nhận DH </span>
                              </div>
                              <div className="text-sm pt-0.5">
                                <span className="text-blueGray-700 font-medium">Tinh anh 5</span>
                              </div>
                              <footer className="block text-xs text-blueGray-500">
                                <cite>5 ngày trước</cite>
                              </footer>
                            </div>
                          </div>
                        </td>
                        <td className="border-t-0 px-1 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left">
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
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
    </Popover>
  </>
  );
};

export default NotificationDropdown;
