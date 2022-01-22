import * as constans from "./constans"

/** THEM MOI NGUOI DUNG */
export function addAUserAction(payload){
  return{
    type: constans.ADD_USER,
    payload
  }
}
/** CAP NHAT LAI TRANG DASHBOARD */
export function refreshAllUsers(payload){
  return{
    type: constans.ALL_USERS,
    payload
  }
}
/** SUA THONG TIN TAI KHOAN */
export function updateAccountAction(payload){
  return{
    type: constans.UPDATE_ACCOUNT,
    payload
  }
}
/** SUA THONG TIN KHAC CUA TAI KHOAN */
export function updateOrtherInfoAction(payload){
  return{
    type: constans.UPDATE_ORTHER_INFO,
    payload
  }
}
/** SUA THONG TIN KHAC CUA TAI KHOAN */
export function uploadAvatarAction(payload){
  return{
    type: constans.UPLOAD_AVATAR,
    payload
  }
}
/** LAM TUOI THONG TIN USER DANG THAO TAC TRUC TIEP */
export function refreshDataUser(payload){
  return{
    type: constans.userTypes.RELOAD_DATA,
    payload
  }
}

/** TOGGER REPORT  CHO USER */
export function toggerReportAction(payload){
  return{
    type: constans.TOGGER_REPORT,
    payload
  }
}
/** TOGGER REPORT  CHO USER */
export function refreshNotifying(payload){
  return{
    type: constans.REFRESH_NOTIFYING,
    payload
  }
}
/** NANG CAP DANH HIEU */
export function promotionWinAction(payload){
  return{
    type: constans.PROMOTION_WIN,
    payload
  }
}
/** NANG CAP DANH HIEU */
export function deleteAUserAction(payload){
  return{
    type: constans.DELETE_A_USER,
    payload
  }
}
/** DANG NHAP */
export function loginAction(payload){
  return{
    type: constans.LOGIN,
    payload
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

/** QUEN MAT KHAU */
export function forgetPasswordAction(payload){
  return {
    type: constans.FORGET_PASSWORD,
    payload
  }
}
/** QUEN MAT KHAU XONG */
export function forgetPassword(payload){
  return {
    type: constans.FORGET_PASSWORD_DONE,
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
/** LOGGED THANH CONG */
export function logged(token, myself, wins, notifying){
  return {
    type: constans.LOGGED,
    payload: {
      token,
      myself,
      wins,
      notifying
    }
  }
}



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