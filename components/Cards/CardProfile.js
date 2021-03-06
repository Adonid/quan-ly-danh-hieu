import React from "react";
// components
import DialogConfirm from "components/ModalDialog/DialogConfirm.js";
import ToolTip from "components/ToolTip/ToolTip";
// Convert link
import { toImageUrl } from "general/convert/convertmageUrl";
import { outOfDateRelative, outOfDateDetail, willReceiveDateRelative, willRecieveDateDetail } from "general/convert/convertTime";

export default function CardProfile({user, wins, deleteUser, uploadAvatar}) {
  // Thay doi anh nen
  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      if(e.target.files[0].type==="image/jpeg" || e.target.files[0].type==="image/jpg" || e.target.files[0].type==="image/png"){
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          // Goi api upload avatar
          uploadAvatar({id: user.id, imageBase64: reader.result, name: user.name})
        })
        reader.readAsDataURL(e.target.files[0])
      }
    }
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <label htmlFor="img" title="Thay đổi ảnh avatar" className="cursor-pointer">
                <img
                  alt={user.name}
                  src={toImageUrl(user.avatar)}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </label>
              <input className="absolute w-0 h-0 opacity-0" type="file" id="img" accept="image/png, image/jpeg, image/jpg" onChange={onSelectFile}></input>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  {
                    (wins.filter(item => item.quota <= user.win.quota).length - 1)?
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
                                <span key={key}></span>
                              :
                                <span key={key}>
                                  <span>{item.name + (item.level?" - Hạng "+item.level:"")}</span>
                                  <br/>
                                </span>
                            ))
                          }
                        </div>
                      }
                    />
                    : 
                      <span className="font-bold block uppercase tracking-wide mr-2 text-2xl text-blueGray-400">
                        0
                      </span>
                  }
                    
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
            <h3 className="text-xl font-semibold leading-normal mb-3 text-blueGray-700 mb-2">
              {user.name}
            </h3>
            <div className="text-sm text-left leading-normal mt-0 mb-3 text-blueGray-500 font-normal">
                {
                  user.to_quota?
                    <>
                        <i className={"fas fa-star mr-2 text-lg " + ([...wins].filter(i => i.quota >= user.win.quota)[0].color||"text-blueGray-500")}></i>
                        Đã quá hạn nhận danh hiệu
                        {" "}
                        <b>
                          {[...wins].filter(i => i.quota > user.win.quota)[0].name+" "||"Đã nhận tối đa"}
                          {[...wins].filter(i => i.quota > (user.win.quota))[0]?([...wins].filter(i => i.quota > (user.win.quota))[0].level? " - Hạng "+[...wins].filter(i => i.quota > (user.win.quota))[0].level:""):""}
                        </b>
                        {" "}
                        <ToolTip
                          className="inline-block"
                          content={
                            <cite>{outOfDateRelative(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)}</cite>
                          }
                          contentToolTip={
                            <div
                              className="bg-blueGray-600 border-0 mr-3 z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                            >
                              {outOfDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)?"Từ "+outOfDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)+" đến hôm nay":"Chưa đủ thời gian nhận"}
                            </div>
                          }
                        />
                    </>
                  :
                    <>
                      <i className={"fas fa-star mr-2 text-lg " + ([...wins].filter(i => i.quota >= user.win.quota)[0].color||"text-blueGray-500")}></i>{" "}
                      {
                        [...wins].pop().quota === user.win.quota?
                          <cite>Đã nhận tối đa các danh hiệu</cite>
                        :
                         <>
                          Còn {" "}
                          <ToolTip
                            className="inline-block"
                            content={
                              <b>
                                {willReceiveDateRelative(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)}
                              </b>
                            }
                            contentToolTip={
                              <div
                                className="bg-blueGray-600 border-0 mr-3 z-50 font-normal leading-normal text-xs max-w-xs text-left no-underline break-words rounded-lg text-white text-xs opacity-75 p-3 rounded-t-lg"
                              >
                                {willRecieveDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0)?"Vào ngày "+willRecieveDateDetail(user.birthday, [...wins].filter(i => i.quota > (user.win.quota))[0]?[...wins].filter(i => i.quota > (user.win.quota))[0].quota:0):"Đã nhận đủ các danh hiệu"}
                              </div>
                            }
                          />
                          {" "}
                          sẽ nhận danh hiệu
                          {" "}
                          <cite>{[...wins].filter(i => i.quota > (user.win.quota))[0]?([...wins].filter(i => i.quota > (user.win.quota))[0].level?[...wins].filter(i => i.quota > (user.win.quota))[0].name+" - Hạng "+[...wins].filter(i => i.quota > (user.win.quota))[0].level:""):"Đã nhận đủ các danh hiệu"}</cite>
                         </>
                      }
                    </>
                }
            </div>
            <div className="text-sm text-left leading-normal mt-0 mb-2 text-blueGray-500 font-normal">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-500"></i>{" "}
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
            <div className="text-sm text-left leading-normal mt-0 mb-1 text-blueGray-500 font-normal">
              <i className="fas fa-phone-alt mr-2 text-lg text-blueGray-500"></i>{" "}
              {user.phone?<a href={"tel:"+user.phone}>{user.phone}</a>:"--"}
            </div>
            <div className="mb-2 text-left text-blueGray-500 mt-10">
              <i className="fas fa-briefcase mr-2 text-md text-blueGray-400"></i>
              {user.position}
            </div>
            <div className="mb-2 text-left text-blueGray-500">
              <i className="fas fa-university mr-2 text-md text-blueGray-400"></i>
              {user.work_unit}
            </div>
          </div>
          <div className="text-left mt-10 py-5 border-t border-blueGray-200">
           <div className="w-full px-4">
              <p className="mb-4 text-md leading-relaxed text-blueGray-600">
                {user.description||"--"}
              </p>
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <DialogConfirm 
                  type="danger"
                  action={() => deleteUser({id: user.id, name: user.name})}
                  title="Xóa người dùng"
                  des={"Bạn có muốn xóa tất cả dữ liệu của "+user.name+"?"}
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
