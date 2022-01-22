import { all, call, delay, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
    alertInfo,
    refreshDataUser,
    alertWarning,
    refreshNotifying,
    refreshAllUsers
} from '../actions'
import { uriPage, LOGIN, ADD_USER, UPDATE_ACCOUNT, UPDATE_ORTHER_INFO, UPLOAD_AVATAR, TOGGER_REPORT, PROMOTION_WIN, DELETE_A_USER } from '../constans'
import {
  addAUserApi,
  updateAccountUserApi,
  updateAUserApi,
  uploadAvatarAUserApi,
  toggerReportApi,
  promotionWinApi,
  deleteAUserApi
} from 'apis/Auth'

// THEM MOI USER
function* addNewAUserSaga({payload}) {
  try {
      // goi API addAUserApi
      const delta = yield call(addAUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Lay tat ca users va cap nhat lai trang dashboard
        const allUser = data.datas
        yield put(refreshAllUsers(allUser))
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        const notifies = allUser.filter(item => item.to_quota)
        yield put(refreshNotifying(notifies))
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            // yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}

// CAP NHAT TAI KHOAN - CO THAY DOI DATETIME
function* updateAUserSaga({payload}) {
  try {
      // goi API updateAccountUserApi
      const delta = yield call(updateAccountUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu
        yield put(refreshDataUser(data.datas.user))
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        yield put(refreshNotifying(data.datas.notifies))
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            // yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}
// CAP NHAT TAI KHOAN - THONG TIN PHU
function* updateOrtherInfoSaga({payload}) {
  try {
      // goi API updateAUserApi
      const delta = yield call(updateAUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu
        yield put(refreshDataUser(data.datas))
        // Show thong bao thanh cong tren ADMIN LAYOUT
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            // yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}
// UPLOAD ANH AVATAR
function* uploadAvatarSaga({payload}) {
  try {
      // goi API uploadAvatarAUserApi
      const delta = yield call(uploadAvatarAUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu
        yield put(refreshDataUser(data.datas))
        // Show thong bao thanh cong tren ADMIN LAYOUT
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            // yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}
// TOGGER TRANG THAI REPORT USER
function* toggerReportSaga({payload}) {
  try {
      // goi API toggerReportApi
      const delta = yield call(toggerReportApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        yield put(refreshNotifying(data.datas))
        // Show thong bao thanh cong tren ADMIN LAYOUT
        yield put(alertInfo(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}
// NANG CAP DAN HIEU
function* promotionWinSaga({payload}) {
  try {
      // goi API promotionWinApi
      const delta = yield call(promotionWinApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        yield put(refreshNotifying(data.datas))
        // Show thong bao thanh cong tren ADMIN LAYOUT
        yield put(alertSuccess(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            // yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}
// XOA 1 NGUOI DUNG
function* deleteAUserSaga({payload}) {
  try {
      // goi API deleteAUserApi
      const delta = yield call(deleteAUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        yield put(refreshNotifying(data.datas))
        yield delay(1000)
        // Ve trang dashboard
        yield window.location.replace(uriPage.home)
        // Show thong bao thanh cong tren DASHBOARD
        yield put(alertInfo(data.msg))
      }
      // LOI REQUEST
      else{
        // LOI HET PHIEN DANG NHAP
        if(statusText==="Unauthorized"){
          yield window.location.replace(LOGIN)
        }
        // CAC LOI KHAC KHONG RO NGUON GOC
        else{
            // Show TB loi
            yield put(alertWarning(data.error||statusText))
        }
      }
    } catch (err) {
      yield console.log(err)
      // Show TB loi
    //   yield put(alertWarning(err.message||statusText))
  }
}


function* rootSaga() {
    yield all([
      takeLatest(ADD_USER, addNewAUserSaga),
      takeLatest(UPDATE_ACCOUNT, updateAUserSaga),
      takeLatest(UPDATE_ORTHER_INFO, updateOrtherInfoSaga),
      takeLatest(UPLOAD_AVATAR, uploadAvatarSaga),
      takeLatest(TOGGER_REPORT, toggerReportSaga),
      takeLatest(PROMOTION_WIN, promotionWinSaga),
      takeLatest(DELETE_A_USER, deleteAUserSaga),
    ])
  }
  
  export default rootSaga