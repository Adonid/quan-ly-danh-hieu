import React from "react";
// DayJS
import dayjs from "dayjs";

export default function CardSettings({user, updateAccount, updateOrtherinfo}) {
  // Luu thong tin tai khoan
  const saveInfo = e => {
    e.preventDefault()
    const name = e.target["name"].value
    const birthday = e.target["birthday"].value
    const position = e.target["position"].value
    const work_unit = e.target["work_unit"].value
    updateAccount({id: user.id, name, birthday, position, work_unit})
  }
  // Luu thong tin lien he
  const saveContact = e => {
    e.preventDefault()
    const phone = e.target["phone"].value
    const address = e.target["address"].value
    const commune = e.target["commune"].value
    const district = e.target["district"].value
    const province = e.target["province"].value
    updateOrtherinfo({user: {id: user.id}, dataUpdate: {phone, address, commune, district, province}})
  }
  // Luu thong tin lien he
  const saveDescription = e => {
    e.preventDefault()
    const description = e.target["description"].value
    updateOrtherinfo({user: {id: user.id}, dataUpdate: {description}})
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Thông tin người dùng</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={saveInfo}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Tài khoản
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    Họ & tên
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,128}$"
                    title="Tên từ 2 đến 64 ký tự và không chứ một số ký tự đặc biệt!"
                    defaultValue={user.name}
                    placeholder="Nguyễn Xuân Quỳnh"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="birthday"
                  >
                    Ngày làm việc
                  </label>
                  <input
                    id="birthday"
                    required
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue={dayjs(user.birthday).format("YYYY-MM-DD")}
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
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,128}$"
                    title="Chức danh 2 đến 64 ký tự và không chứ một số ký tự đặc biệt!"
                    defaultValue={user.position}
                    placeholder="Quản lý kho A"
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
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,128}$"
                    title="Địa chỉ làm việc 2 đến 64 ký tự và không chứ một số ký tự đặc biệt!"
                    defaultValue={user.work_unit}
                    placeholder="Phòng vật tư"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 my-4">
                <div className="relative w-full">
                  <button
                    className="bg-blueGray-600 active:bg-blueGray-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Lưu lại
                  </button>
                </div>
              </div>
              <div className="w-full px-4 mt-4">
                <div className="relative w-full">
                  <i className="text-sm text-blueGray-500 fas fa-exclamation-triangle"></i>{" "}
                  <cite className="text-xs font-normal text-blueGray-400">Việc thay đổi thông tin này đồng nghĩa với danh hiệu người dùng sẽ bị thu hồi toàn bộ và cần phải cấp lại.</cite>
                </div>
              </div>
            </div>
          </form>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          <form onSubmit={saveContact}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Thông tin liên hệ
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="phone"
                  >
                    Số điện thoại
                  </label>
                  <input
                    id="phone"
                    required
                    type="tel"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[0-9]{4}[0-9]{3}[0-9]{3}"
                    title="Hãy nhập đúng định dạng số điện thoại"
                    defaultValue={user.phone}
                    placeholder="0932888899"
                  />
                </div>
              </div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="address"
                  >
                    Địa chỉ
                  </label>
                  <input
                    id="address"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,128}$"
                    title="Tối thiểu 3 tối đa 128 ký tự!"
                    defaultValue={user.address}
                    placeholder="89 Kim Mã"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="commune"
                  >
                    Xã/phường
                  </label>
                  <input
                    id="commune"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,64}$"
                    title="Tối thiểu 3 tối đa 64 ký tự!"
                    defaultValue={user.commune}
                    placeholder="Phường Thanh Xuân"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="district"
                  >
                    Quận/huyện
                  </label>
                  <input
                    id="district"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,64}$"
                    title="Tối thiểu 3 tối đa 64 ký tự!"
                    defaultValue={user.district}
                    placeholder="Quận Ba Đình"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="province"
                  >
                    Tỉnh/Tp
                  </label>
                  <input
                    id="province"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    pattern="[A-Za-z0-9_ - , . ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳýỵỷỹ]{3,64}$"
                    title="Tối thiểu 3 tối đa 64 ký tự!"
                    defaultValue={user.province}
                    placeholder="TP. Hà Nội"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4 my-4">
                <div className="relative w-full">
                  <button
                    className="bg-blueGray-600 active:bg-blueGray-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Lưu lại
                  </button>
                </div>
              </div>
            </div>
          </form>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          <form onSubmit={saveDescription}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Thông tin khác
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="description"
                  >
                    Tóm tắt bản thân
                  </label>
                  <textarea
                    id="description"
                    required
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="3"
                    defaultValue={user.description}
                    placeholder="Aa..."
                  ></textarea>
                  <div className="w-full lg:w-6/12 my-4">
                    <div className="relative w-full">
                      <button
                        className="bg-blueGray-600 active:bg-blueGray-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Lưu lại
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
