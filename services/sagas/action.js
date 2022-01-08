import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
    alertSuccess,
} from '../actions'
import { LOGIN, ADD_USER } from '../constans'
import {
  addAUserApi,
} from 'apis/Auth'

// Lay menu
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


function* rootSaga() {
    yield all([
      takeLatest(ADD_USER, addNewAUserSaga)
    ])
  }
  
  export default rootSaga