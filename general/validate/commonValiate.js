import alias from "./alias"

/** KHONG DE TRUONG RONG */
export function requireField(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(value === false || typeof value === "undefined" || value.toString().trim() === "")
        error = field.empty
    return error
}
/** KHONG DE TRUONG CHUA OBJECT RONG */
export function requireObject(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(value === false || typeof value === "undefined")
        error = field.empty
    return error
}

/** PHAI LA DINH DANG EMAIL */
export function requireEmail(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
        error = field.notFormat
    return error
}

/** PHAI DUNG DINH DANG MAT KHAU */
export function requirePassword(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})").test(value) != true)
        error = field.notFormat
    return error
}

/** PHAI DUNG DINH DANH USERNAME */
export function requireUserName(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,12})").test(value) != true)
        error = field.notFormat
    return error
}

/** PHAI CHECKBOX TRUOC */
export function isChecked(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(!value)
        error = field.empty
    return error
}

/** PHAI LA MA XAC MINH */
export function isCodeReset(name, value) {
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(!/^[0-9]+$/i.test(value) || value.toString().length !== 6)
        error = field.notFormat
    return error
}

/** KHONG CHUA KY TU DAC BIET */
export function notSpecialChar(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(/[@#$%^*&`~,.<>;':"/[\]|{}()=_+-]/i.test(value))
        error = field.notFormat
    return error
}

/** KHONG CHUA KY TU DAC BIET KHI VIET DOAN VAN*/
export function notSpecialCharChat(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(/[@#$%^*&`~<>':"/[\]|{}()=_+-]/i.test(value))
        error = field.notFormat
    return error
}

/** MINIMUM CHAR*/
export function limitedName(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(value.toString().length < 5 || value.toString().length > 33)
        error = field.limited
    return error
}

/** LIMITED TITLE */
export function limitedTitle(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(value.toString().length < 3 || value.toString().length > 64)
        error = field.limited
    return error
}

/** LIMITED DESCRIPTION */
export function limitedDescription(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(value.toString().length < 6 || value.toString().length > 1024)
        error = field.limited
    return error
}

/** LIMITED AGE */
export function limitedAge(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if( Number(value) < 2 || Number(value) > 100)
        error = field.limited
    return error
}

/** PHAI LA DINH SO DIEN THOAI VIET NAM */
export function isPhoneNumber(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if(! new RegExp("^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])(?=.*[0-9])(?=.{7})").test(value) || value.toString().length > 10)
        error = field.notFormat
    return error
}

/** PHAI LA DINH NUMBER  */
export function isNumber(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if( !/^\d+$/i.test(value))
        error = field.notFormat
    return error
}

/** PHAI LA DINH URL  */
export function isUrl(name, value){
    const field = alias.filter(item => item.name === name)[0]
    let error = false
    if( !/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i.test(value))
        error = field.notFormat
    return error
}

