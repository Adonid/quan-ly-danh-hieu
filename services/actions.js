import * as constans from "./constans"

/** CAP NHAT THANH MEMU */
export function getMenuAction(){
    return{
      type: constans.GET_MENU
    }
}
export function refreshMenu(payload){
    return{
      type: constans.REFRESH_MENU,
      payload
    }
}
/** DANG KY TAI KHOAN */
export function registerAction(payload){
    return{
      type: constans.REGISTER,
      payload
    }
}

/** TRANG THAI THONG BAO HANH DONG - TOASTER */
  
  /** LOAD DATA SUCCESS */
  export function alertSuccess(alert) {
    return {
      type: constans.alertTypes.SUCCESS,
      payload: {
        type: "success",
        alert
      },
    }
  }

  /** ALERT INFO */
  export function alertInfo(alert) {
    return {
      type: constans.alertTypes.INFO,
      payload: {
        type: "info",
        alert
      },
    }
  }

  /** ALERT WARNING */
  export function alertWarning(alert) {
    return {
      type: constans.alertTypes.WARNING,
      payload: {
        type: "warning",
        alert
      },
    }
  } 

  /** ALERT FAILURE */
  export function alertFailure(alert) {
    return {
      type: constans.alertTypes.FAILURE,
      payload: {
        type: "error",
        alert
      },
    }
  } 

/** QUEN MAT KHAU */
export function forgetPasswordAction(payload){
  return {
    type: constans.FORGET_PASSWORD,
    payload
  }
}

/** DOI MAT KHAU */
export function resetPasswordAction(payload){
  return {
    type: constans.RESET_PASSWORD,
    payload
  }
}

/** LOGIN */
export function loginAction(payload){
  return {
    type: constans.LOGIN,
    payload
  }
}

/** LOGGED THANH CONG */
export function logged(token, myself, provinces){
  return {
    type: constans.LOGGED,
    payload: {
      token,
      myself,
      provinces
    }
  }
}
/** LOGOUT CLICK */
export function logoutAction(){
  return {
    type: constans.LOGOUT
  }
}
/** LOGOUT */
export function logout(){
  return {
    type: constans.REMOVE_TOKEN
  }
}

/** CAP NHAT THONG USER */
export function updateBasicInfoAction(payload){
  return {
    type: constans.UPDATE_BASIC_INFO_USER,
    payload
  }
}
export function updateMoreInfoAction(payload){
  return {
    type: constans.UPDATE_BASIC_INFO_USER,
    payload
  }
}
export function updateAddressAction(payload){
  return {
    type: constans.UPDATE_BASIC_INFO_USER,
    payload
  }
}
export function updateLinkSocialAction(payload){
  return {
    type: constans.UPDATE_BASIC_INFO_USER,
    payload
  }
}// THONG BAO CAP NHAT THANH CONG
export function updateUserSuccess(payload){
  return {
    type: constans.UPDATE_USER_SUCCESS,
    payload
  }
}

// LOAD DIA CHI
export function loadDistrictsAction(payload){
  return {
    type: constans.LOAD_DISTRICTS,
    payload
  }
}
export function loadDistricts(payload){
  return {
    type: constans.DATA_DISTRICTS,
    payload
  }
}
export function loadCommunesAction(payload){
  return {
    type: constans.LOAD_COMMUNES,
    payload
  }
}
export function loadCommunes(payload){
  return {
    type: constans.DATA_COMMUNES,
    payload
  }
}
// CAP NHAT ANH
export function uploadBackgroundAction(payload){
  return {
    type: constans.UPLOAD_BACKGROUND,
    payload
  }
}
// CAP NHAT ANH AVATAR
export function uploadAvatarAction(payload){
  return {
    type: constans.UPLOAD_AVATAR,
    payload
  }
}