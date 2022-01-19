import React from "react";
// Link image
import { toImageUrl } from "general/convert/convertmageUrl";
// components
import DialogConfirm from "components/ModalDialog/DialogConfirm.js";
import ToolTip from "components/ToolTip/ToolTip";

export default function CardProfile({user, wins}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt={user.name}
                  src={toImageUrl(user.avatar)}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <ToolTip
                    content={
                      <span className="font-bold block uppercase tracking-wide mr-2 text-2xl text-blueGray-400">
                        0{wins.filter(item => item.quota <= user.win.quota).length - 1}
                      </span>
                    }
                    contentToolTip={
                      <div
                        className="bg-blueGray-600 border-0 mr-3 z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                      >
                        {
                          wins.filter(item => item.quota <= user.win.quota).map((item, key) => (
                            key===0 ?
                              null
                            :
                              <>
                                <span key={key}>{item.name + (item.level?" - Hạng "+item.level:"")}</span>
                                <br/>
                              </>
                          ))
                        }
                      </div>
                    }
                  />
                  <span className="text-sm text-blueGray-400">DH đã nhận</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <ToolTip
                    content={
                      <span className="font-bold uppercase tracking-wide">
                        <i className={"fas fa-star mr-2 text-2xl " + user.win.color}></i>
                      </span>
                    }
                    contentToolTip={
                      <div
                        className="bg-blueGray-600 border-0 mr-3 z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                      >
                        {user.win.name+(user.win.level?" - Hạng "+user.win.level:"")}
                      </div>
                    }
                  />
                  <span className="text-sm text-blueGray-400">DH hiện tại</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {user.name}
            </h3>
            <div className="text-sm text-left leading-normal mt-0 mb-2 text-blueGray-400 font-normal">
              <i className="fas fa-star mr-2 text-lg text-blueGray-400"></i>{" "}
                Còn <b> xy ngày</b> nữa sẽ nhận danh hiệu
                <cite> Tinh anh 1</cite>
            </div>
            <div className="text-sm text-left leading-normal mt-0 mb-2 text-blueGray-400 font-normal">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {
                user.address?user.address+", ":"-"
              }
              {
                user.commune?user.commune+", ":"-"
              }
              {
                user.district?user.district+", ":"-"
              }
              {
                user.province?user.province+".":"-"
              }
            </div>
            <div className="text-sm text-left leading-normal mt-0 mb-1 text-blueGray-400 font-normal">
              <i className="fas fa-phone-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {user.phone?<a href={"tel:"+user.phone}>{user.phone}</a>:"--"}
            </div>
            <div className="mb-2 text-left text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              {user.position}
            </div>
            <div className="mb-2 text-left text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              {user.work_unit}
            </div>
          </div>
          <div className="text-left mt-10 py-5 border-t border-blueGray-200">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {user.description||"--"}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <DialogConfirm 
                  type="danger"
                  action={console.log("Action!")}
                  title="Xóa người dùng"
                  des="Bạn có muốn xóa tất cả dữ liệu của người này?"
                  label="Xóa người dùng này"
                  button={true}
                  colorButton="text-red-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
