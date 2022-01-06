import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    refreshMenu,
} from '../actions'
import { LOGIN, GET_MENU, LOAD_DISTRICTS, LOAD_COMMUNES } from '../constans'
import {
  addAUserApi,
} from 'apis/Auth'

// Lay menu
function* getMenuSaga() {
  try {
      // goi API addAUserApi
      const delta = yield call(addAUserApi)
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


function* rootSaga() {
    yield all([
      takeLatest(GET_MENU, getMenuSaga)
    ])
  }
  
  export default rootSaga