/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function DialogAddAUser() {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  // Action callback
  const excute = () => {
    console.log("Add new User!")
    setOpen(false)
  }
  // Luu thong tin tai khoan
  const saveInfo = e => {
    e.preventDefault()
    const fullName = e.target["fullName"].value
    const datetime = e.target["datetime"].value
    const position = e.target["position"].value
    const work_unit = e.target["work_unit"].value
    console.log(fullName, datetime, position, work_unit)
  }
  return (
      <>
        <a
            className="cursor-pointer px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            title="Thêm người dùng"
            onClick={() => setOpen(true)}
        >
            <i className="fas fa-user-plus text-lightBlue-500 text-lg leading-lg"/>
            <span className="lg:hidden inline-block ml-2">Thêm mới User</span>
        </a>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed left-1/4 top-0 z-50 mt-20 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                <div className="flex items-end justify-center min-h-fit max-w-fit py-4 px-4 text-center sm:block sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed bg-gray-200 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="px-4 py-4 sm:px-6 sm:py-6 bg-gray-100 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start sm:text-left">
                                <div className="mt-3 sm:mt-0 sm:ml-4">
                                    <div className="flex-shrink-0 sm:mx-0 sm:h-10 sm:w-10">
                                        <div className="bg-lightBlue-200 rounded-full sm:mx-0 sm:h-10 sm:w-10 h-12 w-12 flex-shrink-0 inline-flex items-center justify-center">
                                            <i className="text-xl text-lightBlue-600 far fa-check-circle"></i>
                                        </div>
                                        <Dialog.Title as="h3" className="text-2xl ml-3 leading-7 font-medium text-gray-900 inline-block">
                                            Tạo người dùng mới
                                        </Dialog.Title>
                                    </div>
                                    {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Tạo người dùng mới để quản lý danh hiệu
                                        </p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="sm:flex sm:items-start sm:text-left">
                            <form onSubmit={saveInfo}>
                                <div className="px-4 py-4 sm:px-6 sm:py-6 bg-white sm:p-6 sm:pb-4">
                                    <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                    Tài khoản
                                    </h6>
                                    <div className="flex flex-wrap">
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="fullName"
                                            >
                                                Họ & tên
                                            </label>
                                            <input
                                                id="fullName"
                                                required
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue="lucky.jesse"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="datetime"
                                            >
                                                Ngày làm việc
                                            </label>
                                            <input
                                                id="datetime"
                                                required
                                                type="date"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                // defaultValue="jesse@example.com"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="position"
                                            >
                                                Chức danh
                                            </label>
                                            <input
                                                id="position"
                                                required
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue="Lucky"
                                            />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-6/12 px-4">
                                            <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                htmlFor="work_unit"
                                            >
                                                Nơi làm việc
                                            </label>
                                            <input
                                                id="work_unit"
                                                required
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                defaultValue="Jesse"
                                            />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-4 sm:px-6 sm:py-7 bg-gray-100 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="submit"
                                        className="bg-lightBlue-600 mx-4 inline-flex justify-start rounded-md border border-transparent shadow-sm px-4 py-2 text-blueGray-100 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Thêm mới
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex justify-start rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                        >
                                        Đóng
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    </>
  )
}

