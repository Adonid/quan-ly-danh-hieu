import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
//   alertWarning,
    // alertInfo,
    alertFailure,
    logged,
    logout,
    forgetPassword,
    refreshAllUsers,
} from '../actions'
import { uriPage, LOGIN, LOGOUT, FORGET_PASSWORD, RESET_PASSWORD } from '../constans'
import {
    loginApi,
    forgetPasswordApi,
    resetPasswordApi
} from 'apis/Auth'


// Dang ky tai khoan
function* loginSaga({payload}) {
  try {
      // goi API loginApi
      const delta = yield call(loginApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Dua toan bo users cho store quan ly
        yield put(refreshAllUsers(data.datas.users))
        // Danh dau da dang nhap va tu dong chuyen qua trang dashboard
        yield put(logged(data.datas.token, data.datas.myself, data.datas.wins, data.datas.notifying))
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
  yield window.location.replace(uriPage.welcome)
}

// Quen mat khau
function* forgetPasswordSaga({payload}) {
  try {
      // goi API forgetPasswordApi
      const delta = yield call(forgetPasswordApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Luu lai dia chi email
        yield put(forgetPassword(payload.email))
        // Toi trang reset pasdword
        yield window.location.replace(uriPage.resetpassword)
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
// Reset password
function* resetPasswordSaga({payload}) {
  try {
      // goi API resetPasswordApi
      const delta = yield call(resetPasswordApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Thong bao dang nhap lai
        yield put(alertSuccess("Đổi mật khẩu thành công! Vui lòng đăng nhập lại."))
        yield delay(1000)
        // Toi trang reset pasdword
        yield window.location.replace(uriPage.login)
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield put(alertFailure(data.error||statusText))
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
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
    takeLatest(FORGET_PASSWORD, forgetPasswordSaga),
    takeLatest(RESET_PASSWORD, resetPasswordSaga)
  ])
}

export default rootSaga