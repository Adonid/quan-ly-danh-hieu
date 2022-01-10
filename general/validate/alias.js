
const alias = [
    {
        name: "name", 
        alias: "Tên tài khoản",
        empty: "Tên tài khoản không để trống nhé!",
        duplicate: "Tên tài khoản đã có người dùng rồi!",
        notFormat: "Chứa 6-12 ký tự A-Za-z và 0-9",
    },
    {
        name: "email", 
        alias: "địa chỉ email",
        empty: "Địa chỉ email trống rồi kìa!",
        errorLogin: "Email hoặc mật khẩu không đúng",
        duplicate: "Email đã có người dùng rồi!",
        notFormat: "Email không đúng định dạng"

    },
    {
        name: "password", 
        alias: "mật khẩu",
        empty: "Mật khẩu không được trống!",
        errorLogin: "Email hoặc mật khẩu không đúng",
        notFormat: "Ít nhất 8 ký tự A-Za-z, 0-9, 1 ký tự đặc biệt"
    },
    {
        name: "appro", 
        alias: "Chấp nhận",
        empty: "Cần được chấp nhận!",
    },
    {
        name: "codeReset", 
        alias: "Mã xác minh",
        empty: "Hãy nhập mã xác minh!",
        notFormat: "Mã xác minh gồm 6 số gửi trong email đăng ký của bạn!"
    },
    {
        name: "fullName", 
        alias: "Tên đầy đủ",
        empty: "Hãy nhập tên đầy đủ!",
        notFormat: "Tên không chứa ký tự đặc biệt!",
        limited: "Tối thiểu 5 và tối đa 32 ký tự!"
    },
    {
        name: "phoneNumber", 
        alias: "Số điện thoại",
        empty: "Hãy nhập số điện thoại!",
        notFormat: "Số điện thoại không đúng!"
    },
    {
        name: "address", 
        alias: "Địa chỉ",
        empty: "Hãy nhập địa chỉ!",
        notFormat: "Địa chỉ chứa ký tự A-Zz-a 0-9!",
        limited: "Tối thiểu 5 và tối đa 32 ký tự!"
    },
    {
        name: "age", 
        alias: "Tuổi",
        empty: "Hãy nhập tuổi!",
        notFormat: "Tuổi yêu cầu là số 0-9!",
        limited: "Tuổi từ 16+ đến 100!",
    },
    {
        name: "bio", 
        alias: "Câu nói slugan",
        empty: "Hãy nhập slugan!",
        notFormat: "Slugan chỉ chứa ký tự A-Za-z 0-9!",
        limited: "Chứa tối thiểu 6 đến 1024 ký tự!",
    },
    {
        name: "provinceId", 
        alias: "Tỉnh/Thành phố",
        empty: "Hãy chọn Tỉnh/Thành phố!",
    },
    {
        name: "districtId", 
        alias: "Quận/Huyện",
        empty: "Hãy chọn Quận/Huyện!",
    },
    {
        name: "communeId", 
        alias: "Phường/Xã",
        empty: "Hãy chọn Phường/Xã!",
    },
    {
        name: "genre", 
        alias: "Giới tính",
        empty: "Chọn giới tính của bạn!",
        notFormat: "Không chứ ký tự đặc biệt",
    },
    {
        name: "skill", 
        alias: "Kỹ năng",
        empty: "Hãy chọn kỹ năng bạn có!",
        notFormat: "Không chứ ký tự đặc biệt",
    },
    {
        name: "work", 
        alias: "Công việc",
        empty: "Hãy chọn công việc bạn đang làm!",
        notFormat: "Không chứ ký tự đặc biệt",
    },
    {
        name: "url", 
        alias: "Đường dẫn",
        empty: "Nhập đường dẫn!",
        notFormat: "Đường dẫn không hợp lệ!",
    },
    {
        name: "categoryName", 
        alias: "Tên danh mục",
        empty: "Nhập tên danh mục!",
        limited: "Tối thiểu 5 và tối đa 32 ký tự!"
    },
    {
        name: "tagName", 
        alias: "Tên thẻ tag",
        empty: "Nhập tên thẻ tag!",
        limited: "Tối thiểu 5 và tối đa 32 ký tự!"
    },
    {
        name: "color", 
        alias: "Mã màu",
        empty: "Chọn mã màu!",
    },
    {
        name: "image", 
        alias: "Ảnh",
        empty: "Hãy chọn ảnh!",
    },
    {
        name: "nameCompanyDes", 
        alias: "Tên mô tả",
        empty: "Tên mô tả rỗng!",
        limited: "Tối thiểu 5 và tối đa 32 ký tự!"
    },
    {
        name: "iconCompanyDes", 
        alias: "Icon",
        empty: "Hãy chọn icon!",
    },
    {
        name: "descriptionCompanyDes", 
        alias: "Mô tả",
        empty: "Hãy nhập mô tả này!",
        limited: "Chứa tối thiểu 6 đến 1024 ký tự!",
    },
    {
        name: "postTitle", 
        alias: "Tiêu đề bài viết",
        empty: "Hãy nhập tiêu đề bài viết!",
        limited: "Tiêu đề chứa 3 - 64 ký tự!",
    },
    {
        name: "descPost", 
        alias: "Trích dẫn bài viết",
        empty: "Trích dẫn bài viết trống!",
        limited: "Trích dẫn chứa 6 - 1024 ký tự!",
    },
    {
        name: "categoryId", 
        alias: "Danh mục bài viết",
        empty: "Hãy chọn danh mục!",
        notFormat: "Danh mục đã chọn không đúng định dạng!",
    },
    {
        name: "tagId", 
        alias: "Gắn thẻ bài viêt",
        empty: "Hãy chọn thẻ gắn!",
        notFormat: "Thẻ gắn bài viêt không đúng định dạng!",
    },
    {
        name: "imageId", 
        alias: "Ảnh bài viết",
        empty: "Hãy chọn ảnh!",
        notFormat: "Ảnh đã chọn không đúng định dạng!",
    },

    // VALIDATE USER PAGE
    {
        name: "userId", 
        alias: "ID người dùng",
        empty: "ID người dùng không được rỗng",
        notFormat: "Người dùng đang tìm không tồn tại!",
    },
    {
        name: "authorId", 
        alias: "ID tác giả",
        empty: "ID tác giả không được rỗng",
        notFormat: "Tác giả đang tìm không tồn tại!",
    },
]

export default alias