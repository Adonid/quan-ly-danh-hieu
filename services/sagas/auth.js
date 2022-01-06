import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
//   alertWarning,
//   alertInfo,
    alertFailure,
    logged,
    logout,
    updateUserSuccess
} from '../actions'
import { uriPage, REGISTER, FORGET_PASSWORD, RESET_PASSWORD, LOGIN, LOGOUT, UPDATE_BASIC_INFO_USER, UPLOAD_BACKGROUND, UPLOAD_AVATAR } from '../constans'
import {
    registerApi,
    forgetPasswordApi,
    resetPasswordApi,
    loginApi,
    updateUserInfoApi,
    updateBackgroundoApi,
    updateAvatarApi
} from 'apis/Auth'

// Dang ky tai khoan
function* registerSaga({payload}) {
  try {
      // goi API registerApi
      const delta = yield call(registerApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Show ra thong bao
        yield put(alertSuccess(data.msg))
        yield delay(2000)
        yield window.location.replace(uriPage.login)
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}

// Quen mat khau
function* forgetPasswordSaga({payload}) {
  try {
      // goi API forgetPasswordApi
      const delta = yield call(forgetPasswordApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Toi trang reset pasdword
        yield window.location.replace(uriPage.resetpassword)
      }
      // LOI REQUEST
      else{
        yield put(alertFailure(data.error||statusText))
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}
// Doi mat khau
function* resetPasswordSaga({payload}) {
  try {
      // goi API resetPasswordApi
      const delta = yield call(resetPasswordApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Toi trang login de dang nhap
        yield window.location.replace(uriPage.login)
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}

// Dang ky tai khoan
function* loginSaga({payload}) {
  try {
      // goi API loginApi
      const delta = yield call(loginApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Danh dau da dang nhap va tu dong chuyen qua trang dashboard
        yield put(logged(data.token, data.myself, data.provinces))
        yield delay(1000)
        // Ve trang dashboard
        yield window.location.replace(uriPage.home)
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}

// DANG XUAT
function* logoutSaga() {
   // Danh dau da dang nhap va tu dong chuyen qua trang dashboard
   yield put(logout())
   yield delay(1000)
   // Ve trang HOME
   yield window.location.replace(uriPage.home)
}

// CAP NHAT THONG TIN CO BAN
function* updateBasicInfoSaga({payload}) {
  try {
      // goi API updateUserInfoApi
      const delta = yield call(updateUserInfoApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Danh dau da dang nhap va tu dong chuyen qua trang dashboard
        yield put(updateUserSuccess(data.datas))
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}

// CAP NHAT ANH NEN
function* updateBackgroundSaga({payload}) {
  try {
      // goi API updateBackgroundoApi
      const delta = yield call(updateBackgroundoApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Show thong bao
        yield put(updateUserSuccess(data.datas))
        yield delay(1500)
        // Show thong bao thanh cong
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}
// CAP NHAT ANH AVATAR
function* updateAvatarSaga({payload}) {
  try {
      // goi API updateAvatarApi
      const delta = yield call(updateAvatarApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Show thong bao
        yield put(updateUserSuccess(data.datas))
        yield delay(1500)
        // Show thong bao thanh cong
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(uriPage.login)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertFailure(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
      yield put(alertFailure(err.message||statusText))
  }
}


function* rootSaga() {
  yield all([
    takeLatest(REGISTER, registerSaga),
    takeLatest(FORGET_PASSWORD, forgetPasswordSaga),
    takeLatest(RESET_PASSWORD, resetPasswordSaga),
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
    takeLatest(UPDATE_BASIC_INFO_USER, updateBasicInfoSaga),
    takeLatest(UPLOAD_BACKGROUND, updateBackgroundSaga),
    takeLatest(UPLOAD_AVATAR, updateAvatarSaga),
  ])
}

export default rootSaga