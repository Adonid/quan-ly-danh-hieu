import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
    alertInfo,
    refreshDataUser
} from '../actions'
import { LOGIN, ADD_USER, UPDATE_ACCOUNT, UPDATE_ORTHER_INFO, TOGGER_REPORT } from '../constans'
import {
  addAUserApi,
  updateAccountUserApi,
  updateAUserApi,
  toggerReportApi,
} from 'apis/Auth'

// THEM MOI USER
function* addNewAUserSaga({payload}) {
  try {
      // goi API addAUserApi
      const delta = yield call(addAUserApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu menu
        // yield put(refreshMenu(data.datas))
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
        yield put(refreshDataUser(data.datas))
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
// TOGGER TRANG THAI REPORT USER
function* toggerReportSaga({payload}) {
  try {
      // goi API toggerReportApi
      const delta = yield call(toggerReportApi, payload)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu - CAN DUA LEN REDUCER DE CAP NHAT LAI TRANG THAI THANH THONG BAO
        // yield put(refreshDataUser(data.datas))
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
            // yield put(alertWarning(data.error||statusText))
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
      takeLatest(TOGGER_REPORT, toggerReportSaga)
    ])
  }
  
  export default rootSaga