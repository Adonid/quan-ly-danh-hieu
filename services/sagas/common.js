import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    refreshMenu,
    loadDistricts,
    loadCommunes
} from '../actions'
import { LOGIN, GET_MENU, LOAD_DISTRICTS, LOAD_COMMUNES } from '../constans'
import {
  getDistrictsApi,
  getCommunesApi,
} from 'apis/Auth'
import {
  getMenuApi,
} from 'apis/User'

// Lay menu
function* getMenuSaga() {
  try {
      // goi API getMenuApi
      const delta = yield call(getMenuApi)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu menu
        yield put(refreshMenu(data.datas))
        // Show thong bao thanh cong tren DASHBOARD
        // yield put(alertSuccess(data.msg))
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

// Nap DISTRICTS
function* loadDistrictsSaga({payload}) {
  try {
      // goi API getDistrictsApi
      const delta = yield call(getDistrictsApi, payload.provinceId)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu DISTRICTs
        yield put(loadDistricts(data.datas))
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

// Nap DISTRICTS
function* loadCommunesSaga({payload}) {
  try {
      // goi API getCommunesApi
      const delta = yield call(getCommunesApi, payload.districtId)
      const {data, statusText} = delta
      // RESPONSE TRUE
      if(data && !data.error){
        // Cap nhat du lieu DISTRICTs
        yield put(loadCommunes(data.datas))
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
      takeLatest(GET_MENU, getMenuSaga),
      takeLatest(LOAD_DISTRICTS, loadDistrictsSaga),
      takeLatest(LOAD_COMMUNES, loadCommunesSaga),
    ])
  }
  
  export default rootSaga