/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationIcon } from '@heroicons/react/outline'

export default function Example({type, button, classButton, colorButton, iconClass, action, title, des, label}) {
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)
  // Action callback
  const excute = () => action()
  // Switch TYPE
  let colors={textColor:"text-blueGray-500", backgroundColor:" bg-blueGray-200", icon:"far fa-question-circle", buttonColor:"bg-blueGray-500"}
      switch (type) {
          case "danger":
            colors.textColor="text-red-500"
            colors.backgroundColor="bg-red-200"
            colors.icon="fas fa-exclamation-triangle"
            colors.buttonColor="bg-red-500"
            break;
      
          case "info":
            colors.textColor="text-lightBlue-600"
            colors.backgroundColor="bg-lightBlue-200"
            colors.icon="fas fa-info-circle"
            colors.buttonColor="bg-lightBlue-600"
            break;
      
          case "success":
            colors.textColor="text-emerald-500"
            colors.backgroundColor="bg-emerald-200"
            colors.icon="far fa-check-circle"
            colors.buttonColor="bg-emerald-500"
            break;
      
          default:
            break;
      }
  return (
      <>
        {    
        button?
            <a
                className={"cursor-pointer font-normal "+colorButton}
                onClick={() => setOpen(true)}
            >
                {label}
            </a>
            :
            <a
                className={"cursor-pointer "+classButton}
                onClick={() => setOpen(true)}
            >
                <i className={iconClass}/>
                {label&&<span className="lg:hidden inline-block ml-2">{label}</span>}
            </a>
        }
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed left-1/4 top-0 z-50 mt-24 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                    <div className="inline-block align-bottom bg-gray-100 rounded-lg px-4 py-4 sm:px-6 sm:py-6 text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start sm:text-left">
                        <div className="mt-3 sm:mt-0 sm:ml-4">
                            <div className="flex-shrink-0 sm:mx-0 sm:h-10 sm:w-10">
                                <div className={colors.backgroundColor+" rounded-full sm:mx-0 sm:h-10 sm:w-10 h-12 w-12 flex-shrink-0 inline-flex items-center justify-center"}>
                                    <i className={"text-xl "+colors.textColor+" "+colors.icon}></i>
                                </div>
                                <Dialog.Title as="h3" className="text-2xl ml-3 leading-6 font-medium text-gray-900 inline-block">
                                    {title}
                                </Dialog.Title>
                            </div>
                            
                            {
                                des&&
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {des}
                                    </p>
                                </div>
                            }
                        </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className={colors.buttonColor+" mx-4 inline-flex justify-start rounded-md border border-transparent shadow-sm px-4 py-2 text-blueGray-100 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"}
                            onClick={excute}
                        >
                            Ok
                        </button>
                        <button
                            type="button"
                            className="mt-3 inline-flex justify-start rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            >
                            Cancel
                        </button>
                    </div>
                    </div>
                </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    </>
  )
}

