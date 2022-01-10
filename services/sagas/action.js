import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
} from '../actions'
import { LOGIN, ADD_USER, UPDATE_ACCOUNT, UPDATE_ORTHER_INFO } from '../constans'
import {
  addAUserApi,
  updateAccountUserApi,
  updateAUserApi
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
// CAP NHAT TAI KHOAN - THONG TIN PHU
function* updateOrtherInfoSaga({payload}) {
  try {
      // goi API updateAUserApi
      const delta = yield call(updateAUserApi, payload)
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


function* rootSaga() {
    yield all([
      takeLatest(ADD_USER, addNewAUserSaga),
      takeLatest(UPDATE_ACCOUNT, updateAUserSaga),
      takeLatest(UPDATE_ORTHER_INFO, updateOrtherInfoSaga)
    ])
  }
  
  export default rootSaga